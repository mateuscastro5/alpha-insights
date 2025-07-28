import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-full flex items-center justify-center ring-4 ring-blue-500/20">
            <span className="text-white text-2xl font-bold">MT</span>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Mateus Castro</h1>
            <div className="flex items-center gap-3">
              <span className="text-blue-300 font-medium">Tech Lead</span>
              <span className="text-gray-400 text-sm bg-slate-800/50 px-2 py-1 rounded">#4625</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="metric-card group cursor-pointer">
            <div className="text-3xl font-bold text-blue-400 mb-2">47</div>
            <div className="text-gray-300 text-sm">Commits esta semana</div>
            <div className="text-xs text-gray-500 mt-1">+12% vs semana anterior</div>
          </div>

          <div className="metric-card group cursor-pointer">
            <div className="text-3xl font-bold text-yellow-400 mb-2">12</div>
            <div className="text-gray-300 text-sm">PRs abertas</div>
            <div className="text-xs text-gray-500 mt-1">3 aguardando review</div>
          </div>
          
          <div className="metric-card group cursor-pointer">
            <div className="text-3xl font-bold text-green-400 mb-2">8</div>
            <div className="text-gray-300 text-sm">Reviews feitas</div>
            <div className="text-xs text-gray-500 mt-1">2 pendentes</div>
          </div>
          
          <div className="metric-card group cursor-pointer">
            <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-gray-300 text-sm">Uptime</div>
            <div className="text-xs text-green-500 mt-1">Excelente ✨</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
              <span className="text-green-400 text-sm">📝</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Últimos Commits</h2>
          </div>
          <div className="space-y-3">
            {[
              { msg: "feat: adiciona análise de métricas", time: "2h atrás", type: "feature" },
              { msg: "fix: corrige bug no dashboard", time: "4h atrás", type: "bugfix" },
              { msg: "refactor: melhora performance", time: "1d atrás", type: "refactor" },
            ].map((commit, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-800/30 hover:bg-slate-700/40 rounded-xl transition-all duration-200 border border-slate-700/30">
                <div className={`w-3 h-3 rounded-full ${
                  commit.type === 'feature' ? 'bg-green-500 shadow-lg shadow-green-500/30' : 
                  commit.type === 'bugfix' ? 'bg-red-500 shadow-lg shadow-red-500/30' : 
                  'bg-blue-500 shadow-lg shadow-blue-500/30'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">{commit.msg}</p>
                  <p className="text-xs text-gray-400">{commit.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span className="text-blue-400 text-sm">📊</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Performance Semanal</h2>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-gray-300 font-medium">Produtividade</span>
                <span className="text-blue-400 font-bold">87%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-1000" style={{width: '87%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-gray-300 font-medium">Qualidade do Código</span>
                <span className="text-green-400 font-bold">94%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-400 h-3 rounded-full shadow-lg shadow-green-500/30 transition-all duration-1000" style={{width: '94%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-gray-300 font-medium">Colaboração</span>
                <span className="text-purple-400 font-bold">76%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-3 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-1000" style={{width: '76%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
