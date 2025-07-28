import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">MT</span>
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Mateus Castro</h1>
            <div className="flex items-center gap-3">
              <span className="text-white">Senior Developer</span>
              <span className="text-gray-400 text-sm">#4625</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="metric-card">
            <div className="text-white">47</div>
            <div className="text-white">Commits esta semana</div>
          </div>

          <div className="metric-card">
            <div className="text-white">12</div>
            <div className="text-white">PRs abertas</div>
          </div>
          
          <div className="metric-card">
            <div className="text-white">8</div>
            <div className="text-white">Reviews feitas</div>
          </div>
          
          <div className="metric-card">
            <div className="text-white">95%</div>
            <div className="text-white">Uptime</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-semibold text-white mb-4">Últimos Commits</h2>
          <div className="space-y-3">
            {[
              { msg: "feat: adiciona análise de métricas", time: "2h atrás", type: "feature" },
              { msg: "fix: corrige bug no dashboard", time: "4h atrás", type: "bugfix" },
              { msg: "refactor: melhora performance", time: "1d atrás", type: "refactor" },
            ].map((commit, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  commit.type === 'feature' ? 'bg-green-500' : 
                  commit.type === 'bugfix' ? 'bg-red-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-white">{commit.msg}</p>
                  <p className="text-xs text-gray-400">{commit.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-white mb-4">Performance Semanal</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Produtividade</span>
                <span className="text-blue-400">87%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{width: '87%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Qualidade do Código</span>
                <span className="text-green-400">94%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Colaboração</span>
                <span className="text-purple-400">76%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full" style={{width: '76%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
