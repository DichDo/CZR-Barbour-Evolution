import React from 'react';
import { Collection } from '../data/collections';

interface CollectionModalProps {
  collection: Collection | null;
  onClose: () => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({ collection, onClose }) => {
  if (!collection) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-96">
          <img 
            src={collection.image} 
            alt={collection.title}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="p-8">
          <h2 className="text-4xl font-bold text-white mb-4">{collection.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <div className="text-gray-400 text-sm">Items</div>
              <div className="text-white text-xl font-bold">{collection.items}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Region</div>
              <div className="text-white text-xl font-bold">{collection.region}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Category</div>
              <div className="text-white text-xl font-bold">{collection.category}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Value</div>
              <div className="text-yellow-400 text-xl font-bold">{collection.value}</div>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all"
          >
            Request Access
          </button>
        </div>
      </div>
    </div>
  );
};
