import gsap from 'gsap';

export class HeroLoader {
  constructor(loaderElement) {
    this.loader = loaderElement || document.querySelector('[data-loader]');
    this.progressValue = this.loader?.querySelector('[data-progress-value]');
    if (this.loader && this.progressValue) {
      this.init();
    }
  }

  init() {
    const counter = { val: 0 };
    
    gsap.to(counter, {
      val: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        const rounded = Math.round(counter.val);
        this.progressValue.innerText = String(rounded).padStart(3, '0');
      },
      onComplete: () => {
        this.loader.classList.add('-loaded');
        setTimeout(() => {
          this.loader.classList.add('-hidden');
          // Trigger Hero entry animations
          const heroContent = document.querySelector('.block-hero__content');
          if (heroContent) {
            gsap.from(heroContent.children, {
              y: 40,
              opacity: 0,
              duration: 1,
              stagger: 0.15,
              ease: 'power3.out'
            });
          }
        }, 800);
      }
    });
  }
}
