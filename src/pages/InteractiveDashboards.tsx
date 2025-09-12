import React, { useState } from 'react';
import { 
  BarChart3, 
  Map, 
  PieChart, 
  TrendingUp, 
  Users,
  ArrowLeft,
  Download,
  Filter,
  Calendar,
  Target,
  Globe,
  Building2,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InteractiveDashboards: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('quarter');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedSector, setSelectedSector] = useState('All');

  const nationalMetrics = [
    {
      title: 'Unemployment Rate',
      value: '23.1%',
      change: '-2.3%',
      trend: 'down',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: Activity
    },
    {
      title: 'Underemployment Rate',
      value: '15.7%',
      change: '-1.8%',
      trend: 'down',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: Users
    },
    {
      title: 'Labour Force Participation',
      value: '67.4%',
      change: '+3.2%',
      trend: 'up',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: Target
    },
    {
      title: 'Youth Employment Rate',
      value: '42.5%',
      change: '+5.1%',
      trend: 'up',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      icon: TrendingUp
    }
  ];

  const stateData = [
    { 
      state: 'Lagos', 
      unemployment: 18.2, 
      underemployment: 12.5, 
      participation: 72.3, 
      jobs: 45000, 
      growth: '+12%', 
      color: 'bg-green-500',
      lgas: ['Ikeja', 'Victoria Island', 'Surulere', 'Lagos Island']
    },
    { 
      state: 'Abuja FCT', 
      unemployment: 15.8, 
      underemployment: 10.2, 
      participation: 75.1, 
      jobs: 28000, 
      growth: '+8%', 
      color: 'bg-green-400',
      lgas: ['Asokoro', 'Maitama', 'Garki', 'Wuse']
    },
    { 
      state: 'Rivers', 
      unemployment: 22.1, 
      underemployment: 15.3, 
      participation: 68.7, 
      jobs: 15000, 
      growth: '+5%', 
      color: 'bg-yellow-500',
      lgas: ['Port Harcourt', 'Obio-Akpor', 'Eleme', 'Oyigbo']
    },
    { 
      state: 'Kano', 
      unemployment: 28.5, 
      underemployment: 18.7, 
      participation: 62.4, 
      jobs: 12000, 
      growth: '+3%', 
      color: 'bg-orange-500',
      lgas: ['Kano Municipal', 'Nassarawa', 'Fagge', 'Dala']
    },
    { 
      state: 'Ogun', 
      unemployment: 20.3, 
      underemployment: 13.8, 
      participation: 70.2, 
      jobs: 18000, 
      growth: '+7%', 
      color: 'bg-yellow-400',
      lgas: ['Abeokuta North', 'Abeokuta South', 'Ijebu Ode', 'Sagamu']
    },
    { 
      state: 'Kaduna', 
      unemployment: 25.7, 
      underemployment: 16.9, 
      participation: 65.3, 
      jobs: 10000, 
      growth: '+2%', 
      color: 'bg-orange-400',
      lgas: ['Kaduna North', 'Kaduna South', 'Chikun', 'Igabi']
    }
  ];

  const sectorData = [
    { 
      sector: 'Technology', 
      jobs: 8500, 
      growth: '+18%', 
      avgSalary: '₦280,000', 
      employment: 12500,
      color: 'bg-blue-500',
      topSkills: ['JavaScript', 'Python', 'React', 'Cloud Computing']
    },
    { 
      sector: 'Healthcare', 
      jobs: 3200, 
      growth: '+12%', 
      avgSalary: '₦220,000', 
      employment: 8900,
      color: 'bg-green-500',
      topSkills: ['Medical Practice', 'Nursing', 'Pharmacy', 'Health Administration']
    },
    { 
      sector: 'Finance', 
      jobs: 2800, 
      growth: '+15%', 
      avgSalary: '₦300,000', 
      employment: 6500,
      color: 'bg-purple-500',
      topSkills: ['Banking', 'Investment', 'Risk Management', 'Financial Analysis']
    },
    { 
      sector: 'Manufacturing', 
      jobs: 4200, 
      growth: '+8%', 
      avgSalary: '₦180,000', 
      employment: 15200,
      color: 'bg-orange-500',
      topSkills: ['Production', 'Quality Control', 'Engineering', 'Operations']
    },
    { 
      sector: 'Agriculture', 
      jobs: 5600, 
      growth: '+10%', 
      avgSalary: '₦150,000', 
      employment: 18500,
      color: 'bg-yellow-500',
      topSkills: ['Crop Production', 'Livestock', 'Agribusiness', 'Agricultural Engineering']
    },
    { 
      sector: 'Education', 
      jobs: 2100, 
      growth: '+6%', 
      avgSalary: '₦160,000', 
      employment: 9800,
      color: 'bg-pink-500',
      topSkills: ['Teaching', 'Curriculum Development', 'Educational Technology', 'Research']
    }
  ];

  const demographicData = [
    { category: 'Age 18-25', percentage: 35, count: 4350000, employment: 42.5, gender: { male: 45.2, female: 39.8 } },
    { category: 'Age 26-35', percentage: 40, count: 4960000, employment: 67.8, gender: { male: 72.1, female: 63.5 } },
    { category: 'Age 36-45', percentage: 20, count: 2480000, employment: 78.2, gender: { male: 82.3, female: 74.1 } },
    { category: 'Age 46+', percentage: 5, count: 620000, employment: 65.4, gender: { male: 68.7, female: 62.1 } }
  ];

  const educationLevels = [
    { level: 'Secondary School', percentage: 15, count: 1860000, employment: 35.2 },
    { level: 'Diploma', percentage: 25, count: 3100000, employment: 58.7 },
    { level: "Bachelor's Degree", percentage: 45, count: 5580000, employment: 72.3 },
    { level: "Master's Degree", percentage: 12, count: 1488000, employment: 85.6 },
    { level: 'PhD', percentage: 3, count: 372000, employment: 92.1 }
  ];

  const pwdData = [
    { category: 'Visual Impairment', count: 125000, employment: 28.5 },
    { category: 'Hearing Impairment', count: 98000, employment: 32.1 },
    { category: 'Physical Disability', count: 156000, employment: 35.8 },
    { category: 'Intellectual Disability', count: 87000, employment: 22.3 },
    { category: 'Other Disabilities', count: 134000, employment: 31.2 }
  ];

  const states = ['All', 'Lagos', 'Abuja FCT', 'Rivers', 'Kano', 'Ogun', 'Kaduna', 'Oyo', 'Enugu', 'Delta'];
  const sectors = ['All', 'Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Agriculture', 'Education'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Analytics
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Interactive Dashboards</h1>
                <p className="text-gray-600 mt-1">Visual overview of national and state-level labour market data</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="national" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="national">National Overview</TabsTrigger>
            <TabsTrigger value="geospatial">Geospatial Map</TabsTrigger>
            <TabsTrigger value="sectoral">Sectoral Analysis</TabsTrigger>
            <TabsTrigger value="demographic">Demographics</TabsTrigger>
          </TabsList>

          <TabsContent value="national" className="space-y-6">
            {/* National Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nationalMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                        <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                        <p className={`text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.change} vs last period
                        </p>
                      </div>
                      <div className={`p-3 rounded-full ${metric.bgColor}`}>
                        <metric.icon className={`w-6 h-6 ${metric.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* State Performance Grid */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Map className="w-5 h-5 mr-2" />
                  State Performance Overview
                </CardTitle>
                <CardDescription>
                  Key labour market indicators by state
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stateData.map((state, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{state.state}</h3>
                        <div className={`w-3 h-3 ${state.color} rounded-full`} />
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Unemployment</span>
                          <span className="font-medium">{state.unemployment}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Participation</span>
                          <span className="font-medium">{state.participation}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Jobs</span>
                          <span className="font-medium">{state.jobs.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Growth</span>
                          <span className="font-medium text-green-600">{state.growth}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geospatial" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Interactive Nigeria Map
                </CardTitle>
                <CardDescription>
                  Click on any state to view detailed labour market data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-8 text-center mb-6">
                  <Map className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-4">
                    Interactive map visualization would be implemented here using a mapping library
                  </p>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Map Data
                  </Button>
                </div>

                {/* State Details */}
                {selectedState !== 'All' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>{selectedState} Labour Market Data</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span>Unemployment Rate</span>
                            <span className="font-semibold">22.1%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Underemployment Rate</span>
                            <span className="font-semibold">15.3%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Labour Force Participation</span>
                            <span className="font-semibold">68.7%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Active Jobs</span>
                            <span className="font-semibold">15,000</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Top LGAs in {selectedState}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {['Port Harcourt', 'Obio-Akpor', 'Eleme', 'Oyigbo'].map((lga, index) => (
                            <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <span>{lga}</span>
                              <Badge variant="outline">{Math.floor(Math.random() * 5000) + 1000} jobs</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sectoral" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Sectoral Performance Analysis
                </CardTitle>
                <CardDescription>
                  Labour market performance across different economic sectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectorData.map((sector, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">{sector.sector}</h3>
                        <Badge className={sector.color} variant="default">
                          {sector.growth}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Active Jobs</span>
                          <span className="font-medium">{sector.jobs.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Employment</span>
                          <span className="font-medium">{sector.employment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Avg Salary</span>
                          <span className="font-medium">{sector.avgSalary}</span>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Top Skills</h4>
                          <div className="flex flex-wrap gap-1">
                            {sector.topSkills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demographic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Age Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Age Distribution
                  </CardTitle>
                  <CardDescription>
                    Labour force breakdown by age groups
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {demographicData.map((ageGroup, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{ageGroup.category}</span>
                          <span className="text-sm text-gray-600">{ageGroup.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${ageGroup.percentage}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Count: {ageGroup.count.toLocaleString()}</span>
                          <span>Employment: {ageGroup.employment}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education Levels */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Education Levels
                  </CardTitle>
                  <CardDescription>
                    Educational attainment of the workforce
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {educationLevels.map((level, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{level.level}</span>
                          <span className="text-sm text-gray-600">{level.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${level.percentage}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Count: {level.count.toLocaleString()}</span>
                          <span>Employment: {level.employment}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* PWD Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Persons with Disabilities (PWD)
                </CardTitle>
                <CardDescription>
                  Employment data for persons with disabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pwdData.map((pwd, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{pwd.category}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Population</span>
                          <span className="font-medium">{pwd.count.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Employment Rate</span>
                          <span className="font-medium text-green-600">{pwd.employment}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InteractiveDashboards;


