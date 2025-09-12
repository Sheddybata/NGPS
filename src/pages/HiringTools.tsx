import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Users,
  ArrowLeft,
  Plus,
  Edit,
  Send,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  Download,
  Eye,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Candidate {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  experience: string;
  skills: string[];
  appliedDate: string;
  status: 'New' | 'Under Review' | 'Interviewing' | 'Hired' | 'Rejected';
  resume: string;
  notes: string;
}

interface Interview {
  id: number;
  candidateId: number;
  candidateName: string;
  position: string;
  date: string;
  time: string;
  type: 'Phone' | 'Video' | 'In-Person';
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  interviewer: string;
  notes: string;
}

const HiringTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ats');
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [showInterviewForm, setShowInterviewForm] = useState(false);
  const [showTemplateForm, setShowTemplateForm] = useState(false);

  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Software Developer",
      email: "sarah.johnson@email.com",
      phone: "+234 800 111 2222",
      experience: "5 years",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      appliedDate: "2024-01-12",
      status: "Interviewing",
      resume: "sarah_johnson_cv.pdf",
      notes: "Strong technical background, good communication skills"
    },
    {
      id: 2,
      name: "Michael Adebayo",
      position: "Data Analyst",
      email: "michael.adebayo@email.com",
      phone: "+234 800 333 4444",
      experience: "3 years",
      skills: ["Python", "SQL", "Excel", "Tableau"],
      appliedDate: "2024-01-11",
      status: "Under Review",
      resume: "michael_adebayo_cv.pdf",
      notes: "Good analytical skills, needs more experience"
    },
    {
      id: 3,
      name: "Fatima Ibrahim",
      position: "Marketing Manager",
      email: "fatima.ibrahim@email.com",
      phone: "+234 800 555 6666",
      experience: "4 years",
      skills: ["Digital Marketing", "SEO", "Analytics"],
      appliedDate: "2024-01-10",
      status: "New",
      resume: "fatima_ibrahim_cv.pdf",
      notes: ""
    },
    {
      id: 4,
      name: "David Okafor",
      position: "Project Manager",
      email: "david.okafor@email.com",
      phone: "+234 800 777 8888",
      experience: "6 years",
      skills: ["Project Management", "Agile", "Leadership"],
      appliedDate: "2024-01-09",
      status: "Hired",
      resume: "david_okafor_cv.pdf",
      notes: "Excellent leadership skills, hired for senior role"
    }
  ];

  const interviews: Interview[] = [
    {
      id: 1,
      candidateId: 1,
      candidateName: "Sarah Johnson",
      position: "Senior Software Developer",
      date: "2024-01-20",
      time: "10:00 AM",
      type: "Video",
      status: "Scheduled",
      interviewer: "John Smith",
      notes: "Technical interview focusing on React and Node.js"
    },
    {
      id: 2,
      candidateId: 2,
      candidateName: "Michael Adebayo",
      position: "Data Analyst",
      date: "2024-01-18",
      time: "2:00 PM",
      type: "In-Person",
      status: "Completed",
      interviewer: "Jane Doe",
      notes: "Good performance, considering for next round"
    }
  ];

  const communicationTemplates = [
    {
      id: 1,
      name: "Application Received",
      subject: "Thank you for your application",
      content: "Dear {{candidate_name}},\n\nThank you for your interest in the {{position}} position at {{company_name}}. We have received your application and will review it carefully.\n\nWe will contact you within 5-7 business days with an update on your application status.\n\nBest regards,\n{{sender_name}}",
      type: "Email"
    },
    {
      id: 2,
      name: "Interview Invitation",
      subject: "Interview Invitation - {{position}}",
      content: "Dear {{candidate_name}},\n\nWe are pleased to invite you for an interview for the {{position}} position.\n\nInterview Details:\n- Date: {{interview_date}}\n- Time: {{interview_time}}\n- Type: {{interview_type}}\n- Interviewer: {{interviewer_name}}\n\nPlease confirm your availability by replying to this email.\n\nBest regards,\n{{sender_name}}",
      type: "Email"
    },
    {
      id: 3,
      name: "Job Offer",
      subject: "Job Offer - {{position}}",
      content: "Dear {{candidate_name}},\n\nWe are delighted to offer you the position of {{position}} at {{company_name}}.\n\nOffer Details:\n- Start Date: {{start_date}}\n- Salary: {{salary}}\n- Benefits: {{benefits}}\n\nPlease review the attached offer letter and let us know your decision by {{response_deadline}}.\n\nWe look forward to welcoming you to our team!\n\nBest regards,\n{{sender_name}}",
      type: "Email"
    },
    {
      id: 4,
      name: "Rejection Notice",
      subject: "Application Update - {{position}}",
      content: "Dear {{candidate_name}},\n\nThank you for your interest in the {{position}} position at {{company_name}}.\n\nAfter careful consideration, we have decided to move forward with other candidates whose qualifications more closely match our current needs.\n\nWe encourage you to apply for other positions that may be a better fit for your skills and experience.\n\nBest regards,\n{{sender_name}}",
      type: "Email"
    }
  ];

  const resourceArticles = [
    {
      id: 1,
      title: "Nigerian Labour Law Basics",
      category: "Legal",
      description: "Essential information about employment laws in Nigeria",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Best Practices for Interviewing",
      category: "Hiring",
      description: "How to conduct effective and fair interviews",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Creating an Inclusive Hiring Process",
      category: "Diversity",
      description: "Building diverse and inclusive teams",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Onboarding New Employees",
      category: "Management",
      description: "Setting up new hires for success",
      readTime: "7 min read"
    }
  ];

  const handleStatusChange = (candidateId: number, newStatus: string) => {
    // Update candidate status logic here
    console.log(`Updating candidate ${candidateId} to ${newStatus}`);
  };

  const handleSelectCandidate = (candidateId: number) => {
    setSelectedCandidates(prev => 
      prev.includes(candidateId) 
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    );
  };

  const handleBulkAction = (action: string) => {
    console.log(`Bulk action ${action} on candidates:`, selectedCandidates);
  };

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
                <h1 className="text-3xl font-bold text-gray-900">Hiring Tools</h1>
                <p className="text-gray-600 mt-1">Manage your recruitment process efficiently</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Interview
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="ats">Applicant Tracking</TabsTrigger>
            <TabsTrigger value="interviews">Interview Scheduler</TabsTrigger>
            <TabsTrigger value="templates">Communication</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="ats" className="space-y-6">
            {/* ATS Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {candidates.filter(c => c.status === 'New').length}
                  </div>
                  <div className="text-sm text-gray-600">New Applications</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {candidates.filter(c => c.status === 'Under Review').length}
                  </div>
                  <div className="text-sm text-gray-600">Under Review</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {candidates.filter(c => c.status === 'Interviewing').length}
                  </div>
                  <div className="text-sm text-gray-600">Interviewing</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {candidates.filter(c => c.status === 'Hired').length}
                  </div>
                  <div className="text-sm text-gray-600">Hired</div>
                </CardContent>
              </Card>
            </div>

            {/* Candidate List */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>All Candidates</CardTitle>
                    <CardDescription>Manage your candidate pipeline</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    {selectedCandidates.length > 0 && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{selectedCandidates.length} selected</span>
                        <Select onValueChange={handleBulkAction}>
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="Bulk Actions" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="move-to-review">Move to Review</SelectItem>
                            <SelectItem value="schedule-interview">Schedule Interview</SelectItem>
                            <SelectItem value="send-email">Send Email</SelectItem>
                            <SelectItem value="reject">Reject</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {candidates.map((candidate) => (
                    <div key={candidate.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <Checkbox
                            checked={selectedCandidates.includes(candidate.id)}
                            onCheckedChange={() => handleSelectCandidate(candidate.id)}
                            className="mr-4 mt-1"
                          />
                          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                            <span className="text-lg font-medium text-gray-600">
                              {candidate.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 mr-3">{candidate.name}</h3>
                              <Badge 
                                variant={candidate.status === 'New' ? 'default' : 
                                        candidate.status === 'Under Review' ? 'secondary' :
                                        candidate.status === 'Interviewing' ? 'outline' :
                                        candidate.status === 'Hired' ? 'default' : 'destructive'}
                              >
                                {candidate.status}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-2">{candidate.position}</p>
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                              <Mail className="w-4 h-4 mr-1" />
                              <span className="mr-4">{candidate.email}</span>
                              <Phone className="w-4 h-4 mr-1" />
                              <span className="mr-4">{candidate.phone}</span>
                              <Clock className="w-4 h-4 mr-1" />
                              <span>Applied {candidate.appliedDate}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {candidate.skills.slice(0, 4).map((skill, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {candidate.skills.length > 4 && (
                                <Badge variant="outline" className="text-xs">
                                  +{candidate.skills.length - 4} more
                                </Badge>
                              )}
                            </div>
                            {candidate.notes && (
                              <p className="text-sm text-gray-600 italic">"{candidate.notes}"</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Select 
                            value={candidate.status} 
                            onValueChange={(value) => handleStatusChange(candidate.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="New">New</SelectItem>
                              <SelectItem value="Under Review">Under Review</SelectItem>
                              <SelectItem value="Interviewing">Interviewing</SelectItem>
                              <SelectItem value="Hired">Hired</SelectItem>
                              <SelectItem value="Rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Interview Schedule</CardTitle>
                  <Button onClick={() => setShowInterviewForm(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Schedule Interview
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {interviews.map((interview) => (
                    <div key={interview.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <Calendar className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{interview.candidateName}</h3>
                            <p className="text-gray-600">{interview.position}</p>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{interview.date} at {interview.time}</span>
                              <span className="mx-2">•</span>
                              <span>{interview.type} interview</span>
                              <span className="mx-2">•</span>
                              <span>Interviewer: {interview.interviewer}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={interview.status === 'Scheduled' ? 'default' : 
                                    interview.status === 'Completed' ? 'secondary' : 'destructive'}
                          >
                            {interview.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      {interview.notes && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">{interview.notes}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Communication Templates</CardTitle>
                  <Button onClick={() => setShowTemplateForm(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    New Template
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {communicationTemplates.map((template) => (
                    <div key={template.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{template.name}</h3>
                        <Badge variant="outline">{template.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{template.subject}</p>
                      <p className="text-sm text-gray-700 line-clamp-3 mb-4">{template.content}</p>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm">
                          <Send className="w-4 h-4 mr-1" />
                          Use
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resource Center</CardTitle>
                <CardDescription>Guides, articles, and best practices for hiring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resourceArticles.map((article) => (
                    <div key={article.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{article.title}</h3>
                        <Badge variant="outline">{article.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Read
                        </Button>
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

export default HiringTools;


