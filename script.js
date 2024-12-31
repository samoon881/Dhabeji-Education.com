// Add event listeners to navigation menu items
document.querySelectorAll('nav ul li a').forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		// Redirect to respective page
		window.location.href = link.getAttribute('href');
	});
});

// Add event listeners to learn more buttons
document.querySelectorAll('.learn-more-btn').forEach((btn) => {
	btn.addEventListener('click', () => {
		// Toggle
		 
