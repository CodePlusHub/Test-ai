(function() {
	function getPreferredTheme() {
		const stored = localStorage.getItem("novapress-theme");
		if (stored === "light" || stored === "dark") return stored;
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	function applyTheme(theme) {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('novapress-theme', theme);
	}
	function toggleTheme() {
		const current = document.documentElement.getAttribute('data-theme') || 'light';
		applyTheme(current === 'light' ? 'dark' : 'light');
	}
	// Initialize
	applyTheme(getPreferredTheme());
	const toggle = document.getElementById('themeToggle');
	if (toggle) toggle.addEventListener('click', toggleTheme);

	// Header shadow on scroll
	const header = document.getElementById('siteHeader');
	if (header) {
		const addShadow = () => {
			if (window.scrollY > 8) {
				header.style.boxShadow = 'var(--shadow-md)';
			} else {
				header.style.boxShadow = 'var(--shadow-xs)';
			}
		};
		addShadow();
		window.addEventListener('scroll', addShadow, { passive: true });
	}
})();