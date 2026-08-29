import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class HorizontalSlider {
  constructor(element, innerSelector) {
    this.el = element;
    this.inner = this.el?.querySelector(innerSelector);
    if (this.el && this.inner && window.innerWidth >= 992) {
      this.init();
    }
  }

  init() {
    const getScrollAmount = () => {
      const innerWidth = this.inner.scrollWidth;
      const viewportWidth = window.innerWidth;
      return -(innerWidth - viewportWidth + 80);
    };

    if (getScrollAmount() >= 0) return;

    gsap.to(this.inner, {
      x: () => getScrollAmount(),
      ease: 'none',
      scrollTrigger: {
        trigger: this.el,
        start: 'top 70px',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
  }
}
