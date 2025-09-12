import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Edit, 
  Eye, 
  Users, 
  Calendar,
  ArrowLeft,
  Save,
  Send,
  Copy,
  Trash2,
  Clock,
  MapPin,
  DollarSign,
  Briefcase
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

interface JobPosting {
  id: number;
  title: string;
  location: string;
  state: string;
  lga: string;
  type: string;
  description: string;
  responsibilities: string;
  qualifications: string;
  skills: string[];
  salaryMin: string;
  salaryMax: string;
  deadline: string;
  contactEmail: string;
  contactPhone: string;
  status: 'Draft' | 'Active' | 'Paused' | 'Closed';
  applicants: number;
  views: number;
  postedDate: string;
}

const JobPosting: React.FC = () => {
  const [activeTab, setActiveTab] = useState('manage');
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null);

  const [jobForm, setJobForm] = useState({
    title: '',
    location: '',
    state: '',
    lga: '',
    type: '',
    description: '',
    responsibilities: '',
    qualifications: '',
    skills: [] as string[],
    salaryMin: '',
    salaryMax: '',
    deadline: '',
    contactEmail: '',
    contactPhone: ''
  });

  const jobPostings: JobPosting[] = [
    {
      id: 1,
      title: "Senior Software Developer",
      location: "Lagos",
      state: "Lagos",
      lga: "Victoria Island",
      type: "Full-time",
      description: "We are looking for an experienced software developer to join our growing team...",
      responsibilities: "Develop and maintain web applications, Collaborate with cross-functional teams...",
      qualifications: "Bachelor's degree in Computer Science, 5+ years experience...",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      salaryMin: "300000",
      salaryMax: "500000",
      deadline: "2024-02-15",
      contactEmail: "hr@techcorp.com",
      contactPhone: "+234 800 123 4567",
      status: "Active",
      applicants: 24,
      views: 156,
      postedDate: "2024-01-10"
    },
    {
      id: 2,
      title: "Data Analyst",
      location: "Abuja",
      state: "FCT",
      lga: "Asokoro",
      type: "Remote",
      description: "Join our data team to analyze business metrics and provide insights...",
      responsibilities: "Analyze data sets, Create reports and visualizations...",
      qualifications: "Bachelor's in Statistics, 3+ years experience...",
      skills: ["Python", "SQL", "Excel", "Tableau"],
      salaryMin: "150000",
      salaryMax: "250000",
      deadline: "2024-02-20",
      contactEmail: "hr@techcorp.com",
      contactPhone: "+234 800 123 4567",
      status: "Active",
      applicants: 18,
      views: 89,
      postedDate: "2024-01-15"
    },
    {
      id: 3,
      title: "Marketing Manager",
      location: "Lagos",
      state: "Lagos",
      lga: "Ikeja",
      type: "Full-time",
      description: "Lead our marketing initiatives and drive brand awareness...",
      responsibilities: "Develop marketing strategies, Manage social media presence...",
      qualifications: "Bachelor's in Marketing, 4+ years experience...",
      skills: ["Digital Marketing", "SEO", "Analytics", "Content Creation"],
      salaryMin: "200000",
      salaryMax: "350000",
      deadline: "2024-02-10",
      contactEmail: "hr@techcorp.com",
      contactPhone: "+234 800 123 4567",
      status: "Paused",
      applicants: 12,
      views: 67,
      postedDate: "2024-01-05"
    }
  ];

  const applicants = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+234 800 111 2222",
      experience: "5 years",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      appliedDate: "2024-01-12",
      status: "New",
      resume: "sarah_johnson_cv.pdf"
    },
    {
      id: 2,
      name: "Michael Adebayo",
      email: "michael.adebayo@email.com",
      phone: "+234 800 333 4444",
      experience: "4 years",
      skills: ["Python", "SQL", "Excel", "Tableau"],
      appliedDate: "2024-01-11",
      status: "Under Review",
      resume: "michael_adebayo_cv.pdf"
    },
    {
      id: 3,
      name: "Fatima Ibrahim",
      email: "fatima.ibrahim@email.com",
      phone: "+234 800 555 6666",
      experience: "3 years",
      skills: ["Digital Marketing", "SEO", "Analytics"],
      appliedDate: "2024-01-10",
      status: "Interviewing",
      resume: "fatima_ibrahim_cv.pdf"
    }
  ];

  const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe",
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
    "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
    "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];

  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Remote"];
  const skillSuggestions = [
    "JavaScript", "Python", "React", "Node.js", "TypeScript", "MongoDB", "SQL",
    "Digital Marketing", "SEO", "Analytics", "Project Management", "Leadership",
    "Communication", "Problem Solving", "Teamwork", "Creativity"
  ];

  const handleInputChange = (field: string, value: any) => {
    setJobForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSkillAdd = (skill: string) => {
    if (!jobForm.skills.includes(skill)) {
      setJobForm(prev => ({ ...prev, skills: [...prev.skills, skill] }));
    }
  };

  const handleSkillRemove = (skill: string) => {
    setJobForm(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
  };

  const handleSaveJob = () => {
    // Save job logic here
    console.log('Saving job:', jobForm);
    setShowJobForm(false);
    setJobForm({
      title: '',
      location: '',
      state: '',
      lga: '',
      type: '',
      description: '',
      responsibilities: '',
      qualifications: '',
      skills: [],
      salaryMin: '',
      salaryMax: '',
      deadline: '',
      contactEmail: '',
      contactPhone: ''
    });
  };

  const handleEditJob = (job: JobPosting) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      location: job.location,
      state: job.state,
      lga: job.lga,
      type: job.type,
      description: job.description,
      responsibilities: job.responsibilities,
      qualifications: job.qualifications,
      skills: job.skills,
      salaryMin: job.salaryMin,
      salaryMax: job.salaryMax,
      deadline: job.deadline,
      contactEmail: job.contactEmail,
      contactPhone: job.contactPhone
    });
    setShowJobForm(true);
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
                <h1 className="text-3xl font-bold text-gray-900">Job Posting</h1>
                <p className="text-gray-600 mt-1">Create and manage your job vacancies</p>
              </div>
            </div>
            <Button onClick={() => setShowJobForm(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Post New Job
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="manage">Job Management</TabsTrigger>
            <TabsTrigger value="applicants">Applicants</TabsTrigger>
            <TabsTrigger value="create">Create Job</TabsTrigger>
          </TabsList>

          <TabsContent value="manage" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {jobPostings.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 mr-3">{job.title}</h3>
                          <Badge 
                            variant={job.status === 'Active' ? 'default' : job.status === 'Paused' ? 'secondary' : 'destructive'}
                          >
                            {job.status}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="mr-4">{job.location}, {job.state}</span>
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span className="mr-4">{job.type}</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Posted {job.postedDate}</span>
                        </div>

                        <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              <span>{job.applicants} applicants</span>
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              <span>{job.views} views</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              <span>₦{parseInt(job.salaryMin).toLocaleString()} - ₦{parseInt(job.salaryMax).toLocaleString()}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleEditJob(job)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applicants" className="space-y-6">
            <div className="space-y-4">
              {applicants.map((applicant) => (
                <Card key={applicant.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                          <span className="text-lg font-medium text-gray-600">
                            {applicant.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{applicant.name}</h3>
                          <p className="text-gray-600">{applicant.email}</p>
                          <p className="text-sm text-gray-500">{applicant.phone}</p>
                          <p className="text-sm text-gray-500 mt-1">{applicant.experience} • Applied {applicant.appliedDate}</p>
                          
                          <div className="flex flex-wrap gap-2 mt-3">
                            {applicant.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Badge 
                          variant={applicant.status === 'New' ? 'default' : applicant.status === 'Under Review' ? 'secondary' : 'outline'}
                        >
                          {applicant.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            View Resume
                          </Button>
                          <Button size="sm">
                            Contact
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create" className="space-y-6">
            {showJobForm && (
              <Card>
                <CardHeader>
                  <CardTitle>Post a New Job</CardTitle>
                  <CardDescription>Fill in the details to create your job posting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Job Title *</Label>
                      <Input
                        id="title"
                        value={jobForm.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        placeholder="e.g. Senior Software Developer"
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Job Type *</Label>
                      <Select value={jobForm.type} onValueChange={(value) => handleInputChange('type', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Select value={jobForm.state} onValueChange={(value) => handleInputChange('state', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
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
                      <Label htmlFor="lga">LGA *</Label>
                      <Input
                        id="lga"
                        value={jobForm.lga}
                        onChange={(e) => handleInputChange('lga', e.target.value)}
                        placeholder="e.g. Victoria Island"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location Display</Label>
                      <Input
                        id="location"
                        value={jobForm.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="e.g. Lagos"
                      />
                    </div>
                  </div>

                  {/* Job Description */}
                  <div>
                    <Label htmlFor="description">Job Description *</Label>
                    <Textarea
                      id="description"
                      value={jobForm.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Provide a detailed description of the role..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="responsibilities">Key Responsibilities *</Label>
                    <Textarea
                      id="responsibilities"
                      value={jobForm.responsibilities}
                      onChange={(e) => handleInputChange('responsibilities', e.target.value)}
                      placeholder="List the main responsibilities..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="qualifications">Required Qualifications *</Label>
                    <Textarea
                      id="qualifications"
                      value={jobForm.qualifications}
                      onChange={(e) => handleInputChange('qualifications', e.target.value)}
                      placeholder="List the required qualifications..."
                      rows={3}
                    />
                  </div>

                  {/* Skills */}
                  <div>
                    <Label>Required Skills</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {jobForm.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="cursor-pointer" onClick={() => handleSkillRemove(skill)}>
                          {skill} ×
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-2">
                      <Label className="text-sm text-gray-600">Suggested Skills:</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {skillSuggestions.filter(skill => !jobForm.skills.includes(skill)).map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="outline" 
                            className="cursor-pointer hover:bg-blue-50"
                            onClick={() => handleSkillAdd(skill)}
                          >
                            + {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Salary Range */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="salaryMin">Minimum Salary (₦)</Label>
                      <Input
                        id="salaryMin"
                        type="number"
                        value={jobForm.salaryMin}
                        onChange={(e) => handleInputChange('salaryMin', e.target.value)}
                        placeholder="e.g. 150000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="salaryMax">Maximum Salary (₦)</Label>
                      <Input
                        id="salaryMax"
                        type="number"
                        value={jobForm.salaryMax}
                        onChange={(e) => handleInputChange('salaryMax', e.target.value)}
                        placeholder="e.g. 300000"
                      />
                    </div>
                  </div>

                  {/* Application Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="deadline">Application Deadline</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={jobForm.deadline}
                        onChange={(e) => handleInputChange('deadline', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactEmail">Contact Email *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={jobForm.contactEmail}
                        onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                        placeholder="hr@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contactPhone">Contact Phone</Label>
                    <Input
                      id="contactPhone"
                      value={jobForm.contactPhone}
                      onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                      placeholder="+234 800 123 4567"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end space-x-4 pt-6 border-t">
                    <Button variant="outline" onClick={() => setShowJobForm(false)}>
                      Cancel
                    </Button>
                    <Button variant="outline" onClick={handleSaveJob}>
                      <Save className="w-4 h-4 mr-2" />
                      Save as Draft
                    </Button>
                    <Button onClick={handleSaveJob}>
                      <Send className="w-4 h-4 mr-2" />
                      Post Job
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default JobPosting;


