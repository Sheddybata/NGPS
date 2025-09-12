import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Building2, BarChart3, ArrowRight } from 'lucide-react';

const PortalCards: React.FC = () => {
  const navigate = useNavigate();
  
  const portals = [
    {
      title: 'Job Seeker Portal',
      description: 'Find your dream job, build your profile, and access career guidance resources.',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      features: ['Advanced Job Search', 'CV Builder', 'Career Guidance', 'Skills Training']
    },
    {
      title: 'Employer Portal',
      description: 'Post jobs, find talent, and access labour market insights for better hiring.',
      icon: Building2,
      color: 'from-green-500 to-green-600',
      features: ['Job Posting', 'Talent Search', 'Market Analytics', 'Hiring Tools']
    },
    {
      title: 'Data & Analytics',
      description: 'Access comprehensive labour market data and trends for policy making.',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      features: ['Interactive Dashboards', 'Trend Analysis', 'Report Generation', 'Skills Gap Data']
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Portal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access tailored tools and resources designed for your specific needs in the Nigerian labour market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portals.map((portal, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${portal.color}`} />
                
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${portal.color} rounded-xl mb-6`}>
                    <portal.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {portal.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {portal.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {portal.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${portal.color} rounded-full mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full bg-gradient-to-r ${portal.color} text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center group-hover:shadow-lg transition-all duration-200`}
                    onClick={() => {
                      if (portal.title === 'Job Seeker Portal') {
                        navigate('/job-seeker');
                      } else if (portal.title === 'Employer Portal') {
                        navigate('/employer');
                      } else if (portal.title === 'Data & Analytics') {
                        navigate('/data-analytics');
                      }
                    }}
                  >
                    Access Portal
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortalCards;