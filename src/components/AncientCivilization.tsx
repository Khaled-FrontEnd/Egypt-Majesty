import { motion } from "framer-motion";
import { pharaohs } from "@/data/egypt";
import Timeline from "./Timeline";

export default function AncientCivilization() {
  return (
    <section id="ancient" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4" data-testid="ancient-title">
            في البدء كان النيل
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50 mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="ancient-subtitle">
            حضارة امتدت لآلاف السنين، تركت للعالم إرثاً لا يُقدّر بثمن من العلوم، الفنون، والعمارة. تعرف على أبرز من حكموا مصر القديمة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pharaohs.map((pharaoh, index) => (
            <motion.div
              key={pharaoh.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-500"
              data-testid={`pharaoh-card-${index}`}
            >
              {/* الصورة بـ height ثابت بدل aspect-ratio */}
              <div className="relative h-72 sm:h-80 md:h-64 lg:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={pharaoh.image}
                  alt={pharaoh.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                {/* gradient من تحت الصورة للـ text */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent z-20" />
              </div>

              {/* النص منفصل تماماً من غير overlap */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-1">{pharaoh.name}</h3>
                <p className="text-sm font-bold text-muted-foreground mb-3">{pharaoh.years}</p>
                <p className="text-foreground leading-relaxed">{pharaoh.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-serif text-center text-primary mb-12">محطات في تاريخ مصر القديمة</h3>
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
}