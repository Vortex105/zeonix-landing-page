function toggleMenu() {
	document.querySelector('nav').classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelectorAll(
		'.scroll-reveal, .scroll-left, .scroll-right'
	);

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				} else {
					entry.target.classList.remove('visible'); // Removes class when out of view
				}
			});
		},
		{ threshold: 0.2 } // Adjust how much of the element must be visible before triggering
	);

	elements.forEach((el) => observer.observe(el));
});
