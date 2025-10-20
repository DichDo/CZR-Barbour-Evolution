import React, { useState } from 'react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-zinc-900 rounded-xl p-8 hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 hover:border-yellow-500/50">
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-4">{service.description}</p>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2 transition-colors"
      >
        {isExpanded ? 'Show Less' : 'View Features'}
        <span className="transform transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>

      {isExpanded && (
        <ul className="mt-4 space-y-2 animate-fadeIn">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300">
              <span className="text-yellow-400">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
