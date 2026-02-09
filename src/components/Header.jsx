import { Link, useLocation } from 'wouter';
import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header({ onSearchToggle }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Visão Geral', href: '/' },
    { name: 'Módulos', href: '/modules' },
    { name: 'Arquitetura', href: '/architecture' },
    { name: 'IA & Automação', href: '/ai' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Modelo de Dados', href: '/data-model' },
    { name: 'Supabase', href: '/supabase' },
    { name: 'Integrações Jurídicas', href: '/integracoes' },
    { name: 'IA & Agentes', href: '/ia' },
    { name: 'Smart Sync', href: '/smart-sync' },
    { name: 'Deployment', href: '/deployment' },
    { 
      name: 'Demo', 
      submenu: [
        { name: 'Todas as Demos', href: '/demo' },
        { name: 'Dashboard', href: '/demo/dashboard' },
        { name: 'Pessoas', href: '/demo/pessoas' },
        { name: 'Instituições', href: '/demo/instituicoes' },
        { name: 'Processos', href: '/demo/processos' },
        { name: 'Contratos', href: '/demo/contratos' },
        { name: 'Procurações', href: '/demo/procuracoes' },
        { name: 'Marcas', href: '/demo/marcas' },
        { name: 'Demandas', href: '/demo/demandas' },
      ]
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-fusione-black border-b border-fusione-gray-dark backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-3 no-underline">
              <div className="w-10 h-10 bg-fusione-lime rounded-lg flex items-center justify-center">
                <span className="text-fusione-black font-bold text-xl">FC</span>
              </div>
              <div>
                <div className="text-fusione-lime font-poppins font-bold text-xl">
                  FusioneCore
                </div>
                <div className="text-fusione-gray-light text-xs">
                  Suite Reference
                </div>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <button className="px-4 py-2 rounded-lg text-sm font-medium transition-all text-white hover:bg-fusione-gray-dark">
                    {item.name} ▾
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-48 bg-fusione-black border border-fusione-gray-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.name} href={subitem.href}>
                        <a className="block px-4 py-2 text-sm text-white hover:bg-fusione-gray-dark first:rounded-t-lg last:rounded-b-lg no-underline">
                          {subitem.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href}>
                  <a
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all no-underline ${
                      location === item.href
                        ? 'bg-fusione-lime text-fusione-black'
                        : 'text-white hover:bg-fusione-gray-dark'
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              )
            ))}
          </div>

          {/* Search Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onSearchToggle}
              className="p-2 rounded-lg hover:bg-fusione-gray-dark transition-all"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5 text-fusione-lime" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-fusione-gray-dark transition-all"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-fusione-lime" />
              ) : (
                <Menu className="w-6 h-6 text-fusione-lime" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-fusione-gray-dark">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all no-underline ${
                      location === item.href
                        ? 'bg-fusione-lime text-fusione-black'
                        : 'text-white hover:bg-fusione-gray-dark'
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
