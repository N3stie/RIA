document.querySelectorAll('.memory-card').forEach((card) => {
	card.addEventListener('click', () => {
		const isOpen = card.getAttribute('aria-pressed') === 'true';
		card.setAttribute('aria-pressed', String(!isOpen));
	});
});