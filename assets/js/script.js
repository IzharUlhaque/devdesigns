// add a box shadow to navbar sticky element
const nav = document.querySelector('nav');
document.addEventListener('scroll', function (e) {
	if( nav.offsetTop >= 51 ){
		nav.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
	}else{
		nav.style.boxShadow = 'none'
	}
});

// change heading & border color on hover
const cards = document.querySelectorAll('#happy-customer  .h-100');
cards.forEach(function(card){
	// mouse enter
	card.addEventListener('mouseover', function(){
		let currentCardHeading = this.querySelector('h6');
		let currentCardImg = this.querySelector('img');
		currentCardHeading.classList.remove('text-dark');
		currentCardHeading.classList.add('text-light');
		currentCardImg.classList.remove('border-danger');
		currentCardImg.classList.add('border-light');
		// mouse leave
		card.addEventListener('mouseleave', function(){
			currentCardHeading.classList.add('text-dark');
			currentCardHeading.classList.remove('text-light');
			currentCardImg.classList.add('border-danger');
			currentCardImg.classList.remove('border-light');
		})
	});
});