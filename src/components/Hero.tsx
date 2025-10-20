import React from 'react';

export const Hero: React.FC = () => {
  const scrollToCollections = () => {
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68f3d559318411e32803185d_1760810390773_2b18d7b7.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          CZR Barbour <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Evolution</span>
        </h1>
        <p className="text-2xl md:text-4xl text-gray-200 mb-4 font-light">
          Art. Intelligence. Evolution.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Global Collection Management Powered by Advanced AI Technology
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToCollections}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Explore Collections
          </button>
          <button 
            onClick={() => window.location.href = '#contact'}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
