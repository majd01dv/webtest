document.addEventListener('DOMContentLoaded', function () {
    // Alert on game item click
    document.querySelectorAll('.game-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.textContent.trim();
            alert('You selected: ' + name);
        });
    });

    // Simple logout alert
    document.querySelector('.logout-btn').addEventListener('click', () => {
        alert('Logging out...');
    });

    // Show back to top button on scroll
    window.addEventListener('scroll', () => {
        const btn = document.querySelector('.back-to-top');
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    // Scroll to top on click
    document.querySelector('.back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
