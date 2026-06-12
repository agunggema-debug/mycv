/* ═══════════════════════════════════════════════
   CV LANDING PAGE — SCRIPT.JS
═══════════════════════════════════════════════ */

"use strict";

/* ─── DOM READY ─── */
document.addEventListener("DOMContentLoaded", () => {
  initCursorGlow();
  initNavbar();
  initHamburger();
  initTypewriter();
  initRevealOnScroll();
  initSkillBars();
  initCounterStats();
  initSkillTabs();
  initTestimonialSlider();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
  initActiveNavLink();
});

/* ═══════════════════════════════════════════════
   1. CURSOR GLOW
═══════════════════════════════════════════════ */
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;

  let mouseX = 0,
    mouseY = 0;
  let glowX = 0,
    glowY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

/* ═══════════════════════════════════════════════
   2. NAVBAR — SCROLL EFFECT
═══════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ═══════════════════════════════════════════════
   3. HAMBURGER MENU
═══════════════════════════════════════════════ */
function initHamburger() {
  const btn = document.getElementById("hamburger");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
    // Animate hamburger → X
    const spans = btn.querySelectorAll("span");
    if (isOpen) {
      spans[0].style.transform = "translateY(7px) rotate(45deg)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "translateY(-7px) rotate(-45deg)";
    } else {
      spans.forEach((s) => {
        s.style.transform = "";
        s.style.opacity = "";
      });
    }
  });

  // Close on link click
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.querySelectorAll("span").forEach((s) => {
        s.style.transform = "";
        s.style.opacity = "";
      });
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.querySelectorAll("span").forEach((s) => {
        s.style.transform = "";
        s.style.opacity = "";
      });
    }
  });
}

/* ═══════════════════════════════════════════════
   4. TYPEWRITER EFFECT
═══════════════════════════════════════════════ */
function initTypewriter() {
  const el = document.getElementById("roleText");
  if (!el) return;

  const roles = ["IT Specialist", "Web Developer", "System Integrator", "Infrastructure", "Industrial Automation", "Technical Support"];

  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let paused = false;

  function type() {
    if (paused) return;

    const current = roles[roleIdx];

    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        paused = true;
        setTimeout(() => {
          paused = false;
          deleting = true;
        }, 1200);
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }

    const speed = deleting ? 50 : 90;
    setTimeout(type, speed);
  }

  setTimeout(type, 800);
}

/* ═══════════════════════════════════════════════
   5. REVEAL ON SCROLL (Intersection Observer)
═══════════════════════════════════════════════ */
function initRevealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay for sibling cards
          const siblings = entry.target.parentElement.querySelectorAll(".reveal");
          let delay = 0;
          siblings.forEach((sib, idx) => {
            if (sib === entry.target) delay = idx * 80;
          });
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  items.forEach((item) => observer.observe(item));
}

/* ═══════════════════════════════════════════════
   6. SKILL BARS ANIMATION
═══════════════════════════════════════════════ */
function initSkillBars() {
  const fills = document.querySelectorAll(".skill-fill");
  if (!fills.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.getAttribute("data-width") || "0";
          // Small delay so the card reveal animation finishes first
          setTimeout(() => {
            fill.style.width = width + "%";
          }, 300);
          observer.unobserve(fill);
        }
      });
    },
    { threshold: 0.3 },
  );

  fills.forEach((fill) => observer.observe(fill));
}

/* ═══════════════════════════════════════════════
   7. COUNTER STATS ANIMATION
═══════════════════════════════════════════════ */
function initCounterStats() {
  const counters = document.querySelectorAll(".stat-num");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((c) => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-target"), 10);
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

/* ═══════════════════════════════════════════════
   8. SKILL TABS
═══════════════════════════════════════════════ */
function initSkillTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");

      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById("tab-" + tab);
      if (target) {
        target.classList.add("active");
        // Re-trigger reveal for newly shown items
        target.querySelectorAll(".reveal:not(.visible)").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 80);
        });
        // Re-trigger skill bars in the newly shown tab
        target.querySelectorAll(".skill-fill").forEach((fill) => {
          const width = fill.getAttribute("data-width") || "0";
          fill.style.width = "0";
          setTimeout(() => {
            fill.style.width = width + "%";
          }, 100);
        });
      }
    });
  });
}

/* ═══════════════════════════════════════════════
   9. TESTIMONIAL SLIDER
═══════════════════════════════════════════════ */
function initTestimonialSlider() {
  const track = document.getElementById("testimonialTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsWrap = document.getElementById("sliderDots");
  if (!track) return;

  const cards = track.querySelectorAll(".testimonial-card");
  const total = cards.length;
  let current = 0;
  let autoTimer = null;

  // Build dots
  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function getVisibleCount() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function goTo(idx) {
    current = (idx + total) % total;
    const visible = getVisibleCount();
    const cardW = cards[0].offsetWidth + 24; // gap = 24px
    const maxSlide = Math.max(0, total - visible);
    const slide = Math.min(current, maxSlide);
    track.style.transform = `translateX(-${slide * cardW}px)`;

    dotsWrap.querySelectorAll(".slider-dot").forEach((d, i) => {
      d.classList.toggle("active", i === current);
    });
  }

  function next() {
    goTo(current + 1);
  }
  function prev() {
    goTo(current - 1);
  }

  nextBtn &&
    nextBtn.addEventListener("click", () => {
      next();
      resetAuto();
    });
  prevBtn &&
    prevBtn.addEventListener("click", () => {
      prev();
      resetAuto();
    });

  function startAuto() {
    autoTimer = setInterval(next, 4500);
  }
  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  // Touch / swipe support
  let touchStartX = 0;
  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );
  track.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
      resetAuto();
    }
  });

  window.addEventListener("resize", () => goTo(current));
  startAuto();
}

/* ═══════════════════════════════════════════════
   10. CONTACT FORM
═══════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    // Loading state
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    // Simulate async send (replace with real fetch/EmailJS/etc.)
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      form.reset();
      if (success) {
        success.classList.add("show");
        setTimeout(() => success.classList.remove("show"), 5000);
      }
    }, 1800);
  });

  // Floating label effect
  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("focused");
    });
  });
}

/* ═══════════════════════════════════════════════
   11. BACK TO TOP
═══════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true },
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ═══════════════════════════════════════════════
   12. SMOOTH SCROLL (for older browsers)
═══════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ═══════════════════════════════════════════════
   13. ACTIVE NAV LINK ON SCROLL
═══════════════════════════════════════════════ */
function initActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((s) => observer.observe(s));
}

/* ═══════════════════════════════════════════════
   14. PARTICLE SPARKLE ON HERO (subtle)
═══════════════════════════════════════════════ */
(function initParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  function createParticle() {
    const p = document.createElement("div");
    p.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      border-radius: 50%;
      background: rgba(108,99,255,${Math.random() * 0.5 + 0.1});
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      pointer-events: none;
      z-index: 0;
      animation: particleFade ${Math.random() * 4 + 3}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    hero.appendChild(p);
  }

  // Inject keyframes
  const style = document.createElement("style");
  style.textContent = `
    @keyframes particleFade {
      0%, 100% { opacity: 0; transform: translateY(0) scale(1); }
      50%       { opacity: 1; transform: translateY(-20px) scale(1.5); }
    }
    .nav-links a.active { color: #fff !important; }
    .nav-links a.active::after { width: 100% !important; }
  `;
  document.head.appendChild(style);

  for (let i = 0; i < 30; i++) createParticle();
})();
