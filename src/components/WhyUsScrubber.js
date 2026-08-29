import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class WhyUsScrubber {
  constructor(element) {
    this.el = element || document.querySelector('.block-why-us');
    if (!this.el) return;
    this.video = this.el.querySelector('.block-why-us__video-item');
    this.items = this.el.querySelectorAll('.block-why-us__item');
    this.progressBar = this.el.querySelector('.block-why-us__progress-bar');
    this.progressWrapper = this.el.querySelector('.block-why-us__progress');
    this.splitChars = [];
    this.init();
  }

  init() {
    if (window.innerWidth < 992) {
      if (this.video) {
        this.video.autoplay = true;
        this.video.loop = true;
        this.video.play().catch(() => {});
      }
      return;
    }

    this.setupSplitText();
    this.setupVideoScrubbing();
    this.setupScrollTriggers();
  }

  setupSplitText() {
    this.items.forEach((item, index) => {
      const textEl = item.querySelector('[data-highlight-text]');
      if (!textEl) return;
      
      const rawText = textEl.textContent.trim();
      textEl.innerHTML = '';
      
      const charSpans = [];
      const words = rawText.split(' ');
      
      words.forEach((word, wIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';
        
        for (let i = 0; i < word.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.textContent = word[i];
          charSpan.style.opacity = index === 0 ? '1' : '0.22';
          charSpan.style.color = 'var(--color-base)';
          charSpan.style.transition = 'opacity 0.25s ease, color 0.25s ease';
          wordSpan.appendChild(charSpan);
          charSpans.push(charSpan);
        }
        
        textEl.appendChild(wordSpan);
        if (wIdx < words.length - 1) {
          textEl.appendChild(document.createTextNode(' '));
        }
      });
      
      this.splitChars[index] = charSpans;
    });
  }

  setupVideoScrubbing() {
    if (!this.video) return;

    this.video.pause();
    this.video.currentTime = 0;

    const onVideoReady = () => {
      ScrollTrigger.create({
        trigger: this.el,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          if (this.video.duration) {
            this.video.currentTime = self.progress * this.video.duration;
          }
        }
      });
    };

    if (this.video.readyState >= 2) {
      onVideoReady();
    } else {
      this.video.addEventListener('loadedmetadata', onVideoReady, { once: true });
      this.video.addEventListener('canplay', onVideoReady, { once: true });
    }
  }

  setupScrollTriggers() {
    const totalItems = this.items.length;
    if (totalItems === 0) return;

    ScrollTrigger.create({
      trigger: this.el,
      start: 'top top',
      end: 'bottom bottom',
      onEnter: () => this.progressWrapper?.classList.add('-active'),
      onLeave: () => this.progressWrapper?.classList.remove('-active'),
      onEnterBack: () => this.progressWrapper?.classList.add('-active'),
      onLeaveBack: () => this.progressWrapper?.classList.remove('-active'),
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Progress Bar
        if (this.progressBar) {
          this.progressBar.style.width = `${progress * 100}%`;
        }

        // Active Card Index
        let activeIdx = Math.floor(progress * totalItems);
        if (activeIdx >= totalItems) activeIdx = totalItems - 1;
        if (activeIdx < 0) activeIdx = 0;

        // Sub-progress within active card (0 to 1)
        const subProgress = Math.min(Math.max((progress * totalItems) - activeIdx, 0), 1);

        this.items.forEach((item, idx) => {
          if (idx === activeIdx) {
            item.classList.add('-active');
            
            // Highlight text characters based on sub-progress
            const chars = this.splitChars[idx];
            if (chars && chars.length > 0) {
              const highlightRatio = Math.min(subProgress / 0.75, 1);
              const highlightCount = Math.floor(highlightRatio * chars.length);
              
              chars.forEach((c, cIdx) => {
                if (cIdx <= highlightCount || highlightRatio >= 0.95) {
                  c.style.opacity = '1';
                  c.style.color = 'var(--color-base)';
                } else {
                  c.style.opacity = '0.22';
                  c.style.color = 'var(--color-base)';
                }
              });
            }
          } else {
            item.classList.remove('-active');
            const chars = this.splitChars[idx];
            if (chars) {
              chars.forEach(c => {
                c.style.opacity = '0.22';
                c.style.color = 'var(--color-base)';
              });
            }
          }
        });
      }
    });
  }
}
