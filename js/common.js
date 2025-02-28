async function loadComponent(elementId, path) {
    try {
        const response = await fetch(path);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

function initConfetti() {
    document.addEventListener('click', (e) => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { 
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            },
            colors: [
                '#E8C6C6', // morandi-pink
                '#C6D5E8', // morandi-blue
                '#C8D6CF', // morandi-green
                '#E8E6C6', // morandi-yellow
                '#D6C6E8', // morandi-purple
                '#D1D1D1', // morandi-gray
            ],
            zIndex: 999999
        });
    });
}