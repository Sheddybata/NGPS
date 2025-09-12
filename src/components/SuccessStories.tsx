import React from 'react';
import { Quote, Star } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      name: 'Adunni Okafor',
      role: 'Software Developer',
      company: 'Flutterwave',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691363297_e45e1249.webp',
      story: 'NGPS helped me transition from marketing to tech. The career guidance and job matching system connected me with the perfect role.',
      rating: 5
    },
    {
      name: 'Ibrahim Musa',
      role: 'Project Manager',
      company: 'Dangote Group',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691365089_0edc845c.webp',
      story: 'As a returning migrant, NGPS provided the local market insights I needed to successfully reintegrate into Nigeria\'s workforce.',
      rating: 5
    },
    {
      name: 'Blessing Okoro',
      role: 'Data Analyst',
      company: 'Access Bank',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691367032_a0bf3de7.webp',
      story: 'The skills training programs and job alerts feature made my job search efficient. I found my dream job within 3 weeks!',
      rating: 5
    },
    {
      name: 'Chidi Okonkwo',
      role: 'Business Analyst',
      company: 'MTN Nigeria',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c43dba49ec3148e91268ee_1757691368835_ca04a91b.webp',
      story: 'The platform\'s comprehensive approach to career development helped me upskill and land a senior position in telecommunications.',
      rating: 5
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how NGPS has transformed careers and connected talent with opportunities across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-green-200" />
              
              <div className="flex items-center mb-6">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{story.name}</h4>
                  <p className="text-green-600 font-medium">{story.role}</p>
                  <p className="text-gray-600 text-sm">{story.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{story.story}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of Nigerians who have found their dream careers through NGPS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Find Your Dream Job
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
                Explore Career Paths
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;