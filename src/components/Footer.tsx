import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          <div className="space-y-4 md:col-span-2">
            <img src={logo} alt="Aoki Company Brasil" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Fabricante de Robô e Bonecos para Sinalização.
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Araçatuba-SP, Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+55 (18) 98808-2235</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>aokicompanybrasil@gmail.com</span>
              </div>
            </div>
          </div>

        
          <div className="hidden md:block"></div>

          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="mb-4 text-sm font-semibold text-center">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/aokicompanybrasil/"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://web.facebook.com/roboaokicompanybrasil/"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:aokicompanybrasil@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aoki Company Brasil. Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center space-x-6 text-xs">
            <a href="#" className="hover:text-accent transition-smooth">Termos de Uso</a>
            <a href="#" className="hover:text-accent transition-smooth">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-smooth">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};