
document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('current-status');
    setInterval(() => {
        status.style.animation = 'glow 1.5s infinite alternate';
    }, 2000);
});
