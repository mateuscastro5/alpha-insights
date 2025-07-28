interface Commit {
  msg: string;
  time: string;
  type: 'feature' | 'bugfix' | 'refactor';
}

interface CommitsPanelProps {
  commits?: Commit[];
}

const CommitsPanel = ({ 
  commits = [
    { msg: "feat: add metrics analysis", time: "2h ago", type: "feature" },
    { msg: "fix: resolve dashboard bug", time: "4h ago", type: "bugfix" },
    { msg: "refactor: improve performance", time: "1d ago", type: "refactor" },
  ]
}: CommitsPanelProps) => {
  return (
    <div className="card hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
          <span className="text-green-400 text-sm">📝</span>
        </div>
        <h2 className="text-xl font-semibold text-white">Latest Commits</h2>
      </div>
      <div className="space-y-3">
        {commits.map((commit, i) => (
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
  );
};

export default CommitsPanel;
