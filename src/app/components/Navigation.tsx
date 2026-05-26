import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navigation() {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f9f9f9] h-[95px] flex items-center justify-between px-[105px] z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-[7.5px]">
        <div className="h-[49.2px] w-[109px]">
          <svg className="w-full h-full" fill="none" viewBox="0 0 109 49.2012">
            <g>
              <path d="M28.738 12.3006C28.738 5.50588 23.232 0 16.4373 0H0V24.6011H16.4373C23.232 24.6011 28.738 19.0952 28.738 12.3006Z" fill="#292728"/>
              <path d="M57.476 12.3006C57.476 5.50588 51.97 0 45.1753 0H28.738V24.6011H45.1753C51.97 24.6011 57.476 19.0952 57.476 12.3006Z" fill="#292728"/>
              <path d="M28.738 36.9005C28.738 30.1059 23.232 24.6 16.4373 24.6H0V49.2011H16.4373C23.232 49.2011 28.738 43.6952 28.738 36.9005Z" fill="#292728"/>
              <path d="M57.476 36.9005C57.476 30.1059 51.97 24.6 45.1753 24.6H28.738V49.2011H45.1753C51.97 49.2011 57.476 43.6952 57.476 36.9005Z" fill="#292728"/>
            </g>
            <g transform="translate(65.04, 18.13)">
              <path d="M6.85647 0L3.42823 3.42823L0 6.85647H10.2847V0H6.85647Z" fill="#292728"/>
              <path d="M17.1412 0V6.85647H43.9577V0H17.1412Z" fill="#292728"/>
              <path d="M33.6729 6.07765L37.1012 9.50588L40.5294 12.9341H30.2447V6.07765H33.6729Z" fill="#292728"/>
            </g>
          </svg>
        </div>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-[83px]">
        {navLinks.map((link) => (
          <div
            key={link.path}
            className="relative"
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              to={link.path}
              className="font-['Lexend_Deca'] text-[16px] text-[#292728] relative transition-colors hover:text-[#d0b301]"
            >
              {link.name}
            </Link>
            {isActive(link.path) && (
              <motion.div
                layoutId="activeNav"
                className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#292728] rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {hoveredLink === link.name && !isActive(link.path) && (
              <motion.div
                className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#d0b301] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Get Started Button */}
      <motion.button
        className="relative bg-[#d0b301] text-white font-['Lexend_Deca'] text-[14px] h-[50px] px-[30px] rounded-[10px] overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-[#292728] rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 2.5, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        <span className="relative z-10">Get Started</span>
      </motion.button>
    </nav>
  );
}
