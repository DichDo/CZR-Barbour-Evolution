import React from 'react';
import { Collection } from '../data/collections';

interface CollectionCardProps {
  collection: Collection;
  onClick: () => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ collection, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-zinc-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={collection.image} 
          alt={collection.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
          {collection.value}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
          {collection.title}
        </h3>
        <div className="flex justify-between text-sm text-gray-400 mb-3">
          <span>{collection.items} items</span>
          <span>{collection.region}</span>
        </div>
        <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-xs font-semibold border border-yellow-500/30">
          {collection.category}
        </div>
      </div>
    </div>
  );
};
