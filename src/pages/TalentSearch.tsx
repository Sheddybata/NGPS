import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  MapPin, 
  GraduationCap, 
  Briefcase,
  ArrowLeft,
  Star,
  Eye,
  MessageSquare,
  Bookmark,
  Download,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Candidate {
  id: number;
  name: string;
  title: string;
  location: string;
  state: string;
  experience: string;
  education: string;
  skills: string[];
  availability: 'Available' | 'Open to Offers' | 'Not Available';
  lastActive: string;
  profileCompleteness: number;
  isAnonymous: boolean;
  isSaved: boolean;
}

const TalentSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [savedCandidates, setSavedCandidates] = useState<number[]>([]);

  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Developer",
      location: "Lagos",
      state: "Lagos",
      experience: "5 years",
      education: "B.Sc Computer Science",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      availability: "Available",
      lastActive: "2 hours ago",
      profileCompleteness: 95,
      isAnonymous: true,
      isSaved: false
    },
    {
      id: 2,
      name: "Michael Adebayo",
      title: "Data Analyst",
      location: "Abuja",
      state: "FCT",
      experience: "3 years",
      education: "M.Sc Statistics",
      skills: ["Python", "SQL", "Excel", "Tableau", "Machine Learning"],
      availability: "Open to Offers",
      lastActive: "1 day ago",
      profileCompleteness: 88,
      isAnonymous: true,
      isSaved: false
    },
    {
      id: 3,
      name: "Fatima Ibrahim",
      title: "Marketing Manager",
      location: "Kano",
      state: "Kano",
      experience: "4 years",
      education: "B.Sc Marketing",
      skills: ["Digital Marketing", "SEO", "Analytics", "Content Creation", "Social Media"],
      availability: "Available",
      lastActive: "3 hours ago",
      profileCompleteness: 92,
      isAnonymous: true,
      isSaved: false
    },
    {
      id: 4,
      name: "David Okafor",
      title: "Project Manager",
      location: "Port Harcourt",
      state: "Rivers",
      experience: "6 years",
      education: "MBA Business Administration",
      skills: ["Project Management", "Agile", "Leadership", "Risk Management", "Budgeting"],
      availability: "Not Available",
      lastActive: "1 week ago",
      profileCompleteness: 90,
      isAnonymous: true,
      isSaved: false
    },
    {
      id: 5,
      name: "Aisha Mohammed",
      title: "UI/UX Designer",
      location: "Lagos",
      state: "Lagos",
      experience: "2 years",
      education: "B.Sc Design",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Wireframing"],
      availability: "Available",
      lastActive: "5 hours ago",
      profileCompleteness: 85,
      isAnonymous: true,
      isSaved: false
    }
  ];

  const skillSuggestions = [
    "JavaScript", "Python", "React", "Node.js", "TypeScript", "MongoDB", "SQL",
    "Digital Marketing", "SEO", "Analytics", "Project Management", "Leadership",
    "UI/UX Design", "Figma", "Adobe Creative Suite", "Machine Learning", "AWS",
    "Agile", "Communication", "Problem Solving", "Teamwork"
  ];

  const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe",
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
    "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
    "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];

  const educationLevels = [
    "Secondary School", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD", "Professional Certificate"
  ];

  const experienceLevels = [
    "0-1 years", "1-2 years", "2-3 years", "3-5 years", "5-10 years", "10+ years"
  ];

  const toggleSavedCandidate = (candidateId: number) => {
    setSavedCandidates(prev => 
      prev.includes(candidateId) 
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    );
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLocation = !selectedLocation || candidate.state === selectedLocation;
    const matchesEducation = !selectedEducation || candidate.education.includes(selectedEducation);
    const matchesExperience = !selectedExperience || candidate.experience === selectedExperience;
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => candidate.skills.includes(skill));
    
    return matchesSearch && matchesLocation && matchesEducation && matchesExperience && matchesSkills;
  });

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
                <h1 className="text-3xl font-bold text-gray-900">Talent Search</h1>
                <p className="text-gray-600 mt-1">Find and connect with qualified candidates</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export Results
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Search Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search & Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Bar */}
                <div>
                  <Label htmlFor="search">Search Candidates</Label>
                  <Input
                    id="search"
                    placeholder="Name, title, or skills"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Location Filter */}
                <div>
                  <Label>Location</Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="mt-1">
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

                {/* Education Filter */}
                <div>
                  <Label>Education Level</Label>
                  <Select value={selectedEducation} onValueChange={setSelectedEducation}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select education" />
                    </SelectTrigger>
                    <SelectContent>
                      {educationLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Filter */}
                <div>
                  <Label>Experience Level</Label>
                  <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Skills Filter */}
                <div>
                  <Label>Skills</Label>
                  <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                    {skillSuggestions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedSkills(prev => [...prev, skill]);
                            } else {
                              setSelectedSkills(prev => prev.filter(s => s !== skill));
                            }
                          }}
                        />
                        <Label htmlFor={skill} className="text-sm">{skill}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="space-y-3">
                  <Label>Additional Filters</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="available" />
                      <Label htmlFor="available" className="text-sm">Available Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="complete" />
                      <Label htmlFor="complete" className="text-sm">Complete Profiles</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="recent" />
                      <Label htmlFor="recent" className="text-sm">Recently Active</Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full" onClick={() => setShowFilters(false)}>
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Candidate Results */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredCandidates.length} Candidates Found
                </h2>
                <p className="text-gray-600">Based on your search criteria</p>
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="experience">Most Experienced</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="complete">Most Complete</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredCandidates.map((candidate) => (
                <Card key={candidate.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                          <span className="text-lg font-medium text-gray-600">
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 mr-3">
                              {candidate.isAnonymous ? 'Anonymous Candidate' : candidate.name}
                            </h3>
                            <Badge 
                              variant={candidate.availability === 'Available' ? 'default' : 
                                      candidate.availability === 'Open to Offers' ? 'secondary' : 'destructive'}
                            >
                              {candidate.availability}
                            </Badge>
                          </div>
                          
                          <p className="text-gray-600 mb-2">{candidate.title}</p>
                          
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="mr-4">{candidate.location}, {candidate.state}</span>
                            <Briefcase className="w-4 h-4 mr-1" />
                            <span className="mr-4">{candidate.experience}</span>
                            <GraduationCap className="w-4 h-4 mr-1" />
                            <span className="mr-4">{candidate.education}</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span>Active {candidate.lastActive}</span>
                          </div>

                          <div className="flex items-center mb-3">
                            <span className="text-sm text-gray-600 mr-2">Profile Completeness:</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${candidate.profileCompleteness}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-900">{candidate.profileCompleteness}%</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {candidate.skills.slice(0, 5).map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {candidate.skills.length > 5 && (
                              <Badge variant="outline" className="text-xs">
                                +{candidate.skills.length - 5} more
                              </Badge>
                            )}
                          </div>

                          {candidate.isAnonymous && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                              <p className="text-sm text-blue-800">
                                <strong>Anonymous Profile:</strong> Contact details are hidden. 
                                Use credits or send an invite to view full profile.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSavedCandidate(candidate.id)}
                        >
                          <Bookmark className={`w-4 h-4 ${
                            savedCandidates.includes(candidate.id) ? 'fill-current text-blue-600' : ''
                          }`} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View Profile
                        </Button>
                        <Button size="sm">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Invite to Apply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCandidates.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No candidates found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button onClick={() => {
                    setSearchQuery('');
                    setSelectedLocation('');
                    setSelectedEducation('');
                    setSelectedExperience('');
                    setSelectedSkills([]);
                  }}>
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSearch;


