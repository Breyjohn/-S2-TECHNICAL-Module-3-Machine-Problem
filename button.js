
const box = document.querySelector('.box');

function triggerAnimation(day) {
  const colors = {
    Monday: '#FFD700',
    Tuesday: '#5F9EA0',
    Wednesday: '#32CD32',
    Thursday: '#FF8C00',
    Friday: '#FF1493',
    Saturday: '#0000FF',
    Sunday: '#FF0000'
  };

  const initialColor = '#2F4F4F';
  const targetPosition = 100;
  const targetColor = colors[day];
  const transitionDuration = 500; // milliseconds
  const delay = 300; // milliseconds

  box.style.background = initialColor;
  box.style.transform = `translateY(-100%) rotateX(-20deg)`;
  box.style.opacity = 1;
  box.style.transition = `transform ${transitionDuration}ms ease-in-out, background ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`;
  
  setTimeout(() => {
    box.style.transform = 'translateY(0%) rotateX(0deg)';
    box.style.background = targetColor;
  }, delay);
}
