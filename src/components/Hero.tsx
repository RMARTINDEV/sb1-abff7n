import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555661530-68c8e98db4e6?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-primary-900/90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Empowering Women in Railway
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Celebrating achievements, creating opportunities, and inspiring the next generation of female railway professionals.
          </p>
          <div className="space-x-4">
            <a 
              href="#careers" 
              className="bg-primary-500 hover:bg-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Careers
            </a>
            <a 
              href="#about" 
              className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}