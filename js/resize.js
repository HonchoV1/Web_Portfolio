

//const image = document.getElementsByClassName('imagegrow');
//
//window.addEventListener('scroll', () => {
//	if (window.scrollY > 100){
//		image.classlist.add("resizing");
//	} else{
//		image.classList.remove("resizing");
//	}
//})
//






//function isInViewport(element){
function isInViewport(element){
	const rect = element.getBoundingClientRect();
	return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function imageScroll(){
	const elements = document.querySelectorAll('.hidden');
	elements.forEach((el) => {
		if (isInViewport (el)){
			el.classList.add("show");
		} 
	});
}

function handleScroll(){
	const elements = document.querySelectorAll('.imagegrow');
	elements.forEach((el) => {
		if (isInViewport (el)){
			el.classList.add("resizing");
		}
	});
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


window.addEventListener('scroll', imageScroll);
window.addEventListener('load', imageScroll);



//
//$(function(){
//	$(window).scroll(function(){
//		if($(this).scrollTop() > 100){
//			$('style_box').addClass("resize");
//		}
//		else{
//			$('style_box').removeClass("resize");
//		}
//	});
//});
	









//lets the box be resized by mouse click
const resizable = document.getElementById('imagegrow');

let isResizing = false;

resizable.addEventListener('mousedown', () => {
  isResizing = true;
});

window.addEventListener('mousemove', (e) => {
  if (!isResizing) return;
  const width = e.clientX - resizable.offsetLeft;
  const height = e.clientY - resizable.offsetTop;
  resizable.style.width = width + 'px';
  resizable.style.height = height + 'px';
});

window.addEventListener('mouseup', () => {
  isResizing = false;
});