export class CostCalculator {
  constructor() {
    this.modal = document.querySelector('#cost-calculator-modal');
    this.resultEl = document.querySelector('#calc-result-display');
    this.selected = {
      type: 'mobile',
      scale: 'growth',
      speed: 'standard'
    };
    if (this.modal) {
      this.init();
    }
  }

  init() {
    // Attach buttons
    this.modal.querySelectorAll('[data-calc-group]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const group = btn.dataset.calcGroup;
        const val = btn.dataset.calcVal;

        // Toggle selected in UI
        this.modal.querySelectorAll(`[data-calc-group="${group}"]`).forEach(b => b.classList.remove('-selected'));
        btn.classList.add('-selected');

        this.selected[group] = val;
        this.calculate();
      });
    });

    this.calculate();
  }

  calculate() {
    let baseMin = 150000;
    let baseMax = 350000;

    // Type multiplier
    if (this.selected.type === 'ai-iot') {
      baseMin *= 1.8;
      baseMax *= 2.2;
    } else if (this.selected.type === 'fintech') {
      baseMin *= 2.0;
      baseMax *= 2.6;
    } else if (this.selected.type === 'saas') {
      baseMin *= 1.6;
      baseMax *= 2.0;
    } else if (this.selected.type === 'web') {
      baseMin *= 1.2;
      baseMax *= 1.4;
    }

    // Scale multiplier
    if (this.selected.scale === 'enterprise') {
      baseMin *= 2.5;
      baseMax *= 3.0;
    } else if (this.selected.scale === 'growth') {
      baseMin *= 1.4;
      baseMax *= 1.6;
    }

    // Speed multiplier
    if (this.selected.speed === 'accelerated') {
      baseMin *= 1.25;
      baseMax *= 1.35;
    }

    const formatINR = (num) => {
      if (num >= 10000000) {
        return `₹${(num / 10000000).toFixed(1)} Cr`;
      } else if (num >= 100000) {
        return `₹${(num / 100000).toFixed(1)} Lakh`;
      } else {
        return `₹${Math.round(num).toLocaleString('en-IN')}`;
      }
    };

    if (this.resultEl) {
      this.resultEl.innerText = `${formatINR(baseMin)} – ${formatINR(baseMax)}`;
    }
  }
}
