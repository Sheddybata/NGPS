import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Save, 
  Plus, 
  Trash2, 
  ArrowLeft,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface CVData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    location: string;
    graduationDate: string;
    gpa: string;
  }>;
  skills: Array<{
    id: string;
    skill: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  }>;
  certifications: Array<{
    id: string;
    name: string;
    issuer: string;
    date: string;
  }>;
}

const CVBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [previewMode, setPreviewMode] = useState(false);
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: [],
    certifications: []
  });

  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and professional design' },
    { id: 'classic', name: 'Classic', description: 'Traditional business format' },
    { id: 'creative', name: 'Creative', description: 'Perfect for creative industries' },
    { id: 'minimal', name: 'Minimal', description: 'Simple and elegant layout' }
  ];

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const inDemandSkills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'Data Analysis', 'Project Management',
    'Digital Marketing', 'UI/UX Design', 'Cloud Computing', 'Machine Learning'
  ];

  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now().toString(),
      degree: '',
      institution: '',
      location: '',
      graduationDate: '',
      gpa: ''
    };
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const addSkill = () => {
    const newSkill = {
      id: Date.now().toString(),
      skill: '',
      level: 'Intermediate' as const
    };
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
  };

  const addCertification = () => {
    const newCert = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: ''
    };
    setCvData(prev => ({
      ...prev,
      certifications: [...prev.certifications, newCert]
    }));
  };

  const removeItem = (section: keyof CVData, id: string) => {
    setCvData(prev => ({
      ...prev,
      [section]: (prev[section] as any[]).filter(item => item.id !== id)
    }));
  };

  const updateItem = (section: keyof CVData, id: string, field: string, value: any) => {
    setCvData(prev => ({
      ...prev,
      [section]: (prev[section] as any[]).map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const calculateProgress = () => {
    let totalFields = 0;
    let completedFields = 0;

    // Personal info
    const personalFields = Object.values(cvData.personalInfo).filter(v => v !== '');
    totalFields += 7;
    completedFields += personalFields.length;

    // Experience
    if (cvData.experience.length > 0) {
      totalFields += 1;
      completedFields += 1;
    }

    // Education
    if (cvData.education.length > 0) {
      totalFields += 1;
      completedFields += 1;
    }

    // Skills
    if (cvData.skills.length > 0) {
      totalFields += 1;
      completedFields += 1;
    }

    return Math.round((completedFields / totalFields) * 100);
  };

  const progress = calculateProgress();

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
                <h1 className="text-3xl font-bold text-gray-900">CV Builder</h1>
                <p className="text-gray-600 mt-1">Create a professional CV in minutes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Progress</div>
                <div className="text-lg font-semibold text-gray-900">{progress}%</div>
              </div>
              <div className="w-32">
                <Progress value={progress} className="h-2" />
              </div>
              <Button variant="outline" onClick={() => setPreviewMode(!previewMode)}>
                <Eye className="w-4 h-4 mr-2" />
                {previewMode ? 'Edit' : 'Preview'}
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Choose Template</CardTitle>
                <CardDescription>Select a professional CV template</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {templates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                    <div className="font-medium">{template.name}</div>
                    <div className="text-sm text-gray-600">{template.description}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* In-Demand Skills */}
            <Card>
              <CardHeader>
                <CardTitle>In-Demand Skills</CardTitle>
                <CardDescription>Add these trending skills to your CV</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {inDemandSkills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-blue-50"
                      onClick={() => {
                        const newSkill = {
                          id: Date.now().toString(),
                          skill,
                          level: 'Intermediate' as const
                        };
                        setCvData(prev => ({
                          ...prev,
                          skills: [...prev.skills, newSkill]
                        }));
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {previewMode ? (
              /* CV Preview */
              <Card>
                <CardContent className="p-8">
                  <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {cvData.personalInfo.fullName || 'Your Name'}
                      </h1>
                      <div className="flex items-center justify-center space-x-4 text-gray-600">
                        <span className="flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          {cvData.personalInfo.email || 'your.email@example.com'}
                        </span>
                        <span className="flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          {cvData.personalInfo.phone || '+234 000 000 0000'}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {cvData.personalInfo.location || 'Your Location'}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    {cvData.personalInfo.summary && (
                      <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h2>
                        <p className="text-gray-700">{cvData.personalInfo.summary}</p>
                      </div>
                    )}

                    {/* Experience */}
                    {cvData.experience.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h2>
                        {cvData.experience.map((exp) => (
                          <div key={exp.id} className="mb-4">
                            <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                            <div className="text-gray-600 mb-2">
                              {exp.company} • {exp.location} • {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                            </div>
                            <p className="text-gray-700">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Education */}
                    {cvData.education.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
                        {cvData.education.map((edu) => (
                          <div key={edu.id} className="mb-4">
                            <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                            <div className="text-gray-600 mb-2">
                              {edu.institution} • {edu.location} • {edu.graduationDate}
                            </div>
                            {edu.gpa && <div className="text-gray-700">GPA: {edu.gpa}</div>}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skills */}
                    {cvData.skills.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                          {cvData.skills.map((skill) => (
                            <Badge key={skill.id} variant="secondary">
                              {skill.skill} ({skill.level})
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Certifications */}
                    {cvData.certifications.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h2>
                        {cvData.certifications.map((cert) => (
                          <div key={cert.id} className="mb-2">
                            <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                            <div className="text-gray-600">
                              {cert.issuer} • {cert.date}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* CV Builder Form */
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Full Name</label>
                          <Input
                            value={cvData.personalInfo.fullName}
                            onChange={(e) => setCvData(prev => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, fullName: e.target.value }
                            }))}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <Input
                            type="email"
                            value={cvData.personalInfo.email}
                            onChange={(e) => setCvData(prev => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, email: e.target.value }
                            }))}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Phone</label>
                          <Input
                            value={cvData.personalInfo.phone}
                            onChange={(e) => setCvData(prev => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, phone: e.target.value }
                            }))}
                            placeholder="+234 000 000 0000"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Location</label>
                          <Input
                            value={cvData.personalInfo.location}
                            onChange={(e) => setCvData(prev => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, location: e.target.value }
                            }))}
                            placeholder="City, State"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Professional Summary</label>
                        <Textarea
                          value={cvData.personalInfo.summary}
                          onChange={(e) => setCvData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, summary: e.target.value }
                          }))}
                          placeholder="Brief description of your professional background and goals"
                          rows={4}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <Briefcase className="w-5 h-5 mr-2" />
                          Work Experience
                        </CardTitle>
                        <Button onClick={addExperience}>
                          <Plus className="w-4 h-4 mr-2" />
                          Add Experience
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {cvData.experience.map((exp, index) => (
                        <div key={exp.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium">Experience #{index + 1}</h3>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem('experience', exp.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">Job Title</label>
                              <Input
                                value={exp.title}
                                onChange={(e) => updateItem('experience', exp.id, 'title', e.target.value)}
                                placeholder="e.g. Software Developer"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Company</label>
                              <Input
                                value={exp.company}
                                onChange={(e) => updateItem('experience', exp.id, 'company', e.target.value)}
                                placeholder="e.g. TechCorp Nigeria"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <label className="text-sm font-medium">Location</label>
                              <Input
                                value={exp.location}
                                onChange={(e) => updateItem('experience', exp.id, 'location', e.target.value)}
                                placeholder="e.g. Lagos, Nigeria"
                              />
                            </div>
                            <div className="flex space-x-2">
                              <div className="flex-1">
                                <label className="text-sm font-medium">Start Date</label>
                                <Input
                                  type="month"
                                  value={exp.startDate}
                                  onChange={(e) => updateItem('experience', exp.id, 'startDate', e.target.value)}
                                />
                              </div>
                              <div className="flex-1">
                                <label className="text-sm font-medium">End Date</label>
                                <Input
                                  type="month"
                                  value={exp.endDate}
                                  onChange={(e) => updateItem('experience', exp.id, 'endDate', e.target.value)}
                                  disabled={exp.current}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <label className="text-sm font-medium">Description</label>
                            <Textarea
                              value={exp.description}
                              onChange={(e) => updateItem('experience', exp.id, 'description', e.target.value)}
                              placeholder="Describe your key responsibilities and achievements"
                              rows={3}
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="education" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          Education
                        </CardTitle>
                        <Button onClick={addEducation}>
                          <Plus className="w-4 h-4 mr-2" />
                          Add Education
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {cvData.education.map((edu, index) => (
                        <div key={edu.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium">Education #{index + 1}</h3>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem('education', edu.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">Degree</label>
                              <Input
                                value={edu.degree}
                                onChange={(e) => updateItem('education', edu.id, 'degree', e.target.value)}
                                placeholder="e.g. Bachelor of Science in Computer Science"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Institution</label>
                              <Input
                                value={edu.institution}
                                onChange={(e) => updateItem('education', edu.id, 'institution', e.target.value)}
                                placeholder="e.g. University of Lagos"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div>
                              <label className="text-sm font-medium">Location</label>
                              <Input
                                value={edu.location}
                                onChange={(e) => updateItem('education', edu.id, 'location', e.target.value)}
                                placeholder="e.g. Lagos, Nigeria"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Graduation Date</label>
                              <Input
                                type="month"
                                value={edu.graduationDate}
                                onChange={(e) => updateItem('education', edu.id, 'graduationDate', e.target.value)}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">GPA (Optional)</label>
                              <Input
                                value={edu.gpa}
                                onChange={(e) => updateItem('education', edu.id, 'gpa', e.target.value)}
                                placeholder="e.g. 3.5/4.0"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <Award className="w-5 h-5 mr-2" />
                          Skills & Certifications
                        </CardTitle>
                        <div className="space-x-2">
                          <Button onClick={addSkill} variant="outline">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Skill
                          </Button>
                          <Button onClick={addCertification}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Certification
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Skills */}
                      <div>
                        <h3 className="font-medium mb-4">Skills</h3>
                        <div className="space-y-4">
                          {cvData.skills.map((skill) => (
                            <div key={skill.id} className="flex items-center space-x-4">
                              <div className="flex-1">
                                <Input
                                  value={skill.skill}
                                  onChange={(e) => updateItem('skills', skill.id, 'skill', e.target.value)}
                                  placeholder="e.g. JavaScript"
                                />
                              </div>
                              <div className="w-32">
                                <Select
                                  value={skill.level}
                                  onValueChange={(value) => updateItem('skills', skill.id, 'level', value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {skillLevels.map((level) => (
                                      <SelectItem key={level} value={level}>
                                        {level}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem('skills', skill.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Certifications */}
                      <div>
                        <h3 className="font-medium mb-4">Certifications</h3>
                        <div className="space-y-4">
                          {cvData.certifications.map((cert) => (
                            <div key={cert.id} className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="font-medium">Certification</h4>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeItem('certifications', cert.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium">Certification Name</label>
                                  <Input
                                    value={cert.name}
                                    onChange={(e) => updateItem('certifications', cert.id, 'name', e.target.value)}
                                    placeholder="e.g. AWS Certified Solutions Architect"
                                  />
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Issuing Organization</label>
                                  <Input
                                    value={cert.issuer}
                                    onChange={(e) => updateItem('certifications', cert.id, 'issuer', e.target.value)}
                                    placeholder="e.g. Amazon Web Services"
                                  />
                                </div>
                              </div>
                              <div className="mt-4">
                                <label className="text-sm font-medium">Date Obtained</label>
                                <Input
                                  type="month"
                                  value={cert.date}
                                  onChange={(e) => updateItem('certifications', cert.id, 'date', e.target.value)}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVBuilder;

