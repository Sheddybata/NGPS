import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  FileText, 
  Compass, 
  BookOpen, 
  User, 
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const JobSeekerPortal: React.FC = () => {
  const navigate = useNavigate();
  const [userName] = useState("John Doe"); // This would come from user context/auth
  const [profileCompleteness] = useState(75);

  const recommendedJobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "TechCorp Nigeria",
      location: "Lagos",
      type: "Full-time",
      salary: "₦150,000 - ₦250,000",
      posted: "2 days ago",
      match: 95
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "DataFlow Solutions",
      location: "Abuja",
      type: "Remote",
      salary: "₦120,000 - ₦180,000",
      posted: "1 week ago",
      match: 88
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "GrowthHub Ltd",
      location: "Lagos",
      type: "Full-time",
      salary: "₦200,000 - ₦300,000",
      posted: "3 days ago",
      match: 82
    }
  ];

  const portalSections = [
    {
      title: "Advanced Job Search",
      description: "Find relevant job opportunities with powerful search and filtering tools",
      icon: Search,
      color: "bg-blue-500",
      features: ["Smart Search", "Advanced Filters", "Job Alerts", "Application Tracking"],
      route: "/job-seeker/advanced-search"
    },
    {
      title: "CV Builder",
      description: "Create professional CVs with templates and step-by-step guidance",
      icon: FileText,
      color: "bg-green-500",
      features: ["Professional Templates", "Step-by-Step Wizard", "PDF Download", "Profile Integration"],
      route: "/job-seeker/cv-builder"
    },
    {
      title: "Career Guidance",
      description: "Explore career paths and get insights on job market trends",
      icon: Compass,
      color: "bg-purple-500",
      features: ["Career Explorer", "Sector Spotlights", "Skills in Demand", "Salary Insights"],
      route: "/job-seeker/career-guidance"
    },
    {
      title: "Skills Training",
      description: "Access courses and training to enhance your employability",
      icon: BookOpen,
      color: "bg-orange-500",
      features: ["Course Catalog", "Personalized Learning", "Certificates", "Progress Tracking"],
      route: "/job-seeker/skills-training"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        title="Job Seeker Portal"
        subtitle="Your gateway to career success"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Completeness */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Profile Completeness
            </CardTitle>
            <CardDescription>
              Complete your profile to get better job recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-sm font-medium text-gray-900">{profileCompleteness}%</span>
              </div>
              <Progress value={profileCompleteness} className="h-2" />
              <div className="flex items-center text-sm text-gray-600">
                <AlertCircle className="w-4 h-4 mr-1" />
                Complete your work experience and skills to reach 100%
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommended Jobs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              Recommended Jobs
            </CardTitle>
            <CardDescription>
              Jobs matched to your profile and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedJobs.map((job) => (
                <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {job.match}% match
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.posted}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{job.salary}</span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" className="mr-2">
                View All Jobs
              </Button>
              <Button>
                Advanced Search
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

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
                <div className="space-y-2 mb-6">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 ${section.color} rounded-full mr-3`} />
                      {feature}
                    </div>
                  ))}
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

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-sm text-gray-600">Jobs Applied</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600">3</div>
              <div className="text-sm text-gray-600">Interviews</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-gray-600">Skills Learned</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <div className="text-sm text-gray-600">CVs Created</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerPortal;

