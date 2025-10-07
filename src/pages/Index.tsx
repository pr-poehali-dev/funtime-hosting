import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('hosting');
  const [spotsLeft, setSpotsLeft] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev <= 1) return Math.floor(Math.random() * 3) + 2;
        return prev - (Math.random() > 0.7 ? 1 : 0);
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const hostingPlans = [
    {
      name: 'Игрок',
      price: '23',
      features: ['1 GB RAM', '10 игроков', '5 GB SSD', 'Автозапуск', 'FTP доступ', 'Базовая поддержка'],
      popular: false,
      isFree: false,
    },
    {
      name: 'Про',
      price: '125',
      features: ['2 GB RAM', '20 игроков', '10 GB NVMe', 'DDoS защита', 'FTP/SFTP', 'Бэкапы каждый день', 'Установка модов'],
      popular: false,
      isFree: false,
    },
    {
      name: 'Хакер',
      price: '556',
      features: ['4 GB RAM', '50 игроков', '20 GB NVMe', 'DDoS защита Pro', 'Приоритет поддержки', 'Бэкапы каждые 6 часов', 'Мгновенная установка модов', 'MySQL база'],
      popular: false,
      isFree: false,
    },
    {
      name: 'Бог',
      price: '1234',
      features: ['8 GB RAM', '100 игроков', '40 GB NVMe', 'DDoS защита Premium', 'VIP поддержка 24/7', 'Бэкапы каждый час', 'Любые моды и плагины', 'MySQL + Redis', 'Выделенный IP'],
      popular: true,
      isFree: false,
    },
    {
      name: 'Херобрин',
      price: '4895',
      features: ['16 GB RAM', '200+ игроков', '80 GB NVMe', 'DDoS защита Enterprise', 'Персональный менеджер', 'Бэкапы в реальном времени', 'Полный root доступ', 'MySQL + Redis + MongoDB', 'Несколько IP адресов', 'Приоритет обработки'],
      popular: false,
      isFree: false,
    },
  ];

  const vpsPlans = [
    {
      name: 'Starter Network',
      price: '3499',
      features: ['8 vCPU', '16 GB RAM', '100 GB NVMe', 'Безлимит трафик', 'До 5 серверов', 'BungeeCord/Velocity', 'DDoS защита', 'Панель управления'],
      popular: false,
      isFree: false,
    },
    {
      name: 'Pro Network',
      price: '5999',
      features: ['16 vCPU', '32 GB RAM', '200 GB NVMe', 'Безлимит трафик', 'До 15 серверов', 'BungeeCord/Velocity', 'DDoS защита Pro', 'Балансировка нагрузки', 'Кластер MySQL'],
      popular: true,
      isFree: false,
    },
    {
      name: 'Enterprise Network',
      price: '9999',
      features: ['32 vCPU', '64 GB RAM', '500 GB NVMe', 'Безлимит трафик', 'Безлимит серверов', 'Полная кастомизация', 'DDoS защита Enterprise', 'Выделенное оборудование', 'Kubernetes кластер', 'Приоритет 24/7'],
      popular: false,
      isFree: false,
    },
  ];

  const additionalServices = [
    { name: 'Домен .ru', price: '199', icon: 'Globe' },
    { name: 'SSL Premium', price: '799', icon: 'ShieldCheck' },
    { name: 'Почта', price: '99', icon: 'Mail' },
    { name: 'Бэкапы', price: '299', icon: 'Database' },
  ];

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
            <nav className="hidden md:flex items-center gap-6">
              <a href="#hosting" className="text-slate-300 hover:text-white transition-colors">
                Хостинг
              </a>
              <a href="#vps" className="text-slate-300 hover:text-white transition-colors">
                Сеть серверов
              </a>
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                Услуги
              </a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                О нас
              </a>
              <Button variant="outline" size="sm">
                Войти
              </Button>
              <Button size="sm">Регистрация</Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            🚀 Быстрый старт за 5 минут
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Minecraft хостинг
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              премиум качества
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Запустите свой сервер за 5 минут! Тариф "Создатель" бесплатно навсегда 🎮
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2">
              <Icon name="Zap" size={20} />
              Выбрать тариф
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="PlayCircle" size={20} />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section id="hosting" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Тарифы и услуги</h2>
          <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых платежей</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="hosting" className="gap-2">
              <Icon name="Gamepad2" size={16} />
              Игровой хостинг
            </TabsTrigger>
            <TabsTrigger value="vps" className="gap-2">
              <Icon name="Network" size={16} />
              Сеть серверов
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hosting" className="animate-fade-in">
            <div className="grid md:grid-cols-5 gap-4 items-start">
              {hostingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative transition-all hover:shadow-xl ${
                    plan.popular
                      ? 'border-2 border-primary shadow-2xl shadow-primary/20 scale-110 bg-gradient-to-br from-primary/5 via-background to-secondary/5 z-10'
                      : 'hover:scale-105'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20">
                      <Badge className="bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg animate-pulse px-4 py-1 text-sm font-bold">
                        🔥 ЛУЧШИЙ ВЫБОР
                      </Badge>
                      <Badge variant="destructive" className="bg-red-500 text-white text-xs px-3 py-0.5 animate-pulse">
                        ⚡ Осталось {spotsLeft} места
                      </Badge>
                    </div>
                  )}
                  <CardHeader className={plan.popular ? 'pt-10' : ''}>
                    <CardTitle className={`text-xl ${plan.popular ? 'text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text' : plan.isFree ? 'text-accent' : ''}`}>
                      {plan.name}
                    </CardTitle>
                    <CardDescription>
                      {plan.isFree ? (
                        <div className="space-y-1">
                          <div className="text-4xl font-bold text-accent">Бесплатно</div>
                          <div className="text-xs text-accent font-semibold">Навсегда для создателей! 🎁</div>
                        </div>
                      ) : (
                        <>
                          <span className={`text-4xl font-bold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                            {plan.price}
                          </span>
                          <span className="text-muted-foreground"> ₽/мес</span>
                          {plan.popular && (
                            <div className="mt-2 flex items-center gap-2">
                              <div className="text-xs text-accent font-semibold">Экономия 30%</div>
                              <div className="text-xs text-red-500 font-bold flex items-center gap-1">
                                <Icon name="Clock" size={12} />
                                Акция до конца дня
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={18} className={plan.popular ? 'text-primary' : 'text-accent'} />
                          <span className={plan.popular ? 'font-medium' : ''}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      size={plan.popular ? 'lg' : 'default'}
                    >
                      {plan.popular ? '🚀 Заказать сейчас' : 'Заказать'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vps" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {vpsPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative transition-all hover:shadow-xl ${
                    plan.popular
                      ? 'border-2 border-primary shadow-2xl shadow-primary/20 scale-110 bg-gradient-to-br from-primary/5 via-background to-secondary/5 z-10'
                      : 'hover:scale-105'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20">
                      <Badge className="bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg animate-pulse px-4 py-1 text-sm font-bold">
                        🔥 ЛУЧШИЙ ВЫБОР
                      </Badge>
                      <Badge variant="destructive" className="bg-red-500 text-white text-xs px-3 py-0.5 animate-pulse">
                        ⚡ Осталось {spotsLeft} места
                      </Badge>
                    </div>
                  )}
                  <CardHeader className={plan.popular ? 'pt-10' : ''}>
                    <CardTitle className={`text-2xl ${plan.popular ? 'text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text' : ''}`}>
                      {plan.name}
                    </CardTitle>
                    <CardDescription>
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground"> ₽/мес</span>
                      {plan.popular && (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="text-xs text-accent font-semibold">Экономия 25%</div>
                          <div className="text-xs text-red-500 font-bold flex items-center gap-1">
                            <Icon name="Clock" size={12} />
                            Акция до конца дня
                          </div>
                        </div>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={18} className={plan.popular ? 'text-primary' : 'text-accent'} />
                          <span className={plan.popular ? 'font-medium' : ''}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      size={plan.popular ? 'lg' : 'default'}
                    >
                      {plan.popular ? '🚀 Заказать сейчас' : 'Заказать'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section id="services" className="container mx-auto px-4 py-20 bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Дополнительные услуги</h2>
          <p className="text-xl text-muted-foreground">Расширьте возможности вашего хостинга</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {additionalServices.map((service) => (
            <Card key={service.name} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{service.price} ₽</p>
                <p className="text-muted-foreground text-sm">в месяц</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Добавить
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">О FunTime MC Hosting</h2>
            <p className="text-lg text-muted-foreground">
              Мы предоставляем премиум Minecraft хостинг с 2020 года. Наша миссия — дать каждому возможность создать свой сервер, начиная с бесплатного тарифа!
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">10,000+</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary">99.9%</div>
                <div className="text-muted-foreground">Аптайм серверов</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">24/7</div>
                <div className="text-muted-foreground">Техподдержка</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Дата-центров</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 space-y-3">
              <Icon name="Gauge" size={32} className="text-primary" />
              <h3 className="font-semibold text-lg">Высокая скорость</h3>
              <p className="text-sm text-muted-foreground">SSD диски и современные серверы</p>
            </Card>
            <Card className="p-6 space-y-3">
              <Icon name="Shield" size={32} className="text-secondary" />
              <h3 className="font-semibold text-lg">Защита данных</h3>
              <p className="text-sm text-muted-foreground">Ежедневные бэкапы и DDoS защита</p>
            </Card>
            <Card className="p-6 space-y-3">
              <Icon name="HeadphonesIcon" size={32} className="text-accent" />
              <h3 className="font-semibold text-lg">Поддержка 24/7</h3>
              <p className="text-sm text-muted-foreground">Всегда на связи для вас</p>
            </Card>
            <Card className="p-6 space-y-3">
              <Icon name="TrendingUp" size={32} className="text-primary" />
              <h3 className="font-semibold text-lg">Масштабируемость</h3>
              <p className="text-sm text-muted-foreground">Легко растите вместе с нами</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-3xl">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">Готовы начать?</h2>
          <p className="text-xl opacity-90">Запустите свой проект прямо сейчас с 30-дневной гарантией возврата денег</p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Icon name="Rocket" size={20} />
              Выбрать тариф
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Server" size={18} className="text-white" />
                </div>
                <span className="font-bold text-lg">FunTime</span>
              </div>
              <p className="text-sm text-muted-foreground">Надежный хостинг для вашего успеха</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Виртуальный хостинг
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    VPS/VDS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Домены
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    SSL сертификаты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Документы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Блог
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  support@funtime.su
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-35-35
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  Telegram
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 FunTime Hosting. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;