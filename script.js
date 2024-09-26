document.getElementById('join-button').addEventListener('click', copyToClipboard);
document.getElementById('copy-button').addEventListener('click', copyToClipboard);

function copyToClipboard() {
    const ip = "play.lifestealsurvival.com";
    navigator.clipboard.writeText(ip).then(() => {
        showNotification("Server IP copied to clipboard!");
    }).catch(err => {
        showNotification("Failed to copy IP. Please try again.");
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
        // Get the target section's ID from the href attribute
        const targetId = link.getAttribute('href');
        
        // Smoothly scroll to the target section
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Show notification for the clicked link
        const message = `${link.textContent} section clicked!`;
        showNotification(message);
    });
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message; // Set the message
    notification.classList.add('show');

    // Set a timeout to remove the notification after a few seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // Show for 3 seconds
}
