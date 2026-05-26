import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

// ─── All Assets ───────────────────────────────────────────────────────────────
// 360HomeMain
import imgMegaphoneWoman from "../imports/360HomeMain/ef5a47144dad7758736e78fef7aebbc886f3fcc6.png";
import imgInfluencerWoman from "../imports/360HomeMain/0a2a1357b0a0d22e1393ae5298248f5658e60bae.png";
import imgLightbulb from "../imports/360HomeMain/ae9043d7401ff678d87b78587b7d7538a11f3e38.png";
import imgSpeechBubbleWoman from "../imports/360HomeMain/4b0fe99774e8f1d5413f56831e0c275c5932ba38.png";
import imgArmsWideWoman from "../imports/360HomeMain/60332af14afb16fcc13c4aa6cfdac05ac2c60649.png";
// 360AboutUs
import imgManInfluencer from "../imports/360AboutUs/8c2039319c937768cba1203c5045cfb4d2798232.png";
import imgLightbulbAbout from "../imports/360AboutUs/ae9043d7401ff678d87b78587b7d7538a11f3e38.png";
// 360Discorvery (Services)
import imgInfluencerSvc from "../imports/360Discorvery/0a2a1357b0a0d22e1393ae5298248f5658e60bae.png";
import imgManPhoneEmojis from "../imports/360Discorvery/31e8239a3a01fe6147202e05631ff2e3c7a9ebb8.png";
import imgShoppingPhone from "../imports/360Discorvery/35dd9200c2fb9a21aa5befbaac5b6fd39ea45419.png";
import imgWomanPhone from "../imports/360Discorvery/378bcb891fa00477dda42534e3a46be2cb5ddd9c.png";
import imgBillboard from "../imports/360Discorvery/a3e92476b816bcfcd14c5496815b4ff0cce79351.png";
// Group156
import imgSpeechBubbleCta from "../imports/Group156/4b0fe99774e8f1d5413f56831e0c275c5932ba38.png";

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

function useCountUp(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !triggered) setTriggered(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggered]);
  useEffect(() => {
    if (!triggered) return;
    const startTime = Date.now();
    const update = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(start + (end - start) * ease));
      if (progress < 1) requestAnimationFrame(update);
      else setCount(end);
    };
    requestAnimationFrame(update);
  }, [triggered, end, duration, start]);
  return { count, ref };
}

// ─── Logo — exact Figma paths from svg-gbl50g3kbt.ts ─────────────────────────

