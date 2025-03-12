
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  FileText,
  Users,
  Calendar,
  FolderOpen,
  Bell,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  expanded: boolean;
}

const NavItem = ({ to, icon, label, expanded }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group",
          expanded ? "justify-start" : "justify-center",
          isActive
            ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        )
      }
    >
      <div className="flex-shrink-0 w-5 h-5">{icon}</div>
      {expanded && <span className="animate-fade-in">{label}</span>}
      {!expanded && (
        <span className="absolute left-14 p-2 min-w-max rounded-md shadow-md opacity-0 bg-popover text-popover-foreground text-sm transition-all duration-200 scale-90 origin-left invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100">
          {label}
        </span>
      )}
    </NavLink>
  );
};

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={cn(
        "h-screen sticky top-0 flex flex-col border-r border-border bg-sidebar transition-all duration-300 ease-in-out z-30",
        expanded ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        <div className={cn("flex items-center", expanded ? "justify-start" : "justify-center w-full")}>
          {expanded ? (
            <h1 className="text-xl font-semibold ml-2 animate-fade-in">Portal</h1>
          ) : (
            <span className="text-2xl font-bold">P</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={toggleSidebar}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 space-y-2 px-3">
        <NavItem to="/" icon={<Home size={20} />} label="Dashboard" expanded={expanded} />
        <NavItem to="/news" icon={<Bell size={20} />} label="Notícias" expanded={expanded} />
        <NavItem to="/resources" icon={<FolderOpen size={20} />} label="Recursos" expanded={expanded} />
        <NavItem to="/documents" icon={<FileText size={20} />} label="Documentos" expanded={expanded} />
        <NavItem to="/directory" icon={<Users size={20} />} label="Diretório" expanded={expanded} />
        <NavItem to="/calendar" icon={<Calendar size={20} />} label="Calendário" expanded={expanded} />
      </div>

      <div className="mt-auto p-4 border-t border-border">
        <div
          className={cn(
            "flex items-center gap-3",
            expanded ? "justify-start" : "justify-center"
          )}
        >
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="font-medium">JD</span>
          </div>
          {expanded && (
            <div className="animate-fade-in">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Administrador</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
