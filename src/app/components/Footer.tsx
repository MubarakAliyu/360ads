import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#292728] text-white py-[88px]">
      <div className="max-w-[1132px] mx-auto px-8">
        {/* Logo */}
        <div className="mb-[49px]">
          <svg className="w-[109px] h-[49.2px]" fill="none" viewBox="0 0 109 49.2012">
            <g>
              <path d="M28.738 12.3006C28.738 5.50588 23.232 0 16.4373 0H0V24.6011H16.4373C23.232 24.6011 28.738 19.0952 28.738 12.3006Z" fill="#F6F6F6"/>
              <path d="M57.476 12.3006C57.476 5.50588 51.97 0 45.1753 0H28.738V24.6011H45.1753C51.97 24.6011 57.476 19.0952 57.476 12.3006Z" fill="#F6F6F6"/>
              <path d="M28.738 36.9005C28.738 30.1059 23.232 24.6 16.4373 24.6H0V49.2011H16.4373C23.232 49.2011 28.738 43.6952 28.738 36.9005Z" fill="#F6F6F6"/>
              <path d="M57.476 36.9005C57.476 30.1059 51.97 24.6 45.1753 24.6H28.738V49.2011H45.1753C51.97 49.2011 57.476 43.6952 57.476 36.9005Z" fill="#F6F6F6"/>
            </g>
            <g transform="translate(65.04, 18.13)">
              <path d="M6.85647 0L3.42823 3.42823L0 6.85647H10.2847V0H6.85647Z" fill="#F6F6F6"/>
              <path d="M17.1412 0V6.85647H43.9577V0H17.1412Z" fill="#F6F6F6"/>
              <path d="M33.6729 6.07765L37.1012 9.50588L40.5294 12.9341H30.2447V6.07765H33.6729Z" fill="#F6F6F6"/>
            </g>
          </svg>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-4 gap-[73px] mb-[54px]">
          {/* Newsletter */}
          <div className="col-span-1">
            <form onSubmit={handleSubmit} className="relative">
              <div className="bg-[#f9f9f9] rounded-[8px] h-[80px] flex items-center px-[28px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email..."
                  className="flex-1 bg-transparent text-[#292728] placeholder:text-[#9e9e9e] outline-none font-['Lexend_Deca'] font-light text-[16px]"
                />
                <motion.button
                  type="submit"
                  className="flex items-center gap-[5px] ml-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-[#f6d935] rounded-[6.856px] px-[20px] py-[17px] text-[#292728] font-['Lexend_Deca'] font-light text-[12px]">
                    Submit
                  </div>
                  <div className="w-[46.6px] h-[46.6px] bg-[#f6d935] rounded-full flex items-center justify-center">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                      <path d="M13 1L19 7M19 7L13 13M19 7H1" stroke="#292728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.button>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#d0b301] font-['Lexend_Deca'] text-[20px] mb-[30px]">QUICK LINKS</h4>
            <div className="flex flex-col gap-[20px] font-['Lexend_Deca'] font-light text-[20px]">
              <Link to="/about-us" className="hover:text-[#d0b301] transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-[#d0b301] transition-colors">Contact</Link>
              <Link to="/services" className="hover:text-[#d0b301] transition-colors">Services</Link>
              <Link to="/faqs" className="hover:text-[#d0b301] transition-colors">FAQs</Link>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-[#d0b301] font-['Lexend_Deca'] text-[20px] mb-[30px]">OUR SERVICES</h4>
            <div className="flex flex-col gap-[20px] font-['Lexend_Deca'] font-light text-[20px]">
              <a href="#" className="hover:text-[#d0b301] transition-colors">Billboard Marketing</a>
              <a href="#" className="hover:text-[#d0b301] transition-colors">Digital Ads</a>
              <a href="#" className="hover:text-[#d0b301] transition-colors">Smart SMS</a>
              <a href="#" className="hover:text-[#d0b301] transition-colors">WhatsApp Cluster</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <h4 className="text-[#d0b301] font-['Lexend_Deca'] text-[20px] mb-[30px]">CONTACT INFO</h4>
            <div className="font-['Lexend_Deca'] font-light text-[20px] leading-[1.25]">
              <p>3 Adedoyin Ogungbe Crescent,</p>
              <p>Lekki Phase 1,</p>
              <p>Lagos, Nigeria</p>
              <p className="mt-2">+2348122089773</p>
              <p>info@360ads.com.ng</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#f6f6f6] pt-[22px]">
          <div className="flex items-center justify-between">
            <p className="font-['Lexend_Deca'] font-light text-[20px]">360 ads © 2023</p>
            <div className="flex items-center gap-[100px]">
              <p className="font-['Lexend_Deca'] font-light text-[20px]">Terms & Conditions</p>
              <div className="flex items-center gap-[41px]">
                {/* Instagram */}
                <motion.a href="#" whileHover={{ scale: 1.1 }} className="w-[26px] h-[26px]">
                  <svg viewBox="0 0 26 26" fill="none">
                    <path d="M13 0C9.464 0 8.998.015 7.617.075 6.238.135 5.313.344 4.525.65c-.827.322-1.53.752-2.228 1.45C1.6 2.798 1.17 3.502.848 4.33c-.306.788-.515 1.713-.575 3.092C.213 8.802.198 9.268.198 12.804s.015 4.002.075 5.383c.06 1.38.269 2.304.575 3.092.322.828.752 1.53 1.45 2.228.697.698 1.4 1.128 2.228 1.45.788.306 1.713.515 3.092.575 1.38.06 1.846.075 5.382.075s4.002-.015 5.383-.075c1.38-.06 2.304-.269 3.092-.575.828-.322 1.53-.752 2.228-1.45.698-.697 1.128-1.4 1.45-2.228.306-.788.515-1.713.575-3.092.06-1.38.075-1.846.075-5.383s-.015-4.002-.075-5.383c-.06-1.38-.269-2.304-.575-3.092-.322-.828-.752-1.53-1.45-2.228C20.53 1.402 19.826.972 19 .65c-.788-.306-1.713-.515-3.092-.575C14.527.015 14.061 0 10.525 0H13z" fill="#F6F6F6"/>
                  </svg>
                </motion.a>
                {/* Facebook */}
                <motion.a href="#" whileHover={{ scale: 1.1 }} className="w-[26px] h-[26px]">
                  <svg viewBox="0 0 26 26" fill="none">
                    <path d="M26 13c0-7.18-5.82-13-13-13S0 5.82 0 13c0 6.488 4.75 11.862 10.969 12.836V16.75H7.672V13h3.297V10.137c0-3.254 1.94-5.051 4.904-5.051 1.42 0 2.906.254 2.906.254v3.195h-1.637c-1.612 0-2.116.999-2.116 2.025V13h3.601l-.575 3.75h-3.026v9.086C21.25 24.862 26 19.488 26 13z" fill="#F6F6F6"/>
                  </svg>
                </motion.a>
                {/* Twitter */}
                <motion.a href="#" whileHover={{ scale: 1.1 }} className="w-[27px] h-[22px]">
                  <svg viewBox="0 0 27.196 22.1" fill="none">
                    <path d="M27.196 2.616c-1.003.446-2.08.747-3.212.883 1.155-.693 2.042-1.79 2.462-3.097-1.08.64-2.278 1.106-3.553 1.357C21.886.705 20.406 0 18.77 0c-3.073 0-5.566 2.493-5.566 5.565 0 .436.049.861.144 1.268-4.625-.232-8.727-2.447-11.474-5.815-.479.823-.754 1.78-.754 2.803 0 1.932.983 3.636 2.476 4.636-.913-.029-1.772-.279-2.523-.697v.07c0 2.697 1.918 4.947 4.466 5.46-.467.127-.959.195-1.466.195-.358 0-.707-.035-1.046-.1.707 2.207 2.758 3.815 5.19 3.859-1.904 1.492-4.304 2.381-6.913 2.381-.449 0-.892-.026-1.328-.077 2.463 1.579 5.39 2.5 8.533 2.5 10.24 0 15.841-8.48 15.841-15.84 0-.241-.005-.482-.015-.72 1.088-.785 2.033-1.767 2.78-2.884z" fill="#F6F6F6"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
