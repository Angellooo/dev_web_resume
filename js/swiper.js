const providerData = {
  IBM: {
    description: "IBM is an American multinational technology company headquartered in Armonk, New York and present in over 175 countries. Is the largest industrial research organization in the world, providing certifications that validate expertise in cutting-edge technologies.",
    logo: "./images/brands/ibm_logo_white.svg",
    background: "./images/brands/ibm_background.jpeg"
  },
  UPenn: {
    description: "The University of Pennsylvania is a private Ivy League research university in Philadelphia. It is one of the oldest universities in the United States and is known for its prestigious programs in business, law, and medicine. UPenn also offers cutting-edge certifications that empower professionals to excel in their careers.",
    logo: "./images/brands/upenn_logo_white.png",
    background: "./images/brands/upenn_background.jpg"
  }
};

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  /* NEW */
  
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },

  autoplay: {
    delay: 3000,
  },

  centeredSlides: true,
  createElements: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
    depth: 100,
    modifier: 1,
    stretch: 0,
  },
  enabled: true,
  followFinger: true,
  passiveListeners: true,
  
  /* NEW */

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
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

let currentProvider = null; // Store the current provider

// Function to update the left-container content
function updateProviderInfo() {
  // Find the active slide using the "swiper-slide-active" class
  const activeSlide = document.querySelector(".swiper-slide-active");

  if (!activeSlide) return; // Exit if no active slide is found

  const provider = activeSlide.dataset.provider; // Get the data-provider attribute
  const providerInfo = providerData[provider]; // Get the provider data from the dictionary

  // Only update if the provider has changed
  if (provider !== currentProvider && providerInfo) {
    currentProvider = provider; // Update the current provider

    // Update the background image of the left container with animation
    const providerBgLeft = document.getElementById("provider-bg-left");
    providerBgLeft.style.backgroundImage = `url(${providerInfo.background})`;
    providerBgLeft.classList.remove("fade-in");
    void providerBgLeft.offsetWidth; // Trigger reflow to restart animation
    providerBgLeft.classList.add("fade-in");

    // Update the background image of the right container with animation
    const providerBgRight = document.getElementById("provider-bg-right");
    providerBgRight.style.backgroundImage = `url(${providerInfo.background})`;
    providerBgRight.classList.remove("fade-in");
    void providerBgRight.offsetWidth; // Trigger reflow to restart animation
    providerBgRight.classList.add("fade-in");

    // Update the logo with animation
    const providerLogo = document.getElementById("provider-logo").querySelector("img");
    providerLogo.src = providerInfo.logo;
    providerLogo.alt = `${provider} logo`;
    providerLogo.title = `${provider} logo`;
    providerLogo.classList.remove("slide-in");
    void providerLogo.offsetWidth; // Trigger reflow to restart animation
    providerLogo.classList.add("slide-in");

    // Update the description with animation
    const providerDescription = document.getElementById("provider-description");
    providerDescription.textContent = providerInfo.description;
    providerDescription.setAttribute("aria-label", providerInfo.description); // Add aria-label for accessibility
    providerDescription.setAttribute("alt", `${provider} description`); // Add alt attribute for accessibility
    providerDescription.setAttribute("tabindex", "0"); // Make it focusable
    providerDescription.classList.remove("fade-in");
    void providerDescription.offsetWidth; // Trigger reflow to restart animation
    providerDescription.classList.add("fade-in");
  }
}

// Event listener for Swiper slide change
swiperCards.on("transitionEnd", () => {
  updateProviderInfo(); // Update the left-container content when the slide transition ends
});

// Initial update on page load
document.addEventListener("DOMContentLoaded", () => {
  updateProviderInfo(); // Update the left-container content on page load
});
