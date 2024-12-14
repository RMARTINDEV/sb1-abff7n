import React from 'react';
import { Menu, Train, User, BookOpen, Calendar, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Train className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Women in Rail</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#about" className="px-3 py-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">About</a>
              <a href="#pioneers" className="px-3 py-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">Pioneers</a>
              <a href="#careers" className="px-3 py-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">Careers</a>
              <a href="#events" className="px-3 py-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">Events</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}