import { motion } from "framer-motion";
import { culturalFigures } from "@/data/egypt";

export default function Culture() {
  return (
    <section id="culture" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4" data-testid="culture-title">روح لا تُقاس</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50 mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مصر ولّادة للفن والأدب. شخصيات مصرية أضاءت سماء الإبداع العالمي وتركت بصمة لا تُمحى في قلوب الملايين.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturalFigures.map((figure, index) => (
            <motion.div
              key={figure.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group [perspective:1000px] h-[400px]"
              data-testid={`culture-card-${index}`}
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front */}
                <div className="absolute inset-0 backface-hidden [backface-visibility:hidden] rounded-2xl overflow-hidden border border-border shadow-lg">
                  <img 
                    src={figure.image} 
                    alt={figure.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-serif text-primary font-bold">{figure.name}</h3>
                    <p className="text-white/90 text-sm">{figure.title}</p>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-card border border-primary/40 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(201,168,76,0.15)]">
                  <h3 className="text-2xl font-serif text-primary mb-2">{figure.name}</h3>
                  <div className="w-12 h-px bg-primary/50 mb-4" />
                  <p className="text-sm font-bold text-muted-foreground mb-4">{figure.years}</p>
                  <p className="text-foreground text-sm leading-relaxed">{figure.desc}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
