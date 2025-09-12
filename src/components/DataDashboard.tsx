import React from 'react';
import { TrendingUp, TrendingDown, Users, Building2, MapPin, BookOpen } from 'lucide-react';

const DataDashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Employment Rate',
      value: '67.8%',
      change: '+2.3%',
      trend: 'up',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Youth Employment',
      value: '42.5%',
      change: '+5.1%',
      trend: 'up',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      title: 'Job Vacancies',
      value: '15,847',
      change: '+12.4%',
      trend: 'up',
      icon: Building2,
      color: 'text-purple-600'
    },
    {
      title: 'Skills Gap Index',
      value: '3.2',
      change: '-0.8',
      trend: 'down',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const sectors = [
    { name: 'Technology', growth: '+15.2%', jobs: '3,421' },
    { name: 'Healthcare', growth: '+8.7%', jobs: '2,156' },
    { name: 'Finance', growth: '+12.1%', jobs: '1,987' },
    { name: 'Manufacturing', growth: '+4.3%', jobs: '2,834' },
    { name: 'Agriculture', growth: '+6.8%', jobs: '4,521' }
  ];

  const states = [
    { name: 'Lagos', employment: '78.2%', color: 'bg-green-500' },
    { name: 'Abuja FCT', employment: '72.1%', color: 'bg-green-400' },
    { name: 'Rivers', employment: '69.8%', color: 'bg-yellow-500' },
    { name: 'Kano', employment: '65.4%', color: 'bg-yellow-400' },
    { name: 'Ogun', employment: '71.3%', color: 'bg-green-300' }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Labour Market Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time insights into Nigeria's employment landscape and economic trends
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gray-50`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                  {metric.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-gray-600 text-sm">{metric.title}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sector Growth */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Top Growing Sectors</h3>
            <div className="space-y-4">
              {sectors.map((sector, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">{sector.name}</div>
                    <div className="text-sm text-gray-600">{sector.jobs} active jobs</div>
                  </div>
                  <div className="text-green-600 font-bold">{sector.growth}</div>
                </div>
              ))}
            </div>
          </div>

          {/* State Employment */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Employment by State</h3>
            <div className="space-y-4">
              {states.map((state, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                    <span className="font-medium text-gray-900">{state.name}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className={`h-2 rounded-full ${state.color}`}
                        style={{ width: state.employment }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12">{state.employment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Access Full Analytics Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataDashboard;