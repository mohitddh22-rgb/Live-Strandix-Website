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
    this.updateHeaderTheme(themedSections[0]?.dataset.theme || 'light');
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
    const closeBtn = this.el.querySelector('[data-close-mobile-menu]');

    const closeMenu = () => {
      toggler?.classList.remove('-active');
      overlay?.classList.remove('-active');
      document.body.style.overflow = '';
    };

    const openMenu = () => {
      toggler?.classList.add('-active');
      overlay?.classList.add('-active');
      document.body.style.overflow = 'hidden';
    };

    if (toggler && overlay) {
      toggler.addEventListener('click', (e) => {
        e.stopPropagation();
        if (overlay.classList.contains('-active')) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeMenu();
        });
      }

      overlay.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('click', () => {
          closeMenu();
        });
      });

      // Escape key to close mobile menu
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('-active')) {
          closeMenu();
        }
      });
    }
  }
}
