/** @format */

document.addEventListener('DOMContentLoaded', () => {
	const track = document.querySelector('.slider-track');
	const leftButton = document.querySelector('.left-button');
	const rightButton = document.querySelector('.right-button');
	const itemsCount = track.children.length;
	const itemWidth = track.children[0].clientWidth;
	const maxIndex = itemsCount - 4; // Since we're showing 4 images at a time
	let currentIndex = 0;

	function updateSlider() {
		const newPosition = -(itemWidth * currentIndex);
		track.style.transform = `translateX(${newPosition}px)`;
	}

	leftButton.addEventListener('click', () => {
		if (currentIndex > 0) {
			currentIndex--;
			updateSlider();
		}
	});

	rightButton.addEventListener('click', () => {
		if (currentIndex < maxIndex) {
			currentIndex++;
			updateSlider();
		}
	});
});
