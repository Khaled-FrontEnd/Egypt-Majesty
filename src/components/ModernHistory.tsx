import { motion } from "framer-motion";
import { modernHistory } from "@/data/egypt";

export default function ModernHistory() {
  return (
    <section id="modern" className="py-24 relative bg-card/20 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4" data-testid="modern-title">نهضة لا تتوقف</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50 mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تاريخ مصر الحديث هو قصة كفاح وبناء، من تأسيس الدولة الحديثة مروراً بالثورات وصولاً إلى استعادة الكرامة الوطنية.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute right-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {modernHistory.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-6 md:gap-12`}
                data-testid={`modern-history-${index}`}
              >
                
                {/* Year Bubble - Now centered properly */}
                <div className="order-1 md:order-none w-full md:w-1/3 flex justify-center">
                  <div className="w-16 h-16 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                    <span className="text-primary font-bold text-sm">{item.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="order-2 w-full md:w-2/3">
                  <div className={`bg-card border border-border p-6 rounded-xl shadow-md hover:border-primary/50 transition-colors ${
                    index % 2 === 0 ? "md:ml-0" : "md:mr-0"
                  }`}>
                    <h3 className="text-xl font-serif text-primary mb-2">{item.event}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}