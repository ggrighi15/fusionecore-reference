export default function Footer() {
  return (
    <footer className="bg-fusione-gray-dark border-t border-fusione-gray mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-fusione-lime font-poppins font-bold text-lg mb-4">
              FusioneCore Suite
            </h3>
            <p className="text-fusione-gray-light text-sm">
              ERP jurídico completo com camada de inteligência que organiza contencioso, contratos, patrimonial, cobranças, auditoria e automação, com trilha de auditoria e painéis com governança real.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-fusione-lime font-poppins font-bold text-lg mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-fusione-gray-light hover:text-fusione-lime transition-colors no-underline">
                  Visão Geral
                </a>
              </li>
              <li>
                <a href="/modules" className="text-fusione-gray-light hover:text-fusione-lime transition-colors no-underline">
                  Módulos
                </a>
              </li>
              <li>
                <a href="/architecture" className="text-fusione-gray-light hover:text-fusione-lime transition-colors no-underline">
                  Arquitetura
                </a>
              </li>
              <li>
                <a href="/roadmap" className="text-fusione-gray-light hover:text-fusione-lime transition-colors no-underline">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-fusione-lime font-poppins font-bold text-lg mb-4">
              Informações
            </h3>
            <ul className="space-y-2 text-sm text-fusione-gray-light">
              <li>Domínio: fusione.app.br</li>
              <li>Versão: 1.0</li>
              <li>Última atualização: Fevereiro 2026</li>
              <li>Status: Documentação Completa</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-fusione-gray text-center text-fusione-gray-light text-sm">
          <p>
            © 2026 FusioneCore Suite. Documentação de referência técnica.
          </p>
        </div>
      </div>
    </footer>
  );
}
