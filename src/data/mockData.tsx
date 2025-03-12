
import { Activity } from "@/components/dashboard/ActivityCard";
import { NewsItem } from "@/components/news/NewsCard";
import { 
  Users, 
  FileText, 
  Calendar, 
  Mail, 
  Clock,
  CheckCircle2,
  AlertCircle,
  BarChart4,
  Building2,
  GraduationCap
} from "lucide-react";

// Dashboard stats
export const dashboardStats = [
  {
    title: "Colaboradores",
    value: "248",
    icon: <Users size={20} />,
    description: "Total de colaboradores ativos",
    trend: { value: 4.5, positive: true }
  },
  {
    title: "Documentos",
    value: "532",
    icon: <FileText size={20} />,
    description: "Documentos publicados",
    trend: { value: 12.3, positive: true }
  },
  {
    title: "Eventos",
    value: "8",
    icon: <Calendar size={20} />,
    description: "Eventos agendados este mês",
    trend: { value: 2.1, positive: false }
  },
  {
    title: "Mensagens",
    value: "64",
    icon: <Mail size={20} />,
    description: "Mensagens não lidas",
    trend: { value: 8.7, positive: true }
  }
];

// Recent activities
export const recentActivities: Activity[] = [
  {
    id: "1",
    title: "adicionou um novo documento",
    description: "Política de Home Office 2023",
    timestamp: new Date("2023-06-10T14:23:00"),
    user: {
      name: "Ana Silva",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    type: "document"
  },
  {
    id: "2",
    title: "agendou uma reunião",
    description: "Revisão de Desempenho Q2 - Equipe de Marketing",
    timestamp: new Date("2023-06-10T11:45:00"),
    user: {
      name: "Carlos Mendes",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    type: "meeting"
  },
  {
    id: "3",
    title: "completou uma tarefa",
    description: "Atualização da documentação de processos",
    timestamp: new Date("2023-06-09T16:30:00"),
    user: {
      name: "Mariana Costa",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    type: "task"
  },
  {
    id: "4",
    title: "comentou em um documento",
    description: "Plano Estratégico 2023-2025",
    timestamp: new Date("2023-06-09T09:15:00"),
    user: {
      name: "Ricardo Alves",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    type: "document"
  },
  {
    id: "5",
    title: "enviou uma mensagem",
    description: "Solicitação de Orçamento - Projeto Alpha",
    timestamp: new Date("2023-06-08T15:45:00"),
    user: {
      name: "Patrícia Lima",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    type: "message"
  }
];

// News items
export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Nova Política de Home Office Implementada",
    content: "A partir do próximo mês, todos os colaboradores poderão trabalhar remotamente até 3 dias por semana. Esta nova política visa melhorar o equilíbrio entre vida profissional e pessoal, além de reduzir custos operacionais e nossa pegada de carbono.",
    image: "https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: new Date("2023-06-15"),
    author: "Recursos Humanos",
    category: "Políticas"
  },
  {
    id: "2",
    title: "Resultados Financeiros do Segundo Trimestre",
    content: "Temos o prazer de anunciar que os resultados financeiros do segundo trimestre superaram as expectativas. Registramos um crescimento de 15% em relação ao mesmo período do ano anterior, graças ao empenho e dedicação de todas as equipes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: new Date("2023-06-12"),
    author: "Departamento Financeiro",
    category: "Resultados"
  },
  {
    id: "3",
    title: "Novo Programa de Treinamento e Desenvolvimento",
    content: "Estamos lançando um novo programa de treinamento e desenvolvimento para todos os colaboradores. O programa inclui cursos online, workshops presenciais e mentoria personalizada. Inscrições abertas a partir da próxima semana.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: new Date("2023-06-10"),
    author: "Treinamento e Desenvolvimento",
    category: "Capacitação"
  },
  {
    id: "4",
    title: "Campanha de Responsabilidade Social Corporativa",
    content: "Nossa nova campanha de responsabilidade social corporativa será lançada no próximo mês. Vamos focar em três áreas principais: educação, meio ambiente e inclusão social. Participe e ajude a fazer a diferença.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: new Date("2023-06-08"),
    author: "Responsabilidade Social",
    category: "RSC"
  }
];

// Upcoming events
export const upcomingEvents = [
  {
    id: "1",
    title: "Reunião Trimestral",
    date: new Date("2023-07-05T10:00:00"),
    location: "Auditório Principal",
    description: "Apresentação dos resultados do Q2 e planejamento para Q3."
  },
  {
    id: "2",
    title: "Workshop de Liderança",
    date: new Date("2023-07-12T14:00:00"),
    location: "Sala de Treinamento 3",
    description: "Desenvolvimento de habilidades de liderança para gerentes."
  },
  {
    id: "3",
    title: "Confraternização de Aniversário",
    date: new Date("2023-07-15T18:00:00"),
    location: "Restaurante Panorama",
    description: "Celebração dos aniversariantes do mês."
  }
];

// Directory data (departments and employees)
export const departments = [
  {
    id: "1",
    name: "Recursos Humanos",
    icon: <Users size={18} />,
    employees: [
      { id: "101", name: "Mariana Santos", position: "Diretora de RH", email: "mariana.santos@empresa.com", phone: "(11) 5555-1001", avatar: "https://i.pravatar.cc/150?img=5" },
      { id: "102", name: "Fernando Almeida", position: "Analista de Recrutamento", email: "fernando.almeida@empresa.com", phone: "(11) 5555-1002", avatar: "https://i.pravatar.cc/150?img=12" },
      { id: "103", name: "Camila Rocha", position: "Especialista em Benefícios", email: "camila.rocha@empresa.com", phone: "(11) 5555-1003", avatar: "https://i.pravatar.cc/150?img=9" }
    ]
  },
  {
    id: "2",
    name: "Tecnologia da Informação",
    icon: <BarChart4 size={18} />,
    employees: [
      { id: "201", name: "Rodrigo Mendes", position: "CTO", email: "rodrigo.mendes@empresa.com", phone: "(11) 5555-2001", avatar: "https://i.pravatar.cc/150?img=11" },
      { id: "202", name: "Julia Ferreira", position: "Desenvolvedora Full Stack", email: "julia.ferreira@empresa.com", phone: "(11) 5555-2002", avatar: "https://i.pravatar.cc/150?img=6" },
      { id: "203", name: "Bruno Costa", position: "Especialista em Segurança", email: "bruno.costa@empresa.com", phone: "(11) 5555-2003", avatar: "https://i.pravatar.cc/150?img=13" },
      { id: "204", name: "Carla Dias", position: "UX Designer", email: "carla.dias@empresa.com", phone: "(11) 5555-2004", avatar: "https://i.pravatar.cc/150?img=7" }
    ]
  },
  {
    id: "3",
    name: "Marketing",
    icon: <Building2 size={18} />,
    employees: [
      { id: "301", name: "André Lima", position: "Diretor de Marketing", email: "andre.lima@empresa.com", phone: "(11) 5555-3001", avatar: "https://i.pravatar.cc/150?img=14" },
      { id: "302", name: "Patricia Souza", position: "Especialista em Mídias Sociais", email: "patricia.souza@empresa.com", phone: "(11) 5555-3002", avatar: "https://i.pravatar.cc/150?img=8" },
      { id: "303", name: "Marcos Oliveira", position: "Designer Gráfico", email: "marcos.oliveira@empresa.com", phone: "(11) 5555-3003", avatar: "https://i.pravatar.cc/150?img=15" }
    ]
  },
  {
    id: "4",
    name: "Financeiro",
    icon: <GraduationCap size={18} />,
    employees: [
      { id: "401", name: "Claudia Ferreira", position: "Diretora Financeira", email: "claudia.ferreira@empresa.com", phone: "(11) 5555-4001", avatar: "https://i.pravatar.cc/150?img=10" },
      { id: "402", name: "Roberto Santos", position: "Contador", email: "roberto.santos@empresa.com", phone: "(11) 5555-4002", avatar: "https://i.pravatar.cc/150?img=16" },
      { id: "403", name: "Vanessa Martins", position: "Analista Financeiro", email: "vanessa.martins@empresa.com", phone: "(11) 5555-4003", avatar: "https://i.pravatar.cc/150?img=17" }
    ]
  }
];

// Quick links for resources
export const quickLinks = [
  { id: "1", title: "Manual do Colaborador", icon: <FileText size={16} />, url: "#", category: "Documentos" },
  { id: "2", title: "Solicitação de Férias", icon: <Calendar size={16} />, url: "#", category: "Formulários" },
  { id: "3", title: "Reembolso de Despesas", icon: <FileText size={16} />, url: "#", category: "Formulários" },
  { id: "4", title: "Código de Conduta", icon: <CheckCircle2 size={16} />, url: "#", category: "Políticas" },
  { id: "5", title: "Política de Segurança", icon: <AlertCircle size={16} />, url: "#", category: "Políticas" },
  { id: "6", title: "Controle de Ponto", icon: <Clock size={16} />, url: "#", category: "Ferramentas" }
];
