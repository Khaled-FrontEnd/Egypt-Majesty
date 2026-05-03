import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface PlaceModalProps {
  place: {
    name: string;
    category: string;
    image: string;
    desc: string;
  } | null;
  onClose: () => void;
}

export default function PlaceModal({ place, onClose }: PlaceModalProps) {
  useEffect(() => {
    if (place) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [place]);

  return (
    <AnimatePresence>
      {place && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-card border border-primary/30 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
            data-testid="place-modal"
          >
            <button
              onClick={onClose}
              className="absolute top-4 left-4 z-20 p-2 bg-black/50 hover:bg-primary/80 text-white rounded-full backdrop-blur-md transition-colors"
              data-testid="modal-close"
            >
              <X size={20} />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img 
                src={place.image} 
                alt={place.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-card to-card/95">
              <div className="text-sm font-bold tracking-widest text-primary/70 mb-2 uppercase">
                {place.category}
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                {place.name}
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                {place.desc}
              </p>
              
              <div className="mt-auto">
                <button 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors w-full md:w-auto"
                  onClick={onClose}
                >
                  استكشف المزيد
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
