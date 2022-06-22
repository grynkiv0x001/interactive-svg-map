const map = document.querySelector('#map');
const names = document.querySelector('#Department_Names');
const description = document.querySelector('.description');

names.style.pointerEvents = 'none';

map.addEventListener('mouseover', (e) => {
  const region = e.target;
  description.classList.add('new-class');
  description.style.top = e.pageY;
  description.style.left = e.pageX;

  // const activeRegions = document.querySelectorAll('.active');

  // Array.from(activeRegions).map((r) => {
  //   console.log('R: ', r);
  //   r.appendChild(description);
  // });
});

map.addEventListener('mouseleave', (e) => {
  const region = e.target;
  description.classList.remove('new-class');
});
