
import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '../constants';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages]);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm">Visual Tour</h2>
            <h3 className="text-4xl font-bold text-slate-900">Life at SR institution</h3>
            <p className="text-slate-600 text-lg max-w-xl">
              Glimpses of our vibrant campus, student achievements, and cultural celebrations.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {GALLERY_CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedImageIndex(null);
                }}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === cat 
                  ? 'bg-orange-600 text-white shadow-md' 
                  : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 min-h-[400px]">
          {filteredImages.map((img, idx) => (
            <div 
              key={`${activeCategory}-${idx}`} 
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg animate-in fade-in zoom-in duration-500 cursor-pointer"
              onClick={() => setSelectedImageIndex(idx)}
            >
              <img 
                src={img.url} 
                alt={`${img.category} ${idx + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-orange-900/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">{img.category}</span>
                <div className="bg-white text-orange-900 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <Maximize2 size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
          <button 
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-[110]"
            aria-label="Close Lightbox"
          >
            <X size={40} />
          </button>

          {/* Navigation Controls */}
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[110]"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[110]"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative w-full h-full p-4 md:p-12 flex flex-col items-center justify-center" onClick={() => setSelectedImageIndex(null)}>
            <div 
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={filteredImages[selectedImageIndex].url} 
                alt="Selected" 
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-sm font-bold tracking-widest uppercase text-orange-400 mb-1">
                  {filteredImages[selectedImageIndex].category}
                </p>
                <p className="text-lg opacity-90">Accord School Tirupati - Photo {selectedImageIndex + 1}</p>
              </div>
            </div>
            
            <div className="mt-4 text-white/60 text-sm">
              Image {selectedImageIndex + 1} of {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
