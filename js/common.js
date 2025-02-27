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
    // 为整个文档添加点击事件监听
    document.addEventListener('click', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        confetti({
            particleCount: 100,
            angle: 180,           
            spread: 360,          
            startVelocity: 15,    
            gravity: 0.5,         
            origin: { x, y },     
            zIndex: 999,
            colors: [
                '#E8C6C6', // morandi-pink
                '#C6D5E8', // morandi-blue
                '#C8D6CF', // morandi-green
                '#E8E6C6', // morandi-yellow
                '#D6C6E8', // morandi-purple
                '#D1D1D1', // morandi-gray
                '#E8D8C6'  // morandi-beige
            ]
        });
    });
}