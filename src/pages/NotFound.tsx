import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-display font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
          Pagina Non Trovata
        </h2>
        <p className="text-muted-foreground mb-8">
          La pagina che stai cercando non esiste. Torna alla home per continuare.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
          <Home className="h-4 w-4" />
          Torna alla Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
