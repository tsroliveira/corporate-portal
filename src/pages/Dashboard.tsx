
import { PageHeader } from "@/components/layout/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityCard } from "@/components/dashboard/ActivityCard";
import { NewsCard } from "@/components/news/NewsCard";
import { Button } from "@/components/ui/button";
import { LineChart, Users, FileText, Bell } from "lucide-react";
import { dashboardStats, recentActivities, newsItems } from "@/data/mockData";

export function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Dashboard"
        description="Visão geral da sua empresa e atividades recentes."
      >
        <Button size="sm">Atualizar</Button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            description={stat.description}
            trend={stat.trend}
            className="animate-scale-in"
            // Remover o prop style e adicionar o delay via CSS classes
            data-delay={index * 100}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityCard
            activities={recentActivities}
            className="h-full animate-slide-in"
          />
        </div>
        <div>
          {newsItems.slice(0, 2).map((news, index) => (
            <NewsCard
              key={news.id}
              news={news}
              className="mb-6 animate-scale-in"
              // Remover o prop style e adicionar o delay via CSS classes
              data-delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
