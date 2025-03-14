
import { cn } from "@/lib/utils";
import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
  "data-delay"?: number;
}

export function StatCard({
  title,
  value,
  icon,
  description,
  trend,
  className,
  "data-delay": delay,
}: StatCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md",
        className
      )}
      data-delay={delay}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
            {trend && (
              <span className={cn(
                "text-xs font-medium",
                trend.positive ? "text-green-500" : "text-red-500"
              )}>
                {trend.positive ? "+" : "-"}{Math.abs(trend.value)}%
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="rounded-full p-2 bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
}
