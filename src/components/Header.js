import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class Header {
  constructor(headerElement) {
    this.el = headerElement || document.querySelector('.block-header');
    if (!this.el) return;
    this.init();
  }

  init() {
    this.initThemeDetection();
    this.initMobileDrawer();
  }

  initThemeDetection() {
    const themedSections = document.querySelectorAll('[data-theme]');
    if (themedSections.length === 0) return;

    themedSections.forEach(section => {
      const theme = section.dataset.theme;
      ScrollTrigger.create({
        trigger: section,
        start: 'top top+=60',
        end: 'bottom top+=60',
        onEnter: () => this.updateHeaderTheme(theme),
        onEnterBack: () => this.updateHeaderTheme(theme)
      });
    });

    // Initial check
    this.updateHeaderTheme(themedSections[0]?.dataset.theme || 'dark');
  }

  updateHeaderTheme(theme) {
    this.el.classList.remove('-mode-dark', '-mode-light');
    if (theme === 'dark') {
      this.el.classList.add('-mode-dark');
    } else {
      this.el.classList.add('-mode-light');
    }
  }

  initMobileDrawer() {
    const toggler = this.el.querySelector('[data-toggler]');
    const overlay = this.el.querySelector('[data-overlay]');

    if (toggler && overlay) {
      toggler.addEventListener('click', () => {
        toggler.classList.toggle('-active');
        overlay.classList.toggle('-active');
      });

      overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          toggler.classList.remove('-active');
          overlay.classList.remove('-active');
        });
      });
    }
  }
}
