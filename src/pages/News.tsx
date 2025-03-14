
import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { NewsCard } from "@/components/news/NewsCard";
import { newsItems } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";

export function News() {
  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Notícias e Comunicados"
        description="Acompanhe as últimas novidades, comunicados e atualizações da empresa."
      >
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filtrar
          </Button>
          <Button size="sm">
            <Plus size={16} className="mr-2" />
            Novo Comunicado
          </Button>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((news, index) => (
          <NewsCard 
            key={news.id} 
            news={news} 
            className="animate-scale-in"
            // Remover o prop style e adicionar o delay via CSS classes
            data-delay={index * 100}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Carregar mais notícias</Button>
      </div>
    </div>
  );
}
