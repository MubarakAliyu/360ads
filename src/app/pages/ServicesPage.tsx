import { motion } from 'motion/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import imgInfluencer from '../../imports/360Discorvery/0a2a1357b0a0d22e1393ae5298248f5658e60bae.png';
import imgDigitalAds from '../../imports/360Discorvery/35dd9200c2fb9a21aa5befbaac5b6fd39ea45419.png';
import imgHappy from '../../imports/360Discorvery/378bcb891fa00477dda42534e3a46be2cb5ddd9c.png';
import imgBanner from '../../imports/360Discorvery/a3e92476b816bcfcd14c5496815b4ff0cce79351.png';
import imgManAds from '../../imports/360Discorvery/31e8239a3a01fe6147202e05631ff2e3c7a9ebb8.png';
import Analyst from '../../imports/Analyst/Analyst';
import Administrator from '../../imports/Administrator/Administrator';
import ContentManager from '../../imports/ContentManager/ContentManager';
import DigitalMarketer from '../../imports/DigitalMarketer/DigitalMarketer';
import Campaigner from '../../imports/Campaigner/Campaigner';

export default function ServicesPage() {
  const hero = useScrollReveal();
  const discovery = useScrollReveal();
  const services = useScrollReveal();
  const stats = useScrollReveal();
  const whyUs = useScrollReveal();

  const { count: count1, ref: ref1 } = useCountUp(123, 2000);
  const { count: count2, ref: ref2 } = useCountUp(1300, 2000);
  const { count: count3, ref: ref3 } = useCountUp(100, 2000);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        ref={hero.ref}
        className="pt-[95px] min-h-[70vh] flex items-center justify-center bg-[#292728]"
        initial={{ opacity: 0 }}
        animate={{ opacity: hero.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 py-20">
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: hero.isVisible ? 0 : 50, opacity: hero.isVisible ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              className="font-['Neue_Machina'] font-bold text-[60px] leading-[1.2] text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                className="block"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                services/
              </motion.span>
              <motion.span
                className="block"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                this is what we do best.
              </motion.span>
            </motion.h1>

            <motion.p 
              className="font-['Lexend_Deca'] font-light text-[20px] text-[#d0b301] max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Discovery & Execution
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="mt-20 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-[39px] h-[146px] bg-[#f6d935] rounded-full flex items-end justify-center pb-8">
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                <path d="M10 0L10 35M10 35L3 28M10 35L17 28" stroke="#292728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Discovery Section */}
      <motion.section 
        ref={discovery.ref}
        className="py-32 bg-[#292728]"
        initial={{ opacity: 0 }}
        animate={{ opacity: discovery.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: discovery.isVisible ? 0 : 50, opacity: discovery.isVisible ? 1 : 0 }}
          >
            <p className="font-['Lexend_Deca'] text-[24px] text-white leading-relaxed max-w-4xl mx-auto">
              With over <span className="text-[#d0b301] font-medium">70 million</span> target audience we connect your business to the
              right customer using our BILLBOARDS, SMART SMS, DISPLAY ADS,
              VOICE SMS and TOP INFLUENCERS who will promote your brand
              and products.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-16">
            <motion.div 
              ref={ref1}
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: discovery.isVisible ? 0 : 50, opacity: discovery.isVisible ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-['Neue_Machina'] font-extrabold text-[40px] tracking-[3.6px] mb-2">
                <span className="text-white">{count1}</span>
                <span className="text-[#d0b301]">+</span>
              </div>
              <p className="font-['Lexend_Deca'] text-[20px] text-white tracking-[1.8px]">Completed</p>
              <p className="font-['Lexend_Deca'] font-light text-[16px] text-gray-400 tracking-[1.44px]">Sites</p>
            </motion.div>

            <motion.div 
              ref={ref2}
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: discovery.isVisible ? 0 : 50, opacity: discovery.isVisible ? 1 : 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-['Neue_Machina'] font-extrabold text-[40px] tracking-[3.6px] mb-2">
                <span className="text-white">{count2}</span>
                <span className="text-[#d0b301]">+</span>
              </div>
              <p className="font-['Lexend_Deca'] text-[20px] text-white tracking-[1.8px]">Happy</p>
              <p className="font-['Lexend_Deca'] font-light text-[16px] text-gray-400 tracking-[1.44px]">Customers</p>
            </motion.div>

            <motion.div 
              ref={ref3}
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: discovery.isVisible ? 0 : 50, opacity: discovery.isVisible ? 1 : 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-['Neue_Machina'] font-extrabold text-[40px] tracking-[3.6px] mb-2">
                <span className="text-white">{count3}</span>
                <span className="text-[#d0b301]">%</span>
              </div>
              <p className="font-['Lexend_Deca'] text-[20px] text-white tracking-[1.8px]">Clients</p>
              <p className="font-['Lexend_Deca'] font-light text-[16px] text-gray-400 tracking-[1.44px]">Reached</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <motion.section 
        ref={services.ref}
        className="py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: services.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.h2 
            className="font-['Neue_Machina'] text-[48px] text-[#292728] text-center mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: services.isVisible ? 0 : 50, opacity: services.isVisible ? 1 : 0 }}
          >
            Get your audience's attention with our
          </motion.h2>
          <motion.p 
            className="font-['Lexend_Deca'] font-light text-[24px] text-[#d0b301] text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: services.isVisible ? 0 : 30, opacity: services.isVisible ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            collection of tools
          </motion.p>

          {/* Service Cards */}
          <div className="space-y-32">
            {/* Digital Ads */}
            <motion.div
              className="grid grid-cols-2 gap-20 items-center"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#f6d935] rounded-[30px] p-16 relative overflow-hidden">
                <motion.img 
                  src={imgDigitalAds} 
                  alt="Digital Ads" 
                  className="w-full h-auto relative z-10"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#f6d935] to-[#d0b301] opacity-30" />
              </div>

              <div>
                <motion.div 
                  className="inline-block bg-[#292728] text-white rounded-full px-6 py-2 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="font-['Lexend_Deca'] text-[14px]">01</span>
                </motion.div>
                <h3 className="font-['Neue_Machina'] text-[36px] text-[#292728] mb-6">Digital Ads</h3>
                <p className="font-['Lexend_Deca'] font-light text-[18px] text-gray-700 leading-relaxed mb-8">
                  Reach your target audience with precision-targeted digital advertising campaigns across multiple platforms.
                  Our data-driven approach ensures maximum ROI and engagement.
                </p>
                <motion.button
                  className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: '#d0b301' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* Billboard Marketing */}
            <motion.div
              className="grid grid-cols-2 gap-20 items-center"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="order-2">
                <motion.div 
                  className="inline-block bg-[#292728] text-white rounded-full px-6 py-2 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="font-['Lexend_Deca'] text-[14px]">02</span>
                </motion.div>
                <h3 className="font-['Neue_Machina'] text-[36px] text-[#292728] mb-6">Billboard Marketing</h3>
                <p className="font-['Lexend_Deca'] font-light text-[18px] text-gray-700 leading-relaxed mb-8">
                  Make a bold statement with strategic billboard placements that capture attention and drive brand awareness
                  in high-traffic locations.
                </p>
                <motion.button
                  className="flex items-center gap-3 bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: '#d0b301' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>

              <div className="bg-gradient-to-br from-[#292728] to-[#1a1a1a] rounded-[30px] p-16 order-1">
                <motion.img 
                  src={imgBanner} 
                  alt="Billboard" 
                  className="w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>

            {/* Smart SMS */}
            <motion.div
              className="grid grid-cols-2 gap-20 items-center"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#f6d935] rounded-[30px] p-16 relative overflow-hidden">
                <motion.img 
                  src={imgHappy} 
                  alt="Smart SMS" 
                  className="w-full h-auto relative z-10"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>

              <div>
                <motion.div 
                  className="inline-block bg-[#292728] text-white rounded-full px-6 py-2 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="font-['Lexend_Deca'] text-[14px]">03</span>
                </motion.div>
                <h3 className="font-['Neue_Machina'] text-[36px] text-[#292728] mb-6">Smart SMS</h3>
                <p className="font-['Lexend_Deca'] font-light text-[18px] text-gray-700 leading-relaxed mb-8">
                  Connect directly with your customers through intelligent SMS campaigns that deliver personalized messages
                  at the right time.
                </p>
                <motion.button
                  className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: '#d0b301' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* Influencer Marketing */}
            <motion.div
              className="grid grid-cols-2 gap-20 items-center"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="order-2">
                <motion.div 
                  className="inline-block bg-[#292728] text-white rounded-full px-6 py-2 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="font-['Lexend_Deca'] text-[14px]">04</span>
                </motion.div>
                <h3 className="font-['Neue_Machina'] text-[36px] text-[#292728] mb-6">Influencer Marketing</h3>
                <p className="font-['Lexend_Deca'] font-light text-[18px] text-gray-700 leading-relaxed mb-8">
                  Leverage the power of top influencers to amplify your brand message and reach engaged audiences
                  authentically.
                </p>
                <motion.button
                  className="flex items-center gap-3 bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: '#d0b301' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>

              <div className="bg-gradient-to-br from-[#f6d935] to-[#d0b301] rounded-[30px] p-16 order-1">
                <motion.img 
                  src={imgInfluencer} 
                  alt="Influencer" 
                  className="w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Roles Section */}
      <motion.section className="py-32 bg-[#292728]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.h2 
            className="font-['Neue_Machina'] text-[48px] text-white text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Specialized Team
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            {[
              { Component: Analyst, title: "Data Analyst" },
              { Component: Administrator, title: "Campaign Administrator" },
              { Component: ContentManager, title: "Content Manager" },
              { Component: DigitalMarketer, title: "Digital Marketer" },
              { Component: Campaigner, title: "Campaign Specialist" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-[150px] h-[150px] mx-auto mb-6 rounded-full overflow-hidden bg-white p-4">
                  <item.Component />
                </div>
                <h3 className="font-['Neue_Machina'] text-[20px] text-white">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        ref={whyUs.ref}
        className="py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: whyUs.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div 
            className="bg-gradient-to-br from-[#292728] to-[#1a1a1a] rounded-[30px] p-20 text-center"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: whyUs.isVisible ? 1 : 0.9, y: whyUs.isVisible ? 0 : 50 }}
          >
            <h2 className="font-['Neue_Machina'] text-[48px] text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-['Lexend_Deca'] font-light text-[20px] text-gray-300 mb-12 max-w-2xl mx-auto">
              Join over 1,300 happy customers who have transformed their marketing with our services
            </p>
            <motion.button
              className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] font-medium text-[18px] px-12 py-5 rounded-[10px]"
              whileHover={{ scale: 1.05, backgroundColor: '#d0b301' }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Campaign Today
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
