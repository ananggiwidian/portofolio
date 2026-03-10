import { motion } from 'framer-motion';
import { personalData } from '../data/data';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            {personalData.name}
          </h1>
          <p className="text-xl md:text-2xl text-gold">{personalData.title}</p>
          <p className="text-lg max-w-md">{personalData.heroTagline}</p>
          <div className="flex gap-4">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-gold text-charcoal font-medium uppercase tracking-wider hover:bg-opacity-80 transition"
            >
              Lihat Portofolio
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-8 py-3 border border-gold text-gold uppercase tracking-wider hover:bg-gold hover:text-charcoal transition"
            >
              Unduh CV
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold">
              <img
                src={personalData.profileImage}
                alt={personalData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;