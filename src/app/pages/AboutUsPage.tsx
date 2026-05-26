import { motion } from 'motion/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import imgThink from '../../imports/360AboutUs/ae9043d7401ff678d87b78587b7d7538a11f3e38.png';
import imgManInfluencer from '../../imports/360AboutUs/8c2039319c937768cba1203c5045cfb4d2798232.png';

export default function AboutUsPage() {
  const hero = useScrollReveal();
  const culture = useScrollReveal();
  const howWeThink = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        ref={hero.ref}
        className="pt-[95px] min-h-[60vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hero.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 py-20">
          <motion.h1 
            className="font-['Neue_Machina'] font-extrabold text-[77px] leading-[1.1] text-[#292728] text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: hero.isVisible ? 0 : 50, opacity: hero.isVisible ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="block"
              whileHover={{ x: 10, color: '#d0b301' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              building concurrent
            </motion.span>
            <motion.span
              className="block"
              whileHover={{ x: -10, color: '#d0b301' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ——— projects together
            </motion.span>
          </motion.h1>
        </div>
      </motion.section>

      {/* Culture Section */}
      <motion.section 
        ref={culture.ref}
        className="py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: culture.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: culture.isVisible ? 0 : -100, opacity: culture.isVisible ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <motion.p 
                className="font-['Lexend_Deca'] font-light text-[#d4b601] text-[20px]"
                whileHover={{ x: 10 }}
              >
                Culture @ 360 ads
              </motion.p>

              <div className="font-['Lexend_Deca'] font-light text-[24px] text-[#292628] leading-relaxed space-y-6">
                <p>
                  360 Ads NG is a tech company that specializes in Digital Marketing. Our recently
                  developed web-based digital campaign manager enables corporations & SME's to
                  promote and target adverts to prospective customers.
                </p>
                <p>
                  Our aim is to aid organizations drive digital campaign model via our collections of
                  tools specifically developed to manage the design process, generate leads, improve
                  user responsiveness and efficiently deliver advert contents.
                </p>
              </div>

              <motion.div className="flex items-center gap-3">
                <motion.button
                  className="bg-[#292728] text-white font-['Lexend_Deca'] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: '#d0b301' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Advertise with Us
                </motion.button>
                <motion.div
                  className="w-[68px] h-[68px] bg-[#292728] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: culture.isVisible ? 0 : 100, opacity: culture.isVisible ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#f6d935] to-[#d0b301] rounded-[30px] p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img 
                  src={imgManInfluencer} 
                  alt="Man Influencer" 
                  className="w-full h-auto relative z-10"
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How We Think Section */}
      <motion.section 
        ref={howWeThink.ref}
        className="py-32 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: howWeThink.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.p 
            className="font-['Lexend_Deca'] font-light text-[#d0b301] text-[20px] mb-16"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: howWeThink.isVisible ? 0 : -50, opacity: howWeThink.isVisible ? 1 : 0 }}
          >
            How we think
          </motion.p>

          <div className="grid grid-cols-2 gap-20 items-start mb-16">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: howWeThink.isVisible ? 0 : -100, opacity: howWeThink.isVisible ? 1 : 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-['Neue_Machina'] text-[40px] leading-[1.2] text-[#292728] mb-8">
                <motion.span 
                  className="block"
                  whileHover={{ x: 10, color: '#d0b301' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  We're challengers at heart and
                </motion.span>
                <motion.span 
                  className="block"
                  whileHover={{ x: 10, color: '#d0b301' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  builders by nature.
                </motion.span>
              </h2>
              <p className="font-['Lexend_Deca'] font-light text-[20px] text-[#292728] leading-relaxed mb-8">
                We work as one team and deliver projects{' '}
                <span className="text-[#d0b301]">concurrently...</span>
              </p>

              <motion.div className="flex items-center gap-3">
                <motion.div
                  className="w-[67px] h-[67px] bg-[#f6d935] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#292728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <motion.button
                  className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: '#d0b301' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Dive into Our Culture
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: howWeThink.isVisible ? 0 : 100, opacity: howWeThink.isVisible ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                {
                  title: "Innovation-Driven",
                  description: "We constantly push boundaries to deliver cutting-edge solutions"
                },
                {
                  title: "Client-Focused",
                  description: "Your success is our priority, and we tailor our approach to your unique needs"
                },
                {
                  title: "Results-Oriented",
                  description: "We measure our success by the tangible impact we create for your business"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#f9f9f9] rounded-[20px] p-8 border-l-4 border-[#f6d935]"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: howWeThink.isVisible ? 0 : 50, opacity: howWeThink.isVisible ? 1 : 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  whileHover={{ scale: 1.02, borderColor: '#d0b301' }}
                >
                  <h3 className="font-['Neue_Machina'] text-[24px] text-[#292728] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-['Lexend_Deca'] font-light text-[16px] text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-20"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: howWeThink.isVisible ? 0 : 100, opacity: howWeThink.isVisible ? 1 : 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.img 
              src={imgThink} 
              alt="Think" 
              className="w-full h-auto rounded-[30px]"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section className="py-32 bg-[#292728]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.h2 
            className="font-['Neue_Machina'] text-[48px] text-white text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-3 gap-12">
            {[
              { title: "Integrity", icon: "✓", color: "#f6d935" },
              { title: "Excellence", icon: "★", color: "#d0b301" },
              { title: "Innovation", icon: "◆", color: "#f6d935" },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold"
                  style={{ backgroundColor: value.color }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="font-['Neue_Machina'] text-[28px] text-white mb-4">
                  {value.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
