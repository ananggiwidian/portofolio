import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { personalData } from '../data/data';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import type { IconType } from 'react-icons';

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const socialIcons: Record<string, IconType> = {
    linkedin: FiLinkedin,
    github: FiGithub,
    instagram: FiInstagram,
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl mb-16"
        >
          Hubungi Saya
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border border-gold/30 px-4 py-3 focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border border-gold/30 px-4 py-3 focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border border-gold/30 px-4 py-3 focus:outline-none focus:border-gold"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-gold text-charcoal font-medium uppercase tracking-wider hover:bg-opacity-80 transition"
              >
                Kirim
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="font-display text-2xl text-gold">Temukan Saya di</h3>
            <div className="flex gap-6">
              {Object.entries(personalData.social).map(([key, url]) => {
                const Icon = socialIcons[key];
                return (
                  <a  // ← ini yang hilang, tag <a harus ada
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl hover:text-gold transition"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <div className="pt-8">
              <p className="text-lg">Atau kirim email langsung ke:</p>
              <a href="mailto:hello@alessandra.dev" className="text-gold underline underline-offset-2">
                example@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;