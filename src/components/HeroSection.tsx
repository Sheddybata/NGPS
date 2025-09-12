import React, { useState } from 'react';
import { Search, MapPin, Briefcase, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const stats = [
    { label: 'Active Jobs', value: '15,847', icon: Briefcase },
    { label: 'Registered Employers', value: '3,421', icon: TrendingUp },
    { label: 'Job Seekers', value: '89,256', icon: Search },
  ];

  return (
    <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691362429_11597903.webp')`
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Nigeria's Premier
            <span className="block text-yellow-300">Labour Market Hub</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Connecting talent with opportunity across all 36 states. 
            Find jobs, hire talent, and access real-time labour market data.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs, skills, or companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">All States</option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">FCT Abuja</option>
                  <option value="kano">Kano</option>
                  <option value="rivers">Rivers</option>
                  <option value="ogun">Ogun</option>
                </select>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Search Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;