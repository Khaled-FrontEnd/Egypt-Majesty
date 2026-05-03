import { motion } from "framer-motion";
import { ancientTimeline } from "@/data/egypt";

export default function Timeline() {
  return (
    <div className="py-12">
      <div className="relative max-w-4xl mx-auto">
        {/* Central line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
        
        <div className="space-y-12 relative">
          {ancientTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Content */}
              <div className="w-[45%]">
                <div 
                  className={`p-6 bg-card border border-border rounded-lg shadow-lg hover:border-primary/50 transition-colors ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                  data-testid={`timeline-item-${index}`}
                >
                  <h3 className="text-2xl font-serif text-primary mb-2">{item.year}</h3>
                  <p className="text-foreground">{item.event}</p>
                </div>
              </div>
              
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-[0_0_10px_rgba(201,168,76,0.5)] z-10" />
              
              {/* Empty space for the other side */}
              <div className="w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
