import React, { useState } from 'react';
import { 
  BarChart3, 
  Map, 
  TrendingUp, 
  FileText, 
  Users,
  ArrowLeft,
  Download,
  Filter,
  Calendar,
  Target,
  PieChart,
  Activity,
  Globe,
  Building2,
  UserCheck,
  UserX,
  Briefcase,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  MapPin,
  Star,
  Zap,
  Award,
  Clock,
  DollarSign,
  GraduationCap,
  Heart,
  Lightbulb,
  Shield,
  Rocket
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DataAnalytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('quarter');
  const [selectedState, setSelectedState] = useState('All');

  const nationalMetrics = [
    {
      title: 'Unemployment Rate',
      value: '23.1%',
      change: '-2.3%',
      trend: 'down',
      color: 'text-green-600',
      description: 'National unemployment rate',
      icon: UserX,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Underemployment Rate',
      value: '15.7%',
      change: '-1.8%',
      trend: 'down',
      color: 'text-blue-600',
      description: 'People working below capacity',
      icon: Clock,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Labour Force Participation',
      value: '67.4%',
      change: '+3.2%',
      trend: 'up',
      color: 'text-purple-600',
      description: 'Active workforce participation',
      icon: Users,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Youth Employment Rate',
      value: '42.5%',
      change: '+5.1%',
      trend: 'up',
      color: 'text-orange-600',
      description: 'Employment rate for ages 15-35',
      icon: Rocket,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Jobs Created (Q4)',
      value: '127,450',
      change: '+18.3%',
      trend: 'up',
      color: 'text-green-600',
      description: 'New jobs posted this quarter',
      icon: Briefcase,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Female Participation',
      value: '58.2%',
      change: '+4.7%',
      trend: 'up',
      color: 'text-pink-600',
      description: 'Women in the workforce',
      icon: Heart,
      iconColor: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  const topSkills = [
    { skill: 'JavaScript', demand: 1250, growth: '+25%', icon: Zap, color: 'text-yellow-600' },
    { skill: 'Data Analysis', demand: 980, growth: '+22%', icon: BarChart3, color: 'text-blue-600' },
    { skill: 'Project Management', demand: 890, growth: '+18%', icon: Target, color: 'text-green-600' },
    { skill: 'Digital Marketing', demand: 750, growth: '+15%', icon: Lightbulb, color: 'text-purple-600' },
    { skill: 'Cloud Computing', demand: 680, growth: '+28%', icon: Globe, color: 'text-indigo-600' }
  ];

  const stateData = [
    { state: 'Lagos', unemployment: 18.2, jobs: 45000, growth: '+12%', color: 'bg-green-500' },
    { state: 'Abuja FCT', unemployment: 15.8, jobs: 28000, growth: '+8%', color: 'bg-green-400' },
    { state: 'Rivers', unemployment: 22.1, jobs: 15000, growth: '+5%', color: 'bg-yellow-500' },
    { state: 'Kano', unemployment: 28.5, jobs: 12000, growth: '+3%', color: 'bg-orange-500' },
    { state: 'Ogun', unemployment: 20.3, jobs: 18000, growth: '+7%', color: 'bg-yellow-400' },
    { state: 'Kaduna', unemployment: 25.7, jobs: 10000, growth: '+2%', color: 'bg-orange-400' }
  ];

  const sectorPerformance = [
    { sector: 'Technology', jobs: 8500, growth: '+18%', avgSalary: '₦280,000', color: 'bg-blue-500', icon: Zap, iconColor: 'text-blue-600' },
    { sector: 'Healthcare', jobs: 3200, growth: '+12%', avgSalary: '₦220,000', color: 'bg-green-500', icon: Heart, iconColor: 'text-green-600' },
    { sector: 'Finance', jobs: 2800, growth: '+15%', avgSalary: '₦300,000', color: 'bg-purple-500', icon: DollarSign, iconColor: 'text-purple-600' },
    { sector: 'Manufacturing', jobs: 4200, growth: '+8%', avgSalary: '₦180,000', color: 'bg-orange-500', icon: Building2, iconColor: 'text-orange-600' },
    { sector: 'Agriculture', jobs: 5600, growth: '+10%', avgSalary: '₦150,000', color: 'bg-yellow-500', icon: Shield, iconColor: 'text-yellow-600' },
    { sector: 'Education', jobs: 2100, growth: '+6%', avgSalary: '₦160,000', color: 'bg-pink-500', icon: GraduationCap, iconColor: 'text-pink-600' }
  ];

  const demographicData = [
    { category: 'Age 18-25', percentage: 35, count: 4350000, employment: 42.5 },
    { category: 'Age 26-35', percentage: 40, count: 4960000, employment: 67.8 },
    { category: 'Age 36-45', percentage: 20, count: 2480000, employment: 78.2 },
    { category: 'Age 46+', percentage: 5, count: 620000, employment: 65.4 }
  ];

  const portalSections = [
    {
      title: "Interactive Dashboards",
      description: "Visual overview of national and state-level labour market data",
      icon: BarChart3,
      color: "bg-blue-500",
      features: ["National Overview", "Geospatial Maps", "Sectoral Analysis", "Demographic Insights"],
      route: "/data-analytics/dashboards",
      stats: { dashboards: 12, views: 2450 }
    },
    {
      title: "Trend Analysis",
      description: "Analyze historical data and identify long-term patterns",
      icon: TrendingUp,
      color: "bg-green-500",
      features: ["Time-Series Analysis", "Comparative Analysis", "Correlation View", "Custom Charts"],
      route: "/data-analytics/trends",
      stats: { analyses: 8, exports: 156 }
    },
    {
      title: "Report Generation",
      description: "Create and export formal reports for stakeholders",
      icon: FileText,
      color: "bg-purple-500",
      features: ["Standard Templates", "Custom Builder", "Multiple Formats", "Scheduled Reports"],
      route: "/data-analytics/reports",
      stats: { reports: 24, downloads: 890 }
    },
    {
      title: "Skills Gap Data",
      description: "Analyze skills mismatch between supply and demand",
      icon: Target,
      color: "bg-orange-500",
      features: ["Supply vs Demand", "Graduate Data", "Emerging Skills", "Regional Analysis"],
      route: "/data-analytics/skills-gap",
      stats: { gaps: 15, insights: 67 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        title="Data & Analytics"
        subtitle="Comprehensive labour market insights and intelligence"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* National Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">National Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                          <metric.icon className={`w-5 h-5 ${metric.iconColor}`} />
                        </div>
                        <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                      </div>
                      <p className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</p>
                      <p className="text-xs text-gray-500">{metric.description}</p>
                    </div>
                    <div className={`p-2 rounded-full ${metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
                      {metric.trend === 'up' ? (
                        <ArrowUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center text-sm">
                    <span className={`${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'} font-medium`}>
                      {metric.change} vs last period
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Skills in Demand */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Top Skills in Demand
              </CardTitle>
              <CardDescription>Most sought-after skills nationwide</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${skill.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                        <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{skill.skill}</h3>
                        <p className="text-sm text-gray-600">{skill.demand} job postings</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">{skill.growth}</div>
                      <div className="text-xs text-gray-500">growth</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* State Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="w-5 h-5 mr-2" />
                State Performance
              </CardTitle>
              <CardDescription>Key metrics by state</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stateData.slice(0, 5).map((state, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 ${state.color} rounded-full mr-3`} />
                      <div>
                        <h3 className="font-semibold text-gray-900">{state.state}</h3>
                        <p className="text-sm text-gray-600">{state.jobs.toLocaleString()} jobs</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">{state.unemployment}%</div>
                      <div className="text-xs text-gray-500">unemployment</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portal Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portalSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mr-4`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription className="mt-1">{section.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 ${section.color} rounded-full mr-3`} />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Stats: {Object.entries(section.stats).map(([key, value]) => `${key}: ${value}`).join(', ')}</span>
                </div>
                
                <Button 
                  className="w-full group-hover:bg-gray-900 transition-colors"
                  onClick={() => {
                    if (section.title === 'Interactive Dashboards') {
                      window.location.href = '/data-analytics/dashboards';
                    } else if (section.title === 'Trend Analysis') {
                      window.location.href = '/data-analytics/trends';
                    } else if (section.title === 'Report Generation') {
                      window.location.href = '/data-analytics/reports';
                    } else if (section.title === 'Skills Gap Data') {
                      window.location.href = '/data-analytics/skills-gap';
                    }
                  }}
                >
                  Access {section.title}
                  <ArrowLeft className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>System Overview</CardTitle>
            <CardDescription>Platform usage and data statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2.4M</div>
                <div className="text-sm text-gray-600">Total Users</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">45.2K</div>
                <div className="text-sm text-gray-600">Active Jobs</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">127.8K</div>
                <div className="text-sm text-gray-600">Applications</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">89.3%</div>
                <div className="text-sm text-gray-600">Data Accuracy</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataAnalytics;
