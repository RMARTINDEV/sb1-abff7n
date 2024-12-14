import React from 'react';
import { Award, Users, Briefcase } from 'lucide-react';

export function Pioneers() {
  const pioneers = [
    {
      name: "Lucy McAuliffe",
      role: "Route Director, Network Rail",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80",
      description: "Leading one of the UK's busiest rail routes, Lucy brings extensive experience in transport leadership. Her passion for inclusive leadership and service excellence has made her a role model in the industry.",
      achievements: [
        "Route Director for Sussex in Network Rail",
        "Former Stations Director at Network Rail",
        "Previous Head of Passenger Security at Gatwick Airport",
        "CMI Fellow and Chartered Manager"
      ]
    },
    {
      name: "Karen Harrison",
      role: "Chief Engineer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
      description: "Leading major infrastructure projects and innovations in railway engineering, Karen has been instrumental in modernizing Britain's rail network.",
      achievements: [
        "Led major signaling upgrade projects",
        "Pioneer in digital railway systems",
        "Mentor for young engineers",
        "Industry award recipient"
      ]
    },
    {
      name: "Michelle Thompson",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      description: "Transforming railway operations through innovative leadership and a focus on passenger experience.",
      achievements: [
        "Improved operational efficiency by 30%",
        "Led digital transformation initiatives",
        "Champion for diversity in rail",
        "Railway Industry Association board member"
      ]
    }
  ];

  return (
    <section id="pioneers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Railway Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the inspiring women who are shaping the future of Britain's railways through innovation, leadership, and dedication.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pioneers.map((pioneer) => (
            <div key={pioneer.name} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={pioneer.image} 
                  alt={pioneer.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pioneer.name}</h3>
                <p className="text-primary-600 font-semibold mb-4">{pioneer.role}</p>
                <p className="text-gray-600 mb-4">{pioneer.description}</p>
                <div className="space-y-2">
                  {pioneer.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-600">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}