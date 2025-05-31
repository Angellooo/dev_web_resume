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
    let badgeCertificateType = "";

    // Add click event to all badges
    badges.forEach((badge) => {
        badge.addEventListener("click", (e) => {
            e.preventDefault();

            // Check if the badge has a provider and ID
            badgeId = badge.dataset.badgeId;
            badgeProvider = badge.dataset.badgeProvider;
            badgeCertificateType = badge.dataset.badgeCertificateType;

            if (badgeId && badgeProvider) {
                // Validate badgeProvider and badgeId to prevent open redirect/XSS
                const allowedProviders = ["credly", "coursera"];
                if (allowedProviders.includes(badgeProvider) && /^[a-zA-Z0-9\-]+$/.test(badgeId)) {
                    // Determine the URL based on the provider
                    let redirectUrl = "";
                    let providerName = "";
                    let urlPrefix = "";
                    console.log(badge.dataset);
                    
                    if (badgeProvider === "credly") {
                        redirectUrl = `https://www.credly.com/badges/${badgeId}`;
                        providerName = `Credly`;
                    } else if (badgeProvider === "coursera") {
                        if (badgeCertificateType && badgeCertificateType === "professional"){
                            urlPrefix = "verify/professional-cert";
                        }
                        else if (badgeCertificateType && badgeCertificateType === "specialization"){
                            urlPrefix = "verify/specialization";
                        }
                        else if (!badgeCertificateType || badgeCertificateType === "course"){
                            badgeCertificateType = "course";
                            urlPrefix = "verify";
                        }
                        redirectUrl = `https://www.coursera.org/${urlPrefix}/${badgeId}`;
                        providerName = `Coursera`;
                    }

                    badgeLink.textContent = redirectUrl;
                    badgeProviderModal.textContent = providerName;
                    modal.classList.add("show");
                    modalContent.classList.add("show");
                }
                // else: ignore or show error
            }
        });
    });

    // Handle ACCEPT button
    acceptButton.addEventListener("click", () => {
        fetch(`/verify-badge?provider=${encodeURIComponent(badgeProvider)}&id=${encodeURIComponent(badgeId)}&certificateType=${encodeURIComponent(badgeCertificateType)}`)
            .then(response => response.json())
            .then(data => {
                if (data.url) {
                    window.open(data.url, '_blank');
                } else {
                    alert("Verification URL not found.");
                }
            })
            .catch(() => alert("Error verifying badge."));
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