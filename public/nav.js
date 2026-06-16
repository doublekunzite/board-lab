// nav.js
document.addEventListener('DOMContentLoaded', () => {
    const navList = document.querySelector('.nav-links');
    if (!navList) return; // Safety check

    // Define your navigation links here
    // Add new pages to this list in the future
    const links = [
        { name: 'Moves', href: 'index.html#moves' },
		{ name: 'Board Map', href: 'board-layout.html' },
		{ name: 'AI Setter', href: 'ai-setter.html' },
        { name: 'Hold Quality', href: 'hold-quality.html' },
        { name: 'Links', href: 'links.html' }
    ];

    // Get current page filename (e.g., "links.html" or "index.html")
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Clear existing static links (optional, but good for clean injection)
    navList.innerHTML = '';

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = link.href;
        a.className = 'nav-link';
        a.textContent = link.name;

        // Check if this is the current page (ignoring anchors like #moves for active state logic if desired)
        // Simple match:
        if (currentPage === link.href.split('#')[0]) {
            a.style.color = 'var(--accent)'; // Highlight current page
        }

        li.appendChild(a);
        navList.appendChild(li);
    });
});