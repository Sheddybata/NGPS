import React from 'react';
import { MapPin, Clock, DollarSign, Building2 } from 'lucide-react';

const JobListings: React.FC = () => {
  const jobs = [
    {
      title: 'Senior Software Engineer',
      company: 'TechHub Nigeria',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦2,500,000 - ₦4,000,000',
      posted: '2 days ago',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691369632_bf6f2a84.webp'
    },
    {
      title: 'Marketing Manager',
      company: 'Dangote Group',
      location: 'Abuja, FCT',
      type: 'Full-time',
      salary: '₦1,800,000 - ₦2,500,000',
      posted: '1 day ago',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691371405_3b1d84c3.webp'
    },
    {
      title: 'Data Analyst',
      company: 'First Bank Nigeria',
      location: 'Lagos, Nigeria',
      type: 'Contract',
      salary: '₦1,200,000 - ₦1,800,000',
      posted: '3 days ago',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691373167_cf3a0b4c.webp'
    },
    {
      title: 'Project Manager',
      company: 'Shell Nigeria',
      location: 'Port Harcourt, Rivers',
      type: 'Full-time',
      salary: '₦3,000,000 - ₦4,500,000',
      posted: '4 days ago',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691374924_9f8f1236.webp'
    },
    {
      title: 'HR Specialist',
      company: 'MTN Nigeria',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '₦1,500,000 - ₦2,200,000',
      posted: '5 days ago',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691376728_cc330ce2.webp'
    },
    {
      title: 'Business Analyst',
      company: 'Access Bank',
      location: 'Abuja, FCT',
      type: 'Remote',
      salary: '₦1,400,000 - ₦2,000,000',
      posted: '1 week ago',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691378540_1b39368c.webp'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Job Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Discover exciting career opportunities across Nigeria
            </p>
          </div>
          <button className="hidden lg:block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
            View All Jobs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={job.image} 
                  alt={job.company}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    job.type === 'Full-time' ? 'bg-green-100 text-green-800' :
                    job.type === 'Contract' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {job.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  {job.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span className="font-medium">{job.company}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{job.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span className="font-medium text-green-600">{job.salary}</span>
                </div>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{job.posted}</span>
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            View All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListings;