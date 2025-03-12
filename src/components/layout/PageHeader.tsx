
import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-8 space-y-2", className)}>
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2 animate-fade-in">
            {title.split(" ")[0]}
          </div>
          <h1 className="text-3xl font-bold tracking-tight animate-slide-in">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground mt-1 animate-slide-in delay-100">
              {description}
            </p>
          )}
        </div>
        {children && <div className="flex items-center space-x-2">{children}</div>}
      </div>
    </div>
  );
}
