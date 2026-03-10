import { personalData } from '../data/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 py-8 px-6 text-center">
      <p className="font-display text-gold text-lg">{personalData.name}</p>
      <p className="text-sm opacity-70 mt-2">© {currentYear} · {personalData.footerTagline}</p>
    </footer>
  );
};

export default Footer;