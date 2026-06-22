// ============================================
// 0. PASSWORD GATE
// ============================================
(function passwordGate() {
    const PASSWORD = 'boardlab2026#';
    const stored = sessionStorage.getItem('boardlab_auth');
    
    if (stored !== 'ok') {
        const entered = prompt('Enter password to view Board Lab:');
        if (entered !== PASSWORD) {
            document.body.innerHTML = '<h1>Access denied</h1>';
            throw new Error('Access denied');
        }
        sessionStorage.setItem('boardlab_auth', 'ok');
    }
})();

// ============================================
// 1. DETERMINE RELATIVE PATH TO ROOT
// ============================================
// Look at how this script was loaded to figure out the depth
const navScriptTag = document.querySelector('script[src*="nav.js"]');
let rootPath = '';
if (navScriptTag) {
    // e.g., if src is "../nav.js", slashes = 1, so rootPath becomes "../"
    const src = navScriptTag.getAttribute('src');
    const slashes = src.split('/').length - 1;
    for (let i = 0; i < slashes; i++) {
        rootPath += '../';
    }
}

// ============================================
// 2. AUTO-INJECT FAVICON
// ============================================
(function injectFavicon() {
    // Remove any existing favicon to handle path changes from subdirectories
    const existing = document.querySelector('link[rel="icon"]');
    if (existing) existing.remove();

    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = `${rootPath}favicon.png?v=2`;
    document.head.appendChild(favicon);
})();

// ============================================
// 3. AUTO-INJECT NAV LINKS
// ============================================
(function injectNavLinks() {
    const navList = document.querySelector('.nav-links');
    if (!navList) {
        // If nav-links doesn't exist, create it
        const nav = document.querySelector('nav');
        if (nav) {
            const ul = document.createElement('ul');
            ul.className = 'nav-links';
            nav.appendChild(ul);
            // Re-query
            const newNavList = document.querySelector('.nav-links');
            if (newNavList) {
                // Continue with injection using newNavList
                injectLinks(newNavList);
            }
        }
        return;
    }
    injectLinks(navList);
})();

function injectLinks(navList) {
    const rootPath = getRootPath(); // Your existing rootPath logic
    const links = [
        { name: 'Home', href: `${rootPath}index.html` },
        { name: 'Board Map', href: `${rootPath}board-layout.html` },
        { name: 'Moves', href: `${rootPath}index.html#moves` },
        { name: 'Process', href: `${rootPath}process.html` },
        { name: 'About', href: `${rootPath}links.html` }
    ];
    navList.innerHTML = links.map(l => `<li><a href="${l.href}">${l.name}</a></li>`).join('');
}