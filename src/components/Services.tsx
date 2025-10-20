import React from 'react';
import { services } from '../data/services';
import { ServiceCard } from './ServiceCard';

export const Services: React.FC = () => {
  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg max-w-3xl mx-auto">
          Comprehensive solutions combining artificial intelligence, digital innovation, and art expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Request Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
