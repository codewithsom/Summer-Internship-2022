const animateImage = [
    { transform: 'rotate(0) scale(0)' },
    { transform: 'rotate(360deg) scale(1)' }
];
  
  
const imgTiming = {
  duration: 4000,
  iterations: 1,
  fill: 'backwards',
}

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");


img1.animate(animateImage, imgTiming).finished
  .then(() => img2.animate(animateImage, imgTiming).finished)
  .then(() => img3.animate(animateImage, imgTiming).finished)
  .catch(error => console.error(`Error animating Images: ${error}`));
