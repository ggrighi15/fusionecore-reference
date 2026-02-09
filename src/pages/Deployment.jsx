import React from 'react';
import { Cloud, Container, Layers, Server, Shield, Zap, CheckCircle2 } from 'lucide-react';

export default function Deployment() {
  const layers = [
    {
      icon: Cloud,
      title: 'Microsoft Fabric',
      description: 'Data Warehouse e Business Intelligence',
      color: '#8FD400',
      features: [
        'Data Warehouse unificado',
        'ETL pipelines automatizados',
        'Power BI integration nativa',
        'Lakehouse architecture',
        'Real-time analytics'
      ],
      specs: {
        'Capacidade': 'F64 (64 vCores)',
        'Storage': 'OneLake (ilimitado)',
        'Retenção': '7 anos',
        'Backup': 'Automático (diário)'
      }
    },
    {
      icon: Container,
      title: 'Docker Containers',
      description: 'Microserviços isolados e otimizados',
      color: '#0072CE',
      features: [
        'Imagens otimizadas (Alpine Linux)',
        'Multi-stage builds',
        'Health checks automáticos',
        'Resource limits configurados',
        'Logs centralizados'
      ],
      specs: {
        'Registry': 'Azure Container Registry',
        'Base Images': 'Alpine 3.19',
        'Tamanho Médio': '< 100MB',
        'Scan': 'Trivy (vulnerabilidades)'
      }
    },
    {
      icon: Layers,
      title: 'Kubernetes',
      description: 'Orchestration e auto-scaling',
      color: '#8FD400',
      features: [
        'Auto-scaling horizontal',
        'Load balancing inteligente',
        'Rolling updates sem downtime',
        'Self-healing automático',
        'Service mesh (Istio)'
      ],
      specs: {
        'Cluster': 'AKS (Azure Kubernetes Service)',
        'Nodes': '3-10 (auto-scale)',
        'Ingress': 'NGINX + Cert-Manager',
        'Monitoring': 'Prometheus + Grafana'
      }
    }
  ];

  const infrastructure = [
    {
      category: 'Compute',
      items: [
        { name: 'API Nodes', value: '3-10 pods', status: 'healthy' },
        { name: 'Worker Nodes', value: '2-5 pods', status: 'healthy' },
        { name: 'Cron Jobs', value: '12 schedules', status: 'healthy' }
      ]
    },
    {
      category: 'Storage',
      items: [
        { name: 'PostgreSQL', value: '500GB SSD', status: 'healthy' },
        { name: 'Redis', value: '16GB RAM', status: 'healthy' },
        { name: 'S3/Blob', value: '2TB', status: 'healthy' }
      ]
    },
    {
      category: 'Network',
      items: [
        { name: 'Load Balancer', value: 'Azure LB', status: 'healthy' },
        { name: 'CDN', value: 'Azure CDN', status: 'healthy' },
        { name: 'DNS', value: 'Azure DNS', status: 'healthy' }
      ]
    },
    {
      category: 'Security',
      items: [
        { name: 'WAF', value: 'Azure Firewall', status: 'healthy' },
        { name: 'DDoS', value: 'Protection Standard', status: 'healthy' },
        { name: 'SSL/TLS', value: 'Let\'s Encrypt', status: 'healthy' }
      ]
    }
  ];

  const cicd = [
    { step: 1, title: 'Code Push', desc: 'Developer push para GitHub' },
    { step: 2, title: 'CI Pipeline', desc: 'Tests + Lint + Build' },
    { step: 3, title: 'Container Build', desc: 'Docker image criada' },
    { step: 4, title: 'Security Scan', desc: 'Trivy + SonarQube' },
    { step: 5, title: 'Deploy Staging', desc: 'Ambiente de testes' },
    { step: 6, title: 'Smoke Tests', desc: 'Testes automatizados' },
    { step: 7, title: 'Deploy Prod', desc: 'Rolling update' },
    { step: 8, title: 'Health Check', desc: 'Validação final' }
  ];

  const monitoring = [
    { metric: 'Uptime', value: '99.95%', target: '99.9%', status: 'good' },
    { metric: 'Response Time', value: '< 200ms', target: '< 500ms', status: 'good' },
    { metric: 'Error Rate', value: '0.01%', target: '< 0.1%', status: 'good' },
    { metric: 'CPU Usage', value: '45%', target: '< 70%', status: 'good' },
    { metric: 'Memory Usage', value: '62%', target: '< 80%', status: 'good' },
    { metric: 'Disk I/O', value: 'Normal', target: 'Normal', status: 'good' }
  ];

  return (
    <div className="min-h-screen bg-fusione-navy py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Deployment & Infraestrutura
          </h1>
          <p className="text-fusione-gray-light text-lg">
            Arquitetura de deployment moderna com Microsoft Fabric, Docker, Kubernetes e 
            monitoramento completo para alta disponibilidade e escalabilidade.
          </p>
        </div>

        {/* Deployment Layers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Camadas de Deployment</h2>
          <div className="space-y-6">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div key={index} className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: layer.color + '20', color: layer.color }}
                    >
                      <Icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{layer.title}</h3>
                      <p className="text-fusione-gray-light">{layer.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-fusione-gray-light mb-3">Funcionalidades</h4>
                      <ul className="space-y-2">
                        {layer.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 size={16} className="text-fusione-green mt-0.5 flex-shrink-0" />
                            <span className="text-fusione-gray-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specs */}
                    <div>
                      <h4 className="text-sm font-semibold text-fusione-gray-light mb-3">Especificações</h4>
                      <div className="space-y-2">
                        {Object.entries(layer.specs).map(([key, value], idx) => (
                          <div key={idx} className="bg-fusione-navy/50 rounded-lg p-3">
                            <div className="text-fusione-gray-light text-xs mb-1">{key}</div>
                            <div className="text-white font-semibold text-sm">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infrastructure Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Status da Infraestrutura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((category, index) => (
              <div key={index} className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-fusione-gray-light text-sm">{item.name}</span>
                        <span className="w-2 h-2 rounded-full bg-fusione-green"></span>
                      </div>
                      <div className="text-white text-sm font-semibold">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CI/CD Pipeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Pipeline CI/CD</h2>
          <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {cicd.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-fusione-green/20 text-fusione-green flex items-center justify-center mx-auto mb-2 font-bold">
                    {step.step}
                  </div>
                  <div className="text-white text-sm font-semibold mb-1">{step.title}</div>
                  <div className="text-fusione-gray-light text-xs">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monitoring Metrics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Métricas de Monitoramento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitoring.map((metric, index) => (
              <div key={index} className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold">{metric.metric}</h4>
                  <span className="w-2 h-2 rounded-full bg-fusione-green"></span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-fusione-green">{metric.value}</span>
                </div>
                <div className="text-fusione-gray-light text-sm">
                  Target: {metric.target}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Info */}
        <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-fusione-azure/20 text-fusione-azure">
              <Server size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">Domínio e Acesso</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-fusione-navy/50 rounded-lg p-4">
                  <div className="text-fusione-gray-light text-sm mb-1">Domínio Principal</div>
                  <div className="text-white font-semibold">fusione.app.br</div>
                </div>
                <div className="bg-fusione-navy/50 rounded-lg p-4">
                  <div className="text-fusione-gray-light text-sm mb-1">Path Interno</div>
                  <div className="text-white font-semibold">c:\fusionecore-suite</div>
                </div>
                <div className="bg-fusione-navy/50 rounded-lg p-4">
                  <div className="text-fusione-gray-light text-sm mb-1">Status</div>
                  <div className="text-fusione-green font-semibold">Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
