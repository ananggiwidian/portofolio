import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { personalData } from '../data/data';
import { FiBookOpen } from 'react-icons/fi';

const EducationSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="py-24 px-6 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl mb-16"
        >
          Pendidikan
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {personalData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-6 border border-gold/30 bg-offwhite/50 dark:bg-charcoal/50 backdrop-blur-sm"
            >
              <FiBookOpen className="text-gold mb-4" size={28} />
              <h3 className="font-display text-xl">{edu.degree}</h3>
              <p className="text-gold mt-1">{edu.institution}</p>
              <p className="text-sm opacity-70 mt-2">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;