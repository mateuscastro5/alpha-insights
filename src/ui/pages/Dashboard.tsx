import React from 'react';
import UserProfileCard from '../components/dashboard/UserProfileCard';
import MetricCard from '../components/dashboard/MetricCard';
import CommitsPanel from '../components/dashboard/CommitsPanel';
import PRsPanel from '../components/dashboard/PRsPanel';

const Dashboard: React.FC = () => {
  const handleMetricClick = (metric: string) => {
    console.log('Metric clicked:', metric);
  };

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="mb-8">
        <UserProfileCard />

        <div className="grid grid-cols-4 gap-6">
          <MetricCard
            value={47}
            label="Commits esta semana"
            subtitle="+12% vs semana anterior"
            color="blue"
            onClick={() => handleMetricClick('commits')}
          />
          <MetricCard
            value={12}
            label="PRs abertas"
            subtitle="3 aguardando review"
            color="yellow"
            onClick={() => handleMetricClick('prs')}
          />
          <MetricCard
            value={8}
            label="Reviews feitas"
            subtitle="2 pendentes"
            color="green"
            onClick={() => handleMetricClick('reviews')}
          />
          <MetricCard
            value="95%"
            label="Uptime"
            subtitle="Excelente ✨"
            color="purple"
            onClick={() => handleMetricClick('uptime')}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <CommitsPanel />
        <div className="col-span-2">
          <PRsPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
