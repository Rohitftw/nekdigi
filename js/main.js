/* =============================================================
  NEKDIGITAL - MAIN.JS (The Full Engine v3 - FINAL)
  This single file controls all animations and interactions 
  for the entire website, including the language switcher.
  =============================================================
*/

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. GLOBAL: CURSOR & BACKGROUND EFFECTS ---
    const cursor = document.querySelector(".custom-cursor");
    const backgroundGlow = document.querySelector(".background-cursor-glow");
    let hasGlow = false;

    window.addEventListener("mousemove", (e) => {
        requestAnimationFrame(() => {
            if (cursor) {
                cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
            }
            if (backgroundGlow) {
                if (!hasGlow) {
                    backgroundGlow.style.opacity = '1';
                    hasGlow = true;
                }
                const x = (e.clientX / window.innerWidth) * 100;
                const y = (e.clientY / window.innerHeight) * 100;
                backgroundGlow.style.background = `radial-gradient(
                    circle at ${x}% ${y}%,
                    rgba(var(--clr-primary-rgb), 0.12),
                    transparent 30%
                )`;
            }
        });
    });

    // --- 2. GLOBAL: HEADER SCROLL EFFECT ---
    const header = document.querySelector(".main-header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("is-scrolled");
            } else {
                header.classList.remove("is-scrolled");
            }
        }, { passive: true });
    }

    // --- 3. GLOBAL: SCROLL FADE-IN ANIMATIONS ---
    const animatedElements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.animateDelay || "0";
                setTimeout(() => {
                    entry.target.classList.add("is-visible");
                }, parseFloat(delay) * 1000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));

    // --- 4. GLOBAL: FAQ ACCORDION ---
    const faqItems = document.querySelectorAll(".faq-item");
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector(".faq-question");
            question.addEventListener("click", () => {
                const isOpen = item.classList.contains("is-open");
                faqItems.forEach(i => i.classList.remove("is-open"));
                if (!isOpen) {
                    item.classList.add("is-open");
                }
            });
        });
    }
    
    // --- 5. GLOBAL: FOOTER CURRENT YEAR ---
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // --- 6. PAGE-SPECIFIC: HOMEPAGE (STICKY PROCESS) ---
    const processWrapper = document.querySelector(".process-sticky-wrapper");
    const processVisual = document.getElementById("process-visual");
    const processPanels = document.querySelectorAll(".process-panel");

    if (processWrapper && processVisual && processPanels.length > 0) {
        const handleProcessScroll = () => {
            if (window.innerWidth <= 992) {
                processPanels.forEach(p => p.classList.add("is-active"));
                return;
            }
            const wrapperRect = processWrapper.getBoundingClientRect();
            const wrapperTop = wrapperRect.top + window.scrollY;
            const wrapperHeight = processWrapper.offsetHeight;
            const viewportHeight = window.innerHeight;
            const scrollY = window.scrollY;
            
            let progress = (scrollY - wrapperTop) / (wrapperHeight - viewportHeight);
            progress = Math.max(0, Math.min(1, progress)); 

            const panelCount = processPanels.length;
            let activePanelIndex = Math.floor(progress * panelCount);
            if (activePanelIndex >= panelCount) {
                activePanelIndex = panelCount - 1;
            }

            processPanels.forEach((panel, index) => {
                panel.classList.toggle("is-active", index === activePanelIndex);
            });

            const rotation = progress * 90; 
            const borderRadius = 30 + (progress * 20); 
            processVisual.style.transform = `rotate(${rotation}deg)`;
            processVisual.style.borderRadius = `${borderRadius}% ${100 - borderRadius}%`;
        };
        window.addEventListener("scroll", handleProcessScroll, { passive: true });
        window.addEventListener("resize", handleProcessScroll);
        handleProcessScroll();
    }

    // --- 7. PAGE-SPECIFIC: ABOUT (HORIZONTAL SCROLL) ---
    const horizontalWrapper = document.querySelector(".horizontal-scroll-section");
    const horizontalTrack = document.querySelector(".horizontal-track");

    if (horizontalWrapper && horizontalTrack) {
        const handleHorizontalScroll = () => {
            if (window.innerWidth <= 992) {
                horizontalTrack.style.transform = "translateX(0)";
                return;
            }
            const wrapperRect = horizontalWrapper.getBoundingClientRect();
            const wrapperTop = wrapperRect.top + window.scrollY;
            const wrapperHeight = horizontalWrapper.offsetHeight;
            const viewportHeight = window.innerHeight;
            const scrollY = window.scrollY;
            
            let progress = (scrollY - wrapperTop) / (wrapperHeight - viewportHeight);
            progress = Math.max(0, Math.min(1, progress)); 

            const trackWidth = horizontalTrack.scrollWidth;
            const maxScroll = trackWidth - viewportHeight;
            
            horizontalTrack.style.transform = `translateX(-${progress * maxScroll}px)`;
        };
        window.addEventListener("scroll", handleHorizontalScroll, { passive: true });
        window.addEventListener("resize", handleHorizontalScroll);
    }
    
    // --- 8. PAGE-SPECIFIC: ABOUT & PACKAGES (3D PROMISE CARDS) ---
    const promiseCards = document.querySelectorAll(".promise-card");

    if (promiseCards.length > 0) {
        const maxRotation = 8; 
        promiseCards.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const width = rect.width;
                const height = rect.height;
                const rotateY = maxRotation * ((x - width / 2) / (width / 2));
                const rotateX = maxRotation * ((y - height / 2) / (height / 2)) * -1;
                requestAnimationFrame(() => {
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
            });
            card.addEventListener("mouseleave", () => {
                requestAnimationFrame(() => {
                    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
                });
            });
        });
    }

    // --- 9. PAGE-SPECIFIC: CONTACT (PACKAGE SELECTOR) ---
    const packageButtons = document.querySelectorAll(".package-card-button");
    const hiddenInput = document.getElementById("selected-package");

    if (packageButtons.length > 0 && hiddenInput) {
        packageButtons.forEach(button => {
            button.addEventListener("click", () => {
                const selectedValue = button.dataset.value;
                if (button.classList.contains("is-selected")) {
                    button.classList.remove("is-selected");
                    hiddenInput.value = "none";
                } else {
                    packageButtons.forEach(btn => btn.classList.remove("is-selected"));
                    button.classList.add("is-selected");
                    hiddenInput.value = selectedValue;
                }
            });
        });
    }
    
    // --- 10. PAGE-SPECIFIC: PACKAGES (CONSOLE LOGIC) ---
    const packageData = {
        "essential": { price: "€159", link: "contact.html?package=essential-launch" },
        "growth": { price: "€239", link: "contact.html?package=growth-engine" },
        "dominance": { price: "€299", link: "contact.html?package=digital-dominance" }
    };
    const toggleButtons = document.querySelectorAll(".package-toggle-btn");
    const allFeatures = document.querySelectorAll(".package-feature-list li");
    const displayPrice = document.getElementById("pkg-price");
    const displayCta = document.getElementById("pkg-cta-link");

    function updatePackageDisplay(pkgName) {
        if (!packageData[pkgName] || !displayPrice) return; 
        const data = packageData[pkgName];
        displayPrice.textContent = data.price;
        if(displayCta) displayCta.href = data.link;
        toggleButtons.forEach(btn => {
            btn.classList.toggle("is-active", btn.dataset.pkg === pkgName);
        });
        allFeatures.forEach(li => {
            const includedIn = li.dataset.inPkg;
            li.classList.toggle("is-active", includedIn && includedIn.includes(pkgName));
        });
    }

    if (toggleButtons.length > 0) {
        toggleButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const pkgName = btn.dataset.pkg;
                updatePackageDisplay(pkgName);
                applyPackageTranslations(); // Update text
            });
        });
        updatePackageDisplay("essential");
    }

    // --- 11. PAGE-SPECIFIC: HOW-IT-WORKS (CIRCUIT TIMELINE) ---
    const timelineSection = document.getElementById("process-timeline");
    const timelineSpine = document.querySelector(".timeline-spine");
    const timelineSteps = document.querySelectorAll(".timeline-step[data-animate='timeline-step']");

    if (timelineSection && timelineSpine && timelineSteps.length > 0) {
        let lastActiveStep = null;
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-active");
                    lastActiveStep = entry.target;
                }
            });
        }, { threshold: 0.5 });
        timelineSteps.forEach(step => stepObserver.observe(step));
        
        const handleSpineScroll = () => {
            if (!lastActiveStep) return;
            const sectionTop = timelineSection.offsetTop;
            const lastStepRect = lastActiveStep.getBoundingClientRect();
            const lastStepCenterY = window.scrollY + lastStepRect.top + (lastStepRect.height / 2);
            let spineHeight = lastStepCenterY - sectionTop;
            spineHeight = Math.max(0, Math.min(spineHeight, timelineSection.offsetHeight));
            timelineSpine.style.height = `${spineHeight}px`;
        };
        window.addEventListener("scroll", handleSpineScroll, { passive: true });
        window.addEventListener("resize", handleSpineScroll);
    }

    // --- 12. PAGE-SPECIFIC: CLIENTS (3D WALL TILT) ---
    const wallPerspective = document.querySelector(".client-wall-perspective");
    const clientWall = document.getElementById("client-wall-grid");

    if (wallPerspective && clientWall) {
        const maxRotation = 6;
        wallPerspective.addEventListener("mousemove", (e) => {
            if (window.innerWidth <= 992) return;
            const rect = wallPerspective.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const width = rect.width;
            const height = rect.height;
            const rotateY = maxRotation * ((x - width / 2) / (width / 2));
            const rotateX = maxRotation * ((y - height / 2) / (height / 2)) * -1;
            const spotlightX = (x / width) * 100;
            const spotlightY = (y / height) * 100;
            requestAnimationFrame(() => {
                clientWall.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
                clientWall.style.setProperty('--mouse-x', `${spotlightX}%`);
                clientWall.style.setProperty('--mouse-y', `${spotlightY}%`);
            });
        });
        wallPerspective.addEventListener("mouseleave", () => {
             if (window.innerWidth <= 992) return;
            requestAnimationFrame(() => {
                clientWall.style.transform = "perspective(2000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
            });
        });
    }

    // --- 13. PAGE-SPECIFIC: SERVICES & HOMEPAGE (INTERFACE SCROLL-SPY) ---
    const navLinks = document.querySelectorAll(".showcase-nav-link, .service-nav-link");
    const dossiers = document.querySelectorAll(".service-dossier, .showcase-dossier");

    if (navLinks.length > 0 && dossiers.length > 0) {
        const dossierObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('is-active', link.dataset.target === id);
                    });
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: "-50% 0px -50% 0px"
        });
        dossiers.forEach(dossier => dossierObserver.observe(dossier));
    }

    // --- 14. CINEMATIC HERO: PARALLAX SCROLL ---
    const heroBg = document.querySelector(".hero-background-media");
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const yOffset = window.pageYOffset;
            requestAnimationFrame(() => {
                // Use a subtle speed. Adjust -0.2 to make it faster or slower.
                heroBg.style.transform = `translate3d(0, ${yOffset * -0.2}px, 0)`;
            });
        }, { passive: true });
    }

    // --- 15. CINEMATIC PROJECTS: MAGNETIC TILT CARDS ---
    const magneticCards = document.querySelectorAll(".project-card-magnetic");
    if (magneticCards.length > 0) {
        const maxRotation = 8;
        magneticCards.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const width = rect.width;
                const height = rect.height;
                const rotateY = maxRotation * ((x - width / 2) / (width / 2));
                const rotateX = maxRotation * ((y - height / 2) / (height / 2)) * -1;
                requestAnimationFrame(() => {
                    card.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                });
            });
            card.addEventListener("mouseleave", () => {
                requestAnimationFrame(() => {
                    card.style.transform = "perspective(1500px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
                });
            });
        });
    }
    
    // --- 16. GLOBAL: LANGUAGE SWITCHER ENGINE (FUNCTIONAL) ---
    let translations = {};
    async function loadLanguage(lang) {
      try {
        const response = await fetch(`./lang/${lang}.json`);
        if (!response.ok) throw new Error(`Language file not found: ${lang}.json`);
        translations = await response.json();
        applyTranslations();
        applyPackageTranslations(); 
        localStorage.setItem('nekdigital_lang', lang);
        updateLanguageButtons(lang);
      } catch (error) {
        console.error('Error loading language:', error);
        if (lang !== 'en') loadLanguage('en'); // Fallback
      }
    }

    function getNestedTranslation(key) {
      if (!key) return null;
      return key.split('.').reduce((obj, k) => (obj && obj[k]), translations);
    }

    function applyTranslations() {
      const elements = document.querySelectorAll('[data-lang-key]');
      elements.forEach(el => {
        const key = el.dataset.langKey;
        const translation = getNestedTranslation(key);
        if (translation) {
          el.textContent = translation;
        } else {
          console.warn(`No translation for key: ${key}`);
        }
      });
    }

    function applyPackageTranslations() {
        const activePkgBtn = document.querySelector(".package-toggle-btn.is-active");
        if (!activePkgBtn) return; 
        const activePkg = activePkgBtn.dataset.pkg;
        const titleEl = document.getElementById("pkg-title");
        const descEl = document.getElementById("pkg-desc");
        if (titleEl) titleEl.textContent = getNestedTranslation(`packages.pkg_${activePkg}_title`);
        if (descEl) descEl.textContent = getNestedTranslation(`packages.pkg_${activePkg}_desc`);
    }

    function updateLanguageButtons(lang) {
      const langOptions = document.querySelectorAll(".lang-option");
      langOptions.forEach(opt => {
        opt.classList.toggle("is-active", opt.dataset.lang === lang);
      });
    }

    function setupLanguageSwitcher() {
      const langSwitcher = document.querySelector(".language-switcher");
      const langToggleBtn = document.getElementById("lang-toggle");
      const langOptions = document.querySelectorAll(".lang-option");

      if (langToggleBtn && langSwitcher && langOptions) {
        langToggleBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          langSwitcher.classList.toggle("is-open");
        });
        langOptions.forEach(option => {
          option.addEventListener("click", (e) => {
            e.preventDefault();
            loadLanguage(option.dataset.lang);
            langSwitcher.classList.remove("is-open");
          });
        });
        document.addEventListener("click", () => {
          langSwitcher.classList.remove("is-open");
        });
      }
      const savedLang = localStorage.getItem('nekdigital_lang') || 'en';
      loadLanguage(savedLang);
    }

    // Run the language switcher setup
    setupLanguageSwitcher();

}); // --- END OF DOMCONTENTLOADED ---