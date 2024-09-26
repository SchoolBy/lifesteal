document.getElementById('join-button').addEventListener('click', copyToClipboard);
document.getElementById('copy-button').addEventListener('click', copyToClipboard);

function copyToClipboard() {
    const ip = "play.lifestealsurvival.com";
    navigator.clipboard.writeText(ip).then(() => {
        showNotification("Server IP copied to clipboard!");
    });
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message; // Set the message
    notification.classList.add('show');

    // Set a timeout to remove the notification after a few seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // Show for 3 seconds
}
