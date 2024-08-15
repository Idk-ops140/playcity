// Placeholder script for unblocking. Actual unblocking requires server-side proxy or VPN.
document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.onload = () => {
            try {
                iframe.contentWindow.document.body.innerHTML += '<p>Unblocked!</p>';
            } catch (e) {
                console.error('Unblocking failed:', e);
            }
        };
    });
});