function Logo({ light = false }: { light?: boolean }) {
  const fill = light ? "#F6F6F6" : "#292728";
  return (
    <svg
      width="109"
      height="49"
      viewBox="-1 0 110 49.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular 360° arrow mark */}
      <path d="M46.6355 32.369C45.7392 32.3655 44.855 32.1623 44.047 31.7743C42.5492 35.8441 39.8133 39.342 36.2241 41.7761C32.6349 44.2101 28.373 45.4578 24.0378 45.3437C19.7026 45.2296 15.5123 43.7595 12.0561 41.14C8.59989 38.5205 6.05176 34.8836 4.77007 30.7406C3.48839 26.5977 3.53763 22.1571 4.91087 18.0436C6.28411 13.9301 8.91227 10.3505 12.4257 7.80832C15.9391 5.26613 20.1611 3.88927 24.4977 3.87133C28.8344 3.85339 33.0675 5.19528 36.6019 7.70831L32.6226 11.504L43.2639 11.7494L43.5157 1.11134L39.4535 4.9899C35.302 1.8456 30.2598 0.0999036 25.0529 0.00415984C19.8459 -0.0915839 14.7429 1.46758 10.4786 4.45713C6.21437 7.44668 3.00883 11.7124 1.32361 16.64C-0.36161 21.5676 -0.439573 26.9029 1.10095 31.8777C2.64147 36.8524 5.721 41.21 9.8961 44.3228C14.0712 47.4357 19.1265 49.1433 24.334 49.1998C29.5415 49.2562 34.6326 47.6586 38.8742 44.6369C43.1158 41.6153 46.289 37.3255 47.937 32.3853L46.6355 32.369Z" fill={fill}/>
      {/* 3 */}
      <path d="M23.727 18.6814C23.7253 17.5272 23.2659 16.4208 22.4496 15.6047C21.6333 14.7887 20.5266 14.3297 19.3724 14.3284H12.9249C11.7706 14.3297 10.664 14.7887 9.84768 15.6047C9.03134 16.4208 8.57194 17.5272 8.57022 18.6814V21.1188H12.054V18.6814C12.0544 18.4506 12.1463 18.2293 12.3095 18.0661C12.4728 17.9028 12.694 17.811 12.9249 17.8105H19.3773C19.6081 17.811 19.8294 17.9028 19.9926 18.0661C20.1559 18.2293 20.2478 18.4506 20.2482 18.6814V21.9848C20.2478 22.2148 20.1565 22.4354 19.9944 22.5985C19.8322 22.7616 19.6121 22.8541 19.3821 22.8558H12.054V26.3395H19.3659C19.5967 26.3399 19.818 26.4318 19.9813 26.595C20.1445 26.7583 20.2364 26.9796 20.2368 27.2104V30.5154C20.2364 30.7463 20.1445 30.9675 19.9813 31.1308C19.818 31.294 19.5967 31.3859 19.3659 31.3864H12.9249C12.694 31.3859 12.4728 31.294 12.3095 31.1308C12.1463 30.9675 12.0544 30.7463 12.054 30.5154V28.0781H8.57022V30.5154C8.57151 31.6699 9.03072 32.7768 9.8471 33.5932C10.6635 34.4096 11.7704 34.8688 12.9249 34.8701H19.3773C20.5318 34.8688 21.6387 34.4096 22.455 33.5932C23.2714 32.7768 23.7306 31.6699 23.7319 30.5154V27.2104C23.7323 26.2676 23.4254 25.3504 22.8577 24.5976C23.4256 23.845 23.7325 22.9277 23.7319 21.9848L23.727 18.6814Z" fill={fill}/>
      {/* 6 */}
      <path d="M40.602 22.95V18.6814C40.6002 17.5272 40.1409 16.4208 39.3245 15.6047C38.5082 14.7887 37.4016 14.3297 36.2473 14.3284H29.8014C28.6472 14.3297 27.5405 14.7887 26.7242 15.6047C25.9079 16.4208 25.4485 17.5272 25.4468 18.6814V27.9806V30.517C25.4466 31.089 25.559 31.6553 25.7778 32.1838C25.9966 32.7122 26.3173 33.1923 26.7217 33.5967C27.1261 34.0011 27.6063 34.3219 28.1347 34.5407C28.6631 34.7594 29.2295 34.8719 29.8014 34.8717H36.2473C37.4018 34.8704 38.5087 34.4112 39.3251 33.5948C40.1415 32.7784 40.6007 31.6716 40.602 30.517V27.212C40.6007 26.0575 40.1415 24.9506 39.3251 24.1343C38.5087 23.3179 37.4018 22.8587 36.2473 22.8574H29.8014C29.5089 22.8575 29.2172 22.8869 28.9305 22.9451V18.6814C28.9309 18.4506 29.0228 18.2293 29.1861 18.0661C29.3493 17.9028 29.5706 17.811 29.8014 17.8105H36.2473C36.4782 17.811 36.6994 17.9028 36.8627 18.0661C37.0259 18.2293 37.1178 18.4506 37.1182 18.6814V21.1724C38.4433 21.3658 39.6677 21.9905 40.602 22.95ZM28.9305 27.212C28.9309 26.9812 29.0228 26.7599 29.1861 26.5967C29.3493 26.4334 29.5706 26.3416 29.8014 26.3411H36.2473C36.4782 26.3416 36.6994 26.4334 36.8627 26.5967C37.0259 26.7599 37.1178 26.9812 37.1182 27.212V30.517C37.1178 30.7479 37.0259 30.9692 36.8627 31.1324C36.6994 31.2956 36.4782 31.3876 36.2473 31.388H29.8014C29.6434 31.3877 29.4883 31.3447 29.3527 31.2634C29.2171 31.1822 29.106 31.0658 29.0312 30.9265C28.9645 30.801 28.9299 30.6608 28.9305 30.5187V27.212Z" fill={fill}/>
      {/* 0 */}
      <path d="M53.1231 30.6455H46.6756C45.521 30.6443 44.4142 30.185 43.5978 29.3687C42.7814 28.5523 42.3222 27.4454 42.3209 26.2909V14.4569C42.3222 13.3024 42.7814 12.1955 43.5978 11.3791C44.4142 10.5627 45.521 10.1036 46.6756 10.1023H53.1214C54.276 10.1036 55.3829 10.5627 56.1992 11.3791C57.0156 12.1955 57.4748 13.3024 57.4761 14.4569V26.2909C57.4744 27.445 57.0153 28.5514 56.1993 29.3676C55.3834 30.1839 54.2772 30.6434 53.1231 30.6455ZM46.6772 13.5844C46.4462 13.5844 46.2247 13.6761 46.0614 13.8394C45.898 14.0028 45.8063 14.2243 45.8063 14.4553V26.2892C45.8067 26.5201 45.8986 26.7414 46.0618 26.9046C46.2251 27.0678 46.4463 27.1598 46.6772 27.1602H53.1231C53.3539 27.1598 53.5752 27.0678 53.7384 26.9046C53.9017 26.7414 53.9936 26.5201 53.994 26.2892V14.4553C53.9936 14.2244 53.9017 14.0032 53.7384 13.8399C53.5752 13.6767 53.3539 13.5848 53.1231 13.5844H46.6772Z" fill={fill}/>
      {/* ADS wordmark — offset to match Figma position (left:65.04 top:18.13) */}
      <g transform="translate(65.04, 18.13)">
        {/* A */}
        <path d="M6.49138 8.67685H10.019L7.55567 3.44476L3.16851 12.934H0L5.99579 0.812437L9.00181 0L15.2104 12.934H12.0419L11.2458 11.2442H5.39621L6.49138 8.67685Z" fill={fill}/>
        {/* D */}
        <path d="M19.1913 4.06066V10.2531H23.9197C25.5771 10.2531 26.4399 8.38446 26.4399 6.54835C26.4399 4.76099 25.6275 3.00612 23.9197 3.00612H16.1853L16.9978 0.325077H24.2772C27.7869 0.325077 29.6084 3.55858 29.6084 6.74333C29.6084 9.86309 27.8682 12.9341 24.2772 12.9341H16.1853V4.87472L19.1913 4.06066Z" fill={fill}/>
        {/* S */}
        <path d="M30.5833 4.1598C30.5833 2.2262 32.1107 0.325077 35.1005 0.325077H43.6814L42.869 3.00612H35.133C34.2068 3.00612 33.7518 3.59109 33.7518 4.1598C33.7518 4.7285 34.223 5.29721 35.133 5.29721H39.4876C42.4303 5.29721 43.9577 7.19833 43.9577 9.13193C43.9577 11.0168 42.5115 12.9341 39.4876 12.9341H30.5833L31.3958 10.2531H39.4551C40.3651 10.2531 40.8363 9.71688 40.8363 9.13193C40.8363 8.54697 40.3813 7.96198 39.4551 7.96198H35.1005C32.062 7.96198 30.5833 6.0609 30.5833 4.1598Z" fill={fill}/>
      </g>
    </svg>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function Navigation({ currentPage, navigate }: { currentPage: string; navigate: (p: string) => void }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const links = [
    { label: "About Us", page: "about" },
    { label: "Services", page: "services" },
    { label: "FAQs", page: "faqs" },
    { label: "Contact Us", page: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9f9] h-[95px] flex items-center justify-between px-8 md:px-[105px] shadow-sm">
      <button onClick={() => navigate("home")} className="shrink-0">
        <Logo />
      </button>

      <div className="hidden md:flex items-center gap-10 lg:gap-[83px]">
        {links.map(({ label, page }) => (
          <div
            key={page}
            className="relative"
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
          >
            <button
              onClick={() => navigate(page)}
              className="font-['Lexend_Deca'] text-[16px] text-[#292728] hover:text-[#d0b301] transition-colors"
            >
              {label}
            </button>
            {currentPage === page && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#292728] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {hovered === label && currentPage !== page && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#d0b301] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </div>
        ))}
      </div>

      <motion.button
        className="relative bg-[#d0b301] text-white font-['Lexend_Deca'] text-[14px] h-[50px] px-[30px] rounded-[10px] overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-[#292728]"
          initial={{ scale: 0, opacity: 0, borderRadius: "50%" }}
          whileHover={{ scale: 3, opacity: 1, borderRadius: "0%" }}
          transition={{ duration: 0.4 }}
        />
        <span className="relative z-10">Get Started</span>
      </motion.button>
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ navigate }: { navigate: (p: string) => void }) {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#292728] text-white pt-[88px] pb-12">
      <div className="max-w-[1132px] mx-auto px-8">
        <div className="mb-[49px]">
          <Logo light />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[73px] mb-[54px]">
          {/* Newsletter signup */}
          <div>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="bg-[#f9f9f9] rounded-[8px] h-[80px] flex items-center px-6 gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email..."
                className="flex-1 bg-transparent text-[#292728] placeholder:text-[#9e9e9e] outline-none font-['Lexend_Deca'] font-light text-[15px] min-w-0"
              />
              <motion.button
                type="submit"
                className="shrink-0 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-[#f6d935] rounded-[6px] px-3 py-2 text-[#292728] font-['Lexend_Deca'] text-[12px]">
                  Submit
                </span>
                <div className="w-[40px] h-[40px] bg-[#f6d935] rounded-full flex items-center justify-center shrink-0">
                  <svg width="18" height="14" viewBox="0 0 20 14" fill="none">
                    <path d="M13 1L19 7M19 7L13 13M19 7H1" stroke="#292728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#d0b301] font-['Lexend_Deca'] text-[18px] mb-[24px] uppercase tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-[16px] font-['Lexend_Deca'] font-light text-[18px]">
              {[["About Us","about"],["Contact","contact"],["Services","services"],["FAQs","faqs"]].map(([label, page]) => (
                <button key={page} onClick={() => navigate(page)} className="text-left hover:text-[#d0b301] transition-colors">
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-[#d0b301] font-['Lexend_Deca'] text-[18px] mb-[24px] uppercase tracking-wide">Our Services</h4>
            <div className="flex flex-col gap-[16px] font-['Lexend_Deca'] font-light text-[18px]">
              {["Billboard Marketing","Digital Ads","Smart SMS","WhatsApp Cluster"].map(s => (
                <a key={s} href="#" className="hover:text-[#d0b301] transition-colors">{s}</a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:text-right">
            <h4 className="text-[#d0b301] font-['Lexend_Deca'] text-[18px] mb-[24px] uppercase tracking-wide">Contact Info</h4>
            <div className="font-['Lexend_Deca'] font-light text-[17px] leading-[1.6] space-y-1">
              <p>3 Adedoyin Ogungbe Crescent,</p>
              <p>Lekki Phase 1, Lagos, Nigeria</p>
              <p>+2348122089773</p>
              <p>info@360ads.com.ng</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-[22px] flex flex-wrap items-center justify-between gap-4">
          <p className="font-['Lexend_Deca'] font-light text-[18px]">360 ads © 2023</p>
          <div className="flex items-center gap-10 md:gap-[100px]">
            <p className="font-['Lexend_Deca'] font-light text-[18px]">Terms &amp; Conditions</p>
            <div className="flex items-center gap-6">
              {/* Instagram */}
              <motion.a href="#" whileHover={{ scale: 1.15, color: "#f6d935" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </motion.a>
              {/* Facebook */}
              <motion.a href="#" whileHover={{ scale: 1.15, color: "#f6d935" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </motion.a>
              {/* Twitter / X */}
              <motion.a href="#" whileHover={{ scale: 1.15, color: "#f6d935" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Reusable Arrow ───────────────────────────────────────────────────────────

function ArrowRight({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function HomePage({ navigate }: { navigate: (p: string) => void }) {
  const hero      = useScrollReveal();
  const stats     = useScrollReveal();
  const features  = useScrollReveal();
  const why360    = useScrollReveal();
  const newsletter = useScrollReveal();

  const { count: c1, ref: r1 } = useCountUp(98, 2000);
  const { count: c2, ref: r2 } = useCountUp(13500, 2000);
  const { count: c3, ref: r3 } = useCountUp(98, 2000);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">

      {/* ── Hero ── */}
      <motion.section
        ref={hero.ref}
        className="pt-[95px] min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hero.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: hero.isVisible ? 0 : -80, opacity: hero.isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-['Neue_Machina'] font-black text-[56px] lg:text-[77px] leading-[1.05] text-[#292728] mb-10">
                <motion.span className="block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  All day,
                </motion.span>
                <motion.span className="block text-[#d0b301]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                  Ad campaign
                </motion.span>
                <motion.span className="block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  24hrs
                </motion.span>
              </h1>
              <motion.div className="flex items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
                <motion.button
                  className="bg-[#292728] text-white font-['Lexend_Deca'] text-[16px] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: "#d0b301" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register
                </motion.button>
                <motion.button
                  className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] text-[16px] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: "#d0b301", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: hero.isVisible ? 0 : 80, opacity: hero.isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center"
            >
              <motion.img
                src={imgMegaphoneWoman}
                alt="Ad Campaign"
                className="w-full max-w-[480px] h-auto object-contain drop-shadow-2xl"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── Stats ── */}
      <motion.section
        ref={stats.ref}
        className="bg-[#292728] py-20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: stats.isVisible ? 1 : 0, y: stats.isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <motion.div ref={r1} className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="font-['Neue_Machina'] font-black text-[64px] text-[#f6d935]">{c1}%</div>
              <p className="font-['Lexend_Deca'] font-light text-white text-[20px] mt-2">Targeting Accuracy</p>
            </motion.div>
            <motion.div ref={r2} className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="font-['Neue_Machina'] font-black text-[64px] text-[#f6d935]">{c2.toLocaleString()}+</div>
              <p className="font-['Lexend_Deca'] font-light text-white text-[20px] mt-2">Daily Engagements</p>
            </motion.div>
            <motion.div ref={r3} className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="font-['Neue_Machina'] font-black text-[64px] text-[#f6d935]">{c3}%</div>
              <p className="font-['Lexend_Deca'] font-light text-white text-[20px] mt-2">ROI Increase</p>
            </motion.div>
          </div>
        </div>
        {/* Decorative floating woman — arms wide */}
        <motion.img
          src={imgArmsWideWoman}
          alt=""
          aria-hidden
          className="absolute -bottom-4 right-8 w-[220px] opacity-10 pointer-events-none hidden lg:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.section>

      {/* ── Features: Why We Stand Out ── */}
      <motion.section
        ref={features.ref}
        className="py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: features.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.p
            className="font-['Lexend_Deca'] font-light text-[#d0b301] text-[20px] mb-16"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: features.isVisible ? 0 : -40, opacity: features.isVisible ? 1 : 0 }}
          >
            Why we stand out
          </motion.p>

          {/* Row 1: copy left, influencer right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: features.isVisible ? 0 : -80, opacity: features.isVisible ? 1 : 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-['Neue_Machina'] text-[36px] lg:text-[42px] leading-[1.15] text-[#292728] mb-6">
                <motion.span className="block" whileHover={{ x: 8, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>
                  {"We're challengers at heart and"}
                </motion.span>
                <motion.span className="block" whileHover={{ x: 8, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>
                  builders by nature.
                </motion.span>
              </h2>
              <p className="font-['Lexend_Deca'] font-light text-[20px] text-[#292728] leading-relaxed">
                We work as one team and deliver projects{" "}
                <span className="text-[#d0b301]">concurrently...</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: features.isVisible ? 1 : 0.85, opacity: features.isVisible ? 1 : 0 }}
              transition={{ delay: 0.35 }}
              className="bg-[#f6d935] rounded-[24px] overflow-hidden"
            >
              <motion.img
                src={imgInfluencerWoman}
                alt="Influencer"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260 }}
              />
            </motion.div>
          </div>

          {/* Row 2: lightbulb left, copy right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              className="order-2 md:order-1 rounded-[24px] overflow-hidden bg-[#f6d935]"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: features.isVisible ? 1 : 0.85, opacity: features.isVisible ? 1 : 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.img
                src={imgLightbulb}
                alt="Innovation"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.04, rotate: 1 }}
                transition={{ type: "spring", stiffness: 260 }}
              />
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: features.isVisible ? 0 : 80, opacity: features.isVisible ? 1 : 0 }}
              transition={{ delay: 0.65 }}
            >
              <h2 className="font-['Neue_Machina'] text-[36px] lg:text-[42px] leading-[1.15] text-[#292728] mb-6">
                <motion.span className="block" whileHover={{ x: -8, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>
                  {"Get your audience's attention"}
                </motion.span>
                <motion.span className="block text-[#d0b301]" whileHover={{ x: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                  with our collection of tools
                </motion.span>
              </h2>
              <p className="font-['Lexend_Deca'] font-light text-[20px] text-[#292728] leading-relaxed mb-8">
                Join us to move from idea to execution faster with our all-in-one platform.
              </p>
              <motion.button
                className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] text-[16px] px-8 py-4 rounded-[10px]"
                whileHover={{ scale: 1.05, backgroundColor: "#d0b301" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("services")}
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

      {/* ── Why 360 ── */}
      <motion.section
        ref={why360.ref}
        className="bg-[#292728] py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: why360.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.h2
            className="font-['Neue_Machina'] text-[48px] text-white text-center mb-20"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: why360.isVisible ? 0 : 40, opacity: why360.isVisible ? 1 : 0 }}
          >
            Why 360 ads?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Target Strategically", desc: "No more wasteful spending with adverts to unintended target audience", color: "#f6d935" },
              { title: "Optimize Value", desc: "Get an optimal ROI with our audience targeting features", color: "#d0b301" },
              { title: "Target Granularly", desc: "Select particular attributes and demographic specifics to tailor your ads", color: "#f6d935" },
              { title: "Monitor in Real-Time", desc: "Receive insights and analytics on active campaigns through live updates", color: "#d0b301" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#1a1a1a] rounded-[20px] p-10 relative overflow-hidden group cursor-default"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: why360.isVisible ? 0 : 40, opacity: why360.isVisible ? 1 : 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -6 }}
              >
                <div className="absolute left-0 top-0 w-1.5 h-full" style={{ backgroundColor: item.color }} />
                <h3 className="font-['Neue_Machina'] text-[26px] text-white mb-3 group-hover:text-[#f6d935] transition-colors pl-4">
                  {item.title}
                </h3>
                <p className="font-['Lexend_Deca'] font-light text-[17px] text-gray-300 leading-relaxed pl-4">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Newsletter ── */}
      <motion.section
        ref={newsletter.ref}
        className="py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: newsletter.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            className="bg-[#292728] rounded-[30px] p-12 lg:p-20 overflow-hidden"
            initial={{ scale: 0.92, y: 40 }}
            animate={{ scale: newsletter.isVisible ? 1 : 0.92, y: newsletter.isVisible ? 0 : 40 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-['Neue_Machina'] text-[38px] lg:text-[46px] text-white mb-4 leading-tight">
                  Subscribe to Our Newsletter
                </h2>
                <p className="font-['Lexend_Deca'] font-light text-[18px] text-gray-300 mb-8">
                  Stay updated with the latest trends in digital advertising
                </p>
                <form className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white rounded-[10px] px-5 py-4 font-['Lexend_Deca'] text-[15px] outline-none min-w-0"
                  />
                  <motion.button
                    type="submit"
                    className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] font-semibold px-7 py-4 rounded-[10px] shrink-0"
                    whileHover={{ scale: 1.05, backgroundColor: "#d0b301" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </motion.button>
                </form>
              </div>
              {/* Speech bubble woman — group156 asset */}
              <motion.div
                className="flex justify-center"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={imgSpeechBubbleWoman}
                  alt="Stay connected"
                  className="w-full max-w-[360px] h-auto object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer navigate={navigate} />
    </div>
  );
}

// ─── ABOUT US PAGE ────────────────────────────────────────────────────────────

function AboutUsPage({ navigate }: { navigate: (p: string) => void }) {
  const hero       = useScrollReveal();
  const culture    = useScrollReveal();
  const howWeThink = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f9f9f9]">

      {/* ── Hero ── */}
      <motion.section
        ref={hero.ref}
        className="pt-[95px] min-h-[60vh] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hero.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20 w-full">
          <motion.h1
            className="font-['Neue_Machina'] font-black text-[52px] lg:text-[77px] leading-[1.05] text-[#292728] text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: hero.isVisible ? 0 : 50, opacity: hero.isVisible ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span className="block" whileHover={{ x: 10, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>
              building concurrent
            </motion.span>
            <motion.span className="block" whileHover={{ x: -10, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>
              ——— projects together
            </motion.span>
          </motion.h1>
        </div>
      </motion.section>

      {/* ── Culture ── */}
      <motion.section
        ref={culture.ref}
        className="py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: culture.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: culture.isVisible ? 0 : -80, opacity: culture.isVisible ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <p className="font-['Lexend_Deca'] font-light text-[#d4b601] text-[20px]">Culture @ 360 ads</p>
              <div className="font-['Lexend_Deca'] font-light text-[20px] text-[#292728] leading-[1.7] space-y-5">
                <p>
                  360 Ads NG is a tech company that specializes in Digital Marketing. Our recently developed
                  web-based digital campaign manager enables corporations &amp; SMEs to promote and target
                  adverts to prospective customers.
                </p>
                <p>
                  Our aim is to aid organizations drive digital campaign model via our collections of tools
                  specifically developed to manage the design process, generate leads, improve user
                  responsiveness and efficiently deliver advert contents.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <motion.button
                  className="bg-[#292728] text-white font-['Lexend_Deca'] text-[15px] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: "#d0b301" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Advertise with Us
                </motion.button>
                <motion.div
                  className="w-[60px] h-[60px] bg-[#292728] rounded-full flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: culture.isVisible ? 0 : 80, opacity: culture.isVisible ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="bg-[#f6d935] rounded-[30px] overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 260 }}
              >
                <motion.img
                  src={imgManInfluencer}
                  alt="Social Media Influencer"
                  className="w-full h-auto object-cover"
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── How We Think ── */}
      <motion.section
        ref={howWeThink.ref}
        className="py-24 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: howWeThink.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.p
            className="font-['Lexend_Deca'] font-light text-[#d0b301] text-[20px] mb-16"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: howWeThink.isVisible ? 0 : -40, opacity: howWeThink.isVisible ? 1 : 0 }}
          >
            How we think
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start mb-16">
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: howWeThink.isVisible ? 0 : -80, opacity: howWeThink.isVisible ? 1 : 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-['Neue_Machina'] text-[36px] lg:text-[42px] leading-[1.15] text-[#292728] mb-6">
                <motion.span className="block" whileHover={{ x: 8, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>
                  {"We're challengers at heart and"}
                </motion.span>
                <motion.span className="block" whileHover={{ x: 8, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>
                  builders by nature.
                </motion.span>
              </h2>
              <p className="font-['Lexend_Deca'] font-light text-[20px] text-[#292728] leading-relaxed mb-8">
                We work as one team and deliver projects <span className="text-[#d0b301]">concurrently...</span>
              </p>
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-[60px] h-[60px] bg-[#f6d935] rounded-full flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#292728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <motion.button
                  className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] text-[15px] px-8 py-4 rounded-[10px]"
                  whileHover={{ scale: 1.05, backgroundColor: "#d0b301" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Dive into Our Culture
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: howWeThink.isVisible ? 0 : 80, opacity: howWeThink.isVisible ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { title: "Innovation-Driven", desc: "We constantly push boundaries to deliver cutting-edge solutions" },
                { title: "Client-Focused", desc: "Your success is our priority, and we tailor our approach to your unique needs" },
                { title: "Results-Oriented", desc: "We measure our success by the tangible impact we create for your business" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-[#f9f9f9] rounded-[20px] p-8 border-l-4 border-[#f6d935]"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: howWeThink.isVisible ? 0 : 40, opacity: howWeThink.isVisible ? 1 : 0 }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  whileHover={{ scale: 1.02, borderColor: "#d0b301" }}
                >
                  <h3 className="font-['Neue_Machina'] text-[22px] text-[#292728] mb-2">{item.title}</h3>
                  <p className="font-['Lexend_Deca'] font-light text-[16px] text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Full-width lightbulb image */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: howWeThink.isVisible ? 0 : 80, opacity: howWeThink.isVisible ? 1 : 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.img
              src={imgLightbulbAbout}
              alt="Ideas"
              className="w-full h-auto rounded-[28px] object-cover"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ── Core Values ── */}
      <section className="py-32 bg-[#292728]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.h2
            className="font-['Neue_Machina'] text-[48px] text-white text-center mb-20"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Integrity", icon: "✓", color: "#f6d935" },
              { title: "Excellence", icon: "★", color: "#d0b301" },
              { title: "Innovation", icon: "◆", color: "#f6d935" },
            ].map((v, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-[#292728]"
                  style={{ backgroundColor: v.color }}
                  whileHover={{ scale: 1.12, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {v.icon}
                </motion.div>
                <h3 className="font-['Neue_Machina'] text-[28px] text-white">{v.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

// ─── SERVICES PAGE ─────────────────────────────────────────────────────────────

const SERVICES = [
  {
    num: "01",
    title: "Digital Ads",
    desc: "Reach your target audience with precision-targeted digital advertising campaigns across multiple platforms. Our data-driven approach ensures maximum ROI and engagement.",
    img: imgShoppingPhone,
    alt: "Digital Ads",
    imgBg: "#f6d935",
    btnStyle: "dark" as const,
  },
  {
    num: "02",
    title: "Billboard Marketing",
    desc: "Make a bold statement with strategic billboard placements that capture attention and drive brand awareness in high-traffic locations.",
    img: imgBillboard,
    alt: "Billboard",
    imgBg: "#1a1a1a",
    btnStyle: "light" as const,
  },
  {
    num: "03",
    title: "Smart SMS",
    desc: "Connect directly with your customers through intelligent SMS campaigns that deliver personalized messages at the right time, every time.",
    img: imgWomanPhone,
    alt: "Smart SMS",
    imgBg: "#f6d935",
    btnStyle: "dark" as const,
  },
  {
    num: "04",
    title: "Influencer Marketing",
    desc: "Leverage the power of top influencers to amplify your brand message and reach engaged audiences authentically and at scale.",
    img: imgInfluencerSvc,
    alt: "Influencer Marketing",
    imgBg: "#292728",
    btnStyle: "light" as const,
  },
  {
    num: "05",
    title: "Voice SMS & WhatsApp",
    desc: "Engage customers via personalized voice messages and WhatsApp clusters, creating direct and memorable brand touchpoints.",
    img: imgManPhoneEmojis,
    alt: "Voice SMS & WhatsApp",
    imgBg: "#f6d935",
    btnStyle: "dark" as const,
  },
];

function ServicesPage({ navigate }: { navigate: (p: string) => void }) {
  const hero      = useScrollReveal();
  const discovery = useScrollReveal();
  const services  = useScrollReveal();
  const whyUs     = useScrollReveal();

  const { count: c1, ref: r1 } = useCountUp(123, 2000);
  const { count: c2, ref: r2 } = useCountUp(1300, 2000);
  const { count: c3, ref: r3 } = useCountUp(100, 2000);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">

      {/* ── Hero ── */}
      <motion.section
        ref={hero.ref}
        className="pt-[95px] min-h-[70vh] flex flex-col items-center justify-center bg-[#292728]"
        initial={{ opacity: 0 }}
        animate={{ opacity: hero.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20 w-full">
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: hero.isVisible ? 0 : 50, opacity: hero.isVisible ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1
              className="font-['Neue_Machina'] font-black text-[48px] lg:text-[64px] leading-[1.1] text-white mb-6"
            >
              <motion.span className="block" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                services/
              </motion.span>
              <motion.span className="block text-[#f6d935]" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.45 }}>
                this is what we do best.
              </motion.span>
            </motion.h1>
            <motion.p
              className="font-['Lexend_Deca'] font-light text-[20px] text-[#d0b301]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Discovery &amp; Execution
            </motion.p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <div className="w-[39px] h-[120px] bg-[#f6d935] rounded-full flex items-end justify-center pb-6">
              <svg width="18" height="32" viewBox="0 0 18 36" fill="none">
                <path d="M9 0L9 30M9 30L2 23M9 30L16 23" stroke="#292728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Discovery + Stats ── */}
      <motion.section
        ref={discovery.ref}
        className="py-32 bg-[#292728]"
        initial={{ opacity: 0 }}
        animate={{ opacity: discovery.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.p
            className="font-['Lexend_Deca'] text-[18px] lg:text-[22px] text-white leading-relaxed max-w-4xl mx-auto text-center mb-20"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: discovery.isVisible ? 0 : 40, opacity: discovery.isVisible ? 1 : 0 }}
          >
            With over <span className="text-[#d0b301] font-semibold">70 million</span> target audience we connect your business to the
            right customer using our BILLBOARDS, SMART SMS, DISPLAY ADS, VOICE SMS and TOP INFLUENCERS
            who will promote your brand and products.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { ref: r1, count: c1, suffix: "+", label: "Completed", sub: "Sites" },
              { ref: r2, count: c2, suffix: "+", label: "Happy", sub: "Customers" },
              { ref: r3, count: c3, suffix: "%", label: "Clients", sub: "Reached" },
            ].map(({ ref, count, suffix, label, sub }, i) => (
              <motion.div
                key={i}
                ref={ref}
                className="text-center"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: discovery.isVisible ? 0 : 40, opacity: discovery.isVisible ? 1 : 0 }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ scale: 1.06 }}
              >
                <div className="font-['Neue_Machina'] font-black text-[48px] tracking-wider mb-1">
                  <span className="text-white">{count}</span>
                  <span className="text-[#d0b301]">{suffix}</span>
                </div>
                <p className="font-['Lexend_Deca'] text-[20px] text-white tracking-wide">{label}</p>
                <p className="font-['Lexend_Deca'] font-light text-[15px] text-gray-400 tracking-wide">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Services Grid ── */}
      <motion.section
        ref={services.ref}
        className="py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: services.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.h2
            className="font-['Neue_Machina'] text-[42px] lg:text-[50px] text-[#292728] text-center mb-3"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: services.isVisible ? 0 : 40, opacity: services.isVisible ? 1 : 0 }}
          >
            {"Get your audience's attention with our"}
          </motion.h2>
          <motion.p
            className="font-['Lexend_Deca'] font-light text-[22px] text-[#d0b301] text-center mb-24"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: services.isVisible ? 0 : 30, opacity: services.isVisible ? 1 : 0 }}
            transition={{ delay: 0.15 }}
          >
            collection of tools
          </motion.p>

          <div className="space-y-28">
            {SERVICES.map(({ num, title, desc, img, alt, imgBg, btnStyle }, i) => {
              const flip = i % 2 === 1;
              return (
                <motion.div
                  key={num}
                  className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center"
                  initial={{ x: flip ? 80 : -80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75 }}
                >
                  {/* Copy */}
                  <div className={flip ? "order-1 md:order-2" : ""}>
                    <motion.span
                      className="inline-block bg-[#292728] text-white font-['Lexend_Deca'] text-[13px] rounded-full px-5 py-1.5 mb-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      {num}
                    </motion.span>
                    <h3 className="font-['Neue_Machina'] text-[34px] text-[#292728] mb-5">{title}</h3>
                    <p className="font-['Lexend_Deca'] font-light text-[17px] text-gray-700 leading-relaxed mb-8">{desc}</p>
                    <motion.button
                      className={`flex items-center gap-3 font-['Lexend_Deca'] text-[15px] px-8 py-4 rounded-[10px] ${
                        btnStyle === "dark"
                          ? "bg-[#292728] text-white"
                          : "bg-[#f6d935] text-[#292728]"
                      }`}
                      whileHover={{ scale: 1.05, backgroundColor: "#d0b301", color: "#fff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight />
                    </motion.button>
                  </div>

                  {/* Image card */}
                  <div
                    className={`rounded-[28px] overflow-hidden flex items-center justify-center p-8 lg:p-14 ${flip ? "order-2 md:order-1" : ""}`}
                    style={{ backgroundColor: imgBg }}
                  >
                    <motion.img
                      src={img}
                      alt={alt}
                      className="w-full h-auto object-contain max-h-[380px]"
                      whileHover={{ scale: 1.06, rotate: flip ? -1 : 1 }}
                      transition={{ type: "spring", stiffness: 260 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── Happy Clients Showcase ── */}
      <section className="py-24 bg-[#f6d935]/10">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-['Lexend_Deca'] font-light text-[#d0b301] text-[20px] mb-4">Our Happy Clients</p>
              <h2 className="font-['Neue_Machina'] text-[42px] text-[#292728] leading-tight mb-6">
                Thousands celebrate results with 360 Ads
              </h2>
              <p className="font-['Lexend_Deca'] font-light text-[18px] text-gray-700 leading-relaxed mb-8">
                Join over 1,300 satisfied customers who have transformed their marketing strategy and seen real, measurable impact.
              </p>
              <motion.button
                className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] text-[15px] px-8 py-4 rounded-[10px]"
                whileHover={{ scale: 1.05, backgroundColor: "#d0b301" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("about")}
              >
                <span>Read Our Story</span>
                <ArrowRight />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <motion.img
                src={imgArmsWideWoman}
                alt="Happy clients"
                className="w-full max-w-[460px] h-auto object-contain"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section
        ref={whyUs.ref}
        className="py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: whyUs.isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            className="bg-[#292728] rounded-[30px] p-12 lg:p-20 text-center relative overflow-hidden"
            initial={{ scale: 0.92, y: 40 }}
            animate={{ scale: whyUs.isVisible ? 1 : 0.92, y: whyUs.isVisible ? 0 : 40 }}
          >
            {/* Decorative image bottom right */}
            <img
              src={imgSpeechBubbleCta}
              alt=""
              aria-hidden
              className="absolute -bottom-4 -right-4 w-[200px] opacity-20 pointer-events-none hidden lg:block"
            />
            <h2 className="font-['Neue_Machina'] text-[42px] lg:text-[50px] text-white mb-5 leading-tight relative z-10">
              Ready to Get Started?
            </h2>
            <p className="font-['Lexend_Deca'] font-light text-[18px] text-gray-300 mb-12 max-w-2xl mx-auto relative z-10">
              Join over 1,300 happy customers who have transformed their marketing with our services
            </p>
            <motion.button
              className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] font-semibold text-[18px] px-14 py-5 rounded-[10px] relative z-10"
              whileHover={{ scale: 1.06, backgroundColor: "#d0b301" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Campaign Today
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer navigate={navigate} />
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navigation currentPage={page} navigate={navigate} />

      {page === "home"     && <HomePage navigate={navigate} />}
      {page === "about"    && <AboutUsPage navigate={navigate} />}
      {page === "services" && <ServicesPage navigate={navigate} />}

      {(page === "faqs" || page === "contact") && (
        <div className="min-h-screen bg-[#f9f9f9] flex flex-col items-center justify-center pt-[95px]">
          <div className="text-center py-20">
            <h1 className="font-['Neue_Machina'] font-black text-[60px] text-[#292728] mb-4 capitalize">{page}</h1>
            <p className="font-['Lexend_Deca'] font-light text-[22px] text-gray-400 mb-10">Coming soon...</p>
            <motion.button
              className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] text-[16px] px-10 py-4 rounded-[10px]"
              onClick={() => navigate("home")}
              whileHover={{ scale: 1.05, backgroundColor: "#d0b301" }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
            </motion.button>
          </div>
          <Footer navigate={navigate} />
        </div>
      )}
    </>
  );
}
