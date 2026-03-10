import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { personalData } from '../data/data';

// ← tidak perlu interface Skill lagi, sudah ada di data.ts

const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="skills" className="py-24 px-6 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl mb-16 text-center"
        >
          Keahlian Teknis
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {personalData.skills.map((skill, idx) => (  // ← tidak perlu tulis : Skill : number
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between font-display">
                <span>{skill.name}</span>
                <span className="text-gold">{skill.level}%</span>
              </div>
              <div className="w-full h-1 bg-gray-300 dark:bg-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                  className="h-full bg-gold"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;