import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Where Art Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Intelligence</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              CZR Barbour Evolution represents the convergence of centuries-old art appreciation and cutting-edge artificial intelligence. We're pioneering the future of global collection management.
            </p>
            <p className="text-gray-400 text-lg mb-6">
              Our platform empowers collectors, museums, and institutions to manage, authenticate, and showcase their collections with unprecedented precision and insight.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-gray-400">Global Clients</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68f3d559318411e32803185d_1760810417826_3b4bd8cc.webp"
              alt="AI Technology"
              className="rounded-lg w-full h-64 object-cover"
            />
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68f3d559318411e32803185d_1760810418627_ef9534a7.webp"
              alt="Global Network"
              className="rounded-lg w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
