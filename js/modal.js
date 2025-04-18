document.addEventListener("DOMContentLoaded", () => {
    const badges = document.querySelectorAll(".verified-badge");
    const modal = document.getElementById("badge-modal");
    const modalContent = modal.querySelector(".modal-content");
    const badgeLink = document.getElementById("badge-link");
    const badgeProviderModal = document.getElementById("badge-provider-modal");
    const acceptButton = document.getElementById("accept-button");
    const cancelButton = document.getElementById("cancel-button");

    let badgeId = "";
    let badgeProvider = "";

    // Add click event to all badges
    badges.forEach((badge) => {
        badge.addEventListener("click", (e) => {
            e.preventDefault();

            // Check if the badge has a provider and ID
            badgeId = badge.dataset.badgeId;
            badgeProvider = badge.dataset.badgeProvider;

            if (badgeId && badgeProvider) {
                // Determine the URL based on the provider
                let redirectUrl = "";
                let providerName = "";
                if (badgeProvider === "credly") {
                    redirectUrl = `https://www.credly.com/badges/${badgeId}`;
                    providerName = `Credly`;
                } else if (badgeProvider === "coursera") {
                    redirectUrl = `https://www.coursera.org/account/accomplishments/verify/${badgeId}`;
                    providerName = `Coursera`;
                }

                badgeLink.textContent = redirectUrl;
                badgeProviderModal.textContent = providerName;
                modal.classList.add("show");
                modalContent.classList.add("show");
            }
        });
    });

    // Handle ACCEPT button
    acceptButton.addEventListener("click", () => {
        window.location.href = badgeLink.textContent;
    });

    // Handle CANCEL button
    cancelButton.addEventListener("click", () => {
        modal.classList.remove("show");
        modalContent.classList.remove("show");
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
            modalContent.classList.remove("show");
        }
    });
});