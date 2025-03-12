
import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { quickLinks } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Search, Plus, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Resources() {
  // Group quick links by category
  const groupedLinks = quickLinks.reduce((groups, link) => {
    const group = groups[link.category] || [];
    group.push(link);
    groups[link.category] = group;
    return groups;
  }, {} as Record<string, typeof quickLinks>);

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Recursos"
        description="Acesse facilmente recursos, documentos e ferramentas da empresa."
      >
        <div className="flex gap-3">
          <Button size="sm">
            <Plus size={16} className="mr-2" />
            Adicionar Recurso
          </Button>
        </div>
      </PageHeader>

      <div className="relative glass-card rounded-xl p-1 flex items-center mb-8 animate-scale-in">
        <Search className="absolute left-4 text-muted-foreground" size={20} />
        <input
          type="text"
          placeholder="Pesquisar recursos, documentos, formulários..."
          className="flex-1 py-3 pl-10 pr-4 bg-transparent border-none focus:outline-none focus:ring-0 w-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(groupedLinks).map(([category, links], categoryIndex) => (
          <div 
            key={category} 
            className="glass-card rounded-xl p-6 animate-scale-in"
            style={{ animationDelay: `${categoryIndex * 100}ms` }}
          >
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="space-y-2">
              {links.map((link, linkIndex) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-accent group transition-all duration-200"
                  style={{ animationDelay: `${linkIndex * 50 + 200}ms` }}
                >
                  <div className="flex items-center">
                    <div className="rounded-full p-2 bg-primary/10 text-primary mr-3">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="glass-card rounded-xl p-6 animate-scale-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-xl font-semibold mb-4">Links Rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Intranet", color: "bg-blue-500" },
              { title: "Webmail", color: "bg-indigo-500" },
              { title: "Helpdesk", color: "bg-purple-500" },
              { title: "Sistema ERP", color: "bg-pink-500" },
              { title: "CRM", color: "bg-red-500" },
              { title: "Calendário", color: "bg-amber-500" }
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className={cn(
                  "flex flex-col items-center justify-center p-4 rounded-xl text-white transition-transform duration-200 hover:scale-105",
                  item.color
                )}
                style={{ animationDelay: `${i * 50 + 300}ms` }}
              >
                <span className="text-sm font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 animate-scale-in" style={{ animationDelay: '300ms' }}>
          <h2 className="text-xl font-semibold mb-4">Recursos Recentes</h2>
          <div className="space-y-3">
            {[
              { title: "Relatório Trimestral Q2 2023", date: "Adicionado em 15/06/2023" },
              { title: "Apresentação da Reunião Geral", date: "Adicionado em 10/06/2023" },
              { title: "Template de Proposta Comercial", date: "Adicionado em 05/06/2023" },
              { title: "Manual de Identidade Visual", date: "Adicionado em 01/06/2023" }
            ].map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-lg hover:bg-accent group transition-all duration-200"
                style={{ animationDelay: `${i * 50 + 400}ms` }}
              >
                <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
