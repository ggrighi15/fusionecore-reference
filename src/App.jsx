import { useState } from 'react';
import { Route, Switch } from 'wouter';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Architecture from './pages/Architecture';
import AI from './pages/AI';
import Roadmap from './pages/Roadmap';
import DataModel from './pages/DataModel';
import Supabase from './pages/Supabase';
import PessoasListagem from './pages/demo/PessoasListagem';
import ProcessosListagem from './pages/demo/ProcessosListagem';
import DashboardGerencial from './pages/demo/DashboardGerencial';
import DemandasKanban from './pages/demo/DemandasKanban';
import DemoIndex from './pages/demo/Index';
import InstituicoesListagem from './pages/demo/InstituicoesListagem';
import ContratosListagem from './pages/demo/ContratosListagem';
import ProcuracoesListagem from './pages/demo/ProcuracoesListagem';
import MarcasListagem from './pages/demo/MarcasListagem';
import IntegracaoJuridica from './pages/IntegracaoJuridica';
import InteligenciaArtificial from './pages/InteligenciaArtificial';
import SmartReportSync from './pages/SmartReportSync';
import Deployment from './pages/Deployment';

function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearchToggle={() => setSearchOpen(!searchOpen)} />
      
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/modules" component={Modules} />
          <Route path="/architecture" component={Architecture} />
          <Route path="/ai" component={AI} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/data-model" component={DataModel} />
          <Route path="/supabase" component={Supabase} />
          <Route path="/demo/pessoas" component={PessoasListagem} />
          <Route path="/demo/processos" component={ProcessosListagem} />
          <Route path="/demo/dashboard" component={DashboardGerencial} />
          <Route path="/demo/demandas" component={DemandasKanban} />
          <Route path="/demo" component={DemoIndex} />
          <Route path="/demo/instituicoes" component={InstituicoesListagem} />
          <Route path="/demo/contratos" component={ContratosListagem} />
          <Route path="/demo/procuracoes" component={ProcuracoesListagem} />
          <Route path="/demo/marcas" component={MarcasListagem} />
          <Route path="/integracoes" component={IntegracaoJuridica} />
          <Route path="/ia" component={InteligenciaArtificial} />
          <Route path="/smart-sync" component={SmartReportSync} />
          <Route path="/deployment" component={Deployment} />
          <Route>
            <div className="container py-20 text-center">
              <h1 className="text-4xl font-bold text-fusione-lime mb-4">
                404 - Página Não Encontrada
              </h1>
              <p className="text-fusione-gray-light mb-8">
                A página que você está procurando não existe.
              </p>
              <a href="/" className="btn-primary no-underline">
                Voltar ao Início
              </a>
            </div>
          </Route>
        </Switch>
      </main>

      <Footer />
      
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </div>
  );
}

export default App;
