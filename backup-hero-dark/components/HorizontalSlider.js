import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class HorizontalSlider {
  constructor(element, innerSelector) {
    this.el = element;
    this.inner = this.el?.querySelector(innerSelector);
    if (this.el && this.inner) {
      this.init();
    }
  }

  init() {
    const getScrollAmount = () => {
      const innerWidth = this.inner.scrollWidth;
      return -(innerWidth - window.innerWidth + 80);
    };

    gsap.to(this.inner, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: this.el,
        start: 'center center',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });
  }
}
