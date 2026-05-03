import { motion } from "framer-motion";
import { modernProjects } from "@/data/egypt";

export default function EgyptToday() {
  return (
    <section id="today" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4" data-testid="today-title">مصر المستقبل</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50 mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مشاريع قومية عملاقة تعيد رسم خريطة مصر وتؤسس لجمهورية جديدة تتسع لأحلام المصريين وتواكب تطور العصر.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {modernProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-border"
              data-testid={`project-card-${index}`}
            >
              <div className="aspect-video md:aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-8">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold w-max mb-4 backdrop-blur-sm">
                  {project.year}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">{project.name}</h3>
                <p className="text-white/80 leading-relaxed max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
