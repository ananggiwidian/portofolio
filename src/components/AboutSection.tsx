import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { personalData } from '../data/data';
import { FiUsers, FiBriefcase, FiAward } from 'react-icons/fi';

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { icon: <FiBriefcase size={32} />, value: personalData.stats.years, label: 'Tahun Pengalaman' },
    { icon: <FiAward size={32} />, value: personalData.stats.projects, label: 'Proyek' },
    { icon: <FiUsers size={32} />, value: personalData.stats.clients, label: 'Klien' },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl">Tentang Saya</h2>
            <p className="text-lg leading-relaxed">{personalData.about}</p>
            <div className="flex flex-wrap gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-gold">{stat.icon}</span>
                  <div>
                    <span className="block font-display text-2xl font-bold">{stat.value}</span>
                    <span className="text-sm uppercase tracking-wider opacity-70">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-gold mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {personalData.softSkills.map((skill: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * idx }}
                  className="p-4 border border-gold/30 bg-offwhite/5 dark:bg-charcoal/5 flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;