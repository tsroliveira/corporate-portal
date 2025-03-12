
import { cn } from "@/lib/utils";
import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface Activity {
  id: string;
  title: string;
  description?: string;
  timestamp: Date;
  user: {
    name: string;
    avatar?: string;
  };
  type: "document" | "message" | "task" | "meeting" | "other";
}

interface ActivityCardProps {
  activities: Activity[];
  className?: string;
}

export function ActivityCard({ activities, className }: ActivityCardProps) {
  return (
    <div className={cn("glass-card rounded-xl overflow-hidden", className)}>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Atividade Recente</h3>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4 animate-slide-in">
              <div className="relative flex-shrink-0">
                {activity.user.avatar ? (
                  <img
                    src={activity.user.avatar}
                    alt={activity.user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                    {activity.user.name.charAt(0)}
                  </div>
                )}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-background"></span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium">
                    <span>{activity.user.name}</span>{" "}
                    <span className="text-muted-foreground">{activity.title}</span>
                  </p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {format(activity.timestamp, "dd MMM", { locale: ptBR })}
                  </span>
                </div>
                {activity.description && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
