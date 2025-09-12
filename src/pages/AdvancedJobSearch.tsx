import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Building2, 
  Clock, 
  Filter, 
  Star, 
  Bookmark,
  ArrowLeft,
  Calendar,
  DollarSign,
  Users,
  Briefcase
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const AdvancedJobSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [sector, setSector] = useState('');
  const [jobType, setJobType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [datePosted, setDatePosted] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const jobListings = [
    {
      id: 1,
      title: "Senior Software Developer",
      company: "TechCorp Nigeria",
      location: "Lagos, Nigeria",
      sector: "Technology",
      type: "Full-time",
      experience: "Senior",
      salary: "₦300,000 - ₦500,000",
      posted: "2 days ago",
      description: "We are looking for an experienced software developer to join our growing team...",
      requirements: ["React", "Node.js", "TypeScript", "5+ years experience"],
      remote: true,
      urgent: false
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "DataFlow Solutions",
      location: "Abuja, Nigeria",
      sector: "Technology",
      type: "Full-time",
      experience: "Mid-level",
      salary: "₦150,000 - ₦250,000",
      posted: "1 week ago",
      description: "Join our data team to analyze business metrics and provide insights...",
      requirements: ["Python", "SQL", "Excel", "2+ years experience"],
      remote: true,
      urgent: true
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "GrowthHub Ltd",
      location: "Lagos, Nigeria",
      sector: "Marketing",
      type: "Full-time",
      experience: "Mid-level",
      salary: "₦200,000 - ₦350,000",
      posted: "3 days ago",
      description: "Lead our marketing initiatives and drive brand awareness...",
      requirements: ["Digital Marketing", "Social Media", "Analytics", "3+ years experience"],
      remote: false,
      urgent: false
    },
    {
      id: 4,
      title: "Agricultural Engineer",
      company: "AgriTech Solutions",
      location: "Kano, Nigeria",
      sector: "Agriculture",
      type: "Full-time",
      experience: "Entry-level",
      salary: "₦120,000 - ₦200,000",
      posted: "5 days ago",
      description: "Work on innovative agricultural technology solutions...",
      requirements: ["Engineering Degree", "CAD", "Problem Solving", "Fresh Graduate"],
      remote: false,
      urgent: false
    },
    {
      id: 5,
      title: "Healthcare Administrator",
      company: "MediCare Group",
      location: "Rivers, Nigeria",
      sector: "Healthcare",
      type: "Contract",
      experience: "Mid-level",
      salary: "₦180,000 - ₦280,000",
      posted: "1 day ago",
      description: "Manage healthcare operations and patient services...",
      requirements: ["Healthcare Management", "Leadership", "Communication", "2+ years experience"],
      remote: false,
      urgent: true
    }
  ];

  const sectors = [
    "Technology", "Healthcare", "Finance", "Agriculture", "Education", 
    "Manufacturing", "Marketing", "Construction", "Transportation", "Energy"
  ];

  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Remote Work"];
  const experienceLevels = ["Entry-level", "Mid-level", "Senior", "Executive"];
  const dateOptions = ["Last 24 hours", "Last 7 days", "Last 30 days", "Last 3 months"];

  const toggleSavedJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesSector = !sector || job.sector === sector;
    const matchesJobType = !jobType || job.type === jobType;
    const matchesExperience = !experienceLevel || job.experience === experienceLevel;
    
    return matchesSearch && matchesLocation && matchesSector && matchesJobType && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        showBackButton={true}
        backPath="/job-seeker"
        title="Advanced Job Search"
        subtitle="Find your perfect job opportunity"
      />

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
                  <Label htmlFor="search">Search Jobs</Label>
                  <Input
                    id="search"
                    placeholder="Job title, company, or keywords"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Location Filter */}
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="City or state"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Sector Filter */}
                <div>
                  <Label>Sector</Label>
                  <Select value={sector} onValueChange={setSector}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select sector" />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map((sectorOption) => (
                        <SelectItem key={sectorOption} value={sectorOption}>
                          {sectorOption}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Job Type Filter */}
                <div>
                  <Label>Job Type</Label>
                  <Select value={jobType} onValueChange={setJobType}>
                    <SelectTrigger className="mt-1">
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

                {/* Experience Level Filter */}
                <div>
                  <Label>Experience Level</Label>
                  <Select value={experienceLevel} onValueChange={setExperienceLevel}>
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

                {/* Date Posted Filter */}
                <div>
                  <Label>Date Posted</Label>
                  <Select value={datePosted} onValueChange={setDatePosted}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      {dateOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Filters */}
                <div className="space-y-3">
                  <Label>Additional Filters</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remote" />
                      <Label htmlFor="remote" className="text-sm">Remote Work Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="urgent" />
                      <Label htmlFor="urgent" className="text-sm">Urgent Hiring</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="salary" />
                      <Label htmlFor="salary" className="text-sm">Salary Range Provided</Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full" onClick={() => setShowFilters(false)}>
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredJobs.length} Jobs Found
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
                    <SelectItem value="date">Most Recent</SelectItem>
                    <SelectItem value="salary">Highest Salary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 mr-2">
                            {job.title}
                          </h3>
                          {job.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                          {job.remote && (
                            <Badge variant="secondary" className="text-xs ml-2">
                              Remote
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-3">
                          <Building2 className="w-4 h-4 mr-1" />
                          <span className="mr-4">{job.company}</span>
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="mr-4">{job.location}</span>
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span className="mr-4">{job.type}</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{job.posted}</span>
                        </div>

                        <p className="text-gray-700 mb-4 line-clamp-2">
                          {job.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center text-green-600">
                              <DollarSign className="w-4 h-4 mr-1" />
                              <span className="font-medium">{job.salary}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Users className="w-4 h-4 mr-1" />
                              <span>{job.experience}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleSavedJob(job.id)}
                            >
                              <Bookmark className={`w-4 h-4 ${
                                savedJobs.includes(job.id) ? 'fill-current text-blue-600' : ''
                              }`} />
                            </Button>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm">
                              Apply Now
                            </Button>
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                          {job.requirements.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{job.requirements.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button onClick={() => {
                    setSearchQuery('');
                    setLocation('');
                    setSector('');
                    setJobType('');
                    setExperienceLevel('');
                    setDatePosted('');
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

export default AdvancedJobSearch;

