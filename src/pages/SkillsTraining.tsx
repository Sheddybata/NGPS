import React, { useState } from 'react';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Star, 
  Users, 
  Award,
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  Download,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const SkillsTraining: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      provider: "Google",
      category: "Digital & ICT",
      duration: "40 hours",
      level: "Beginner",
      rating: 4.8,
      students: 12500,
      price: "Free",
      description: "Learn the fundamentals of JavaScript programming",
      skills: ["JavaScript", "Programming", "Web Development"],
      progress: 0,
      completed: false
    },
    {
      id: 2,
      title: "Data Analysis with Python",
      provider: "Microsoft",
      category: "Digital & ICT",
      duration: "60 hours",
      level: "Intermediate",
      rating: 4.9,
      students: 8900,
      price: "Free",
      description: "Master data analysis using Python and pandas",
      skills: ["Python", "Data Analysis", "Pandas", "Statistics"],
      progress: 45,
      completed: false
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      provider: "Coursera",
      category: "Business & Finance",
      duration: "35 hours",
      level: "Beginner",
      rating: 4.7,
      students: 15600,
      price: "₦15,000",
      description: "Complete guide to digital marketing strategies",
      skills: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
      progress: 100,
      completed: true
    },
    {
      id: 4,
      title: "Project Management Professional",
      provider: "PMI Nigeria",
      category: "Business & Finance",
      duration: "80 hours",
      level: "Advanced",
      rating: 4.9,
      students: 3200,
      price: "₦45,000",
      description: "PMP certification preparation course",
      skills: ["Project Management", "Leadership", "Risk Management"],
      progress: 0,
      completed: false
    },
    {
      id: 5,
      title: "Agricultural Technology",
      provider: "Federal University of Agriculture",
      category: "Vocational & Technical",
      duration: "50 hours",
      level: "Intermediate",
      rating: 4.6,
      students: 2100,
      price: "Free",
      description: "Modern agricultural techniques and technology",
      skills: ["Agriculture", "Technology", "Sustainability"],
      progress: 0,
      completed: false
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      provider: "Design Institute",
      category: "Creative",
      duration: "45 hours",
      level: "Beginner",
      rating: 4.8,
      students: 6800,
      price: "₦25,000",
      description: "Learn user interface and user experience design",
      skills: ["UI Design", "UX Design", "Figma", "Prototyping"],
      progress: 0,
      completed: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: courses.length },
    { id: 'Digital & ICT', name: 'Digital & ICT', count: courses.filter(c => c.category === 'Digital & ICT').length },
    { id: 'Business & Finance', name: 'Business & Finance', count: courses.filter(c => c.category === 'Business & Finance').length },
    { id: 'Vocational & Technical', name: 'Vocational & Technical', count: courses.filter(c => c.category === 'Vocational & Technical').length },
    { id: 'Creative', name: 'Creative', count: courses.filter(c => c.category === 'Creative').length }
  ];

  const webinars = [
    {
      id: 1,
      title: "Career Development in Tech",
      date: "2024-01-15",
      time: "2:00 PM",
      duration: "2 hours",
      speaker: "Dr. Sarah Johnson",
      attendees: 150,
      type: "Online"
    },
    {
      id: 2,
      title: "Entrepreneurship Workshop",
      date: "2024-01-20",
      time: "10:00 AM",
      duration: "4 hours",
      speaker: "Mr. Adebayo Ogunlesi",
      attendees: 200,
      type: "In-Person"
    },
    {
      id: 3,
      title: "Digital Skills for Youth",
      date: "2024-01-25",
      time: "3:00 PM",
      duration: "1.5 hours",
      speaker: "Ms. Fatima Ibrahim",
      attendees: 300,
      type: "Online"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const myCourses = courses.filter(course => course.progress > 0);
  const completedCourses = courses.filter(course => course.completed);

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
                <h1 className="text-3xl font-bold text-gray-900">Skills Training</h1>
                <p className="text-gray-600 mt-1">Enhance your skills with quality training</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="catalog" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="catalog">Course Catalog</TabsTrigger>
            <TabsTrigger value="my-courses">My Courses</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="catalog" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search courses, skills, or providers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-2 border rounded-md"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      More Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                        <CardDescription className="mt-1">{course.provider}</CardDescription>
                      </div>
                      <Badge variant={course.price === 'Free' ? 'default' : 'secondary'}>
                        {course.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.skills.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Button className="w-full">
                      <Play className="w-4 h-4 mr-2" />
                      {course.progress > 0 ? 'Continue' : 'Start Course'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.provider}</CardDescription>
                      </div>
                      <Badge variant={course.completed ? 'default' : 'secondary'}>
                        {course.completed ? 'Completed' : 'In Progress'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {course.rating}
                        </div>
                      </div>

                      <Button className="w-full">
                        {course.completed ? 'View Certificate' : 'Continue Learning'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webinars" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webinars.map((webinar) => (
                <Card key={webinar.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{webinar.title}</CardTitle>
                    <CardDescription>Speaker: {webinar.speaker}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(webinar.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {webinar.time}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Duration: {webinar.duration}</span>
                        <span>{webinar.attendees} attendees</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant={webinar.type === 'Online' ? 'default' : 'secondary'}>
                          {webinar.type}
                        </Badge>
                        <Button size="sm">
                          Register
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center">
                          <Award className="w-5 h-5 text-yellow-500 mr-2" />
                          {course.title}
                        </CardTitle>
                        <CardDescription>{course.provider}</CardDescription>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        Completed on {new Date().toLocaleDateString()}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button variant="outline" size="sm">
                          Share Certificate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SkillsTraining;


