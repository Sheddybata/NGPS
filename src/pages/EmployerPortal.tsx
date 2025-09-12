import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Plus, 
  Users, 
  FileText, 
  BarChart3, 
  Briefcase,
  ArrowRight,
  Eye,
  Edit,
  Clock,
  TrendingUp,
  UserCheck,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Progress } from '@/components/ui/progress';

const EmployerPortal: React.FC = () => {
  const navigate = useNavigate();
  const [companyName] = useState("TechCorp Nigeria"); // This would come from user context/auth

  const activeJobs = [
    {
      id: 1,
      title: "Senior Software Developer",
      location: "Lagos",
      type: "Full-time",
      applicants: 24,
      posted: "3 days ago",
      status: "Active",
      views: 156
    },
    {
      id: 2,
      title: "Data Analyst",
      location: "Abuja",
      type: "Remote",
      applicants: 18,
      posted: "1 week ago",
      status: "Active",
      views: 89
    },
    {
      id: 3,
      title: "Marketing Manager",
      location: "Lagos",
      type: "Full-time",
      applicants: 12,
      posted: "2 weeks ago",
      status: "Active",
      views: 67
    }
  ];

  const recentApplicants = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Software Developer",
      experience: "5 years",
      skills: ["React", "Node.js", "TypeScript"],
      applied: "2 hours ago",
      status: "New"
    },
    {
      id: 2,
      name: "Michael Adebayo",
      position: "Data Analyst",
      experience: "3 years",
      skills: ["Python", "SQL", "Excel"],
      applied: "4 hours ago",
      status: "Under Review"
    },
    {
      id: 3,
      name: "Fatima Ibrahim",
      position: "Marketing Manager",
      experience: "4 years",
      skills: ["Digital Marketing", "SEO", "Analytics"],
      applied: "1 day ago",
      status: "Interviewing"
    }
  ];

  const marketInsights = [
    {
      title: "Software Developer Demand",
      value: "+23%",
      change: "vs last month",
      trend: "up",
      color: "text-green-600"
    },
    {
      title: "Average Salary - Lagos",
      value: "₦280,000",
      change: "+5% vs last quarter",
      trend: "up",
      color: "text-blue-600"
    },
    {
      title: "Active Candidates",
      value: "12,450",
      change: "+8% this week",
      trend: "up",
      color: "text-purple-600"
    },
    {
      title: "Skills Gap Index",
      value: "2.8",
      change: "Improving",
      trend: "down",
      color: "text-orange-600"
    }
  ];

  const portalSections = [
    {
      title: "Job Posting",
      description: "Create and manage job vacancies to attract qualified talent",
      icon: FileText,
      color: "bg-blue-500",
      features: ["Post New Jobs", "Job Management", "Applicant Viewer", "WYSIWYG Editor"],
      route: "/employer/job-posting",
      stats: { active: 3, total: 8 }
    },
    {
      title: "Talent Search",
      description: "Proactively find and connect with potential candidates",
      icon: Users,
      color: "bg-green-500",
      features: ["Candidate Database", "Advanced Filters", "Anonymous Previews", "Invite to Apply"],
      route: "/employer/talent-search",
      stats: { viewed: 45, saved: 12 }
    },
    {
      title: "Market Analytics",
      description: "Access data-driven insights into the labour market",
      icon: BarChart3,
      color: "bg-purple-500",
      features: ["Talent Supply Map", "Salary Benchmarking", "Skills Reports", "Demographic Data"],
      route: "/employer/market-analytics",
      stats: { reports: 5, insights: 23 }
    },
    {
      title: "Hiring Tools",
      description: "Manage recruitment process with professional tools",
      icon: Briefcase,
      color: "bg-orange-500",
      features: ["Applicant Tracking", "Interview Scheduler", "Templates", "Resource Center"],
      route: "/employer/hiring-tools",
      stats: { interviews: 8, templates: 12 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        title="Employer Portal"
        subtitle="Manage your recruitment and talent acquisition"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketInsights.map((insight, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{insight.title}</p>
                    <p className={`text-2xl font-bold ${insight.color}`}>{insight.value}</p>
                    <p className="text-xs text-gray-500">{insight.change}</p>
                  </div>
                  <div className={`p-2 rounded-full ${insight.trend === 'up' ? 'bg-green-100' : 'bg-orange-100'}`}>
                    <TrendingUp className={`w-5 h-5 ${insight.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Job Postings */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Active Job Postings
                    </CardTitle>
                    <CardDescription>Manage your current job openings</CardDescription>
                  </div>
                  <Button onClick={() => navigate('/employer/job-posting')}>
                    <Plus className="w-4 h-4 mr-2" />
                    Post New Job
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeJobs.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="font-semibold text-gray-900 mr-2">{job.title}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {job.status}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <span className="mr-4">{job.location}</span>
                            <span className="mr-4">{job.type}</span>
                            <span className="mr-4">Posted {job.posted}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-1" />
                            <span className="mr-4">{job.applicants} applicants</span>
                            <Eye className="w-4 h-4 mr-1" />
                            <span>{job.views} views</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" onClick={() => navigate('/employer/job-posting')}>
                    View All Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Applicants */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="w-5 h-5 mr-2" />
                  Recent Applicants
                </CardTitle>
                <CardDescription>Latest applications across all positions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplicants.map((applicant) => (
                    <div key={applicant.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                          <span className="text-sm font-medium text-gray-600">
                            {applicant.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{applicant.name}</h4>
                          <p className="text-sm text-gray-600">{applicant.position}</p>
                          <p className="text-xs text-gray-500">{applicant.experience} • Applied {applicant.applied}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex flex-wrap gap-1">
                          {applicant.skills.slice(0, 2).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Badge 
                          variant={applicant.status === 'New' ? 'default' : 'secondary'}
                          className="ml-2"
                        >
                          {applicant.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" onClick={() => navigate('/employer/hiring-tools')}>
                    View All Applicants
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portal Sections */}
          <div className="space-y-6">
            {portalSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mr-4`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                      <CardDescription className="text-sm">{section.description}</CardDescription>
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
                    onClick={() => navigate(section.route)}
                  >
                    Access {section.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Plus className="w-6 h-6 mb-2" />
                <span>Post New Job</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Users className="w-6 h-6 mb-2" />
                <span>Search Talent</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Calendar className="w-6 h-6 mb-2" />
                <span>Schedule Interview</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <MessageSquare className="w-6 h-6 mb-2" />
                <span>Send Message</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployerPortal;

