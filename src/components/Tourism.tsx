import { motion } from "framer-motion";
import { useState } from "react";
import { tourismPlaces } from "@/data/egypt";
import PlaceModal from "./PlaceModal";

export default function Tourism() {
  const [filter, setFilter] = useState("الكل");
  const [selectedPlace, setSelectedPlace] = useState<typeof tourismPlaces[0] | null>(null);

  const categories = ["الكل", ...Array.from(new Set(tourismPlaces.map(p => p.category)))];
  
  const filteredPlaces = filter === "الكل" 
    ? tourismPlaces 
    : tourismPlaces.filter(p => p.category === filter);

  return (
    <section id="tourism" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4" data-testid="tourism-title">جنة على الأرض</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50 mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            من المعابد القديمة إلى الشواطئ الساحرة، استكشف أجمل الوجهات السياحية في مصر التي تجذب الزوار من كل أنحاء العالم.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                filter === cat 
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(201,168,76,0.4)]" 
                  : "bg-background border border-border hover:border-primary text-foreground"
              }`}
              data-testid={`filter-${cat}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPlaces.map((place, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={place.name}
              className="group cursor-pointer rounded-xl overflow-hidden relative aspect-square"
              onClick={() => setSelectedPlace(place)}
              data-testid={`place-card-${index}`}
            >
              <img 
                src={place.image} 
                alt={place.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex flex-col justify-end p-6">
                <span className="text-primary font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  {place.category}
                </span>
                <h3 className="text-2xl font-serif text-white mb-2">{place.name}</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                  <p className="text-white/80 text-sm line-clamp-2 mt-2">{place.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <PlaceModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </section>
  );
}
