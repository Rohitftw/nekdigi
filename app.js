/* ================================================
   JAVASCRIPT (app.js) - FIXED SCROLLSPY
   ================================================ */

document.addEventListener("DOMContentLoaded", function () {
  // --- 1. LANGUAGE ENGINE ---
  const langEnBtn = document.getElementById("lang-en");
  const langNlBtn = document.getElementById("lang-nl");

  async function setLanguage(lang) {
    if (!langEnBtn || !langNlBtn) {
      console.error("Language toggle buttons not found.");
      return;
    }
    try {
      const response = await fetch(`lang/${lang}.json`);
      if (!response.ok) {
        console.error(`Failed to fetch lang/${lang}.json.`);
        return;
      }
      const translations = await response.json();
      document.querySelectorAll("[data-lang-key]").forEach((element) => {
        const key = element.getAttribute("data-lang-key");
        if (translations[key]) {
          element.innerHTML = translations[key];
        }
      });
      if (lang === "en") {
        langEnBtn.classList.add("active");
        langNlBtn.classList.remove("active");
      } else {
        langNlBtn.classList.add("active");
        langEnBtn.classList.remove("active");
      }
    } catch (error) {
      console.error("Translation Error:", error);
    }
  }

  if (langEnBtn) langEnBtn.addEventListener("click", () => setLanguage("en"));
  if (langNlBtn) langNlBtn.addEventListener("click", () => setLanguage("nl"));
  // --- ACTIVE LINK HIGHLIGHTER ---
  // Automatically adds 'active-page' class to the nav link matching the current URL

  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");
  const navDropdowns = document.querySelectorAll(".nav-dropdown");

  navLinks.forEach((link) => {
    // Clean up href (remove .html if you use pretty URLs, or just match string)
    const linkPath = link.getAttribute("href");

    // Check if the current browser URL ends with the link's href
    // e.g. if URL is ".../about.html", it matches "about.html"
    if (linkPath && currentPath.endsWith(linkPath) && linkPath !== "#") {
      link.classList.add("active-page");

      // If this link is inside a dropdown, also highlight the main dropdown toggle
      const parentDropdown = link.closest(".nav-dropdown");
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector(".nav-drop-toggle");
        if (toggle) toggle.classList.add("active-page");
      }
    }
  });

  // Special case for Home (index.html) usually being just "/"
  if (currentPath.endsWith("/") || currentPath.endsWith("index.html")) {
    // Find the home link and mark it active if not already
    const homeLink = document.querySelector('.nav-links a[href="index.html"]');
    if (homeLink) homeLink.classList.add("active-page");
  }
  // --- CUSTOM CURSOR LOGIC (Glow Effect) ---

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    // 1. Create the single glow element
    const cursorGlow = document.createElement("div");
    cursorGlow.className = "cursor-glow";
    document.body.appendChild(cursorGlow);

    // 2. Move the glow
    window.addEventListener("mousemove", function (e) {
      // CSS transition handles the smoothness, we just update coordinates
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });

    // 3. Add Hover Effect
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, .nav-drop-toggle");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        document.body.classList.add("hovering");
      });
      el.addEventListener("mouseleave", () => {
        document.body.classList.remove("hovering");
      });
    });
  }

  // --- 2. THEME TOGGLE ---
  const themeToggle = document.getElementById("theme-toggle");
  const bodyElement = document.body;

  if (themeToggle && bodyElement) {
    function setTheme(theme) {
      const iconMoon = themeToggle.querySelector(".icon-moon");
      const iconSun = themeToggle.querySelector(".icon-sun");

      if (theme === "light") {
        bodyElement.classList.add("light-mode");
        if (iconMoon) iconMoon.style.display = "none";
        if (iconSun) iconSun.style.display = "block";
        localStorage.theme = "light";
      } else {
        bodyElement.classList.remove("light-mode");
        if (iconMoon) iconMoon.style.display = "block";
        if (iconSun) iconSun.style.display = "none";
        localStorage.theme = "dark";
      }
    }
    const currentTheme = localStorage.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(currentTheme);

    themeToggle.addEventListener("click", () => {
      const newTheme = bodyElement.classList.contains("light-mode") ? "dark" : "light";
      setTheme(newTheme);
    });
  }

  // --- 3. STICKY NAV SCROLLSPY (FIXED) ---
  const servicePanels = document.querySelectorAll(".service-panel");
  const serviceNavLinks = document.querySelectorAll(".service-nav-link");
  const headerOffset = 90;

  if (servicePanels.length > 0 && serviceNavLinks.length > 0) {
    function onScroll() {
      let currentPanelId = "";
      const scrollY = window.pageYOffset;

      servicePanels.forEach((panel) => {
        // THE FIX: Added "- 20" to make the trigger zone larger.
        // This ensures it activates even if the browser is off by a few pixels.
        const panelTop = panel.getBoundingClientRect().top + scrollY - headerOffset - 20;

        if (scrollY >= panelTop) {
          currentPanelId = panel.getAttribute("id");
        }
      });

      serviceNavLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentPanelId}`) {
          link.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  // --- 4. FOOTER YEAR ---
  const currentYear = document.getElementById("current-year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // --- 5. INITIALIZE ICONS ---
  feather.replace();

  // --- 6. LOAD INITIAL LANGUAGE ---
  setLanguage("en");
});

// --- 7. HOW-IT-WORKS TIMELINE ANIMATION ---
const timelineSection = document.querySelector(".timeline-section");
const timelineProgress = document.querySelector(".timeline-line-progress");
const timelineItems = document.querySelectorAll(".timeline-content");

if (timelineSection && timelineProgress && timelineItems.length > 0) {
  function updateTimeline() {
    const sectionRect = timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const startScroll = sectionRect.top + window.pageYOffset - windowHeight * 0.33;
    const endScroll = sectionRect.bottom + window.pageYOffset - windowHeight * 0.66;
    const totalScrollDistance = endScroll - startScroll;
    const currentScroll = window.pageYOffset;

    let progressPercent = 0;
    if (currentScroll >= startScroll) {
      progressPercent = ((currentScroll - startScroll) / totalScrollDistance) * 100;
    }
    progressPercent = Math.min(100, Math.max(0, progressPercent));

    timelineProgress.style.height = `${progressPercent}%`;

    timelineItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowHeight - 100) {
        item.classList.add("in-view");
      }
    });
  }
  window.addEventListener("scroll", updateTimeline);
  updateTimeline();
}

// --- 8. PACKAGE TAB SWITCHER ---
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".package-tab-btn");
  const packageCards = document.querySelectorAll(".package-card");

  if (tabButtons.length > 0 && packageCards.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        packageCards.forEach((card) => {
          if (card.id === targetId) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        });
      });
    });
  }
});
