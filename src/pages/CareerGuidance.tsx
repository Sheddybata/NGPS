import React, { useState } from 'react';
import { 
  Compass, 
  TrendingUp, 
  DollarSign, 
  GraduationCap, 
  ArrowLeft,
  Search,
  Filter,
  Star,
  Users,
  Building2,
  BookOpen
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CareerGuidance: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const careers = [
    {
      id: 1,
      title: "Software Developer",
      sector: "Technology",
      outlook: "Growing",
      avgSalary: "₦200,000 - ₦500,000",
      education: "Bachelor's in Computer Science",
      skills: ["Programming", "Problem Solving", "Teamwork"],
      description: "Design and develop software applications and systems",
      growth: "+15.2%",
      demand: "High"
    },
    {
      id: 2,
      title: "Data Analyst",
      sector: "Technology",
      outlook: "Growing",
      avgSalary: "₦150,000 - ₦350,000",
      education: "Bachelor's in Statistics/Mathematics",
      skills: ["Data Analysis", "Excel", "SQL", "Python"],
      description: "Analyze data to help businesses make informed decisions",
      growth: "+12.8%",
      demand: "High"
    },
    {
      id: 3,
      title: "Agricultural Engineer",
      sector: "Agriculture",
      outlook: "Stable",
      avgSalary: "₦120,000 - ₦250,000",
      education: "Bachelor's in Agricultural Engineering",
      skills: ["Engineering", "Problem Solving", "Innovation"],
      description: "Design and improve agricultural systems and equipment",
      growth: "+8.5%",
      demand: "Medium"
    },
    {
      id: 4,
      title: "Healthcare Administrator",
      sector: "Healthcare",
      outlook: "Growing",
      avgSalary: "₦180,000 - ₦300,000",
      education: "Bachelor's in Healthcare Administration",
      skills: ["Management", "Communication", "Healthcare Knowledge"],
      description: "Manage healthcare facilities and operations",
      growth: "+10.3%",
      demand: "High"
    }
  ];

  const sectors = [
    {
      name: "Digital Economy",
      growth: "+18.5%",
      jobs: "15,000+",
      description: "Technology, fintech, and digital services",
      color: "bg-blue-500"
    },
    {
      name: "Green Jobs",
      growth: "+22.1%",
      jobs: "8,500+",
      description: "Renewable energy and environmental sustainability",
      color: "bg-green-500"
    },
    {
      name: "Agri-business",
      growth: "+12.3%",
      jobs: "25,000+",
      description: "Agricultural technology and food processing",
      color: "bg-yellow-500"
    },
    {
      name: "Creative Industries",
      growth: "+14.7%",
      jobs: "12,000+",
      description: "Media, entertainment, and design",
      color: "bg-purple-500"
    }
  ];

  const skillsInDemand = [
    { skill: "JavaScript", demand: "Very High", growth: "+25%" },
    { skill: "Data Analysis", demand: "High", growth: "+20%" },
    { skill: "Project Management", demand: "High", growth: "+18%" },
    { skill: "Digital Marketing", demand: "High", growth: "+22%" },
    { skill: "UI/UX Design", demand: "High", growth: "+19%" },
    { skill: "Cloud Computing", demand: "Very High", growth: "+28%" }
  ];

  const filteredCareers = careers.filter(career =>
    career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    career.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
    career.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
                <h1 className="text-3xl font-bold text-gray-900">Career Guidance</h1>
                <p className="text-gray-600 mt-1">Explore career paths and market insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="explorer" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="explorer">Career Explorer</TabsTrigger>
            <TabsTrigger value="sectors">Sector Spotlights</TabsTrigger>
            <TabsTrigger value="skills">Skills in Demand</TabsTrigger>
            <TabsTrigger value="salary">Salary Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="explorer" className="space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search careers, sectors, or skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  <Button>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Career Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCareers.map((career) => (
                <Card key={career.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{career.title}</CardTitle>
                        <CardDescription className="text-base">{career.sector}</CardDescription>
                      </div>
                      <Badge 
                        variant={career.outlook === 'Growing' ? 'default' : 'secondary'}
                        className="ml-2"
                      >
                        {career.outlook}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">{career.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-green-600">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span className="font-medium">{career.avgSalary}</span>
                      </div>
                      <div className="flex items-center text-blue-600">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        <span className="font-medium">{career.growth}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-gray-900 mb-2">Required Education</h4>
                      <p className="text-sm text-gray-600">{career.education}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-gray-900 mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">
                      View Full Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sectors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sectors.map((sector, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{sector.name}</CardTitle>
                      <div className={`w-4 h-4 ${sector.color} rounded-full`} />
                    </div>
                    <CardDescription className="text-base">{sector.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{sector.growth}</div>
                        <div className="text-sm text-gray-600">Growth Rate</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{sector.jobs}</div>
                        <div className="text-sm text-gray-600">Available Jobs</div>
                      </div>
                    </div>
                    <Button className="w-full">
                      Explore {sector.name} Careers
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Most In-Demand Skills</CardTitle>
                <CardDescription>
                  Skills that employers are actively seeking in Nigeria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillsInDemand.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{skill.skill}</h3>
                          <p className="text-sm text-gray-600">Demand: {skill.demand}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{skill.growth}</div>
                        <div className="text-sm text-gray-600">Growth</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="salary" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Salary by Experience Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Entry Level</span>
                      <span className="font-semibold">₦80,000 - ₦150,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mid Level</span>
                      <span className="font-semibold">₦150,000 - ₦300,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Senior Level</span>
                      <span className="font-semibold">₦300,000 - ₦500,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Executive</span>
                      <span className="font-semibold">₦500,000+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Salary by Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Lagos</span>
                      <span className="font-semibold">₦200,000 - ₦400,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Abuja</span>
                      <span className="font-semibold">₦180,000 - ₦350,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Port Harcourt</span>
                      <span className="font-semibold">₦160,000 - ₦300,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Kano</span>
                      <span className="font-semibold">₦120,000 - ₦250,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CareerGuidance;


