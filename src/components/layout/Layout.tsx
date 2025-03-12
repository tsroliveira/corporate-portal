
import React from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <main className="max-w-7xl mx-auto p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}
