import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin, Ruler, Compass, Tag, Eye, EyeOff,
  Building2, Smartphone, MessageSquare, Star,
  Check, Award, Zap, Phone, Mail, Clock,
  ArrowRight, X, Menu, Search, BarChart2,
  Target, MonitorPlay, Radio, Globe,
} from "lucide-react";

// ── Assets ──────────────────────────────────────────────────────────────────
import imgInfluencer from "../assets/influencer.png";
import imgThink from "../assets/think.png";
import imgHappy from "../assets/happy.png";
import imgManInfluencer from "../assets/man-influencer.png";
import imgDigitalAds from "../assets/digital-ads.png";
import imgManAds from "../assets/man-ads.png";

// ── Hooks ────────────────────────────────────────────────────────────────────
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

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !triggered) setTriggered(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [triggered]);
  useEffect(() => {
    if (!triggered) return;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(end * ease));
      if (p < 1) requestAnimationFrame(tick); else setCount(end);
    };
    requestAnimationFrame(tick);
  }, [triggered, end, duration]);
  return { count, ref };
}

// ── Logo ─────────────────────────────────────────────────────────────────────
function Logo({ light = false, size = 1 }: { light?: boolean; size?: number }) {
  const fill = light ? "#F6F6F6" : "#292728";
  return (
    <svg width={109 * size} height={49 * size} viewBox="-1 0 110 49.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.6355 32.369C45.7392 32.3655 44.855 32.1623 44.047 31.7743C42.5492 35.8441 39.8133 39.342 36.2241 41.7761C32.6349 44.2101 28.373 45.4578 24.0378 45.3437C19.7026 45.2296 15.5123 43.7595 12.0561 41.14C8.59989 38.5205 6.05176 34.8836 4.77007 30.7406C3.48839 26.5977 3.53763 22.1571 4.91087 18.0436C6.28411 13.9301 8.91227 10.3505 12.4257 7.80832C15.9391 5.26613 20.1611 3.88927 24.4977 3.87133C28.8344 3.85339 33.0675 5.19528 36.6019 7.70831L32.6226 11.504L43.2639 11.7494L43.5157 1.11134L39.4535 4.9899C35.302 1.8456 30.2598 0.0999036 25.0529 0.00415984C19.8459-0.0915839 14.7429 1.46758 10.4786 4.45713C6.21437 7.44668 3.00883 11.7124 1.32361 16.64C-0.36161 21.5676-0.439573 26.9029 1.10095 31.8777C2.64147 36.8524 5.721 41.21 9.8961 44.3228C14.0712 47.4357 19.1265 49.1433 24.334 49.1998C29.5415 49.2562 34.6326 47.6586 38.8742 44.6369C43.1158 41.6153 46.289 37.3255 47.937 32.3853L46.6355 32.369Z" fill={fill}/>
      <path d="M23.727 18.6814C23.7253 17.5272 23.2659 16.4208 22.4496 15.6047C21.6333 14.7887 20.5266 14.3297 19.3724 14.3284H12.9249C11.7706 14.3297 10.664 14.7887 9.84768 15.6047C9.03134 16.4208 8.57194 17.5272 8.57022 18.6814V21.1188H12.054V18.6814C12.0544 18.4506 12.1463 18.2293 12.3095 18.0661C12.4728 17.9028 12.694 17.811 12.9249 17.8105H19.3773C19.6081 17.811 19.8294 17.9028 19.9926 18.0661C20.1559 18.2293 20.2478 18.4506 20.2482 18.6814V21.9848C20.2478 22.2148 20.1565 22.4354 19.9944 22.5985C19.8322 22.7616 19.6121 22.8541 19.3821 22.8558H12.054V26.3395H19.3659C19.5967 26.3399 19.818 26.4318 19.9813 26.595C20.1445 26.7583 20.2364 26.9796 20.2368 27.2104V30.5154C20.2364 30.7463 20.1445 30.9675 19.9813 31.1308C19.818 31.294 19.5967 31.3859 19.3659 31.3864H12.9249C12.694 31.3859 12.4728 31.294 12.3095 31.1308C12.1463 30.9675 12.0544 30.7463 12.054 30.5154V28.0781H8.57022V30.5154C8.57151 31.6699 9.03072 32.7768 9.8471 33.5932C10.6635 34.4096 11.7704 34.8688 12.9249 34.8701H19.3773C20.5318 34.8688 21.6387 34.4096 22.455 33.5932C23.2714 32.7768 23.7306 31.6699 23.7319 30.5154V27.2104C23.7323 26.2676 23.4254 25.3504 22.8577 24.5976C23.4256 23.845 23.7325 22.9277 23.7319 21.9848L23.727 18.6814Z" fill={fill}/>
      <path d="M40.602 22.95V18.6814C40.6002 17.5272 40.1409 16.4208 39.3245 15.6047C38.5082 14.7887 37.4016 14.3297 36.2473 14.3284H29.8014C28.6472 14.3297 27.5405 14.7887 26.7242 15.6047C25.9079 16.4208 25.4485 17.5272 25.4468 18.6814V27.9806V30.517C25.4466 31.089 25.559 31.6553 25.7778 32.1838C25.9966 32.7122 26.3173 33.1923 26.7217 33.5967C27.1261 34.0011 27.6063 34.3219 28.1347 34.5407C28.6631 34.7594 29.2295 34.8719 29.8014 34.8717H36.2473C37.4018 34.8704 38.5087 34.4112 39.3251 33.5948C40.1415 32.7784 40.6007 31.6716 40.602 30.517V27.212C40.6007 26.0575 40.1415 24.9506 39.3251 24.1343C38.5087 23.3179 37.4018 22.8587 36.2473 22.8574H29.8014C29.5089 22.8575 29.2172 22.8869 28.9305 22.9451V18.6814C28.9309 18.4506 29.0228 18.2293 29.1861 18.0661C29.3493 17.9028 29.5706 17.811 29.8014 17.8105H36.2473C36.4782 17.811 36.6994 17.9028 36.8627 18.0661C37.0259 18.2293 37.1178 18.4506 37.1182 18.6814V21.1724C38.4433 21.3658 39.6677 21.9905 40.602 22.95ZM28.9305 27.212C28.9309 26.9812 29.0228 26.7599 29.1861 26.5967C29.3493 26.4334 29.5706 26.3416 29.8014 26.3411H36.2473C36.4782 26.3416 36.6994 26.4334 36.8627 26.5967C37.0259 26.7599 37.1178 26.9812 37.1182 27.212V30.517C37.1178 30.7479 37.0259 30.9692 36.8627 31.1324C36.6994 31.2956 36.4782 31.3876 36.2473 31.388H29.8014C29.6434 31.3877 29.4883 31.3447 29.3527 31.2634C29.2171 31.1822 29.106 31.0658 29.0312 30.9265C28.9645 30.801 28.9299 30.6608 28.9305 30.5187V27.212Z" fill={fill}/>
      <path d="M53.1231 30.6455H46.6756C45.521 30.6443 44.4142 30.185 43.5978 29.3687C42.7814 28.5523 42.3222 27.4454 42.3209 26.2909V14.4569C42.3222 13.3024 42.7814 12.1955 43.5978 11.3791C44.4142 10.5627 45.521 10.1036 46.6756 10.1023H53.1214C54.276 10.1036 55.3829 10.5627 56.1992 11.3791C57.0156 12.1955 57.4748 13.3024 57.4761 14.4569V26.2909C57.4744 27.445 57.0153 28.5514 56.1993 29.3676C55.3834 30.1839 54.2772 30.6434 53.1231 30.6455ZM46.6772 13.5844C46.4462 13.5844 46.2247 13.6761 46.0614 13.8394C45.898 14.0028 45.8063 14.2243 45.8063 14.4553V26.2892C45.8067 26.5201 45.8986 26.7414 46.0618 26.9046C46.2251 27.0678 46.4463 27.1598 46.6772 27.1602H53.1231C53.3539 27.1598 53.5752 27.0678 53.7384 26.9046C53.9017 26.7414 53.9936 26.5201 53.994 26.2892V14.4553C53.9936 14.2244 53.9017 14.0032 53.7384 13.8399C53.5752 13.6767 53.3539 13.5848 53.1231 13.5844H46.6772Z" fill={fill}/>
      <g transform="translate(65.04, 18.13)">
        <path d="M6.49138 8.67685H10.019L7.55567 3.44476L3.16851 12.934H0L5.99579 0.812437L9.00181 0L15.2104 12.934H12.0419L11.2458 11.2442H5.39621L6.49138 8.67685Z" fill={fill}/>
        <path d="M19.1913 4.06066V10.2531H23.9197C25.5771 10.2531 26.4399 8.38446 26.4399 6.54835C26.4399 4.76099 25.6275 3.00612 23.9197 3.00612H16.1853L16.9978 0.325077H24.2772C27.7869 0.325077 29.6084 3.55858 29.6084 6.74333C29.6084 9.86309 27.8682 12.9341 24.2772 12.9341H16.1853V4.87472L19.1913 4.06066Z" fill={fill}/>
        <path d="M30.5833 4.1598C30.5833 2.2262 32.1107 0.325077 35.1005 0.325077H43.6814L42.869 3.00612H35.133C34.2068 3.00612 33.7518 3.59109 33.7518 4.1598C33.7518 4.7285 34.223 5.29721 35.133 5.29721H39.4876C42.4303 5.29721 43.9577 7.19833 43.9577 9.13193C43.9577 11.0168 42.5115 12.9341 39.4876 12.9341H30.5833L31.3958 10.2531H39.4551C40.3651 10.2531 40.8363 9.71688 40.8363 9.13193C40.8363 8.54697 40.3813 7.96198 39.4551 7.96198H35.1005C32.062 7.96198 30.5833 6.0609 30.5833 4.1598Z" fill={fill}/>
      </g>
    </svg>
  );
}

