const  slider = document.querySelector('.items') 
let isDown = false 
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => { // É disparado quando o botão esquedo do mouse é pressionado
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => { // É disparado quando o mouse sai de cima do slide
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => { // É disparado quando acabamos de efetuar o click
  isDown = false;
  slider.classList.remove('active');

});

slider.addEventListener('mousemove', e => { // É disparado quando arrastamos o slide
  if (!isDown) return;
  e.preventDefault()
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3 
  slider.scrollLeft = scrollLeft - walk
})