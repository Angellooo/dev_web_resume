const providerData = {
  IBM: {
    description: "IBM is an American multinational technology company headquartered in Armonk, New York and present in over 175 countries. Is the largest industrial research organization in the world, providing certifications that validate expertise in cutting-edge technologies.",
    logo: "./images/testing/brands/ibm_white_logo.svg",
    background: "./images/testing/brands/ibm_background.jpeg"
  },
  UPenn: {
    description: "The University of Pennsylvania is a private Ivy League research university in Philadelphia. It is one of the oldest universities in the United States and is known for its prestigious programs in business, law, and medicine. UPenn also offers cutting-edge certifications that empower professionals to excel in their careers.",
    logo: "./images/testing/brands/upenn_logo.svg",
    background: "./images/testing/brands/upenn_background.jpg"
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
  preventClicks: true,
  
  /* NEW */

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
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

// Function to update the left-container content
function updateProviderInfo() {
  // Find the active slide using the "swiper-slide-active" class
  const activeSlide = document.querySelector(".swiper-slide-active");

  if (!activeSlide) return; // Exit if no active slide is found

  const provider = activeSlide.dataset.provider; // Get the data-provider attribute
  const providerInfo = providerData[provider]; // Get the provider data from the dictionary

  if (providerInfo) {
    // Update the background image
    const providerBg = document.getElementById("provider-bg");
    providerBg.style.backgroundImage = `url(${providerInfo.background})`;

    // Update the logo
    const providerLogo = document.getElementById("provider-logo").querySelector("img");
    providerLogo.src = providerInfo.logo;
    providerLogo.alt = `${provider} logo`;
    providerLogo.title = `${provider} logo`;

    // Update the description
    const providerDescription = document.getElementById("provider-description");
    providerDescription.textContent = providerInfo.description;
    providerDescription.setAttribute("aria-label", providerInfo.description); // Add aria-label for accessibility
    providerDescription.setAttribute("alt", `${provider} description`); // Add alt attribute for accessibility
    providerDescription.setAttribute("tabindex", "0"); // Make it focusable

    // Update the provider name
    //const providerName = document.getElementById("provider-name");
    //providerName.textContent = provider;
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