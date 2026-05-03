import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        <img
          src="https://images.squarespace-cdn.com/content/v1/5ab577a645776e9177108f75/d86481f0-34a1-494a-8ad3-4f1a1dfcf2e5/Great-Pyramid-ROST.png"
          alt="Pyramids of Giza"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-4 flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 drop-shadow-lg"
          data-testid="hero-title"
        >
          مصر... حضارة لا تموت
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-foreground max-w-2xl font-light mb-10 drop-shadow-md"
          data-testid="hero-subtitle"
        >
          سبعة آلاف سنة من العطاء، والحضارة تتجدد
        </motion.p>

        <motion.a
          href="#ancient"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-[0_0_20px_rgba(201,168,76,0.5)] hover:shadow-[0_0_30px_rgba(201,168,76,0.8)] transition-all"
          data-testid="button-explore"
        >
          استكشف الآن
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
