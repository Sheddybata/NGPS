import React, { useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  LineChart, 
  PieChart,
  ArrowLeft,
  Download,
  Filter,
  Calendar,
  Target,
  Users,
  Building2,
  MapPin,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const TrendAnalysis: React.FC = () => {
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState('5years');
  const [selectedState1, setSelectedState1] = useState('Lagos');
  const [selectedState2, setSelectedState2] = useState('Abuja FCT');
  const [selectedSector, setSelectedSector] = useState('Technology');

  const indicators = [
    { id: 'unemployment', name: 'Unemployment Rate', category: 'Employment' },
    { id: 'underemployment', name: 'Underemployment Rate', category: 'Employment' },
    { id: 'participation', name: 'Labour Force Participation', category: 'Participation' },
    { id: 'youth_employment', name: 'Youth Employment Rate', category: 'Employment' },
    { id: 'female_participation', name: 'Female Participation Rate', category: 'Participation' },
    { id: 'formalization', name: 'Informal Economy Formalization', category: 'Structure' },
    { id: 'job_creation', name: 'Job Creation Rate', category: 'Growth' },
    { id: 'wage_growth', name: 'Wage Growth Rate', category: 'Compensation' },
    { id: 'skills_gap', name: 'Skills Gap Index', category: 'Skills' },
    { id: 'tvet_enrollment', name: 'TVET Enrollment Rate', category: 'Education' }
  ];

  const timeSeriesData = [
    { year: 2019, unemployment: 23.1, underemployment: 18.2, participation: 65.3, youth_employment: 38.7 },
    { year: 2020, unemployment: 27.1, underemployment: 21.5, participation: 62.8, youth_employment: 35.2 },
    { year: 2021, unemployment: 25.8, underemployment: 19.7, participation: 64.1, youth_employment: 37.8 },
    { year: 2022, unemployment: 24.3, underemployment: 17.9, participation: 66.2, youth_employment: 40.1 },
    { year: 2023, unemployment: 23.1, underemployment: 15.7, participation: 67.4, youth_employment: 42.5 }
  ];

  const stateComparisonData = [
    { state: 'Lagos', unemployment: 18.2, participation: 72.3, jobs: 45000, growth: 12.5 },
    { state: 'Abuja FCT', unemployment: 15.8, participation: 75.1, jobs: 28000, growth: 8.3 },
    { state: 'Rivers', unemployment: 22.1, participation: 68.7, jobs: 15000, growth: 5.2 },
    { state: 'Kano', unemployment: 28.5, participation: 62.4, jobs: 12000, growth: 3.1 },
    { state: 'Ogun', unemployment: 20.3, participation: 70.2, jobs: 18000, growth: 7.8 },
    { state: 'Kaduna', unemployment: 25.7, participation: 65.3, jobs: 10000, growth: 2.4 }
  ];

  const correlationData = [
    { 
      variable1: 'TVET Investment', 
      variable2: 'Youth Employment', 
      correlation: 0.78, 
      significance: 'High',
      description: 'Strong positive correlation between TVET investment and youth employment rates'
    },
    { 
      variable1: 'Digital Infrastructure', 
      variable2: 'Tech Job Growth', 
      correlation: 0.85, 
      significance: 'Very High',
      description: 'Very strong correlation between digital infrastructure and technology job creation'
    },
    { 
      variable1: 'Female Education', 
      variable2: 'Female Participation', 
      correlation: 0.72, 
      significance: 'High',
      description: 'Strong correlation between female education levels and workforce participation'
    },
    { 
      variable1: 'Agricultural Investment', 
      variable2: 'Rural Employment', 
      correlation: 0.65, 
      significance: 'Moderate',
      description: 'Moderate positive correlation between agricultural investment and rural employment'
    }
  ];

  const sectorTrends = [
    { 
      sector: 'Technology', 
      growth: [8.2, 12.5, 15.8, 18.3, 22.1], 
      employment: [8500, 9200, 10800, 12500, 15200],
      avgSalary: [220000, 240000, 260000, 280000, 320000]
    },
    { 
      sector: 'Healthcare', 
      growth: [5.1, 7.8, 9.2, 11.5, 12.8], 
      employment: [2800, 3100, 3500, 4200, 4800],
      avgSalary: [180000, 195000, 210000, 220000, 240000]
    },
    { 
      sector: 'Manufacturing', 
      growth: [3.2, 4.1, 5.8, 7.2, 8.5], 
      employment: [3800, 4100, 4500, 4800, 5200],
      avgSalary: [150000, 160000, 170000, 180000, 190000]
    }
  ];

  const customChartData = [
    { name: 'Q1 2023', value: 23.1, color: '#3B82F6' },
    { name: 'Q2 2023', value: 22.8, color: '#10B981' },
    { name: 'Q3 2023', value: 22.5, color: '#F59E0B' },
    { name: 'Q4 2023', value: 22.1, color: '#EF4444' }
  ];

  const handleIndicatorToggle = (indicatorId: string) => {
    setSelectedIndicators(prev => 
      prev.includes(indicatorId) 
        ? prev.filter(id => id !== indicatorId)
        : [...prev, indicatorId]
    );
  };

  const states = ['Lagos', 'Abuja FCT', 'Rivers', 'Kano', 'Ogun', 'Kaduna', 'Oyo', 'Enugu', 'Delta'];
  const sectors = ['Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Agriculture', 'Education'];

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
                <h1 className="text-3xl font-bold text-gray-900">Trend Analysis</h1>
                <p className="text-gray-600 mt-1">Analyze historical data and identify long-term patterns</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Analysis
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="timeseries" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="timeseries">Time-Series Analysis</TabsTrigger>
            <TabsTrigger value="comparative">Comparative Analysis</TabsTrigger>
            <TabsTrigger value="correlation">Correlation View</TabsTrigger>
            <TabsTrigger value="custom">Custom Charts</TabsTrigger>
          </TabsList>

          <TabsContent value="timeseries" className="space-y-6">
            {/* Indicator Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Select Indicators for Analysis
                </CardTitle>
                <CardDescription>
                  Choose one or more indicators to plot on the time-series chart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {indicators.map((indicator) => (
                    <div 
                      key={indicator.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedIndicators.includes(indicator.id) 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleIndicatorToggle(indicator.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{indicator.name}</h3>
                          <p className="text-sm text-gray-600">{indicator.category}</p>
                        </div>
                        <div className={`w-4 h-4 rounded border-2 ${
                          selectedIndicators.includes(indicator.id) 
                            ? 'border-blue-500 bg-blue-500' 
                            : 'border-gray-300'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time-Series Chart */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Time-Series Analysis</CardTitle>
                    <CardDescription>
                      Historical trends of selected indicators
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1year">1 Year</SelectItem>
                        <SelectItem value="3years">3 Years</SelectItem>
                        <SelectItem value="5years">5 Years</SelectItem>
                        <SelectItem value="10years">10 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <LineChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Time-Series Chart</h3>
                  <p className="text-gray-600 mb-4">
                    Chart visualization would be implemented here using a charting library
                  </p>
                  <div className="text-sm text-gray-500">
                    Selected indicators: {selectedIndicators.length > 0 ? selectedIndicators.join(', ') : 'None selected'}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Table */}
            <Card>
              <CardHeader>
                <CardTitle>Historical Data</CardTitle>
                <CardDescription>
                  Raw data for the selected time period
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Year</th>
                        {selectedIndicators.map(indicatorId => {
                          const indicator = indicators.find(i => i.id === indicatorId);
                          return (
                            <th key={indicatorId} className="text-left p-2">
                              {indicator?.name}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {timeSeriesData.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2 font-medium">{row.year}</td>
                          {selectedIndicators.map(indicatorId => (
                            <td key={indicatorId} className="p-2">
                              {row[indicatorId as keyof typeof row]?.toFixed(1) || 'N/A'}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparative" className="space-y-6">
            {/* State Comparison */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  State Comparison Analysis
                </CardTitle>
                <CardDescription>
                  Compare key metrics between different states
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label>Select First State</Label>
                    <Select value={selectedState1} onValueChange={setSelectedState1}>
                      <SelectTrigger className="mt-1">
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
                  </div>
                  <div>
                    <Label>Select Second State</Label>
                    <Select value={selectedState2} onValueChange={setSelectedState2}>
                      <SelectTrigger className="mt-1">
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
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[selectedState1, selectedState2].map((state, index) => {
                    const stateData = stateComparisonData.find(s => s.state === state);
                    return (
                      <div key={index} className="border rounded-lg p-4">
                        <h3 className="font-semibold text-lg text-gray-900 mb-4">{state}</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Unemployment Rate</span>
                            <span className="font-medium">{stateData?.unemployment}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Participation Rate</span>
                            <span className="font-medium">{stateData?.participation}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Active Jobs</span>
                            <span className="font-medium">{stateData?.jobs.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Growth Rate</span>
                            <span className="font-medium text-green-600">{stateData?.growth}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Sector Comparison */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Sector Performance Comparison
                </CardTitle>
                <CardDescription>
                  Compare performance across different economic sectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sectorTrends.map((sector, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">{sector.sector} Sector</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-600 mb-2">Growth Rate (%)</h4>
                          <div className="space-y-1">
                            {sector.growth.map((rate, yearIndex) => (
                              <div key={yearIndex} className="flex justify-between text-sm">
                                <span>202{yearIndex + 4}</span>
                                <span className="font-medium">{rate}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-600 mb-2">Employment</h4>
                          <div className="space-y-1">
                            {sector.employment.map((emp, yearIndex) => (
                              <div key={yearIndex} className="flex justify-between text-sm">
                                <span>202{yearIndex + 4}</span>
                                <span className="font-medium">{emp.toLocaleString()}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-600 mb-2">Avg Salary (₦)</h4>
                          <div className="space-y-1">
                            {sector.avgSalary.map((salary, yearIndex) => (
                              <div key={yearIndex} className="flex justify-between text-sm">
                                <span>202{yearIndex + 4}</span>
                                <span className="font-medium">{salary.toLocaleString()}</span>
                              </div>
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

          <TabsContent value="correlation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Correlation Analysis
                </CardTitle>
                <CardDescription>
                  Explore relationships between different labour market variables
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {correlationData.map((correlation, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">
                          {correlation.variable1} vs {correlation.variable2}
                        </h3>
                        <Badge 
                          variant={correlation.significance === 'Very High' ? 'default' : 
                                  correlation.significance === 'High' ? 'secondary' : 'outline'}
                        >
                          {correlation.significance}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="text-2xl font-bold text-blue-600">
                          {correlation.correlation.toFixed(2)}
                        </div>
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${Math.abs(correlation.correlation) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{correlation.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Custom Chart Builder
                </CardTitle>
                <CardDescription>
                  Create your own custom visualizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Chart Configuration</h3>
                    <div className="space-y-4">
                      <div>
                        <Label>Chart Type</Label>
                        <Select defaultValue="bar">
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bar">Bar Chart</SelectItem>
                            <SelectItem value="line">Line Chart</SelectItem>
                            <SelectItem value="pie">Pie Chart</SelectItem>
                            <SelectItem value="scatter">Scatter Plot</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>X-Axis Variable</Label>
                        <Select defaultValue="quarter">
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="quarter">Quarter</SelectItem>
                            <SelectItem value="state">State</SelectItem>
                            <SelectItem value="sector">Sector</SelectItem>
                            <SelectItem value="age">Age Group</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Y-Axis Variable</Label>
                        <Select defaultValue="unemployment">
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="unemployment">Unemployment Rate</SelectItem>
                            <SelectItem value="participation">Participation Rate</SelectItem>
                            <SelectItem value="jobs">Job Count</SelectItem>
                            <SelectItem value="salary">Average Salary</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Preview</h3>
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Chart</h4>
                      <p className="text-gray-600 mb-4">
                        Your custom visualization will appear here
                      </p>
                      <Button>Generate Chart</Button>
                    </div>
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

export default TrendAnalysis;


