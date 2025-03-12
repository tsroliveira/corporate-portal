
import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { departments } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Search, Mail, Phone } from "lucide-react";

export function Directory() {
  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Diretório de Colaboradores"
        description="Encontre informações de contato e departamentos da empresa."
      />

      <div className="relative glass-card rounded-xl p-1 flex items-center mb-8 animate-scale-in">
        <Search className="absolute left-4 text-muted-foreground" size={20} />
        <input
          type="text"
          placeholder="Buscar por nome, cargo ou departamento..."
          className="flex-1 py-3 pl-10 pr-4 bg-transparent border-none focus:outline-none focus:ring-0 w-full"
        />
      </div>

      <div className="space-y-6">
        {departments.map((department, deptIndex) => (
          <div 
            key={department.id} 
            className="animate-scale-in"
            style={{ animationDelay: `${deptIndex * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="rounded-full p-2 bg-primary/10 text-primary">
                {department.icon}
              </div>
              <h2 className="text-xl font-semibold">{department.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {department.employees.map((employee, empIndex) => (
                <div 
                  key={employee.id} 
                  className="glass-card rounded-xl p-5 transition-all duration-300 hover:shadow-md animate-scale-in"
                  style={{ animationDelay: `${deptIndex * 100 + empIndex * 50 + 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {employee.avatar ? (
                        <img
                          src={employee.avatar}
                          alt={employee.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-background"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-medium">
                          {employee.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-medium truncate">{employee.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{employee.position}</p>
                      
                      <div className="space-y-1">
                        <a href={`mailto:${employee.email}`} className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
                          <Mail size={14} className="mr-1" />
                          {employee.email}
                        </a>
                        <a href={`tel:${employee.phone}`} className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
                          <Phone size={14} className="mr-1" />
                          {employee.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
