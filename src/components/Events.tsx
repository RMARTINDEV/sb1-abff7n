import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export function Events() {
  const events = [
    {
      title: "Women in Rail Conference 2024",
      date: "June 15-16, 2024",
      location: "London Engineering Hub",
      time: "9:00 AM - 5:00 PM",
      description: "Annual conference featuring keynote speakers, workshops, and networking opportunities."
    },
    {
      title: "Railway Leadership Workshop",
      date: "July 8, 2024",
      location: "Birmingham Tech Center",
      time: "10:00 AM - 4:00 PM",
      description: "Interactive workshop focusing on leadership skills in the railway industry."
    },
    {
      title: "Engineering Excellence Forum",
      date: "August 22, 2024",
      location: "Manchester Innovation Center",
      time: "9:30 AM - 3:30 PM",
      description: "Technical discussions and presentations on railway engineering innovations."
    }
  ];

  return (
    <section id="events" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Upcoming Events</h2>
        
        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}