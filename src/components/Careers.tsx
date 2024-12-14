import React from 'react';
import { Briefcase, GraduationCap, Users, ArrowRight } from 'lucide-react';

export function Careers() {
  const opportunities = [
    {
      title: "Engineering",
      description: "From signal engineering to rolling stock design",
      icon: GraduationCap
    },
    {
      title: "Operations",
      description: "Train driving and station management roles",
      icon: Briefcase
    },
    {
      title: "Leadership",
      description: "Executive and management positions",
      icon: Users
    }
  ];

  return (
    <section id="careers" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Career Opportunities</h2>
          <p className="text-xl text-gray-600">Discover exciting career paths in the railway industry</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opp) => {
            const Icon = opp.icon;
            return (
              <div key={opp.title} className="bg-white p-8 rounded-xl shadow-sm">
                <Icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{opp.title}</h3>
                <p className="text-gray-600 mb-4">{opp.description}</p>
                <a href="#" className="text-indigo-600 font-semibold flex items-center hover:text-indigo-700">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}