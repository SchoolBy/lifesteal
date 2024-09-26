document.getElementById('join-button').addEventListener('click', copyToClipboard);
document.getElementById('copy-button').addEventListener('click', copyToClipboard);

function copyToClipboard() {
    const ip = "play.lifestealsurvival.com";
    navigator.clipboard.writeText(ip).then(() => {
        alert("Server IP copied to clipboard!");
    });
}
