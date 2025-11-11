// src/components/Header/HeaderVendas.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderVendas = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-background/95 backdrop-blur-md border-b border-border"
        }
      `}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - AGORA É UM LINK DIRETO PARA A HOME */}
            <Link 
              to="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Aoki Company Brasil" 
                  className="w-24 h-24 object-contain"
                />
              </div>
              <span className="font-bold text-xl text-foreground">
                Aoki Company Brasil
              </span>
            </Link>

            {/* ✅ REMOVIDOS TODOS OS BOTÕES - APENAS O LOGO FICA */}

            {/* Espaço vazio para manter o layout */}
            <div className="w-10"></div>
          </div>
        </div>
      </header>

      {/* Espaço para compensar a altura fixa do header */}
      <div className="h-16" />
    </>
  );
};

export default HeaderVendas;