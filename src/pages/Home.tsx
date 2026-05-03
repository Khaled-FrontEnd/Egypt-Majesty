import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AncientCivilization from "@/components/AncientCivilization";
import Tourism from "@/components/Tourism";
import Culture from "@/components/Culture";
import ModernHistory from "@/components/ModernHistory";
import EgyptToday from "@/components/EgyptToday";
import Quiz from "@/components/Quiz";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans" dir="rtl">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-background">
        <AncientCivilization />
        <Tourism />
        <Culture />
        <ModernHistory />
        <EgyptToday />
        <Quiz />
      </div>
      <Footer />
    </main>
  );
}
