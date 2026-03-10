import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { personalData } from '../data/data';

const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl mb-16"
        >
          Pengalaman Kerja
        </motion.h2>
        <div className="relative border-l-2 border-gold/30 pl-8 ml-4 space-y-12">
          {personalData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-12 top-1 w-4 h-4 rounded-full bg-gold border-2 border-offwhite dark:border-charcoal"></div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl">{exp.position}</h3>
                <p className="text-gold">{exp.company} · {exp.period}</p>
                <p className="opacity-80">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;