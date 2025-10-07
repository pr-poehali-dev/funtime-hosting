import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface Server {
  id: string;
  name: string;
  plan: string;
  status: 'online' | 'offline' | 'starting';
  players: number;
  maxPlayers: number;
  ram: string;
  ip: string;
  port: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [servers, setServers] = useState<Server[]>([]);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const planName = urlParams.get('plan');
    
    if (planName && servers.length === 0) {
      createServer(planName);
    }
  }, []);

  const createServer = (planName: string) => {
    setIsCreating(true);
    
    setTimeout(() => {
      const ramMap: Record<string, string> = {
        'Игрок': '1 GB',
        'Про': '2 GB',
        'Хакер': '4 GB',
        'Бог': '8 GB',
        'Херобрин': '16 GB'
      };
      
      const playersMap: Record<string, number> = {
        'Игрок': 10,
        'Про': 20,
        'Хакер': 50,
        'Бог': 100,
        'Херобрин': 200
      };

      const newServer: Server = {
        id: `server-${Date.now()}`,
        name: `${planName} Server #1`,
        plan: planName,
        status: 'starting',
        players: 0,
        maxPlayers: playersMap[planName] || 10,
        ram: ramMap[planName] || '1 GB',
        ip: `play.funtime.ru`,
        port: 25565 + servers.length
      };

      setServers([...servers, newServer]);
      setIsCreating(false);

      setTimeout(() => {
        setServers(prev => prev.map(s => 
          s.id === newServer.id ? { ...s, status: 'online' as const } : s
        ));
      }, 3000);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-red-500';
      case 'starting': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Онлайн';
      case 'offline': return 'Оффлайн';
      case 'starting': return 'Запускается...';
      default: return 'Неизвестно';
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Server" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                FunTime <span className="text-accent">MC</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={() => navigate('/')}>
                <Icon name="Home" size={16} className="mr-2" />
                На главную
              </Button>
              <Button size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Мои серверы</h1>
          <p className="text-muted-foreground">Управляйте своими Minecraft серверами</p>
        </div>

        {isCreating && (
          <Card className="mb-6 border-primary bg-primary/5">
            <CardContent className="py-6">
              <div className="flex items-center gap-4">
                <div className="animate-spin">
                  <Icon name="Loader2" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg">Создаём ваш сервер...</p>
                  <p className="text-muted-foreground text-sm">Устанавливаем моды, настраиваем конфигурацию</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {servers.length === 0 && !isCreating ? (
          <Card className="text-center py-12">
            <CardContent>
              <Icon name="ServerOff" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-bold mb-2">У вас пока нет серверов</h3>
              <p className="text-muted-foreground mb-6">Вернитесь на главную и выберите тариф</p>
              <Button onClick={() => navigate('/')}>
                <Icon name="Plus" size={16} className="mr-2" />
                Выбрать тариф
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servers.map((server) => (
              <Card key={server.id} className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${getStatusColor(server.status)}`} />
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{server.name}</CardTitle>
                      <CardDescription className="mt-1">
                        <Badge variant="outline" className="text-xs">
                          {server.plan}
                        </Badge>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(server.status)} ${server.status === 'starting' ? 'animate-pulse' : ''}`} />
                      <span className="text-sm font-medium">{getStatusText(server.status)}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Игроки онлайн</p>
                      <p className="text-lg font-bold">{server.players}/{server.maxPlayers}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">RAM</p>
                      <p className="text-lg font-bold">{server.ram}</p>
                    </div>
                  </div>

                  <div className="space-y-2 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">IP адрес:</span>
                      <code className="text-sm font-mono text-accent">{server.ip}:{server.port}</code>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        navigator.clipboard.writeText(`${server.ip}:${server.port}`);
                      }}
                    >
                      <Icon name="Copy" size={14} className="mr-2" />
                      Скопировать
                    </Button>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    variant={server.status === 'online' ? 'destructive' : 'default'}
                    disabled={server.status === 'starting'}
                  >
                    <Icon name={server.status === 'online' ? 'Square' : 'Play'} size={16} className="mr-2" />
                    {server.status === 'online' ? 'Остановить' : 'Запустить'}
                  </Button>
                  <Button variant="outline">
                    <Icon name="Settings" size={16} />
                  </Button>
                  <Button variant="outline">
                    <Icon name="MoreVertical" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
