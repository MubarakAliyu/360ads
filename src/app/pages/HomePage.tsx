import { motion } from 'motion/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import imgAdsGirl from '../../imports/360HomeMain/ef5a47144dad7758736e78fef7aebbc886f3fcc6.png';
import imgInfluencer from '../../imports/360HomeMain/0a2a1357b0a0d22e1393ae5298248f5658e60bae.png';
import imgThink from '../../imports/360HomeMain/ae9043d7401ff678d87b78587b7d7538a11f3e38.png';
import imgAdsContent from '../../imports/360HomeMain/4b0fe99774e8f1d5413f56831e0c275c5932ba38.png';

export default function HomePage() {
  const hero = useScrollReveal();
  const stats = useScrollReveal();
  const features = useScrollReveal();
  const why360 = useScrollReveal();
  const newsletter = useScrollReveal();

  const { count: count1, ref: ref1 } = useCountUp(98, 2000);
  const { count: count2, ref: ref2 } = useCountUp(13500, 2000);
  const { count: count3, ref: ref3 } = useCountUp(98, 2000);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        ref={hero.ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: hero.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="pt-[95px] min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-8 py-20">
          <div className="grid grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: hero.isVisible ? 0 : -100, opacity: hero.isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="font-['Neue_Machina'] font-bold text-[77px] leading-[1.1] text-[#292728] mb-8"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  All day,
                </motion.span>
                <motion.span
                  className="block text-[#d0b301]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Ad campaign
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  24hrs
                </motion.span>
              </motion.h1>

              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  className="bg-[#292728] text-white font-['Lexend_Deca'] text-[16px] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: '#d0b301' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register
                </motion.button>
                <motion.button
                  className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] text-[16px] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: '#d0b301', color: '#fff' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: hero.isVisible ? 0 : 100, opacity: hero.isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.img 
                src={imgAdsGirl} 
                alt="Ad Campaign" 
                className="w-full h-auto"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={stats.ref}
        className="bg-[#292728] py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: stats.isVisible ? 1 : 0, y: stats.isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-16">
            <motion.div 
              ref={ref1}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-['Neue_Machina'] font-bold text-[60px] text-[#f6d935] mb-4">
                {count1}%
              </div>
              <p className="font-['Lexend_Deca'] font-light text-white text-[20px]">
                Targetting Accuracy
              </p>
            </motion.div>

            <motion.div 
              ref={ref2}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-['Neue_Machina'] font-bold text-[60px] text-[#f6d935] mb-4">
                {count2.toLocaleString()}+
              </div>
              <p className="font-['Lexend_Deca'] font-light text-white text-[20px]">
                Daily Engagements
              </p>
            </motion.div>

            <motion.div 
              ref={ref3}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-['Neue_Machina'] font-bold text-[60px] text-[#f6d935] mb-4">
                {count3}%
              </div>
              <p className="font-['Lexend_Deca'] font-light text-white text-[20px]">
                ROI increase
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        ref={features.ref}
        className="py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: features.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.p 
            className="font-['Lexend_Deca'] font-light text-[#d0b301] text-[20px] mb-16"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: features.isVisible ? 0 : -50, opacity: features.isVisible ? 1 : 0 }}
          >
            Why we stand out
          </motion.p>

          <div className="grid grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: features.isVisible ? 0 : -100, opacity: features.isVisible ? 1 : 0 }}
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
              <p className="font-['Lexend_Deca'] font-light text-[20px] text-[#292728] leading-relaxed">
                We work as one team and deliver projects{' '}
                <span className="text-[#d0b301]">concurrently...</span>
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: features.isVisible ? 1 : 0.8, opacity: features.isVisible ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-[#f6d935] rounded-[20px] p-12 relative overflow-hidden">
                <motion.img 
                  src={imgInfluencer} 
                  alt="Influencer" 
                  className="w-full h-auto relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#f6d935] to-[#d0b301] opacity-50" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-20 items-center">
            <motion.div
              className="relative order-2 md:order-1"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: features.isVisible ? 1 : 0.8, opacity: features.isVisible ? 1 : 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.img 
                src={imgThink} 
                alt="Think" 
                className="w-full h-auto rounded-[20px]"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: features.isVisible ? 0 : 100, opacity: features.isVisible ? 1 : 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="font-['Neue_Machina'] text-[40px] leading-[1.2] text-[#292728] mb-8">
                <motion.span 
                  className="block"
                  whileHover={{ x: -10, color: '#d0b301' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Get your audience's attention with our
                </motion.span>
                <motion.span 
                  className="block text-[#d0b301]"
                  whileHover={{ x: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  collection of tools
                </motion.span>
              </h2>
              <p className="font-['Lexend_Deca'] font-light text-[20px] text-[#292728] leading-relaxed mb-8">
                Join us to move from idea to execution faster with our all-in-one platform.
              </p>
              <motion.button
                className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] px-8 py-4 rounded-[10px]"
                whileHover={{ scale: 1.05, backgroundColor: '#d0b301' }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Advertise with Us</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why 360 Section */}
      <motion.section 
        ref={why360.ref}
        className="bg-[#292728] py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: why360.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.h2 
            className="font-['Neue_Machina'] text-[48px] text-white text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: why360.isVisible ? 0 : 50, opacity: why360.isVisible ? 1 : 0 }}
          >
            Why 360 ads?
          </motion.h2>

          <div className="grid grid-cols-2 gap-16">
            {[
              {
                title: "Target Strategically",
                description: "No more wasteful spending with adverts to unintended target audience",
                color: "#f6d935"
              },
              {
                title: "Optimize value",
                description: "Get an optimal ROI with our audience targeting features",
                color: "#d0b301"
              },
              {
                title: "Target Granularly",
                description: "Select particular attributes and demographic specifics to tailor your ads",
                color: "#f6d935"
              },
              {
                title: "Monitor in real-time",
                description: "Receive insights and analytics on active campaigns through live updates",
                color: "#d0b301"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] rounded-[20px] p-10 relative overflow-hidden group"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: why360.isVisible ? 0 : 50, opacity: why360.isVisible ? 1 : 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-2 h-full"
                  style={{ backgroundColor: item.color }}
                  initial={{ height: 0 }}
                  whileHover={{ height: '100%' }}
                />
                <h3 className="font-['Neue_Machina'] text-[28px] text-white mb-4 group-hover:text-[#f6d935] transition-colors">
                  {item.title}
                </h3>
                <p className="font-['Lexend_Deca'] font-light text-[18px] text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        ref={newsletter.ref}
        className="py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: newsletter.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div 
            className="bg-[#292728] rounded-[30px] p-20 relative overflow-hidden"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: newsletter.isVisible ? 1 : 0.9, y: newsletter.isVisible ? 0 : 50 }}
          >
            <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-['Neue_Machina'] text-[48px] text-white mb-6">
                  Subscribe to Our Newsletter
                </h2>
                <p className="font-['Lexend_Deca'] font-light text-[20px] text-gray-300 mb-8">
                  Stay updated with the latest trends in digital advertising
                </p>
                <form className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white rounded-[10px] px-6 py-4 font-['Lexend_Deca'] text-[16px] outline-none"
                  />
                  <motion.button
                    type="submit"
                    className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] font-medium px-8 py-4 rounded-[10px]"
                    whileHover={{ scale: 1.05, backgroundColor: '#d0b301' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </motion.button>
                </form>
              </div>
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img src={imgAdsContent} alt="Newsletter" className="w-full h-auto" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
