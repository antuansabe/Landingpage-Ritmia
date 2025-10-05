/**
 * RITMIA SUPPORT - MAIN JAVASCRIPT
 * Accessible FAQ accordion, smooth scrolling, and dynamic year
 */

(function() {
  'use strict';

  // ========================================
  // DYNAMIC YEAR IN FOOTER
  // ========================================
  function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('#current-year');
    const currentYear = new Date().getFullYear();

    yearElements.forEach(el => {
      el.textContent = currentYear;
    });
  }

  // ========================================
  // ACCESSIBLE FAQ ACCORDION
  // ========================================
  function initFAQAccordion() {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        const targetId = this.getAttribute('aria-controls');
        const targetPanel = document.getElementById(targetId);

        if (!targetPanel) return;

        // Toggle state
        this.setAttribute('aria-expanded', !isExpanded);

        if (isExpanded) {
          // Collapse
          targetPanel.hidden = true;
        } else {
          // Expand
          targetPanel.hidden = false;
        }
      });

      // Keyboard navigation (Enter/Space already handled by button, add optional extras)
      toggle.addEventListener('keydown', function(e) {
        // Optional: Add Home/End navigation between FAQ items
        if (e.key === 'Home') {
          e.preventDefault();
          faqToggles[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          faqToggles[faqToggles.length - 1].focus();
        }
      });
    });
  }

  // ========================================
  // SMOOTH SCROLL TO ANCHORS
  // ========================================
  function initSmoothScroll() {
    // Only apply to internal anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        // Skip empty anchors
        if (targetId === '#' || targetId === '#!') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          // Scroll to element with offset for sticky header
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update focus for accessibility (except for FAQ which handles its own focus)
          if (!targetElement.classList.contains('faq-answer')) {
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus();
          }
        }
      });
    });
  }

  // ========================================
  // OPTIONAL: CONTACT FORM HANDLING (Formspree)
  // Uncomment if using the contact form
  // ========================================
  /*
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusDiv = document.querySelector('.form-status');

    if (!form || !statusDiv) return;

    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');

      // Update UI
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
      statusDiv.textContent = '';
      statusDiv.className = 'form-status';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          statusDiv.textContent = '✓ Mensaje enviado correctamente. Te responderemos pronto.';
          statusDiv.style.backgroundColor = 'var(--status-success)';
          statusDiv.style.color = 'white';
          form.reset();
        } else {
          throw new Error('Error en el envío');
        }
      } catch (error) {
        statusDiv.textContent = '✗ Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escribe a antuansabe@icloud.com';
        statusDiv.style.backgroundColor = 'var(--status-error)';
        statusDiv.style.color = 'white';
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar mensaje';
      }
    });
  }
  */

  // ========================================
  // INITIALIZE ALL ON DOM READY
  // ========================================
  function init() {
    updateCopyrightYear();
    initFAQAccordion();
    initSmoothScroll();
    // initContactForm(); // Uncomment if using contact form
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
