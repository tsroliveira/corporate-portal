
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="glass-card rounded-xl p-12 max-w-md w-full text-center animate-scale-in">
        <div className="flex justify-center mb-6">
          <div className="rounded-full p-4 bg-destructive/10 text-destructive">
            <AlertCircle size={36} />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! Página não encontrada
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          A página que você está tentando acessar não existe ou foi movida.
        </p>
        <Button asChild className="animate-pulse-slow">
          <Link to="/" className="flex items-center justify-center">
            <Home size={18} className="mr-2" />
            Voltar ao início
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
