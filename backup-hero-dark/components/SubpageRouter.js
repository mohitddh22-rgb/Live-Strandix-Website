export class SubpageRouter {
  constructor() {
    this.initTriggers();
    this.initCloseButtons();
    this.initHashWatcher();
  }

  initTriggers() {
    document.querySelectorAll('[data-open-subpage]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = trigger.dataset.openSubpage;
        this.openSubpage(targetId);
      });
    });

    document.querySelectorAll('[data-open-modal]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = trigger.dataset.openModal;
        this.openModal(targetId);
      });
    });
  }

  initCloseButtons() {
    document.querySelectorAll('[data-close-subpage]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.closeAllSubpages();
      });
    });

    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.closeAllModals();
      });
    });

    // Close on escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllSubpages();
        this.closeAllModals();
      }
    });
  }

  initHashWatcher() {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['about-us', 'our-team', 'case-studies', 'careers', 'contact-us'].includes(hash)) {
        this.openSubpage(`subpage-${hash}`);
      }
    };

    window.addEventListener('hashchange', handleHash);
    if (window.location.hash) {
      handleHash();
    }
  }

  openSubpage(subpageId) {
    this.closeAllModals();
    document.querySelectorAll('.subpage-view').forEach(view => {
      if (view.id === subpageId) {
        view.classList.add('-active');
        document.body.style.overflow = 'hidden';
      } else {
        view.classList.remove('-active');
      }
    });
  }

  closeAllSubpages() {
    document.querySelectorAll('.subpage-view').forEach(view => view.classList.remove('-active'));
    document.body.style.overflow = '';
    if (window.location.hash && window.location.hash !== '#') {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  }

  openModal(modalId) {
    this.closeAllModals();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('-active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('-active'));
    document.body.style.overflow = '';
  }
}
