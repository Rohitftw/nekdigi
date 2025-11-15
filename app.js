/* ================================================
   JAVASCRIPT (app.js)
   ================================================ */

// A cache to store our loaded translation files
// This single event listener waits for the HTML to be fully loaded
// before running any code. This is safer.
document.addEventListener("DOMContentLoaded", function () {
  // --- 1. LANGUAGE ENGINE ---

  const langEnBtn = document.getElementById("lang-en");
  const langNlBtn = document.getElementById("lang-nl");

  /**
   * Fetches a language JSON file and updates the page.
   * @param {string} lang - The language code (e.g., "en" or "nl")
   */
  async function setLanguage(lang) {
    // Check if buttons exist
    if (!langEnBtn || !langNlBtn) {
      console.error("Language toggle buttons not found.");
      return;
    }

    try {
      // **THE FIX IS HERE:** Correct file path to the /lang/ folder
      const response = await fetch(`lang/${lang}.json`);

      if (!response.ok) {
        console.error(`Failed to fetch lang/${lang}.json. Status: ${response.status}`);
        // This error will show 404 if the file is missing
        // or a CORS error if not on a server.
        alert(`Error: Could not load file 'lang/${lang}.json'. Please check file path and make sure you are using a Live Server.`);
        return;
      }

      const translations = await response.json();

      // Apply all translations
      document.querySelectorAll("[data-lang-key]").forEach((element) => {
        const key = element.getAttribute("data-lang-key");
        if (translations[key]) {
          element.innerHTML = translations[key];
        } else {
          console.warn(`Translation key not found: ${key} in ${lang}.json`);
        }
      });

      // Update button active styles
      if (lang === "en") {
        langEnBtn.classList.add("active");
        langNlBtn.classList.remove("active");
      } else {
        langNlBtn.classList.add("active");
        langEnBtn.classList.remove("active");
      }
    } catch (error) {
      console.error("Translation Error:", error);
      // This will catch the CORS error if not on a server
      alert(
        "A critical error occurred. Please ensure you are running this from a web server (e.g., 'Live Server') and not as a local file (file:///...)."
      );
    }
  }

  // Add click listeners directly in JS
  if (langEnBtn) {
    langEnBtn.addEventListener("click", () => setLanguage("en"));
  }
  if (langNlBtn) {
    langNlBtn.addEventListener("click", () => setLanguage("nl"));
  }

  // --- 2. THEME TOGGLE ---

  const themeToggle = document.getElementById("theme-toggle");
  const bodyElement = document.body;

  if (themeToggle && bodyElement) {
    const iconMoon = themeToggle.querySelector(".icon-moon");
    const iconSun = themeToggle.querySelector(".icon-sun");

    function setTheme(theme) {
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
      feather.replace(); // Re-run to fix hidden icons
    }

    const currentTheme = localStorage.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(currentTheme);

    themeToggle.addEventListener("click", () => {
      const newTheme = bodyElement.classList.contains("light-mode") ? "dark" : "light";
      setTheme(newTheme);
    });
  }

  // --- 3. STICKY NAV SCROLLSPY ---

  const servicePanels = document.querySelectorAll(".service-panel");
  const serviceNavLinks = document.querySelectorAll(".service-nav-link");
  const headerOffset = 90; // Buffer for sticky header

  if (servicePanels.length > 0 && serviceNavLinks.length > 0) {
    function onScroll() {
      let currentPanelId = "";
      const scrollY = window.pageYOffset;

      servicePanels.forEach((panel) => {
        const panelTop = panel.getBoundingClientRect().top + scrollY - headerOffset;
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
    onScroll(); // Run on load
  }

  // --- 4. FOOTER YEAR ---

  const currentYear = document.getElementById("current-year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // --- 5. INITIALIZE ICONS ---

  feather.replace();

  // --- 6. LOAD INITIAL LANGUAGE ---

  setLanguage("en"); // Load English on page load
});
// --- 7. HOW-IT-WORKS TIMELINE ANIMATION ---

const timelineSection = document.querySelector(".timeline-section");
const timelineProgress = document.querySelector(".timeline-line-progress");
const timelineItems = document.querySelectorAll(".timeline-content");

if (timelineSection && timelineProgress && timelineItems.length > 0) {
  function updateTimeline() {
    const sectionRect = timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // --- 1. Animate the red line

    // Start when top of section hits 1/3 from top of viewport
    const startScroll = sectionRect.top + window.pageYOffset - windowHeight * 0.33;
    // End when bottom of section hits 1/3 from bottom of viewport
    const endScroll = sectionRect.bottom + window.pageYOffset - windowHeight * 0.66;

    const totalScrollDistance = endScroll - startScroll;
    const currentScroll = window.pageYOffset;

    let progressPercent = 0;
    if (currentScroll >= startScroll) {
      progressPercent = ((currentScroll - startScroll) / totalScrollDistance) * 100;
    }
    progressPercent = Math.min(100, Math.max(0, progressPercent)); // Clamp between 0-100

    timelineProgress.style.height = `${progressPercent}%`;

    // --- 2. Animate the cards fading in
    timelineItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      // Check if item is in the viewport (with a 100px buffer)
      if (itemRect.top < windowHeight - 100) {
        item.classList.add("in-view");
      }
    });
  }

  // Listen for scroll events
  window.addEventListener("scroll", updateTimeline);
  // Run once on load
  updateTimeline();
}
// --- 8. PACKAGE TAB SWITCHER ---
// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".package-tab-btn");
  const packageCards = document.querySelectorAll(".package-card");

  // Only run if tabs exist on this page
  if (tabButtons.length > 0 && packageCards.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");

        // 1. Update Buttons: Remove 'active' from all, add to clicked
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // 2. Update Cards: Hide all, show target
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
