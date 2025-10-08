

function isInViewport(element){
	const rect = element.getBoundingClientRect();
	return rect.top <= window.innerHeight && rect.bottom >= 0;
}


function handleScroll(){
	const elements = document.querySelectorAll('.hidden');
	elements.forEach((el) => {
		if (isInViewport (el)){
			el.classList.add("show");
		} else{
			el.classList.remove("show");
		}
	});
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);



