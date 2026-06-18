// ============================================
// 1. AUTO-INJECT FAVICON
// ============================================
(function injectFavicon() {
    if (!document.querySelector('link[rel="icon"]')) {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        // Calculate the relative path depth (e.g., '../' for pages in subdirectories)
        const path = window.location.pathname;
        const depth = path.split('/').length - 2; 
        let prefix = '';
        for (let i = 0; i < depth; i++) {
            prefix += '../';
        }
        favicon.href = `${prefix}favicon.png?v=2`;
        document.head.appendChild(favicon);
    }
})();

// ============================================
// 2. AUTO-INJECT NAV LINKS
// ============================================
(function injectNavLinks() {
    const navList = document.querySelector('.nav-links');
    if (!navList) return; // If there's no nav list on this page, do nothing

    // Calculate relative path depth again for links
    const path = window.location.pathname;
    const depth = path.split('/').length - 2; 
    let prefix = '';
    for (let i = 0; i < depth; i++) {
        prefix += '../';
    }

    // Define your navigation links here
    const links = [
        { name: 'Home', href: `${prefix}index.html` },
        { name: 'Board Map', href: `${prefix}board-layout.html` },
        { name: 'AI Setter', href: `${prefix}ai-setter.html` },
        { name: 'Moves', href: `${prefix}moves/moves.html` } // Adjust path if needed
    ];

    let html = '';
    links.forEach(link => {
        html += `<li><a href="${link.href}">${link.name}</a></li>`;
    });
    
    navList.innerHTML = html;
})();