// ── Billboard Hero Illustration ───────────────────────────────────────────────
function BillboardHeroIllustration() {
  return (
    <div className="w-full max-w-[960px] mx-auto">
      <svg viewBox="0 0 960 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <linearGradient id="bbSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1626" />
            <stop offset="100%" stopColor="#292728" />
          </linearGradient>
          <linearGradient id="bbGround" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#383434" />
            <stop offset="100%" stopColor="#1e1c1c" />
          </linearGradient>
          <linearGradient id="bbMain" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f6d935" />
            <stop offset="100%" stopColor="#d0b301" />
          </linearGradient>
          <filter id="bbGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="bbShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Sky background */}
        <rect width="960" height="290" fill="url(#bbSky)" />

        {/* Stars */}
        {[[80,40],[200,25],[350,55],[680,30],[810,50],[920,20],[140,70],[600,15],[440,65]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="1.2" fill="white" opacity={0.4 + (i%3)*0.2} />
        ))}

        {/* City silhouette LEFT */}
        <path d="M0,290 L0,195 L25,195 L25,175 L45,175 L45,155 L65,155 L65,135 L80,135 L80,155 L95,155 L95,175 L115,175 L115,195 L140,195 L140,215 L160,215 L160,195 L185,195 L185,165 L210,165 L210,145 L230,145 L230,165 L255,165 L255,290 Z" fill="#1c1b1e" />

        {/* City silhouette RIGHT */}
        <path d="M960,290 L960,185 L935,185 L935,165 L910,165 L910,145 L888,145 L888,125 L870,125 L870,145 L850,145 L850,165 L825,165 L825,185 L800,185 L800,205 L778,205 L778,185 L752,185 L752,160 L730,160 L730,290 Z" fill="#1c1b1e" />

        {/* Ground */}
        <rect y="290" width="960" height="90" fill="url(#bbGround)" />
        {/* Road lane markings */}
        <rect y="325" width="960" height="3" fill="#f6d935" opacity="0.18" />
        {[100,220,340,460,580,700,820].map((x,i) => (
          <rect key={i} x={x} y="326.5" width="70" height="2" fill="white" opacity="0.1" rx="1" />
        ))}

        {/* ── LEFT SMALL BILLBOARD ── */}
        <rect x="174" y="238" width="8" height="52" fill="#3a3a3a" />
        <rect x="138" y="190" width="116" height="52" rx="5" fill="#d0b301" filter="url(#bbShadow)" />
        <rect x="142" y="194" width="108" height="44" rx="3" fill="#1a1818" />
        <text x="196" y="215" textAnchor="middle" fontFamily="'Neue Machina', sans-serif" fontSize="9" fontWeight="700" fill="#f6d935" letterSpacing="1">BILLBOARD</text>
        <text x="196" y="228" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#d0b301" opacity="0.85">MARKETING</text>

        {/* ── MAIN CENTER BILLBOARD ── */}
        {/* Poles */}
        <rect x="430" y="195" width="10" height="95" fill="#3a3a3a" />
        <rect x="520" y="195" width="10" height="95" fill="#3a3a3a" />
        {/* Catwalk bar */}
        <rect x="425" y="190" width="110" height="6" rx="3" fill="#2e2e2e" />
        {/* Main board background */}
        <rect x="275" y="85" width="410" height="130" rx="8" fill="url(#bbMain)" filter="url(#bbShadow)" />
        {/* Inner panel */}
        <rect x="283" y="93" width="394" height="114" rx="5" fill="#1a1818" />
        {/* Brand name */}
        <text x="480" y="130" textAnchor="middle" fontFamily="'Neue Machina', sans-serif" fontSize="22" fontWeight="900" fill="#f6d935" letterSpacing="2" filter="url(#bbGlow)">360 ADS</text>
        {/* Tagline */}
        <text x="480" y="152" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#d0b301" letterSpacing="1.5" opacity="0.9">NIGERIA'S OUTDOOR ADVERTISING PLATFORM</text>
        {/* Divider */}
        <line x1="320" y1="162" x2="640" y2="162" stroke="#f6d935" strokeWidth="0.6" opacity="0.3" />
        {/* Stat row */}
        <text x="370" y="178" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="white" opacity="0.6">1,034 Billboards</text>
        <text x="480" y="178" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#f6d935" opacity="0.8">36 States</text>
        <text x="590" y="178" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="white" opacity="0.6">24/7 Campaigns</text>

        {/* ── RIGHT LED BILLBOARD ── */}
        <rect x="783" y="228" width="8" height="62" fill="#3a3a3a" />
        <rect x="745" y="175" width="120" height="56" rx="5" fill="#292728" filter="url(#bbShadow)" />
        <rect x="749" y="179" width="112" height="48" rx="3" fill="#0d0d0d" />
        {/* LED-style dots grid */}
        {[0,1,2,3,4,5,6].map(col => [0,1,2,3].map(row => (
          <circle key={`${col}-${row}`} cx={762 + col*14} cy={190 + row*10} r="2" fill="#f6d935" opacity={0.15 + Math.random()*0.35} />
        )))}
        <text x="805" y="208" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="700" fill="#f6d935">LED DIGITAL</text>
        <text x="805" y="220" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#d0b301" opacity="0.8">BILLBOARD</text>

        {/* ── LOCATION PINS (floating) ── */}
        {/* Lagos pin */}
        <g>
          <rect x="290" y="42" width="80" height="32" rx="16" fill="white" opacity="0.96" filter="url(#bbShadow)" />
          <circle cx="312" cy="58" r="6" fill="#f6d935" />
          <text x="354" y="54" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="700" fill="#292728">Lagos</text>
          <text x="354" y="65" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#d0b301">1,034</text>
          <line x1="330" y1="74" x2="340" y2="90" stroke="white" strokeWidth="1" opacity="0.4" />
        </g>
        {/* Abuja pin */}
        <g>
          <rect x="438" y="26" width="84" height="32" rx="16" fill="white" opacity="0.96" filter="url(#bbShadow)" />
          <circle cx="460" cy="42" r="6" fill="#d0b301" />
          <text x="500" y="38" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="700" fill="#292728">Abuja</text>
          <text x="500" y="49" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#d0b301">327</text>
          <line x1="480" y1="58" x2="476" y2="85" stroke="white" strokeWidth="1" opacity="0.4" />
        </g>
        {/* Port Harcourt pin */}
        <g>
          <rect x="588" y="38" width="102" height="32" rx="16" fill="white" opacity="0.96" filter="url(#bbShadow)" />
          <circle cx="610" cy="54" r="6" fill="#f6d935" />
          <text x="651" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="700" fill="#292728">Port Harcourt</text>
          <text x="651" y="61" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#d0b301">239</text>
          <line x1="630" y1="70" x2="618" y2="88" stroke="white" strokeWidth="1" opacity="0.4" />
        </g>

        {/* ── STAT BADGES ── */}
        {/* Left badge */}
        <rect x="22" y="118" width="148" height="44" rx="10" fill="white" opacity="0.97" filter="url(#bbShadow)" />
        <rect x="26" y="122" width="6" height="36" rx="3" fill="#f6d935" />
        <text x="44" y="138" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#292728">98%</text>
        <text x="44" y="152" fontFamily="sans-serif" fontSize="8" fill="#717182">Targeting Accuracy</text>

        {/* Right badge */}
        <rect x="790" y="115" width="152" height="44" rx="10" fill="white" opacity="0.97" filter="url(#bbShadow)" />
        <rect x="794" y="119" width="6" height="36" rx="3" fill="#d0b301" />
        <text x="812" y="135" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#292728">13,500+</text>
        <text x="812" y="149" fontFamily="sans-serif" fontSize="8" fill="#717182">Daily Engagements</text>
      </svg>
    </div>
  );
}

