import React, { useState } from 'react';
import { collections } from '../data/collections';
import { CollectionCard } from './CollectionCard';
import { CollectionModal } from './CollectionModal';
import { Collection } from '../data/collections';

export const Collections: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Classical', 'Modern', 'Sculpture', 'Traditional'];

  const filteredCollections = collections.filter(collection => {
    const matchesCategory = filter === 'All' || collection.category === filter;
    const matchesSearch = collection.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          collection.region.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="collections" className="bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Featured Collections
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Curated portfolios spanning centuries and continents
        </p>

        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search collections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-800 focus:border-yellow-500 focus:outline-none"
          />
          
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filter === cat 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map(collection => (
            <CollectionCard 
              key={collection.id} 
              collection={collection}
              onClick={() => setSelectedCollection(collection)}
            />
          ))}
        </div>
      </div>

      <CollectionModal 
        collection={selectedCollection}
        onClose={() => setSelectedCollection(null)}
      />
    </div>
  );
};
