import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Initiative</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to promoting diversity and inclusion in the railway industry by supporting women's professional development and celebrating their achievements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Users className="h-12 w-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-600">
              Building a strong network of women professionals in the railway sector through mentorship and support.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Award className="h-12 w-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Recognition</h3>
            <p className="text-gray-600">
              Celebrating the achievements and contributions of women in various railway roles.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <TrendingUp className="h-12 w-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p className="text-gray-600">
              Providing resources and opportunities for career advancement and skill development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}