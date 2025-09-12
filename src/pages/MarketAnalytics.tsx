import React, { useState } from 'react';
import { 
  BarChart3, 
  MapPin, 
  TrendingUp, 
  Users, 
  DollarSign,
  ArrowLeft,
  Download,
  Filter,
  Eye,
  Calendar,
  Target,
  PieChart
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MarketAnalytics: React.FC = () => {
  const [selectedState, setSelectedState] = useState('All');
  const [selectedSector, setSelectedSector] = useState('All');

  const talentSupplyData = [
    { state: 'Lagos', developers: 1250, designers: 890, marketers: 1100, managers: 750 },
    { state: 'Abuja', developers: 680, designers: 420, marketers: 650, managers: 480 },
    { state: 'Kano', developers: 320, designers: 180, marketers: 450, managers: 290 },
    { state: 'Rivers', developers: 280, designers: 150, marketers: 380, managers: 220 },
    { state: 'Ogun', developers: 190, designers: 120, marketers: 250, managers: 180 }
  ];

  const salaryBenchmarks = [
    { role: 'Software Developer', entry: '₦120,000', mid: '₦250,000', senior: '₦450,000', growth: '+15%' },
    { role: 'Data Analyst', entry: '₦100,000', mid: '₦200,000', senior: '₦350,000', growth: '+18%' },
    { role: 'Marketing Manager', entry: '₦150,000', mid: '₦280,000', senior: '₦400,000', growth: '+12%' },
    { role: 'Project Manager', entry: '₦180,000', mid: '₦320,000', senior: '₦500,000', growth: '+20%' },
    { role: 'UI/UX Designer', entry: '₦130,000', mid: '₦220,000', senior: '₦380,000', growth: '+16%' }
  ];

  const skillsInDemand = [
    { skill: 'JavaScript', demand: 'Very High', growth: '+25%', jobs: 1250 },
    { skill: 'Python', demand: 'High', growth: '+22%', jobs: 980 },
    { skill: 'React', demand: 'Very High', growth: '+28%', jobs: 1100 },
    { skill: 'Data Analysis', demand: 'High', growth: '+20%', jobs: 750 },
    { skill: 'Project Management', demand: 'High', growth: '+18%', jobs: 890 },
    { skill: 'Digital Marketing', demand: 'Medium', growth: '+15%', jobs: 650 },
    { skill: 'UI/UX Design', demand: 'High', growth: '+19%', jobs: 720 },
    { skill: 'Cloud Computing', demand: 'Very High', growth: '+30%', jobs: 580 }
  ];

  const demographicData = [
    { category: 'Age 18-25', percentage: 35, count: 4350 },
    { category: 'Age 26-35', percentage: 40, count: 4960 },
    { category: 'Age 36-45', percentage: 20, count: 2480 },
    { category: 'Age 46+', percentage: 5, count: 620 }
  ];

  const educationLevels = [
    { level: 'Secondary School', percentage: 15, count: 1860 },
    { level: 'Diploma', percentage: 25, count: 3100 },
    { level: "Bachelor's Degree", percentage: 45, count: 5580 },
    { level: "Master's Degree", percentage: 12, count: 1488 },
    { level: 'PhD', percentage: 3, count: 372 }
  ];

  const sectors = [
    { name: 'Technology', jobs: 8500, growth: '+18%', avgSalary: '₦280,000' },
    { name: 'Healthcare', jobs: 3200, growth: '+12%', avgSalary: '₦220,000' },
    { name: 'Finance', jobs: 2800, growth: '+15%', avgSalary: '₦300,000' },
    { name: 'Manufacturing', jobs: 4200, growth: '+8%', avgSalary: '₦180,000' },
    { name: 'Agriculture', jobs: 5600, growth: '+10%', avgSalary: '₦150,000' },
    { name: 'Education', jobs: 2100, growth: '+6%', avgSalary: '₦160,000' }
  ];

  const states = ['All', 'Lagos', 'Abuja', 'Kano', 'Rivers', 'Ogun', 'Kaduna', 'Oyo', 'Enugu', 'Delta'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portal
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Market Analytics</h1>
                <p className="text-gray-600 mt-1">Data-driven insights for smarter hiring decisions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="talent-supply" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="talent-supply">Talent Supply</TabsTrigger>
            <TabsTrigger value="salary-benchmarks">Salary Benchmarks</TabsTrigger>
            <TabsTrigger value="skills-demand">Skills in Demand</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
          </TabsList>

          <TabsContent value="talent-supply" className="space-y-6">
            {/* Talent Supply Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Talent Supply by Location
                </CardTitle>
                <CardDescription>
                  Distribution of skilled professionals across Nigerian states
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {talentSupplyData.map((state, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg text-gray-900 mb-4">{state.state}</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Software Developers</span>
                          <span className="font-medium">{state.developers.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">UI/UX Designers</span>
                          <span className="font-medium">{state.designers.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Marketing Professionals</span>
                          <span className="font-medium">{state.marketers.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Managers</span>
                          <span className="font-medium">{state.managers.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sector Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2" />
                  Sector Analysis
                </CardTitle>
                <CardDescription>
                  Job distribution and growth across different sectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sectors.map((sector, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{sector.name}</h3>
                        <Badge variant="secondary" className="text-green-600">
                          {sector.growth}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Active Jobs</span>
                          <span className="font-medium">{sector.jobs.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Avg Salary</span>
                          <span className="font-medium">{sector.avgSalary}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="salary-benchmarks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Salary Benchmarks by Role
                </CardTitle>
                <CardDescription>
                  Competitive salary ranges to help you offer attractive compensation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {salaryBenchmarks.map((role, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{role.role}</h3>
                        <Badge variant="secondary" className="text-green-600">
                          {role.growth} growth
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Entry Level</div>
                          <div className="text-lg font-bold text-gray-900">{role.entry}</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Mid Level</div>
                          <div className="text-lg font-bold text-blue-900">{role.mid}</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Senior Level</div>
                          <div className="text-lg font-bold text-green-900">{role.senior}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills-demand" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Skills in Demand
                </CardTitle>
                <CardDescription>
                  Most sought-after skills by employers in the current market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillsInDemand.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{skill.skill}</h3>
                          <p className="text-sm text-gray-600">{skill.jobs} active jobs</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Growth Rate</div>
                          <div className="text-lg font-bold text-green-600">{skill.growth}</div>
                        </div>
                        <Badge 
                          variant={skill.demand === 'Very High' ? 'default' : 
                                  skill.demand === 'High' ? 'secondary' : 'outline'}
                        >
                          {skill.demand}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demographics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Age Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Age Distribution
                  </CardTitle>
                  <CardDescription>
                    Age breakdown of the available workforce
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {demographicData.map((ageGroup, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-blue-500 rounded-full mr-3" />
                          <span className="font-medium">{ageGroup.category}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${ageGroup.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium w-12">{ageGroup.percentage}%</span>
                          <span className="text-sm text-gray-600 w-16">{ageGroup.count.toLocaleString()}</span>
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
                    Educational background of job seekers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {educationLevels.map((level, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full mr-3" />
                          <span className="font-medium">{level.level}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${level.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium w-12">{level.percentage}%</span>
                          <span className="text-sm text-gray-600 w-16">{level.count.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Key Market Insights
                </CardTitle>
                <CardDescription>
                  Actionable insights for your hiring strategy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Talent Concentration</h3>
                    <p className="text-sm text-blue-800">
                      60% of tech talent is concentrated in Lagos and Abuja. 
                      Consider remote work to access talent in other states.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">Salary Trends</h3>
                    <p className="text-sm text-green-800">
                      Tech roles show 15-20% salary growth. 
                      Offer competitive packages to attract top talent.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">Skills Gap</h3>
                    <p className="text-sm text-purple-800">
                      High demand for cloud computing and AI skills. 
                      Consider upskilling programs for existing employees.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MarketAnalytics;


