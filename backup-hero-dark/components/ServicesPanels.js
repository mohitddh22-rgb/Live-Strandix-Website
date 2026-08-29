import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class ServicesPanels {
  constructor(element) {
    this.el = element || document.querySelector('.block-services');
    if (!this.el) return;
    this.panels = this.el.querySelectorAll('.block-services__panel');
    this.init();
  }

  init() {
    this.panels.forEach((panel, index) => {
      if (index === 0) return;
      const prevPanel = this.panels[index - 1];

      ScrollTrigger.create({
        trigger: panel,
        start: 'top 70%',
        end: 'top 20%',
        scrub: true,
        onUpdate: (self) => {
          const scale = 1 - (self.progress * 0.1);
          const blur = self.progress * 6;
          const opacity = 1 - (self.progress * 0.25);
          
          if (prevPanel) {
            prevPanel.style.transform = `scale(${scale})`;
            prevPanel.style.filter = `blur(${blur}px)`;
            prevPanel.style.opacity = `${opacity}`;
          }
        }
      });
    });
  }
}
