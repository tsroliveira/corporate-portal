
import { cn } from "@/lib/utils";
import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image?: string;
  date: Date;
  author: string;
  category: string;
}

interface NewsCardProps {
  news: NewsItem;
  className?: string;
}

export function NewsCard({ news, className }: NewsCardProps) {
  return (
    <div className={cn(
      "glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md group",
      className
    )}>
      {news.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
              {news.category}
            </span>
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{news.author}</span>
          <span>•</span>
          <span>{format(news.date, "dd 'de' MMMM, yyyy", { locale: ptBR })}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {news.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {news.content}
        </p>
        <button className="text-sm font-medium text-primary hover:underline">
          Ler mais
        </button>
      </div>
    </div>
  );
}
