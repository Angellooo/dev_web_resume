let swiperCards = null;
let currentProvider = null; // Store the current provider

function initSwiper() {
  if (swiperCards) return; // Prevent re-initialization

  swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    speed: 1200,
    centeredSlides: true,
    createElements: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: true,
      depth: 100,
      modifier: 1,
      stretch: 0,
    },
    enabled: true,
    followFinger: true,
    passiveListeners: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 9,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: { slidesPerView: 2 },
      968: { slidesPerView: 3 },
    },
  });

  swiperCards.on("transitionEnd", () => {
    updateProviderInfo();
  });
  updateProviderInfo();
}

// Only initialize Swiper when certificates section is visible
document.addEventListener("DOMContentLoaded", () => {
  const certSection = document.getElementById("certificates-section");
  if (!certSection) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initSwiper();
          obs.disconnect(); // Only initialize once
        }
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(certSection);
});

// Function to update the left-container content
function updateProviderInfo() {
  const activeSlide = document.querySelector(".swiper-slide-active");
  if (!activeSlide) return;

  const provider = activeSlide.dataset.provider;
  const providerInfo = providerData[provider];

  if (provider !== currentProvider && providerInfo) {
    currentProvider = provider;

    const providerBgLeft = document.getElementById("provider-bg-left");
    providerBgLeft.style.backgroundImage = `url(${providerInfo.background})`;
    providerBgLeft.classList.remove("fade-in");
    void providerBgLeft.offsetWidth;
    providerBgLeft.classList.add("fade-in");

    const providerBgRight = document.getElementById("provider-bg-right");
    providerBgRight.style.backgroundImage = `url(${providerInfo.background})`;
    providerBgRight.classList.remove("fade-in");
    void providerBgRight.offsetWidth;
    providerBgRight.classList.add("fade-in");

    const providerLogo = document.getElementById("provider-logo").querySelector("img");
    providerLogo.src = providerInfo.logo;
    providerLogo.alt = `${provider} logo`;
    providerLogo.title = `${provider} logo`;
    providerLogo.classList.remove("slide-in");
    void providerLogo.offsetWidth;
    providerLogo.classList.add("slide-in");

    const providerDescription = document.getElementById("provider-description");
    providerDescription.textContent = providerInfo.description;
    providerDescription.setAttribute("aria-label", providerInfo.description);
    providerDescription.setAttribute("tabindex", "0");
    providerDescription.classList.remove("fade-in");
    void providerDescription.offsetWidth;
    providerDescription.classList.add("fade-in");
  }
}
