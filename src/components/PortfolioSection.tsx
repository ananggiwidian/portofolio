import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { personalData } from '../data/data';

// ← tambahkan interface
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  github: string;
}

interface PortfolioCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

const PortfolioCard = ({ project, index, inView }: PortfolioCardProps) => {  // ← tambah tipe
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden bg-offwhite dark:bg-charcoal border border-gold/20"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        {/* ↑ ganti bg-gradient-to-t → bg-linear-to-t (Tailwind v4) */}
        <div className="text-offwhite">
          <h3 className="font-display text-xl mb-2">{project.title}</h3>
          <p className="text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag: string) => (  // ← tambah : string
              <span key={tag} className="text-xs px-2 py-1 bg-gold text-charcoal rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm underline underline-offset-2 hover:text-gold">
              Demo
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="text-sm underline underline-offset-2 hover:text-gold">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl mb-16"
        >
          Portofolio
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalData.portfolio.map((project, idx) => (
            <PortfolioCard key={idx} project={project} index={idx} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;