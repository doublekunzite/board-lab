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
    if (!navList) return; // If there's no nav list on this page, do nothing

    // Define your navigation links using the calculated rootPath
    const links = [
        { name: 'Home', href: `${rootPath}index.html` },
        { name: 'Board Map', href: `${rootPath}board-layout.html` },
        { name: 'AI Setter', href: `${rootPath}ai-setter.html` },
        { name: 'Moves', href: `${rootPath}#moves` }, // Adjust if your moves index has a different name
		{ name: 'Process', href: `${rootPath}process.html` }
	];

    let html = '';
    links.forEach(link => {
        html += `<li><a href="${link.href}">${link.name}</a></li>`;
    });
    
    navList.innerHTML = html;
})();