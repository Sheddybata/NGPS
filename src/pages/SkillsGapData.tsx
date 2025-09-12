import React, { useState } from 'react';
import { 
  Target, 
  TrendingUp, 
  Users, 
  GraduationCap,
  ArrowLeft,
  Download,
  Filter,
  MapPin,
  Building2,
  AlertTriangle,
  CheckCircle,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const SkillsGapData: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedSector, setSelectedSector] = useState('All');

  const skillsGapData = [
    {
      skill: 'JavaScript',
      demand: 1250,
      supply: 890,
      gap: 360,
      gapPercentage: 28.8,
      severity: 'High',
      trend: 'Increasing',
      avgSalary: '₦280,000',
      topStates: ['Lagos', 'Abuja FCT', 'Rivers']
    },
    {
      skill: 'Data Analysis',
      demand: 980,
      supply: 650,
      gap: 330,
      gapPercentage: 33.7,
      severity: 'Very High',
      trend: 'Increasing',
      avgSalary: '₦250,000',
      topStates: ['Lagos', 'Abuja FCT', 'Kano']
    },
    {
      skill: 'Project Management',
      demand: 890,
      supply: 720,
      gap: 170,
      gapPercentage: 19.1,
      severity: 'Medium',
      trend: 'Stable',
      avgSalary: '₦320,000',
      topStates: ['Lagos', 'Abuja FCT', 'Ogun']
    },
    {
      skill: 'Digital Marketing',
      demand: 750,
      supply: 580,
      gap: 170,
      gapPercentage: 22.7,
      severity: 'Medium',
      trend: 'Increasing',
      avgSalary: '₦200,000',
      topStates: ['Lagos', 'Abuja FCT', 'Kano']
    },
    {
      skill: 'Cloud Computing',
      demand: 680,
      supply: 320,
      gap: 360,
      gapPercentage: 52.9,
      severity: 'Critical',
      trend: 'Rapidly Increasing',
      avgSalary: '₦350,000',
      topStates: ['Lagos', 'Abuja FCT', 'Rivers']
    },
    {
      skill: 'UI/UX Design',
      demand: 720,
      supply: 450,
      gap: 270,
      gapPercentage: 37.5,
      severity: 'High',
      trend: 'Increasing',
      avgSalary: '₦240,000',
      topStates: ['Lagos', 'Abuja FCT', 'Ogun']
    }
  ];

  const graduateSupplyData = [
    {
      discipline: 'Computer Science',
      graduates2023: 12500,
      graduates2022: 11800,
      growth: '+5.9%',
      employmentRate: 78.5,
      avgSalary: '₦280,000',
      topInstitutions: ['University of Lagos', 'Ahmadu Bello University', 'University of Ibadan']
    },
    {
      discipline: 'Engineering',
      graduates2023: 18500,
      graduates2022: 17200,
      growth: '+7.6%',
      employmentRate: 72.3,
      avgSalary: '₦220,000',
      topInstitutions: ['University of Nigeria', 'Federal University of Technology', 'Covenant University']
    },
    {
      discipline: 'Business Administration',
      graduates2023: 22100,
      graduates2022: 20800,
      growth: '+6.3%',
      employmentRate: 68.7,
      avgSalary: '₦180,000',
      topInstitutions: ['Lagos Business School', 'Pan-Atlantic University', 'University of Lagos']
    },
    {
      discipline: 'Medicine',
      graduates2023: 3200,
      graduates2022: 3100,
      growth: '+3.2%',
      employmentRate: 95.2,
      avgSalary: '₦450,000',
      topInstitutions: ['University of Ibadan', 'University of Lagos', 'Ahmadu Bello University']
    },
    {
      discipline: 'Agriculture',
      graduates2023: 8900,
      graduates2022: 8200,
      growth: '+8.5%',
      employmentRate: 65.4,
      avgSalary: '₦150,000',
      topInstitutions: ['Federal University of Agriculture', 'University of Agriculture', 'Michael Okpara University']
    }
  ];

  const emergingSkills = [
    {
      skill: 'Artificial Intelligence',
      growth: '+45%',
      jobPostings: 320,
      avgSalary: '₦420,000',
      demandLevel: 'Very High',
      relatedSkills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow']
    },
    {
      skill: 'Blockchain Development',
      growth: '+38%',
      jobPostings: 180,
      avgSalary: '₦380,000',
      demandLevel: 'High',
      relatedSkills: ['Solidity', 'Smart Contracts', 'Web3', 'Cryptocurrency']
    },
    {
      skill: 'Cybersecurity',
      growth: '+42%',
      jobPostings: 450,
      avgSalary: '₦350,000',
      demandLevel: 'Very High',
      relatedSkills: ['Ethical Hacking', 'Network Security', 'Risk Assessment', 'Compliance']
    },
    {
      skill: 'Data Science',
      growth: '+35%',
      jobPostings: 680,
      avgSalary: '₦320,000',
      demandLevel: 'High',
      relatedSkills: ['Python', 'R', 'Statistics', 'Machine Learning']
    },
    {
      skill: 'DevOps',
      growth: '+28%',
      jobPostings: 520,
      avgSalary: '₦300,000',
      demandLevel: 'High',
      relatedSkills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD']
    }
  ];

  const regionalAnalysis = [
    {
      region: 'South West',
      topGaps: ['Cloud Computing', 'Data Analysis', 'UI/UX Design'],
      criticalSkills: 3,
      moderateSkills: 5,
      lowGapSkills: 8,
      avgGapPercentage: 32.5
    },
    {
      region: 'North Central',
      topGaps: ['JavaScript', 'Project Management', 'Digital Marketing'],
      criticalSkills: 2,
      moderateSkills: 4,
      lowGapSkills: 6,
      avgGapPercentage: 28.7
    },
    {
      region: 'South South',
      topGaps: ['Cloud Computing', 'Data Analysis', 'Cybersecurity'],
      criticalSkills: 2,
      moderateSkills: 3,
      lowGapSkills: 7,
      avgGapPercentage: 35.2
    },
    {
      region: 'North West',
      topGaps: ['Digital Marketing', 'Project Management', 'UI/UX Design'],
      criticalSkills: 1,
      moderateSkills: 6,
      lowGapSkills: 5,
      avgGapPercentage: 25.8
    },
    {
      region: 'North East',
      topGaps: ['Data Analysis', 'Cloud Computing', 'JavaScript'],
      criticalSkills: 3,
      moderateSkills: 4,
      lowGapSkills: 3,
      avgGapPercentage: 38.9
    },
    {
      region: 'South East',
      topGaps: ['Project Management', 'Digital Marketing', 'UI/UX Design'],
      criticalSkills: 1,
      moderateSkills: 5,
      lowGapSkills: 6,
      avgGapPercentage: 26.3
    }
  ];

  const tvetData = [
    {
      institution: 'Federal Polytechnic, Lagos',
      programs: 15,
      enrollment: 8500,
      completion: 7200,
      employment: 6800,
      topPrograms: ['Computer Science', 'Electrical Engineering', 'Business Administration']
    },
    {
      institution: 'Yaba College of Technology',
      programs: 12,
      enrollment: 6200,
      completion: 5800,
      employment: 5200,
      topPrograms: ['Information Technology', 'Mechanical Engineering', 'Mass Communication']
    },
    {
      institution: 'Kaduna Polytechnic',
      programs: 18,
      enrollment: 9800,
      completion: 8900,
      employment: 8200,
      topPrograms: ['Agricultural Technology', 'Civil Engineering', 'Computer Science']
    }
  ];

  const regions = ['All', 'South West', 'North Central', 'South South', 'North West', 'North East', 'South East'];
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
                <h1 className="text-3xl font-bold text-gray-900">Skills Gap Data</h1>
                <p className="text-gray-600 mt-1">Analyze skills mismatch between supply and demand</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="supply-demand" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="supply-demand">Supply vs Demand</TabsTrigger>
            <TabsTrigger value="graduates">Graduate Supply</TabsTrigger>
            <TabsTrigger value="emerging">Emerging Skills</TabsTrigger>
            <TabsTrigger value="regional">Regional Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="supply-demand" className="space-y-6">
            {/* Skills Gap Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Skills Gap Analysis
                </CardTitle>
                <CardDescription>
                  Top skills with the highest demand-supply gaps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillsGapData.map((skill, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <h3 className="text-lg font-semibold text-gray-900 mr-3">{skill.skill}</h3>
                          <Badge 
                            variant={skill.severity === 'Critical' ? 'destructive' : 
                                    skill.severity === 'Very High' ? 'default' :
                                    skill.severity === 'High' ? 'secondary' : 'outline'}
                          >
                            {skill.severity}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600">{skill.gapPercentage}%</div>
                          <div className="text-sm text-gray-600">Gap</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Demand</div>
                          <div className="text-lg font-bold text-blue-600">{skill.demand.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Supply</div>
                          <div className="text-lg font-bold text-green-600">{skill.supply.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-3 bg-red-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Gap</div>
                          <div className="text-lg font-bold text-red-600">{skill.gap.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Avg Salary</div>
                          <div className="text-lg font-bold text-purple-600">{skill.avgSalary}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1 text-orange-500" />
                          <span className="text-gray-600">Trend: {skill.trend}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                          <span className="text-gray-600">Top States: {skill.topStates.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="graduates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Graduate Supply Data
                </CardTitle>
                <CardDescription>
                  Number of graduates produced annually and their employment outcomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {graduateSupplyData.map((discipline, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{discipline.discipline}</h3>
                        <Badge variant="outline" className="text-green-600">
                          {discipline.growth}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">2023 Graduates</div>
                          <div className="text-lg font-bold text-blue-600">{discipline.graduates2023.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Employment Rate</div>
                          <div className="text-lg font-bold text-green-600">{discipline.employmentRate}%</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Avg Salary</div>
                          <div className="text-lg font-bold text-purple-600">{discipline.avgSalary}</div>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Growth</div>
                          <div className="text-lg font-bold text-orange-600">{discipline.growth}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Top Institutions:</h4>
                        <div className="flex flex-wrap gap-1">
                          {discipline.topInstitutions.map((institution, instIndex) => (
                            <Badge key={instIndex} variant="outline" className="text-xs">
                              {institution}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* TVET Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  TVET Institution Performance
                </CardTitle>
                <CardDescription>
                  Performance of Technical and Vocational Education Training institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tvetData.map((institution, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{institution.institution}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Programs</div>
                          <div className="text-lg font-bold text-blue-600">{institution.programs}</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Enrollment</div>
                          <div className="text-lg font-bold text-green-600">{institution.enrollment.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Completion</div>
                          <div className="text-lg font-bold text-purple-600">{institution.completion.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Employment</div>
                          <div className="text-lg font-bold text-orange-600">{institution.employment.toLocaleString()}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Top Programs:</h4>
                        <div className="flex flex-wrap gap-1">
                          {institution.topPrograms.map((program, progIndex) => (
                            <Badge key={progIndex} variant="outline" className="text-xs">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emerging" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Emerging Skills Identifier
                </CardTitle>
                <CardDescription>
                  Trending and emerging skills based on new job postings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emergingSkills.map((skill, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{skill.skill}</h3>
                        <Badge variant="default" className="text-green-600">
                          {skill.growth}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Job Postings</div>
                          <div className="text-lg font-bold text-blue-600">{skill.jobPostings.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Avg Salary</div>
                          <div className="text-lg font-bold text-green-600">{skill.avgSalary}</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Demand Level</div>
                          <div className="text-lg font-bold text-purple-600">{skill.demandLevel}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Related Skills:</h4>
                        <div className="flex flex-wrap gap-1">
                          {skill.relatedSkills.map((relatedSkill, relIndex) => (
                            <Badge key={relIndex} variant="outline" className="text-xs">
                              {relatedSkill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="regional" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Regional Skills Analysis
                </CardTitle>
                <CardDescription>
                  Skills gap analysis by region to tailor TVET programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {regionalAnalysis.map((region, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{region.region}</h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Critical Skills</span>
                          <span className="font-medium text-red-600">{region.criticalSkills}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Moderate Skills</span>
                          <span className="font-medium text-yellow-600">{region.moderateSkills}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Low Gap Skills</span>
                          <span className="font-medium text-green-600">{region.lowGapSkills}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Avg Gap %</span>
                          <span className="font-medium">{region.avgGapPercentage}%</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Top Skills Gaps:</h4>
                        <div className="flex flex-wrap gap-1">
                          {region.topGaps.map((gap, gapIndex) => (
                            <Badge key={gapIndex} variant="outline" className="text-xs">
                              {gap}
                            </Badge>
                          ))}
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

export default SkillsGapData;


