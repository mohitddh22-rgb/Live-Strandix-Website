import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import CSS
import './styles/base.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/why-us.css';
import './styles/services.css';
import './styles/about.css';
import './styles/numbers.css';
import './styles/facilities.css';
import './styles/separator.css';
import './styles/cta.css';
import './styles/footer.css';
import './styles/modal.css';
import './styles/subpages.css';

// Import Components
import { HeroLoader } from './components/HeroLoader.js';
import { Header } from './components/Header.js';
import { WhyUsScrubber } from './components/WhyUsScrubber.js';
import { ServicesPanels } from './components/ServicesPanels.js';
import { HorizontalSlider } from './components/HorizontalSlider.js';
import { MagneticGrid } from './components/MagneticGrid.js';
import { CostCalculator } from './components/CostCalculator.js';
import { SubpageRouter } from './components/SubpageRouter.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Smooth Scroll with standard single-loop ticker
export const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.2
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

window.__lenis = lenis;

// Initialize DOM Components
document.addEventListener('DOMContentLoaded', () => {
  new HeroLoader();
  new Header();
  new WhyUsScrubber();
  new ServicesPanels();
  new MagneticGrid();
  new CostCalculator();
  new SubpageRouter();

  // Horizontal Slider for About section (Desktop only)
  const aboutBlock = document.querySelector('.block-about');
  if (aboutBlock && window.innerWidth >= 992) {
    new HorizontalSlider(aboutBlock, '.block-about__horizontal-inner');
  }

  // Smooth scroll to anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#' && !targetId.startsWith('#subpage')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -80 });
        }
      }
    });
  });

  // Refresh ScrollTrigger once everything mounts
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
});
