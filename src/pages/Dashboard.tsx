
import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityCard } from "@/components/dashboard/ActivityCard";
import { NewsCard } from "@/components/news/NewsCard";
import { dashboardStats, recentActivities, newsItems, upcomingEvents } from "@/data/mockData";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Portal Corporativo"
        description="Bem-vindo ao portal interno da empresa. Acompanhe as últimas novidades e recursos."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            description={stat.description}
            trend={stat.trend}
            className="animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Últimas Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.slice(0, 2).map((news, index) => (
              <NewsCard 
                key={news.id} 
                news={news} 
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Atividade Recente</h2>
          <ActivityCard activities={recentActivities} className="animate-scale-in" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-card rounded-xl p-6 animate-scale-in">
          <h2 className="text-xl font-semibold mb-4">Próximos Eventos</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex gap-4 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary">
                  <span className="text-xs font-medium">
                    {format(event.date, "MMM", { locale: ptBR }).toUpperCase()}
                  </span>
                  <span className="text-lg font-bold">
                    {format(event.date, "dd")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock size={12} className="mr-1" />
                      {format(event.date, "HH:mm")}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar size={12} className="mr-1" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="text-sm font-medium text-primary hover:underline mt-4 block">
            Ver todos os eventos
          </button>
        </div>

        <div className="glass-card rounded-xl p-6 lg:col-span-2 animate-scale-in" style={{ animationDelay: '100ms' }}>
          <h2 className="text-xl font-semibold mb-4">Anúncios Importantes</h2>
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 dark:bg-amber-900/30 dark:border-amber-800 dark:text-amber-200">
            <h3 className="font-medium mb-1">Manutenção do Sistema - 15/07/2023</h3>
            <p className="text-sm">
              O sistema estará indisponível das 23h às 01h para manutenção programada. Por favor, salve seus trabalhos antes deste período.
            </p>
          </div>
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-200">
            <h3 className="font-medium mb-1">Nova Versão do Portal - Feedback</h3>
            <p className="text-sm">
              Lançamos a nova versão do Portal Corporativo! Gostaríamos de receber seu feedback sobre as novas funcionalidades.
            </p>
            <button className="text-sm font-medium mt-2 hover:underline">
              Enviar feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
