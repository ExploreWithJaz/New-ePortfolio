const openBtn = document.getElementById('open-btn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function() {
  overlay.style.display = 'block';
  setTimeout(() => {
    overlay.style.opacity = '1';
    document.getElementById('popup').style.opacity = '1';
  }, 50); // Delay added for smoother transition
});

closeBtn.addEventListener('click', function() {
  overlay.style.opacity = '0';
  document.getElementById('popup').style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300); // Same duration as CSS transition
});
