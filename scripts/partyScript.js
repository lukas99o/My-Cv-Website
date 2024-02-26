const partyButton = document.getElementById('partyButton');
const partyMusic = document.getElementById('partyMusic');

let intervalId;

partyButton.addEventListener('click', () => {
  if (!intervalId) {

    partyMusic.play();

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomColor();
    }, 500); 

    partyButton.textContent = 'Stop Party!';
  } else {
    clearInterval(intervalId); 
    document.body.style.backgroundColor = '#fff';
    partyMusic.pause(); 

    intervalId = null;
    partyButton.textContent = 'Start Party!';
  }
});