// ── Auth Illustration ─────────────────────────────────────────────────────────
function AuthIllustration() {
  return (
    <svg viewBox="0 0 480 580" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[560px]">
      <defs>
        <linearGradient id="authBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1626" />
          <stop offset="100%" stopColor="#292728" />
        </linearGradient>
        <linearGradient id="authBoard" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f6d935" />
          <stop offset="100%" stopColor="#d0b301" />
        </linearGradient>
        <filter id="authGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="authCard" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="480" height="580" fill="url(#authBg)" />

      {/* Grid lines */}
      {[60,120,180,240,300,360,420,480].map((x,i) => (
        <line key={`v${i}`} x1={x} y1="0" x2={x} y2="580" stroke="white" strokeWidth="0.4" opacity="0.04" />
      ))}
      {[58,116,174,232,290,348,406,464,522].map((y,i) => (
        <line key={`h${i}`} x1="0" y1={y} x2="480" y2={y} stroke="white" strokeWidth="0.4" opacity="0.04" />
      ))}

      {/* Road perspective */}
      <path d="M100,520 L240,300 L340,300 L480,520 Z" fill="#252323" opacity="0.6" />
      <line x1="240" y1="300" x2="240" y2="520" stroke="#f6d935" strokeWidth="1.5" opacity="0.2" />

      {/* Billboard pole left */}
      <rect x="148" y="180" width="10" height="130" fill="#3a3737" />
      {/* Billboard pole right */}
      <rect x="322" y="180" width="10" height="130" fill="#3a3737" />
      {/* Catwalk */}
      <rect x="143" y="176" width="194" height="8" rx="4" fill="#2e2c2c" />

      {/* Main billboard board */}
      <rect x="110" y="80" width="260" height="105" rx="8" fill="url(#authBoard)" filter="url(#authCard)" />
      {/* Inner screen */}
      <rect x="118" y="88" width="244" height="89" rx="5" fill="#141212" />

      {/* Screen content */}
      <text x="240" y="118" textAnchor="middle" fontFamily="'Neue Machina', sans-serif" fontSize="20" fontWeight="900" fill="#f6d935" filter="url(#authGlow)">360 ADS</text>
      <line x1="148" y1="126" x2="332" y2="126" stroke="#f6d935" strokeWidth="0.5" opacity="0.3" />
      {/* Stats in 3 cols */}
      <text x="180" y="144" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="white">1,034</text>
      <text x="180" y="156" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#d0b301" opacity="0.8">Billboards</text>
      <line x1="220" y1="134" x2="220" y2="162" stroke="white" strokeWidth="0.5" opacity="0.15" />
      <text x="240" y="144" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="white">36</text>
      <text x="240" y="156" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#d0b301" opacity="0.8">States</text>
      <line x1="260" y1="134" x2="260" y2="162" stroke="white" strokeWidth="0.5" opacity="0.15" />
      <text x="300" y="144" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="white">24/7</text>
      <text x="300" y="156" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#d0b301" opacity="0.8">Active</text>

      {/* Signal rings emanating from billboard */}
      {[1,2,3].map((n) => (
        <ellipse key={n} cx="240" cy="132" rx={n * 40} ry={n * 14}
          fill="none" stroke="#f6d935" strokeWidth="0.8" opacity={0.2 / n}
          strokeDasharray="4 4" />
      ))}

      {/* Location pins */}
      {[
        { cx: 100, cy: 250, label: "Lagos", count: "1,034", color: "#f6d935" },
        { cx: 240, cy: 230, label: "Abuja", count: "327", color: "#d0b301" },
        { cx: 380, cy: 250, label: "PH", count: "239", color: "#f6d935" },
        { cx: 170, cy: 280, label: "Kano", count: "182", color: "#d0b301" },
      ].map(({ cx, cy, label, count, color }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="22" fill={color} opacity="0.1" />
          <circle cx={cx} cy={cy} r="10" fill={color} />
          <path d={`M${cx},${cy-10} L${cx+6},${cy-22} L${cx-6},${cy-22} Z`} fill={color} />
          <text x={cx} y={cy+3} textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="700" fill="#292728">{label}</text>
          <text x={cx} y={cy+18} textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill={color} opacity="0.85">{count}</text>
        </g>
      ))}

      {/* Bottom stat cards */}
      {[
        { x: 24, label: "98%", sub: "Targeting" },
        { x: 184, label: "98%", sub: "ROI Increase" },
        { x: 344, label: "13.5k+", sub: "Engagements" },
      ].map(({ x, label, sub }, i) => (
        <g key={i}>
          <rect x={x} y="360" width="128" height="60" rx="10" fill="#1e1c1c" opacity="0.95" filter="url(#authCard)" />
          <rect x={x+4} y="364" width="5" height="52" rx="2.5" fill="#f6d935" />
          <text x={x+22} y="385" fontFamily="sans-serif" fontSize="14" fontWeight="900" fill="white">{label}</text>
          <text x={x+22} y="400" fontFamily="sans-serif" fontSize="9" fill="#d0b301" opacity="0.85">{sub}</text>
        </g>
      ))}

      {/* Brand watermark text */}
      <text x="240" y="460" textAnchor="middle" fontFamily="'Neue Machina', sans-serif" fontSize="11" fill="white" opacity="0.12" letterSpacing="8">NIGERIA'S LEADING AD PLATFORM</text>

      {/* Decorative corner circles */}
      <circle cx="0" cy="0" r="80" fill="#f6d935" opacity="0.04" />
      <circle cx="480" cy="580" r="100" fill="#d0b301" opacity="0.05" />
    </svg>
  );
}

// ── Navigation ────────────────────────────────────────────────────────────────
function Navigation({ page, navigate }: { page: string; navigate: (p: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "About Us", page: "about" },
    { label: "Billboards", page: "billboards" },
    { label: "Services", page: "services" },
    { label: "FAQs", page: "faqs" },
    { label: "Contact Us", page: "contact" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#f9f9f9] shadow-md" : "bg-[#f9f9f9]"} h-[88px] flex items-center justify-between px-6 md:px-12 lg:px-[80px]`}>
      <button onClick={() => navigate("home")} className="shrink-0"><Logo /></button>
      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {links.map(({ label, page: p }) => (
          <div key={p} className="relative">
            <button onClick={() => navigate(p)} className={`font-['Lexend_Deca'] text-[15px] transition-colors ${page === p ? "text-[#d0b301]" : "text-[#292728] hover:text-[#d0b301]"}`}>
              {label}
            </button>
            {page === p && <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#d0b301] rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-3">
        <motion.button onClick={() => navigate("signin")} className="font-['Lexend_Deca'] text-[14px] text-[#292728] px-5 py-2.5 rounded-[8px] border border-[#292728]" whileHover={{ backgroundColor: "#292728", color: "#fff" }} transition={{ duration: 0.2 }}>
          Sign In
        </motion.button>
        <motion.button onClick={() => navigate("signup")} className="relative bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] text-[14px] h-[44px] px-6 rounded-[8px] overflow-hidden" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <motion.div className="absolute inset-0 bg-[#292728]" initial={{ scale: 0, opacity: 0, borderRadius: "50%" }} whileHover={{ scale: 3, opacity: 1 }} transition={{ duration: 0.35 }} />
          <span className="relative z-10 group-hover:text-white">Get Started</span>
        </motion.button>
      </div>
      {/* Mobile burger */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="space-y-1.5">
          <span className={`block w-6 h-0.5 bg-[#292728] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#292728] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#292728] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-[88px] left-0 right-0 bg-[#f9f9f9] shadow-lg px-6 py-6 flex flex-col gap-4 md:hidden z-50">
            {links.map(({ label, page: p }) => (
              <button key={p} onClick={() => { navigate(p); setMenuOpen(false); }} className={`font-['Lexend_Deca'] text-[16px] text-left py-2 border-b border-[#eee] ${page === p ? "text-[#d0b301]" : "text-[#292728]"}`}>{label}</button>
            ))}
            <div className="flex gap-3 pt-2">
              <button onClick={() => { navigate("signin"); setMenuOpen(false); }} className="flex-1 font-['Lexend_Deca'] text-[14px] border border-[#292728] rounded-[8px] py-2.5">Sign In</button>
              <button onClick={() => { navigate("signup"); setMenuOpen(false); }} className="flex-1 font-['Lexend_Deca'] text-[14px] bg-[#f6d935] rounded-[8px] py-2.5">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer({ navigate }: { navigate: (p: string) => void }) {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-[#292728] text-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="mb-8"><Logo light /></div>
            <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="bg-[#f9f9f9] rounded-[10px] h-[64px] flex items-center px-4 gap-2">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email..." className="flex-1 bg-transparent text-[#292728] placeholder:text-[#9e9e9e] outline-none font-['Lexend_Deca'] text-[13px] min-w-0" />
              <motion.button type="submit" className="shrink-0 w-9 h-9 bg-[#f6d935] rounded-full flex items-center justify-center" whileHover={{ scale: 1.1, backgroundColor: "#d0b301" }} whileTap={{ scale: 0.9 }}>
                <svg width="14" height="14" viewBox="0 0 20 14" fill="none"><path d="M13 1L19 7M19 7L13 13M19 7H1" stroke="#292728" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.button>
            </form>
          </div>
          <div>
            <h4 className="text-[#d0b301] font-['Lexend_Deca'] text-[14px] mb-5 uppercase tracking-widest">Quick Links</h4>
            <div className="flex flex-col gap-3 font-['Lexend_Deca'] font-light text-[15px]">
              {[["About Us","about"],["Contact","contact"],["Services","services"],["Billboards","billboards"],["FAQs","faqs"]].map(([l,p]) => (
                <button key={p} onClick={() => navigate(p)} className="text-left hover:text-[#d0b301] transition-colors">{l}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#d0b301] font-['Lexend_Deca'] text-[14px] mb-5 uppercase tracking-widest">Our Services</h4>
            <div className="flex flex-col gap-3 font-['Lexend_Deca'] font-light text-[15px]">
              {["Billboard Marketing","Digital Ads","Smart SMS","Influencer Marketing","WhatsApp Cluster"].map(s => (
                <button key={s} onClick={() => navigate("services")} className="text-left hover:text-[#d0b301] transition-colors">{s}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#d0b301] font-['Lexend_Deca'] text-[14px] mb-5 uppercase tracking-widest">Contact Info</h4>
            <div className="font-['Lexend_Deca'] font-light text-[15px] leading-[1.7] space-y-1">
              <p>3 Adedoyin Ogungbe Crescent,</p>
              <p>Lekki Phase 1, Lagos, Nigeria</p>
              <p className="mt-3">+2348122089773</p>
              <p>info@360ads.com.ng</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-['Lexend_Deca'] font-light text-[14px] text-white/60">360 ads © 2025</p>
          <div className="flex items-center gap-8">
            <p className="font-['Lexend_Deca'] font-light text-[14px] text-white/60">Terms &amp; Conditions</p>
            <div className="flex items-center gap-5">
              {[
                <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
                <svg key="fb" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
                <svg key="tw" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              ].map((icon, i) => (
                <motion.a key={i} href="#" className="text-white/60 hover:text-[#f6d935] transition-colors" whileHover={{ scale: 1.15 }}>{icon}</motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Billboard data ────────────────────────────────────────────────────────────
const BILLBOARD_TYPES = ["All Types","Unipole","Gantry","LED Billboard","Portrait","Rooftop","Backlit","Wall Drape","Lamp Post","48 Sheet","Trivision"];
const NIGERIA_STATES = ["All States","Lagos","Abuja","Port Harcourt","Kano","Ibadan","Benin City","Enugu","Kaduna","Calabar","Owerri"];
const AREAS: Record<string, string[]> = {
  "Lagos": ["All Areas","Victoria Island","Lekki Phase 1","Ikeja","Surulere","Yaba","Ikorodu","Third Mainland Bridge","Ajah","Oshodi"],
  "Abuja": ["All Areas","Wuse","Maitama","Garki","Gwarinpa","Airport Road","Asokoro","Area 1"],
  "Port Harcourt": ["All Areas","GRA","Aba Road","Rumuola","Trans Amadi","Diobu"],
  "Kano": ["All Areas","Sabon Gari","Nasarawa","BUK Road","Kofar Mata","Bompai"],
  "Ibadan": ["All Areas","Dugbe","Bodija","UI Road","Ring Road","Challenge"],
};

const BILLBOARDS = [
  { id:1, title:"Unipole — Third Mainland Bridge", location:"Lagos", area:"Third Mainland Bridge", type:"Unipole", size:"12m × 4m", facing:"Dual Facing", availability:"Available", price:"₦450,000", period:"per month", accentColor:"#f6d935", tags:["High Traffic","Premium"] },
  { id:2, title:"LED Billboard — Lekki Phase 1 Roundabout", location:"Lagos", area:"Lekki Phase 1", type:"LED Billboard", size:"8m × 3m", facing:"Tri-Facing", availability:"Available", price:"₦750,000", period:"per month", accentColor:"#d0b301", tags:["Digital","Premium"] },
  { id:3, title:"Gantry — Ozumba Mbadiwe Ave, VI", location:"Lagos", area:"Victoria Island", type:"Gantry", size:"18m × 4m", facing:"Dual Facing", availability:"Booked", price:"₦1,200,000", period:"per month", accentColor:"#f6d935", tags:["Premium","Landmark"] },
  { id:4, title:"Portrait — Airport Road, Abuja", location:"Abuja", area:"Airport Road", type:"Portrait", size:"4m × 8m", facing:"Single Facing", availability:"Available", price:"₦380,000", period:"per month", accentColor:"#d0b301", tags:["High Traffic"] },
  { id:5, title:"Rooftop Billboard — Wuse 2, Abuja", location:"Abuja", area:"Wuse", type:"Rooftop", size:"10m × 4m", facing:"Dual Facing", availability:"Available", price:"₦500,000", period:"per month", accentColor:"#f6d935", tags:["Premium"] },
  { id:6, title:"48 Sheet — GRA, Port Harcourt", location:"Port Harcourt", area:"GRA", type:"48 Sheet", size:"6m × 3m", facing:"Single Facing", availability:"Available", price:"₦220,000", period:"per month", accentColor:"#d0b301", tags:["Residential"] },
  { id:7, title:"Unipole — Kano Road, Kaduna", location:"Kaduna", area:"Kaduna", type:"Unipole", size:"12m × 4m", facing:"Single Facing", availability:"Available", price:"₦180,000", period:"per month", accentColor:"#f6d935", tags:["Affordable"] },
  { id:8, title:"LED Billboard — Dugbe Roundabout, Ibadan", location:"Ibadan", area:"Dugbe", type:"LED Billboard", size:"10m × 4m", facing:"Tri-Facing", availability:"Available", price:"₦320,000", period:"per month", accentColor:"#d0b301", tags:["Digital","High Traffic"] },
  { id:9, title:"Wall Drape — Oshodi Overhead Bridge", location:"Lagos", area:"Oshodi", type:"Wall Drape", size:"20m × 8m", facing:"Single Facing", availability:"Available", price:"₦900,000", period:"per month", accentColor:"#f6d935", tags:["Giant","Premium"] },
  { id:10, title:"Backlit — Femi Okunnu Estate, Lekki", location:"Lagos", area:"Ajah", type:"Backlit", size:"5m × 2.5m", facing:"Single Facing", availability:"Booked", price:"₦150,000", period:"per month", accentColor:"#d0b301", tags:["Residential"] },
  { id:11, title:"Gantry — Nnamdi Azikiwe Way, Enugu", location:"Enugu", area:"Enugu", type:"Gantry", size:"14m × 4m", facing:"Dual Facing", availability:"Available", price:"₦260,000", period:"per month", accentColor:"#f6d935", tags:["High Traffic"] },
  { id:12, title:"Portrait LED — Maitama District, Abuja", location:"Abuja", area:"Maitama", type:"LED Billboard", size:"5m × 8m", facing:"Single Facing", availability:"Available", price:"₦620,000", period:"per month", accentColor:"#d0b301", tags:["Digital","Premium"] },
];

// ── Billboard Card ─────────────────────────────────────────────────────────────
function BillboardCard({ board, navigate }: { board: typeof BILLBOARDS[0]; navigate: (p: string, data?: unknown) => void }) {
  const patterns = [
    "repeating-linear-gradient(45deg, #1a1a1a 0, #1a1a1a 2px, #222 0, #222 50%)",
    "repeating-linear-gradient(135deg, #1f1f1f 0, #1f1f1f 2px, #272727 0, #272727 50%)",
    "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
  ];
  const patternIdx = board.id % patterns.length;
  return (
    <motion.div
      onClick={() => navigate("billboard-detail", board)}
      className="bg-white rounded-[16px] overflow-hidden shadow-sm border border-[#eee] group cursor-pointer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
    >
      {/* Thumbnail */}
      <div className="relative h-[180px] overflow-hidden" style={{ background: patterns[patternIdx] }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="w-28 h-14 rounded-[4px] flex items-center justify-center" style={{ backgroundColor: board.accentColor }}>
            <span className="font-['Neue_Machina'] font-black text-[#292728] text-[11px] text-center px-2 leading-tight">BILLBOARD<br/>SPACE</span>
          </div>
          <div className="w-1 h-8 bg-white/20 rounded-full" />
          <div className="w-6 h-1 bg-white/30 rounded-full" />
        </div>
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          {board.tags.map(t => <span key={t} className="text-[10px] font-['Lexend_Deca'] bg-black/50 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">{t}</span>)}
        </div>
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-['Lexend_Deca'] font-medium ${board.availability === "Available" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          {board.availability}
        </div>
      </div>
      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-['Neue_Machina'] text-[15px] text-[#292728] leading-tight group-hover:text-[#d0b301] transition-colors line-clamp-2">{board.title}</h3>
        </div>
        <div className="flex items-center gap-1.5 text-[13px] font-['Lexend_Deca'] text-gray-500 mb-1">
          <MapPin size={12} className="shrink-0" />
          {board.area}, {board.location}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] font-['Lexend_Deca'] text-gray-400 mb-4">
          <span className="flex items-center gap-1"><Ruler size={10} /> {board.size}</span>
          <span className="flex items-center gap-1"><Compass size={10} /> {board.facing}</span>
          <span className="flex items-center gap-1"><Tag size={10} /> {board.type}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-['Neue_Machina'] font-black text-[18px] text-[#292728]">{board.price}</div>
            <div className="font-['Lexend_Deca'] text-[11px] text-gray-400">{board.period}</div>
          </div>
          <motion.div
            className="bg-[#292728] text-white font-['Lexend_Deca'] text-[12px] px-4 py-2.5 rounded-[8px] flex items-center gap-1.5"
            whileHover={{ backgroundColor: "#d0b301" }}
          >
            View Details
            <ArrowRight size={12} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ══════════════════════════════════════════════════════════════════════════════
function HomePage({ navigate }: { navigate: (p: string) => void }) {
  const [bbType, setBbType] = useState("All Types");
  const [bbState, setBbState] = useState("All States");
  const [activeService, setActiveService] = useState(0);
  const hero = useScrollReveal();
  const stats = useScrollReveal();
  const services = useScrollReveal();
  const why360 = useScrollReveal();
  const featured = useScrollReveal();
  const newsletter = useScrollReveal();
  const { count: c1, ref: r1 } = useCountUp(98);
  const { count: c2, ref: r2 } = useCountUp(13500);
  const { count: c3, ref: r3 } = useCountUp(98);

  const serviceItems = [
    { label: "Billboard Marketing", Icon: Building2, desc: "Strategic billboard placements across Nigeria's highest-traffic locations — highways, roundabouts, commercial hubs. Your brand stands tall 24/7.", cta: "Find Billboards" },
    { label: "Digital Ads", Icon: MonitorPlay, desc: "Precision-targeted digital campaigns across social media, display networks and programmatic platforms. Maximum reach, measurable ROI.", cta: "Explore Digital" },
    { label: "SMS Marketing", Icon: MessageSquare, desc: "Personalised Smart SMS and WhatsApp cluster campaigns that land directly in your customer's pocket at exactly the right moment.", cta: "Get Started" },
    { label: "Influencer Marketing", Icon: Star, desc: "Connect with Nigeria's top influencers across Instagram, TikTok and YouTube. Authentic promotion that converts followers into customers.", cta: "Meet Influencers" },
  ];

  const handleSearch = () => {
    navigate("billboards");
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] overflow-x-hidden">

      {/* ── Hero ── */}
      <section ref={hero.ref} className="pt-[88px] min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full py-16">

          {/* Centered headline + copy + buttons */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: hero.isVisible ? 1 : 0, y: hero.isVisible ? 0 : 30 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-['Neue_Machina'] font-black leading-[1.0] text-[#292728] mb-6" style={{ fontSize: "clamp(52px, 7vw, 88px)" }}>
              <motion.span className="block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>All day,</motion.span>
              <motion.span className="block text-[#d0b301]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>Ad campaign</motion.span>
              <motion.span className="block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>360…</motion.span>
            </h1>
            <motion.p
              className="font-['Lexend_Deca'] font-light text-[18px] text-gray-600 mb-8 max-w-[520px] mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              Nigeria's leading outdoor &amp; digital advertising platform. Find the perfect billboard, run targeted digital campaigns, and track everything in real time.
            </motion.p>
            <motion.div className="flex items-center justify-center gap-4 flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
              <motion.button
                onClick={() => navigate("billboards")}
                className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] text-[15px] px-7 py-4 rounded-[10px]"
                whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Browse Billboards
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                onClick={() => navigate("about")}
                className="font-['Lexend_Deca'] text-[15px] text-[#292728] underline underline-offset-4"
                whileHover={{ color: "#d0b301" }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Billboard illustration */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hero.isVisible ? 1 : 0, y: hero.isVisible ? 0 : 40 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            <BillboardHeroIllustration />
          </motion.div>

          {/* ── Billboard search bar ── */}
          <motion.div
            className="mt-6 max-w-2xl mx-auto bg-white rounded-[16px] shadow-lg p-5 border border-[#eee]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: hero.isVisible ? 0 : 40, opacity: hero.isVisible ? 1 : 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <p className="font-['Lexend_Deca'] text-[12px] text-[#d0b301] uppercase tracking-widest mb-3 font-medium text-center">Find Billboards in Nigeria</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <select value={bbType} onChange={e => setBbType(e.target.value)} className="flex-1 font-['Lexend_Deca'] text-[13px] text-[#292728] bg-[#f5f5f5] border-0 rounded-[8px] px-4 py-3 outline-none cursor-pointer">
                {BILLBOARD_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
              <select value={bbState} onChange={e => setBbState(e.target.value)} className="flex-1 font-['Lexend_Deca'] text-[13px] text-[#292728] bg-[#f5f5f5] border-0 rounded-[8px] px-4 py-3 outline-none cursor-pointer">
                {NIGERIA_STATES.map(s => <option key={s}>{s}</option>)}
              </select>
              <motion.button onClick={handleSearch} className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] font-medium text-[14px] px-6 py-3 rounded-[8px] whitespace-nowrap" whileHover={{ backgroundColor: "#d0b301", scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Find Billboards
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating decoration */}
        <div className="absolute top-32 right-[5%] w-64 h-64 bg-[#f6d935]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-16 left-[5%] w-48 h-48 bg-[#d0b301]/8 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ── Stats bar ── */}
      <motion.section ref={stats.ref} className="bg-[#292728] py-16" initial={{ opacity: 0, y: 40 }} animate={{ opacity: stats.isVisible ? 1 : 0, y: stats.isVisible ? 0 : 40 }} transition={{ duration: 0.7 }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { ref: r1, count: c1, suffix: "%", label: "Targeting Accuracy" },
              { ref: r2, count: c2, suffix: "+", label: "Daily Engagements", format: true },
              { ref: r3, count: c3, suffix: "%", label: "ROI Increase" },
            ].map(({ ref, count, suffix, label, format }, i) => (
              <motion.div key={i} ref={ref} className="text-center" whileHover={{ scale: 1.06 }}>
                <div className="font-['Neue_Machina'] font-black text-[56px] lg:text-[68px] text-[#f6d935] leading-none">
                  {format ? count.toLocaleString() : count}{suffix}
                </div>
                <p className="font-['Lexend_Deca'] font-light text-white text-[16px] mt-2">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Services tabs ── */}
      <motion.section ref={services.ref} className="py-24" initial={{ opacity: 0 }} animate={{ opacity: services.isVisible ? 1 : 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <motion.p className="font-['Lexend_Deca'] text-[#d0b301] text-[13px] uppercase tracking-widest mb-3 font-medium" initial={{ x: -30, opacity: 0 }} animate={{ x: services.isVisible ? 0 : -30, opacity: services.isVisible ? 1 : 0 }}>Our Services</motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="font-['Neue_Machina'] text-[#292728] leading-tight" style={{ fontSize: "clamp(28px, 4vw, 46px)" }}>
              Get your audience's attention<br />with our <span className="text-[#d0b301]">services</span>
            </h2>
            <p className="font-['Lexend_Deca'] font-light text-gray-500 text-[15px] max-w-xs">Let's help secure the right audience with our tools</p>
          </div>
          {/* Tab switcher */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-[#eee] pb-4">
            {serviceItems.map((s, i) => (
              <motion.button key={i} onClick={() => setActiveService(i)} className={`flex items-center gap-2 font-['Lexend_Deca'] text-[14px] px-5 py-2.5 rounded-full transition-colors ${activeService === i ? "bg-[#292728] text-white" : "bg-[#f0f0f0] text-[#292728] hover:bg-[#e0e0e0]"}`} whileTap={{ scale: 0.97 }}>
                <s.Icon size={14} />{s.label}
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeService} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="bg-[#f6d935] rounded-[24px] overflow-hidden flex items-center justify-center p-10 min-h-[320px]">
                <motion.img src={[imgInfluencer, imgDigitalAds, imgManAds, imgManInfluencer][activeService]} alt={serviceItems[activeService].label} className="w-full max-w-[320px] h-auto object-contain" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260 }} />
              </div>
              <div>
                <h3 className="font-['Neue_Machina'] text-[32px] text-[#292728] mb-4">{serviceItems[activeService].label}</h3>
                <p className="font-['Lexend_Deca'] font-light text-[17px] text-gray-600 leading-relaxed mb-8">{serviceItems[activeService].desc}</p>
                <motion.button onClick={() => navigate(activeService === 0 ? "billboards" : "services")} className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] text-[14px] px-7 py-3.5 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  {serviceItems[activeService].cta}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* ── Why 360 ── */}
      <motion.section ref={why360.ref} className="bg-[#292728] py-24" initial={{ opacity: 0 }} animate={{ opacity: why360.isVisible ? 1 : 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-['Lexend_Deca'] text-[#d0b301] text-[13px] uppercase tracking-widest mb-4 font-medium">Why choose us</p>
              <h2 className="font-['Neue_Machina'] font-black text-white mb-6" style={{ fontSize: "clamp(30px, 4vw, 50px)" }}>Why <span className="text-[#f6d935]">360 ads?</span></h2>
              <p className="font-['Lexend_Deca'] font-light text-gray-400 text-[17px] leading-relaxed mb-8">
                We connect your business to over <span className="text-[#d0b301] font-medium">70 million</span> target audience using Billboards, Smart SMS, Digital Ads, Voice SMS and top Influencers across Nigeria.
              </p>
              <motion.button onClick={() => navigate("signup")} className="flex items-center gap-3 bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] font-medium text-[14px] px-7 py-3.5 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                Start Your Campaign
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </motion.button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Target Strategically", desc: "No more wasteful spending — reach only your intended audience" },
                { title: "Optimise Value", desc: "Maximum ROI with our precision audience targeting tools" },
                { title: "Target Granularly", desc: "Age, gender, location, income — tailor ads to exact demographics" },
                { title: "Monitor Real-Time", desc: "Live analytics and reporting on all active campaigns" },
              ].map((item, i) => (
                <motion.div key={i} className="bg-[#1a1a1a] rounded-[16px] p-6 relative overflow-hidden group" initial={{ y: 30, opacity: 0 }} animate={{ y: why360.isVisible ? 0 : 30, opacity: why360.isVisible ? 1 : 0 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.04, y: -4 }}>
                  <div className="absolute top-0 left-0 w-full h-[2px]" style={{ backgroundColor: i % 2 === 0 ? "#f6d935" : "#d0b301" }} />
                  <h3 className="font-['Neue_Machina'] text-[16px] text-white mb-2 group-hover:text-[#f6d935] transition-colors">{item.title}</h3>
                  <p className="font-['Lexend_Deca'] font-light text-[13px] text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Featured Billboards ── */}
      <motion.section ref={featured.ref} className="py-24" initial={{ opacity: 0 }} animate={{ opacity: featured.isVisible ? 1 : 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-['Lexend_Deca'] text-[#d0b301] text-[13px] uppercase tracking-widest mb-2 font-medium">Top picks</p>
              <h2 className="font-['Neue_Machina'] text-[#292728]" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>Featured Billboards</h2>
            </div>
            <motion.button onClick={() => navigate("billboards")} className="hidden sm:flex items-center gap-2 font-['Lexend_Deca'] text-[14px] text-[#292728] border border-[#292728] px-5 py-2.5 rounded-[8px]" whileHover={{ backgroundColor: "#292728", color: "#fff" }}>
              View All
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </motion.button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BILLBOARDS.filter(b => b.availability === "Available").slice(0, 6).map(b => (
              <BillboardCard key={b.id} board={b} navigate={navigate} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <motion.button onClick={() => navigate("billboards")} className="font-['Lexend_Deca'] text-[14px] text-[#292728] border border-[#292728] px-6 py-3 rounded-[8px]" whileHover={{ backgroundColor: "#292728", color: "#fff" }}>View All Billboards</motion.button>
          </div>
        </div>
      </motion.section>

      {/* ── We stand out ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="font-['Lexend_Deca'] text-[#d0b301] text-[13px] uppercase tracking-widest mb-4 font-medium">Why we stand out</p>
              <h2 className="font-['Neue_Machina'] text-[#292728] leading-tight mb-6" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
                <motion.span className="block" whileHover={{ x: 8, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>We're challengers at heart and</motion.span>
                <motion.span className="block" whileHover={{ x: 8, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>builders by nature.</motion.span>
              </h2>
              <p className="font-['Lexend_Deca'] font-light text-[17px] text-gray-600 leading-relaxed mb-8">We work as one team and deliver projects <span className="text-[#d0b301]">concurrently</span> — from ideation to execution, without cutting corners.</p>
              <motion.button onClick={() => navigate("about")} className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] text-[14px] px-7 py-3.5 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                Our Story
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </motion.button>
            </motion.div>
            <motion.div className="bg-[#f6d935] rounded-[24px] overflow-hidden" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <motion.img src={imgInfluencer} alt="Influencer" className="w-full h-auto object-cover" whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 260 }} />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div className="bg-[#f6d935] rounded-[24px] overflow-hidden order-2 md:order-1" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <motion.img src={imgThink} alt="Think Innovation" className="w-full h-auto object-cover" whileHover={{ scale: 1.04, rotate: 1 }} transition={{ type: "spring", stiffness: 260 }} />
            </motion.div>
            <motion.div className="order-1 md:order-2" initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="font-['Neue_Machina'] text-[#292728] leading-tight mb-6" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
                <motion.span className="block" whileHover={{ x: -8, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>Get your audience's attention</motion.span>
                <motion.span className="block text-[#d0b301]" whileHover={{ x: -8 }} transition={{ type: "spring", stiffness: 300 }}>with our collection of tools</motion.span>
              </h2>
              <p className="font-['Lexend_Deca'] font-light text-[17px] text-gray-600 leading-relaxed mb-8">Join us to move from idea to execution faster with our all-in-one advertising platform built for Nigeria.</p>
              <motion.button onClick={() => navigate("services")} className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] text-[14px] px-7 py-3.5 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                Advertise with Us
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <motion.section ref={newsletter.ref} className="py-24" initial={{ opacity: 0 }} animate={{ opacity: newsletter.isVisible ? 1 : 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div className="bg-[#292728] rounded-[28px] p-10 lg:p-16 overflow-hidden" initial={{ scale: 0.94, y: 30 }} animate={{ scale: newsletter.isVisible ? 1 : 0.94, y: newsletter.isVisible ? 0 : 30 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-['Neue_Machina'] text-white mb-4 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>Subscribe to Our Newsletter</h2>
                <p className="font-['Lexend_Deca'] font-light text-[16px] text-gray-400 mb-8">Stay ahead with Nigeria's latest outdoor advertising trends, new billboard spots and exclusive deals.</p>
                <form className="flex gap-3">
                  <input type="email" placeholder="Enter your email" className="flex-1 bg-white rounded-[10px] px-5 py-3.5 font-['Lexend_Deca'] text-[14px] outline-none min-w-0" />
                  <motion.button type="submit" className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] font-medium px-6 py-3.5 rounded-[10px] shrink-0" whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }} whileTap={{ scale: 0.96 }}>Submit</motion.button>
                </form>
              </div>
              <motion.div className="flex justify-center" animate={{ y: [0, -18, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <img src={imgHappy} alt="Happy advertiser" className="w-full max-w-[280px] h-auto object-contain" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer navigate={navigate} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// BILLBOARDS PAGE
// ══════════════════════════════════════════════════════════════════════════════
function BillboardsPage({ navigate }: { navigate: (p: string) => void }) {
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [stateFilter, setStateFilter] = useState("All States");
  const [availFilter, setAvailFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = BILLBOARDS.filter(b => {
    const matchType = typeFilter === "All Types" || b.type === typeFilter;
    const matchState = stateFilter === "All States" || b.location === stateFilter;
    const matchAvail = availFilter === "All" || b.availability === availFilter;
    const matchSearch = !search || b.title.toLowerCase().includes(search.toLowerCase()) || b.area.toLowerCase().includes(search.toLowerCase());
    return matchType && matchState && matchAvail && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#f9f9f9] pt-[88px]">
      {/* Hero banner */}
      <div className="bg-[#292728] py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <p className="font-['Lexend_Deca'] text-[#d0b301] text-[13px] uppercase tracking-widest mb-3 font-medium">Billboard Directory</p>
            <h1 className="font-['Neue_Machina'] font-black text-white mb-4" style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
              Find Billboards in <span className="text-[#f6d935]">Nigeria</span>
            </h1>
            <p className="font-['Lexend_Deca'] font-light text-gray-400 text-[16px] max-w-xl">Browse {BILLBOARDS.length}+ available outdoor advertising sites across Lagos, Abuja, Port Harcourt and every state in Nigeria.</p>
          </motion.div>
          {/* Search bar */}
          <motion.div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-3xl" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by location or billboard name..." className="w-full font-['Lexend_Deca'] text-[14px] bg-white/10 text-white placeholder:text-gray-500 border border-white/10 rounded-[10px] pl-11 pr-4 py-3.5 outline-none focus:border-[#f6d935] transition-colors" />
            </div>
            <motion.button onClick={() => setShowFilters(!showFilters)} className="sm:hidden flex items-center gap-2 bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] text-[13px] font-medium px-5 py-3 rounded-[10px]" whileTap={{ scale: 0.97 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
              Filters
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar */}
          <motion.aside className={`md:w-64 shrink-0 ${showFilters ? "block" : "hidden md:block"}`} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-[16px] p-6 border border-[#eee] sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Neue_Machina'] text-[18px] text-[#292728]">Filters</h3>
                <button onClick={() => { setTypeFilter("All Types"); setStateFilter("All States"); setAvailFilter("All"); setSearch(""); }} className="font-['Lexend_Deca'] text-[12px] text-[#d0b301] hover:underline">Reset</button>
              </div>
              {/* Availability */}
              <div className="mb-6">
                <p className="font-['Lexend_Deca'] text-[12px] uppercase tracking-widest text-gray-400 mb-3 font-medium">Availability</p>
                {["All","Available","Booked"].map(a => (
                  <label key={a} className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                    <div onClick={() => setAvailFilter(a)} className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${availFilter === a ? "bg-[#292728] border-[#292728]" : "border-gray-300 group-hover:border-[#292728]"}`}>
                      {availFilter === a && <svg width="8" height="6" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                    </div>
                    <span className="font-['Lexend_Deca'] text-[14px] text-[#292728]">{a}</span>
                  </label>
                ))}
              </div>
              {/* State */}
              <div className="mb-6">
                <p className="font-['Lexend_Deca'] text-[12px] uppercase tracking-widest text-gray-400 mb-3 font-medium">State</p>
                <select value={stateFilter} onChange={e => setStateFilter(e.target.value)} className="w-full font-['Lexend_Deca'] text-[13px] text-[#292728] bg-[#f5f5f5] rounded-[8px] px-3 py-2.5 outline-none border-0">
                  {NIGERIA_STATES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              {/* Billboard type */}
              <div>
                <p className="font-['Lexend_Deca'] text-[12px] uppercase tracking-widest text-gray-400 mb-3 font-medium">Billboard Type</p>
                <div className="flex flex-col gap-1.5 max-h-52 overflow-y-auto">
                  {BILLBOARD_TYPES.map(t => (
                    <button key={t} onClick={() => setTypeFilter(t)} className={`text-left font-['Lexend_Deca'] text-[13px] px-3 py-2 rounded-[6px] transition-colors ${typeFilter === t ? "bg-[#292728] text-white" : "text-[#292728] hover:bg-[#f0f0f0]"}`}>{t}</button>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="font-['Lexend_Deca'] text-[14px] text-gray-500"><span className="font-medium text-[#292728]">{filtered.length}</span> billboards found</p>
              <div className="flex items-center gap-2 text-[13px] font-['Lexend_Deca'] text-gray-500">
                Sort by: <button className="text-[#292728] font-medium">Price ↑</button>
              </div>
            </div>
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-[#f0f0f0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 size={28} className="text-gray-400" />
                </div>
                <h3 className="font-['Neue_Machina'] text-[24px] text-[#292728] mb-2">No billboards found</h3>
                <p className="font-['Lexend_Deca'] font-light text-gray-500">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(b => <BillboardCard key={b.id} board={b} navigate={navigate} />)}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer navigate={navigate} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SIGN IN PAGE
// ══════════════════════════════════════════════════════════════════════════════
function SignInPage({ navigate }: { navigate: (p: string) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden md:flex w-[45%] bg-[#292728] relative overflow-hidden flex-col items-center justify-center">
        <motion.div className="relative z-10 w-full h-full flex items-center justify-center p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
          <AuthIllustration />
        </motion.div>
        <motion.button onClick={() => navigate("home")} className="absolute top-8 left-8 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <Logo light />
        </motion.button>
      </div>
      {/* Right panel */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f9f9f9] px-6 py-12 relative">
        <motion.button onClick={() => navigate("home")} className="absolute top-6 right-6 w-10 h-10 bg-[#f6d935] rounded-full flex items-center justify-center text-[#292728]" whileHover={{ scale: 1.1, backgroundColor: "#d0b301" }} whileTap={{ scale: 0.95 }}>
          <X size={18} />
        </motion.button>
        <motion.div className="w-full max-w-[400px]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="md:hidden mb-8"><Logo /></div>
          <h1 className="font-['Neue_Machina'] font-black text-[36px] text-[#292728] mb-1">Welcome Back</h1>
          <p className="font-['Lexend_Deca'] text-[#d0b301] text-[14px] mb-8">Let's get right to it. Log into your account</p>
          <form onSubmit={e => { e.preventDefault(); navigate("home"); }} className="space-y-5">
            <div>
              <label className="font-['Lexend_Deca'] text-[13px] text-[#292728] font-medium block mb-1.5">Email:</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email address..." className="w-full font-['Lexend_Deca'] text-[14px] bg-[#f0f0f0] rounded-[8px] px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#d0b301] transition-all" />
            </div>
            <div>
              <label className="font-['Lexend_Deca'] text-[13px] text-[#292728] font-medium block mb-1.5">Password</label>
              <div className="relative">
                <input type={showPass ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password..." className="w-full font-['Lexend_Deca'] text-[14px] bg-[#f0f0f0] rounded-[8px] px-4 py-3.5 pr-12 outline-none focus:ring-2 focus:ring-[#d0b301] transition-all" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#292728]">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <div onClick={() => setRemember(!remember)} className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${remember ? "bg-[#292728] border-[#292728]" : "border-gray-300"}`}>
                  {remember && <svg width="8" height="6" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                </div>
                <span className="font-['Lexend_Deca'] text-[13px] text-[#292728]">Remember me</span>
              </label>
              <button type="button" className="font-['Lexend_Deca'] text-[13px] text-[#d0b301] hover:underline">Forgot password?</button>
            </div>
            <motion.button type="submit" className="w-full flex items-center justify-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] font-medium text-[15px] py-4 rounded-[10px] mt-2" whileHover={{ backgroundColor: "#d0b301", scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Log In
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </motion.button>
          </form>
          <p className="font-['Lexend_Deca'] text-[13px] text-gray-500 text-center mt-6">
            Don't have an account yet?{" "}
            <button onClick={() => navigate("signup")} className="text-[#d0b301] font-medium hover:underline">Register</button>
          </p>
          <p className="font-['Lexend_Deca'] text-[11px] text-gray-400 text-center mt-8">
            Terms of use · Privacy policy
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SIGN UP PAGE
// ══════════════════════════════════════════════════════════════════════════════
function SignUpPage({ navigate }: { navigate: (p: string) => void }) {
  const [accountType, setAccountType] = useState<"individual" | "business">("individual");
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", phone: "", businessName: "", businessEmail: "", contactName: "" });
  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({ ...f, [k]: e.target.value }));
  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden md:flex w-[45%] bg-[#292728] relative overflow-hidden flex-col items-center justify-center">
        <motion.div className="relative z-10 w-full h-full flex items-center justify-center p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
          <AuthIllustration />
        </motion.div>
        <motion.button onClick={() => navigate("home")} className="absolute top-8 left-8 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <Logo light />
        </motion.button>
      </div>
      {/* Right panel */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f9f9f9] px-6 py-12 relative overflow-y-auto">
        <motion.button onClick={() => navigate("home")} className="absolute top-6 right-6 w-10 h-10 bg-[#f6d935] rounded-full flex items-center justify-center text-[#292728]" whileHover={{ scale: 1.1, backgroundColor: "#d0b301" }} whileTap={{ scale: 0.95 }}>
          <X size={18} />
        </motion.button>
        <motion.div className="w-full max-w-[420px]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="md:hidden mb-6"><Logo /></div>
          <h1 className="font-['Neue_Machina'] font-black text-[32px] text-[#292728] mb-1">Let's Dive right in.</h1>
          <p className="font-['Lexend_Deca'] text-[#d0b301] text-[14px] mb-6">Please complete to create your account</p>
          {/* Tab toggle */}
          <div className="flex bg-[#e8e8e8] rounded-[10px] p-1 mb-7">
            {(["individual","business"] as const).map(t => (
              <motion.button key={t} onClick={() => setAccountType(t)} className={`flex-1 font-['Lexend_Deca'] text-[13px] font-medium py-2.5 rounded-[8px] transition-colors capitalize ${accountType === t ? "bg-[#292728] text-white" : "text-gray-500"}`} whileTap={{ scale: 0.98 }}>
                {t === "individual" ? "Individual Account" : "Business Account"}
              </motion.button>
            ))}
          </div>
          <form onSubmit={e => { e.preventDefault(); navigate("home"); }} className="space-y-4">
            <AnimatePresence mode="wait">
              {accountType === "individual" ? (
                <motion.div key="individual" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">First name:</label>
                      <input value={form.firstName} onChange={upd("firstName")} placeholder="Enter first name..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                    </div>
                    <div>
                      <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Last name:</label>
                      <input value={form.lastName} onChange={upd("lastName")} placeholder="Enter last name..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                    </div>
                  </div>
                  <div>
                    <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Email:</label>
                    <input type="email" value={form.email} onChange={upd("email")} placeholder="Enter email address..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Password:</label>
                      <input type="password" value={form.password} onChange={upd("password")} placeholder="Enter your password..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                    </div>
                    <div>
                      <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Confirm password:</label>
                      <input type="password" value={form.confirmPassword} onChange={upd("confirmPassword")} placeholder="Confirm your password..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                    </div>
                  </div>
                  <div>
                    <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Phone number:</label>
                    <input value={form.phone} onChange={upd("phone")} placeholder="Enter phone number..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                  </div>
                </motion.div>
              ) : (
                <motion.div key="business" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <div>
                    <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Business name:</label>
                    <input value={form.businessName} onChange={upd("businessName")} placeholder="Enter business name..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                  </div>
                  <div>
                    <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Business email:</label>
                    <input type="email" value={form.businessEmail} onChange={upd("businessEmail")} placeholder="Enter email address..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Password:</label>
                      <input type="password" value={form.password} onChange={upd("password")} placeholder="Enter your password..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                    </div>
                    <div>
                      <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Confirm password:</label>
                      <input type="password" value={form.confirmPassword} onChange={upd("confirmPassword")} placeholder="Confirm your password..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                    </div>
                  </div>
                  <div>
                    <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Contact name:</label>
                    <input value={form.contactName} onChange={upd("contactName")} placeholder="Enter contact name..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                  </div>
                  <div>
                    <label className="font-['Lexend_Deca'] text-[12px] text-[#292728] font-medium block mb-1">Phone number:</label>
                    <input value={form.phone} onChange={upd("phone")} placeholder="Enter phone number..." className="w-full font-['Lexend_Deca'] text-[13px] bg-[#f0f0f0] rounded-[8px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#d0b301]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <label className="flex items-start gap-2.5 cursor-pointer mt-1">
              <div onClick={() => setAgreed(!agreed)} className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${agreed ? "bg-[#292728] border-[#292728]" : "border-gray-300"}`}>
                {agreed && <svg width="8" height="6" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              </div>
              <span className="font-['Lexend_Deca'] text-[12px] text-gray-600">I agree with <span className="text-[#d0b301] hover:underline cursor-pointer">terms and conditions</span></span>
            </label>
            <motion.button type="submit" className="w-full flex items-center justify-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] font-medium text-[15px] py-4 rounded-[10px] mt-2" whileHover={{ backgroundColor: "#d0b301", scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Register
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </motion.button>
          </form>
          <p className="font-['Lexend_Deca'] text-[13px] text-gray-500 text-center mt-5">
            Already have an account?{" "}
            <button onClick={() => navigate("signin")} className="text-[#d0b301] font-medium hover:underline">Log in</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ABOUT PAGE
// ══════════════════════════════════════════════════════════════════════════════
function AboutPage({ navigate }: { navigate: (p: string) => void }) {
  const hero = useScrollReveal();
  const culture = useScrollReveal();
  const think = useScrollReveal();
  return (
    <div className="min-h-screen bg-[#f9f9f9] pt-[88px]">
      {/* Hero */}
      <motion.section ref={hero.ref} className="py-24 lg:py-32 flex items-center" initial={{ opacity: 0 }} animate={{ opacity: hero.isVisible ? 1 : 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
          <motion.h1 className="font-['Neue_Machina'] font-black text-[#292728] leading-[1.05]" style={{ fontSize: "clamp(40px, 7vw, 88px)" }} initial={{ y: 50, opacity: 0 }} animate={{ y: hero.isVisible ? 0 : 50, opacity: hero.isVisible ? 1 : 0 }} transition={{ delay: 0.2 }}>
            <motion.span className="block" whileHover={{ x: 12, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>building concurrent</motion.span>
            <motion.span className="block text-[#292728]" whileHover={{ x: -12, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>——— projects together</motion.span>
          </motion.h1>
        </div>
      </motion.section>
      {/* Culture */}
      <motion.section ref={culture.ref} className="py-20" initial={{ opacity: 0 }} animate={{ opacity: culture.isVisible ? 1 : 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: culture.isVisible ? 0 : -60, opacity: culture.isVisible ? 1 : 0 }} transition={{ delay: 0.2 }}>
              <p className="font-['Lexend_Deca'] text-[#d0b301] text-[13px] uppercase tracking-widest mb-4 font-medium">Culture @ 360 ads</p>
              <div className="font-['Lexend_Deca'] font-light text-[17px] text-[#292728] leading-[1.8] space-y-5 mb-8">
                <p>360 Ads NG is a tech company that specialises in Digital Marketing. Our recently developed web-based digital campaign manager enables corporations &amp; SMEs to promote and target adverts to prospective customers.</p>
                <p>Our aim is to aid organisations drive digital campaign model via our collections of tools specifically developed to manage the design process, generate leads, improve user responsiveness and efficiently deliver advert contents.</p>
              </div>
              <div className="flex items-center gap-4">
                <motion.button onClick={() => navigate("signup")} className="bg-[#292728] text-white font-['Lexend_Deca'] text-[14px] px-7 py-3.5 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }} whileTap={{ scale: 0.96 }}>Advertise with Us</motion.button>
                <motion.div className="w-[52px] h-[52px] bg-[#292728] rounded-full flex items-center justify-center shrink-0 cursor-pointer" whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "#d0b301" }} whileTap={{ scale: 0.9 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.div>
              </div>
            </motion.div>
            <motion.div initial={{ x: 60, opacity: 0 }} animate={{ x: culture.isVisible ? 0 : 60, opacity: culture.isVisible ? 1 : 0 }} transition={{ delay: 0.4 }}>
              <motion.div className="bg-[#f6d935] rounded-[28px] overflow-hidden" whileHover={{ scale: 1.02, rotate: 0.5 }} transition={{ type: "spring", stiffness: 260 }}>
                <motion.img src={imgManInfluencer} alt="Social Media Influencer" className="w-full h-auto object-cover" animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* How we think */}
      <motion.section ref={think.ref} className="py-20 bg-white" initial={{ opacity: 0 }} animate={{ opacity: think.isVisible ? 1 : 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <p className="font-['Lexend_Deca'] text-[#d0b301] text-[13px] uppercase tracking-widest mb-10 font-medium">How we think</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-start mb-14">
            <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: think.isVisible ? 0 : -60, opacity: think.isVisible ? 1 : 0 }} transition={{ delay: 0.2 }}>
              <h2 className="font-['Neue_Machina'] text-[#292728] leading-tight mb-5" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
                <motion.span className="block" whileHover={{ x: 8, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>We're challengers at heart and</motion.span>
                <motion.span className="block" whileHover={{ x: 8, color: "#d0b301" }} transition={{ type: "spring", stiffness: 300 }}>builders by nature.</motion.span>
              </h2>
              <p className="font-['Lexend_Deca'] font-light text-[17px] text-[#292728] leading-relaxed mb-8">We work as one team and deliver projects <span className="text-[#d0b301]">concurrently...</span></p>
              <div className="flex items-center gap-4">
                <motion.div className="w-[52px] h-[52px] bg-[#f6d935] rounded-full flex items-center justify-center shrink-0 cursor-pointer" whileHover={{ scale: 1.1, rotate: 90 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#292728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.div>
                <motion.button className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] text-[14px] px-7 py-3.5 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }} whileTap={{ scale: 0.96 }}>Dive into Our Culture</motion.button>
              </div>
            </motion.div>
            <motion.div className="space-y-4" initial={{ x: 60, opacity: 0 }} animate={{ x: think.isVisible ? 0 : 60, opacity: think.isVisible ? 1 : 0 }} transition={{ delay: 0.4 }}>
              {[
                { title: "Innovation-Driven", desc: "We constantly push boundaries to deliver cutting-edge advertising solutions" },
                { title: "Client-Focused", desc: "Your success is our priority — we tailor every campaign to your unique goals" },
                { title: "Results-Oriented", desc: "We measure our success by the tangible impact we create for your business" },
              ].map((item, i) => (
                <motion.div key={i} className="bg-[#f9f9f9] rounded-[16px] p-7 border-l-4 border-[#f6d935]" initial={{ x: 40, opacity: 0 }} animate={{ x: think.isVisible ? 0 : 40, opacity: think.isVisible ? 1 : 0 }} transition={{ delay: 0.3 + i * 0.12 }} whileHover={{ scale: 1.02, borderColor: "#d0b301" }}>
                  <h3 className="font-['Neue_Machina'] text-[20px] text-[#292728] mb-1.5">{item.title}</h3>
                  <p className="font-['Lexend_Deca'] font-light text-[15px] text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: think.isVisible ? 0 : 60, opacity: think.isVisible ? 1 : 0 }} transition={{ delay: 0.6 }}>
            <motion.img src={imgThink} alt="Ideas" className="w-full h-auto rounded-[24px] object-cover max-h-[400px] object-top" whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 260 }} />
          </motion.div>
        </div>
      </motion.section>
      {/* Core values */}
      <section className="py-24 bg-[#292728]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <motion.h2 className="font-['Neue_Machina'] text-[#f9f9f9] text-center mb-16" style={{ fontSize: "clamp(28px, 4vw, 48px)" }} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Our Core Values</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title:"Integrity", Icon: Check, color:"#f6d935" },
              { title:"Excellence", Icon: Award, color:"#d0b301" },
              { title:"Innovation", Icon: Zap, color:"#f6d935" }
            ].map((v, i) => (
              <motion.div key={i} className="text-center" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} whileHover={{ y: -10 }}>
                <motion.div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-[#292728]" style={{ backgroundColor: v.color }} whileHover={{ scale: 1.12, rotate: 360 }} transition={{ duration: 0.5 }}>
                  <v.Icon size={28} strokeWidth={2.5} />
                </motion.div>
                <h3 className="font-['Neue_Machina'] text-[26px] text-white">{v.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer navigate={navigate} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SERVICES PAGE
// ══════════════════════════════════════════════════════════════════════════════
function ServicesPage({ navigate }: { navigate: (p: string) => void }) {
  const { count: c1, ref: r1 } = useCountUp(123);
  const { count: c2, ref: r2 } = useCountUp(1300);
  const { count: c3, ref: r3 } = useCountUp(100);
  const SERVICES = [
    { num:"01", title:"Digital Ads", desc:"Precision-targeted digital campaigns across social media, display networks and programmatic platforms. Data-driven for maximum ROI and measurable engagement.", img: imgDigitalAds, bg:"#f6d935" },
    { num:"02", title:"Billboard Marketing", desc:"Make a bold statement with strategic billboard placements that capture attention and drive brand awareness in Nigeria's highest-traffic locations.", img: imgInfluencer, bg:"#292728" },
    { num:"03", title:"Smart SMS", desc:"Connect directly with your customers through intelligent SMS campaigns — personalised, timely and impossible to ignore.", img: imgManAds, bg:"#f6d935" },
    { num:"04", title:"Influencer Marketing", desc:"Leverage Nigeria's top social media influencers to amplify your brand message and reach engaged, loyal audiences authentically.", img: imgManInfluencer, bg:"#292728" },
    { num:"05", title:"Voice SMS & WhatsApp", desc:"Engage customers through personalised voice messages and WhatsApp cluster campaigns — direct brand touchpoints at scale.", img: imgHappy, bg:"#f6d935" },
  ];
  return (
    <div className="min-h-screen bg-[#f9f9f9] pt-[88px]">
      {/* Hero */}
      <section className="bg-[#292728] py-28 lg:py-36">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <motion.div className="text-center" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <h1 className="font-['Neue_Machina'] font-black text-white leading-[1.1]" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
              <motion.span className="block" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>services/</motion.span>
              <motion.span className="block text-[#f6d935]" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 }}>this is what we do best.</motion.span>
            </h1>
            <motion.p className="font-['Lexend_Deca'] font-light text-[#d0b301] text-[18px] mt-5" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>Discovery &amp; Execution</motion.p>
          </motion.div>
          <motion.div className="mt-14 flex justify-center" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <div className="w-9 h-24 bg-[#f6d935] rounded-full flex items-end justify-center pb-4">
              <svg width="14" height="22" viewBox="0 0 14 28" fill="none"><path d="M7 0v22M7 22L2 17M7 22L12 17" stroke="#292728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats */}
      <section className="bg-[#292728] py-16 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <p className="font-['Lexend_Deca'] font-light text-[16px] lg:text-[20px] text-white leading-relaxed max-w-3xl mx-auto text-center mb-16">
            With over <span className="text-[#d0b301] font-medium">70 million</span> target audience we connect your business to the right customer using our BILLBOARDS, SMART SMS, DISPLAY ADS, VOICE SMS and TOP INFLUENCERS across Nigeria.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[{ ref:r1, count:c1, suffix:"+", label:"Completed", sub:"Campaigns" },{ ref:r2, count:c2, suffix:"+", label:"Happy", sub:"Customers" },{ ref:r3, count:c3, suffix:"%", label:"Clients", sub:"Reached" }].map(({ ref, count, suffix, label, sub }, i) => (
              <motion.div key={i} ref={ref} className="text-center" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.06 }}>
                <div className="font-['Neue_Machina'] font-black text-[52px] mb-1"><span className="text-white">{count}</span><span className="text-[#d0b301]">{suffix}</span></div>
                <p className="font-['Lexend_Deca'] text-[18px] text-white">{label}</p>
                <p className="font-['Lexend_Deca'] font-light text-[13px] text-gray-400">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services list */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-['Neue_Machina'] text-[#292728]" style={{ fontSize: "clamp(26px, 4vw, 46px)" }}>Get your audience's attention with our</h2>
            <p className="font-['Lexend_Deca'] font-light text-[#d0b301] text-[22px] mt-1">collection of tools</p>
          </div>
          <div className="space-y-20">
            {SERVICES.map(({ num, title, desc, img, bg }, i) => {
              const flip = i % 2 === 1;
              return (
                <motion.div key={num} className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center" initial={{ x: flip ? 60 : -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                  <div className={flip ? "order-1 md:order-2" : ""}>
                    <span className="inline-block bg-[#292728] text-white font-['Lexend_Deca'] text-[12px] rounded-full px-4 py-1.5 mb-5">{num}</span>
                    <h3 className="font-['Neue_Machina'] text-[32px] text-[#292728] mb-4">{title}</h3>
                    <p className="font-['Lexend_Deca'] font-light text-[16px] text-gray-600 leading-relaxed mb-7">{desc}</p>
                    <motion.button onClick={() => navigate(i === 1 ? "billboards" : "signup")} className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] text-[14px] px-7 py-3.5 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                      <span>{i === 1 ? "Find Billboards" : "Get Started"}</span>
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </motion.button>
                  </div>
                  <div className={`rounded-[24px] overflow-hidden flex items-center justify-center p-10 min-h-[320px] ${flip ? "order-2 md:order-1" : ""}`} style={{ backgroundColor: bg }}>
                    <motion.img src={img} alt={title} className="w-full max-w-[280px] h-auto object-contain" whileHover={{ scale: 1.06, rotate: flip ? -1 : 1 }} transition={{ type: "spring", stiffness: 260 }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div className="bg-[#292728] rounded-[28px] p-12 lg:p-20 text-center" initial={{ scale: 0.94, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-['Neue_Machina'] text-white mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>Ready to Get Started?</h2>
            <p className="font-['Lexend_Deca'] font-light text-[16px] text-gray-400 mb-10 max-w-xl mx-auto">Join over 1,300 happy customers who have transformed their marketing with our services</p>
            <motion.button onClick={() => navigate("signup")} className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] font-semibold text-[16px] px-12 py-4 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.05 }} whileTap={{ scale: 0.96 }}>Start Your Campaign Today</motion.button>
          </motion.div>
        </div>
      </section>
      <Footer navigate={navigate} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CONTACT PAGE
// ══════════════════════════════════════════════════════════════════════════════
function ContactPage({ navigate }: { navigate: (p: string) => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const upd = (k: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData(f => ({ ...f, [k]: e.target.value }));
  return (
    <div className="min-h-screen bg-[#f9f9f9] pt-[88px]">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <h1 className="font-['Neue_Machina'] font-black text-[#292728] leading-[1.0] mb-8" style={{ fontSize: "clamp(36px, 6vw, 76px)" }}>
              ready when<br/>you are—Let's kickstart<br/>your digital campaign.
            </h1>
            <p className="font-['Lexend_Deca'] font-light text-[15px] text-gray-500 mb-8">you can also send us a plain email if you want too :)<br /><span className="text-[#292728]">info@360ads.ng</span></p>
            <motion.button onClick={() => navigate("signup")} className="flex items-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] text-[14px] px-7 py-3.5 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              Get in touch
              <ArrowRight size={14} />
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Dark office section */}
      <section className="bg-[#292728] py-20 relative overflow-hidden">
        <div className="absolute right-12 bottom-0 opacity-5 select-none pointer-events-none">
          <Logo light size={4} />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="font-['Lexend_Deca'] text-[#d0b301] text-[13px] uppercase tracking-widest mb-6 font-medium">Our Office</p>
              <p className="font-['Lexend_Deca'] font-light text-[17px] text-white leading-[1.8] mb-8">If you have ideas for your brand, your business, or the world at large, we're here to listen and collaborate. We can build a more human future <span className="text-[#d0b301]">together.</span></p>
              <form onSubmit={e => { e.preventDefault(); }} className="space-y-4">
                <input value={formData.name} onChange={upd("name")} placeholder="Your name" className="w-full font-['Lexend_Deca'] text-[14px] bg-white/10 text-white placeholder:text-gray-500 border border-white/10 rounded-[10px] px-4 py-3.5 outline-none focus:border-[#f6d935] transition-colors" />
                <input type="email" value={formData.email} onChange={upd("email")} placeholder="Email address" className="w-full font-['Lexend_Deca'] text-[14px] bg-white/10 text-white placeholder:text-gray-500 border border-white/10 rounded-[10px] px-4 py-3.5 outline-none focus:border-[#f6d935] transition-colors" />
                <textarea value={formData.message} onChange={upd("message")} placeholder="Tell us about your project..." rows={5} className="w-full font-['Lexend_Deca'] text-[14px] bg-white/10 text-white placeholder:text-gray-500 border border-white/10 rounded-[10px] px-4 py-3.5 outline-none focus:border-[#f6d935] transition-colors resize-none" />
                <motion.button type="submit" className="w-full bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] font-medium text-[15px] py-4 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.02 }} whileTap={{ scale: 0.98 }}>Send Message</motion.button>
              </form>
            </div>
            <div>
              <div className="space-y-6 text-right">
                <div>
                  <p className="font-['Lexend_Deca'] font-light text-[16px] text-white">3 Adedoyin Ogungbe Crescent,</p>
                  <p className="font-['Lexend_Deca'] font-light text-[16px] text-white">Lekki Phase 1,</p>
                  <p className="font-['Lexend_Deca'] font-light text-[16px] text-white">Lagos, Nigeria.</p>
                </div>
                {[
                  { Icon: Phone, text: "+2348122089773" },
                  { Icon: Mail, text: "info@360ads.com.ng" },
                  { Icon: Clock, text: "Mon–Fri, 9am – 6pm WAT" },
                ].map(({ Icon, text }, i) => (
                  <p key={i} className="font-['Lexend_Deca'] font-light text-[15px] text-white/80 flex items-center gap-2 justify-end">
                    <Icon size={14} className="text-[#d0b301] shrink-0" />{text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Looking forward */}
      <section className="py-16 bg-[#f0f0f0] relative">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-['Neue_Machina'] text-[#292728] text-center" style={{ fontSize: "clamp(22px, 3.5vw, 40px)" }}>Looking forward to working with<br/>amazing brands and businesses</h2>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5">
          {["W","F","I","T"].map((s, i) => (
            <motion.a key={i} href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#292728] text-[11px] font-bold shadow-sm" whileHover={{ scale: 1.15, backgroundColor: "#f6d935" }}>{s}</motion.a>
          ))}
        </div>
      </section>
      <Footer navigate={navigate} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// FAQs PAGE
// ══════════════════════════════════════════════════════════════════════════════
function FaqsPage({ navigate }: { navigate: (p: string) => void }) {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "How much does billboard advertising cost in Nigeria?", a: "The cost varies by location, size, and type. In Lagos, prices range from ₦150,000 to ₦1,200,000+ per month. Prime locations like the Third Mainland Bridge or Lekki command premium rates. Contact us for a custom quote." },
    { q: "How do I book a billboard on 360 Ads?", a: "Simply browse our Billboard directory, select a billboard that suits your needs, click 'Get Quote' and create an account. Our team will reach out within 24 hours to finalise details." },
    { q: "What areas in Nigeria do you cover?", a: "We cover all 36 states in Nigeria including Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu, Benin City, Calabar, Kaduna and many more." },
    { q: "Can I advertise digitally alongside billboards?", a: "Yes — 360 Ads offers a full 360° advertising solution. You can combine billboard marketing with Digital Ads, Smart SMS, WhatsApp Clusters and Influencer Marketing for maximum reach." },
    { q: "How long does it take to set up a campaign?", a: "Typically 3–5 business days from confirmation of booking. Digital billboard slots can be activated within 48 hours, while static billboards may require printing and installation time." },
    { q: "Do you offer campaign monitoring?", a: "Yes. We provide regular reports and live analytics dashboards so you can track impressions, engagement, and ROI throughout your campaign." },
  ];
  return (
    <div className="min-h-screen bg-[#f9f9f9] pt-[88px]">
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <p className="font-['Lexend_Deca'] text-[#d0b301] text-[13px] uppercase tracking-widest mb-3 font-medium">Frequently Asked Questions</p>
            <h1 className="font-['Neue_Machina'] font-black text-[#292728] mb-12" style={{ fontSize: "clamp(32px, 5vw, 60px)" }}>FAQs</h1>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} className="bg-white rounded-[14px] border border-[#eee] overflow-hidden" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-['Lexend_Deca'] font-medium text-[15px] text-[#292728] pr-4">{faq.q}</span>
                  <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 w-7 h-7 bg-[#f6d935] rounded-full flex items-center justify-center text-[#292728] font-bold text-[16px]">+</motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p className="font-['Lexend_Deca'] font-light text-[15px] text-gray-600 leading-relaxed px-6 pb-6">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-16 bg-[#292728] rounded-[24px] p-10 text-center" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-['Neue_Machina'] text-white text-[28px] mb-3">Still have questions?</h2>
            <p className="font-['Lexend_Deca'] font-light text-gray-400 text-[15px] mb-7">Our team is happy to help — reach out any time.</p>
            <motion.button onClick={() => navigate("contact")} className="bg-[#f6d935] text-[#292728] font-['Lexend_Deca'] font-medium text-[14px] px-8 py-3.5 rounded-[10px]" whileHover={{ backgroundColor: "#d0b301", scale: 1.04 }} whileTap={{ scale: 0.96 }}>Contact Us</motion.button>
          </motion.div>
        </div>
      </section>
      <Footer navigate={navigate} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// BILLBOARD DETAIL PAGE
// ══════════════════════════════════════════════════════════════════════════════
function BillboardDetailPage({ board, navigate }: { board: typeof BILLBOARDS[0]; navigate: (p: string, data?: unknown) => void }) {
  const similarBoards = BILLBOARDS.filter(b => b.id !== board.id && (b.location === board.location || b.type === board.type)).slice(0, 3);
  const specs = [
    { label: "Billboard Type", value: board.type, Icon: Building2 },
    { label: "Size", value: board.size, Icon: Ruler },
    { label: "Facing Direction", value: board.facing, Icon: Compass },
    { label: "Location", value: `${board.area}, ${board.location}`, Icon: MapPin },
    { label: "Availability", value: board.availability, Icon: Check },
    { label: "Price", value: `${board.price} ${board.period}`, Icon: Tag },
  ];
  return (
    <div className="min-h-screen bg-[#f9f9f9] pt-[88px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-8 pb-0">
        <motion.button
          onClick={() => navigate("billboards")}
          className="flex items-center gap-2 font-['Lexend_Deca'] text-[14px] text-gray-500 hover:text-[#292728] transition-colors mb-6"
          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M16 10H4M4 10L10 4M4 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          Back to Billboards
        </motion.button>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Visual + details */}
          <div className="lg:col-span-3">
            <motion.div
              className="rounded-[20px] overflow-hidden mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              style={{ background: "repeating-linear-gradient(135deg, #1a1a1a 0, #1a1a1a 2px, #222 0, #222 50%)", backgroundSize: "8px 8px" }}
            >
              <div className="relative h-[320px] md:h-[380px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <motion.div
                    className="w-52 h-24 rounded-[6px] flex flex-col items-center justify-center shadow-2xl"
                    style={{ backgroundColor: board.accentColor }}
                    animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="font-['Neue_Machina'] font-black text-[#292728] text-[14px] tracking-wide">BILLBOARD</span>
                    <span className="font-['Neue_Machina'] font-black text-[#292728] text-[11px] opacity-70">ADVERTISING SPACE</span>
                  </motion.div>
                  <div className="w-1.5 h-14 bg-white/20 rounded-full" />
                  <div className="w-10 h-1.5 bg-white/25 rounded-full" />
                </div>
                <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
                  {board.tags.map(t => (
                    <span key={t} className="text-[11px] font-['Lexend_Deca'] bg-black/60 text-white px-3 py-1 rounded-full backdrop-blur-sm">{t}</span>
                  ))}
                </div>
                <div className={`absolute top-5 right-5 px-3 py-1.5 rounded-full text-[12px] font-['Lexend_Deca'] font-semibold ${board.availability === "Available" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                  {board.availability}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
              <h1 className="font-['Neue_Machina'] font-black text-[#292728] leading-tight mb-3" style={{ fontSize: "clamp(22px, 3vw, 34px)" }}>
                {board.title}
              </h1>
              <div className="flex items-center gap-2 font-['Lexend_Deca'] text-[14px] text-gray-500 mb-6">
                <MapPin size={15} className="text-[#d0b301]" />
                {board.area}, {board.location}, Nigeria
              </div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {specs.map(({ label, value, Icon }) => (
                  <div key={label} className="bg-white rounded-[12px] p-4 border border-[#eee] flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#f5f5f5] rounded-[8px] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-[#d0b301]" />
                    </div>
                    <div>
                      <p className="font-['Lexend_Deca'] text-[11px] text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="font-['Lexend_Deca'] text-[13px] text-[#292728] font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-[16px] p-6 border border-[#eee]">
                <h3 className="font-['Neue_Machina'] text-[18px] text-[#292728] mb-3">About This Billboard</h3>
                <p className="font-['Lexend_Deca'] font-light text-[15px] text-gray-600 leading-[1.8]">
                  This {board.type.toLowerCase()} billboard is situated at {board.area}, {board.location} — one of Nigeria's high-footfall advertising locations.
                  With a {board.size} display surface and {board.facing.toLowerCase()} orientation, it delivers outstanding visibility to commuters and pedestrians throughout the day.
                  Ideal for brands looking to establish a strong presence in {board.location}.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["High Visibility", "Prime Location", "24/7 Exposure", `${board.location} Market`].map(tag => (
                    <span key={tag} className="font-['Lexend_Deca'] text-[11px] bg-[#f5f5f5] text-[#292728] px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          {/* Right — Quote CTA + similar */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-[20px] p-6 border border-[#eee] shadow-sm sticky top-28"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
            >
              <div className="mb-5">
                <p className="font-['Lexend_Deca'] text-[12px] text-gray-400 uppercase tracking-widest mb-1">Starting from</p>
                <div className="font-['Neue_Machina'] font-black text-[36px] text-[#292728] leading-none">{board.price}</div>
                <div className="font-['Lexend_Deca'] text-[13px] text-gray-400 mt-1">{board.period}</div>
              </div>
              <div className="border-t border-[#f0f0f0] py-4 mb-5 space-y-2.5">
                {[
                  `${board.size} display surface`,
                  `${board.facing}`,
                  board.availability === "Available" ? "Available to book now" : "Currently booked",
                  "Campaign support included",
                  "Performance reporting",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${i === 2 && board.availability !== "Available" ? "bg-red-100" : "bg-[#f6d935]"}`}>
                      <Check size={9} className={i === 2 && board.availability !== "Available" ? "text-red-500" : "text-[#292728]"} strokeWidth={3} />
                    </div>
                    <span className="font-['Lexend_Deca'] text-[13px] text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button
                onClick={() => navigate("signin")}
                className="w-full flex items-center justify-center gap-3 bg-[#292728] text-white font-['Lexend_Deca'] font-medium text-[15px] py-4 rounded-[12px] mb-3"
                whileHover={{ backgroundColor: "#d0b301", scale: 1.02 }} whileTap={{ scale: 0.98 }}
              >
                Get a Quote
                <ArrowRight size={16} />
              </motion.button>
              <p className="font-['Lexend_Deca'] text-[11px] text-gray-400 text-center">Sign in or create a free account to continue</p>
              <div className="mt-5 flex items-center gap-3 bg-[#f9f9f9] rounded-[10px] p-3">
                <div className="w-8 h-8 bg-[#f6d935] rounded-full flex items-center justify-center shrink-0">
                  <Phone size={13} className="text-[#292728]" />
                </div>
                <div>
                  <p className="font-['Lexend_Deca'] text-[11px] text-gray-400">Prefer to call us?</p>
                  <p className="font-['Lexend_Deca'] text-[13px] text-[#292728] font-medium">+234 812 208 9773</p>
                </div>
              </div>
            </motion.div>
            {similarBoards.length > 0 && (
              <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <h3 className="font-['Neue_Machina'] text-[18px] text-[#292728] mb-4">Similar Billboards</h3>
                <div className="space-y-3">
                  {similarBoards.map(b => (
                    <motion.div
                      key={b.id}
                      onClick={() => navigate("billboard-detail", b)}
                      className="bg-white rounded-[12px] p-4 border border-[#eee] cursor-pointer flex items-center gap-3"
                      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                    >
                      <div className="w-14 h-14 rounded-[8px] shrink-0 flex items-center justify-center" style={{ backgroundColor: b.accentColor }}>
                        <Building2 size={18} className="text-[#292728] opacity-70" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-['Neue_Machina'] text-[13px] text-[#292728] line-clamp-1">{b.title}</p>
                        <p className="font-['Lexend_Deca'] text-[11px] text-gray-400 mt-0.5 flex items-center gap-1">
                          <MapPin size={10} /> {b.area}, {b.location}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-['Neue_Machina'] font-black text-[13px] text-[#292728]">{b.price}</p>
                        <p className="font-['Lexend_Deca'] text-[10px] text-gray-400">/mo</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer navigate={navigate} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// APP ROOT
// ══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("home");
  const [currentBillboard, setCurrentBillboard] = useState<typeof BILLBOARDS[0] | null>(null);

  const navigate = (p: string, data?: unknown) => {
    if (p === "billboard-detail" && data) {
      setCurrentBillboard(data as typeof BILLBOARDS[0]);
    }
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const noNav = page === "signin" || page === "signup";

  return (
    <>
      {!noNav && <Navigation page={page} navigate={navigate} />}
      {page === "home"             && <HomePage navigate={navigate} />}
      {page === "billboards"       && <BillboardsPage navigate={navigate} />}
      {page === "billboard-detail" && currentBillboard && <BillboardDetailPage board={currentBillboard} navigate={navigate} />}
      {page === "about"            && <AboutPage navigate={navigate} />}
      {page === "services"         && <ServicesPage navigate={navigate} />}
      {page === "contact"          && <ContactPage navigate={navigate} />}
      {page === "faqs"             && <FaqsPage navigate={navigate} />}
      {page === "signin"           && <SignInPage navigate={navigate} />}
      {page === "signup"           && <SignUpPage navigate={navigate} />}
    </>
  );
}
