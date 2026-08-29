export class MagneticGrid {
  constructor(containerElement) {
    this.container = containerElement || document.querySelector('.block-separator__grid');
    if (!this.container) return;
    this.items = this.container.querySelectorAll('.block-separator__grid-item');
    this.init();
  }

  init() {
    this.container.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.container.addEventListener('mouseleave', () => this.resetItems());
  }

  handleMouseMove(e) {
    const rect = this.container.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    this.items.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      const itemCenterX = itemRect.left + itemRect.width / 2;
      const itemCenterY = itemRect.top + itemRect.height / 2;

      const deltaX = mouseX - itemCenterX;
      const deltaY = mouseY - itemCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Rotate arrow toward mouse within 250px radius
      if (distance < 250) {
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) - 45; // base arrow 45deg
        item.style.transform = `rotate(${angle}deg) scale(1.08)`;
      } else {
        item.style.transform = 'rotate(0deg) scale(1)';
      }
    });
  }

  resetItems() {
    this.items.forEach(item => {
      item.style.transform = 'rotate(0deg) scale(1)';
    });
  }
}
