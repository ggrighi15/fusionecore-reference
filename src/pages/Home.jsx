import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3, FileText } from 'lucide-react';
import { fusionecoreData } from '../data/content';

export default function Home() {
  const { overview, modules } = fusionecoreData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-fusione-gray-dark to-fusione-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-fusione-lime mb-6">
              {overview.title}
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8">
              {overview.subtitle}
            </p>
            <p className="text-lg text-fusione-gray-light mb-12 leading-relaxed">
              {overview.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/modules">
                <a className="btn-primary inline-flex items-center justify-center no-underline">
                  Explorar Módulos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Link>
              <Link href="/architecture">
                <a className="btn-secondary inline-flex items-center justify-center no-underline">
                  Ver Arquitetura
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16 bg-fusione-black">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-fusione-lime mb-12 text-center">
            Diferenciais Competitivos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {overview.differentials.map((diff, index) => (
              <div key={index} className="card flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-fusione-lime flex-shrink-0 mt-1" />
                <p className="text-white">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="py-16 bg-fusione-gray-dark">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-fusione-lime mb-4 text-center">
            8 Módulos Principais
          </h2>
          <p className="text-fusione-gray-light text-center mb-12 max-w-3xl mx-auto">
            Sistema completo que cobre todas as necessidades de gestão jurídica e corporativa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => {
              const IconComponent = {
                Scale: BarChart3,
                FileText: FileText,
                FileSignature: FileText,
                Building: Shield,
                AlertCircle: Zap,
                Shield: Shield,
                BarChart3: BarChart3,
                Zap: Zap
              }[module.icon] || FileText;

              return (
                <Link key={module.id} href={`/modules#${module.id}`}>
                  <a className="card group hover:scale-105 transition-transform no-underline">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-fusione-lime rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-fusione-black" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{module.name}</h3>
                    </div>
                    <p className="text-fusione-gray-light text-sm line-clamp-3">
                      {module.description}
                    </p>
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/modules">
              <a className="btn-primary inline-flex items-center no-underline">
                Ver Todos os Módulos
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-fusione-black">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-fusione-lime mb-12 text-center">
            Funcionalidades Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-fusione-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-fusione-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Painéis Interativos
              </h3>
              <p className="text-fusione-gray-light">
                Dashboards navegáveis com drill-down, filtros e explicabilidade completa. "De onde vem esse número?"
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-fusione-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-fusione-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                IA & Automação
              </h3>
              <p className="text-fusione-gray-light">
                RAG, extração estruturada, pareceres automáticos, triagem de e-mails e alertas inteligentes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-fusione-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-fusione-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Governança Real
              </h3>
              <p className="text-fusione-gray-light">
                Trilha de auditoria completa, versionamento, logs imutáveis e LGPD compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-fusione-gray-dark to-fusione-black">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-fusione-lime mb-6">
            Pronto para Explorar?
          </h2>
          <p className="text-lg text-fusione-gray-light mb-8 max-w-2xl mx-auto">
            Navegue pela documentação completa, explore os módulos, entenda a arquitetura e veja o roadmap de implementação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/modules">
              <a className="btn-primary inline-flex items-center justify-center no-underline">
                Explorar Módulos
              </a>
            </Link>
            <Link href="/roadmap">
              <a className="btn-secondary inline-flex items-center justify-center no-underline">
                Ver Roadmap
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
