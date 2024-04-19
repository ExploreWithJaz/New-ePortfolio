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

const openBtnPet = document.getElementById('open-btn-pet');
const overlayPet = document.getElementById('overlay-pet');
const closeBtnPet = document.getElementById('close-btn-pet');

openBtnPet.addEventListener('click', function() {
  overlayPet.style.display = 'block'; 
  setTimeout(() => {
    overlayPet.style.opacity = '1'; 
    document.getElementById('popup-pet').style.opacity = '1'; 
  }, 50); // Delay added for smoother transition
});

closeBtnPet.addEventListener('click', function() {
  overlayPet.style.opacity = '0';
  document.getElementById('popup-pet').style.opacity = '0'; 
  setTimeout(() => {
    overlayPet.style.display = 'none'; 
  }, 300); // Same duration as CSS transition
});

const openBtnAdopt = document.getElementById('open-btn-adoptopia');
const overlayAdopt = document.getElementById('overlay-adoptopia');
const closeBtnAdopt = document.getElementById('close-btn-adoptopia');

openBtnAdopt.addEventListener('click', function() {
  overlayAdopt.style.display = 'block'; 
  setTimeout(() => {
    overlayAdopt.style.opacity = '1'; 
    document.getElementById('popup-adoptopia').style.opacity = '1'; 
  }, 50); // Delay added for smoother transition
});

closeBtnAdopt.addEventListener('click', function() {
  overlayAdopt.style.opacity = '0';
  document.getElementById('popup-adoptopia').style.opacity = '0'; 
  setTimeout(() => {
    overlayAdopt.style.display = 'none'; 
  }, 300); // Same duration as CSS transition
});

const openBtnMinion = document.getElementById('open-btn-minion');
const overlayMinion = document.getElementById('overlay-minion');
const closeBtnMinion = document.getElementById('close-btn-minion');

openBtnMinion.addEventListener('click', function() {
  overlayMinion.style.display = 'block'; 
  setTimeout(() => {
    overlayMinion.style.opacity = '1'; 
    document.getElementById('popup-minion').style.opacity = '1'; 
  }, 50); // Delay added for smoother transition
});

closeBtnMinion.addEventListener('click', function() {
  overlayMinion.style.opacity = '0';
  document.getElementById('popup-minion').style.opacity = '0'; 
  setTimeout(() => {
    overlayMinion.style.display = 'none'; 
  }, 300); // Same duration as CSS transition
});

const openBtnKairos = document.getElementById('open-btn-kairos');
const overlayKairos = document.getElementById('overlay-kairos');
const closeBtnKairos = document.getElementById('close-btn-kairos');

openBtnKairos.addEventListener('click', function() {
  overlayKairos.style.display = 'block'; 
  setTimeout(() => {
    overlayKairos.style.opacity = '1'; 
    document.getElementById('popup-kairos').style.opacity = '1'; 
  }, 50); // Delay added for smoother transition
});

closeBtnKairos.addEventListener('click', function() {
  overlayKairos.style.opacity = '0';
  document.getElementById('popup-kairos').style.opacity = '0'; 
  setTimeout(() => {
    overlayKairos.style.display = 'none'; 
  }, 300); // Same duration as CSS transition
});

const openBtnLemon = document.getElementById('open-btn-lemon');
const overlayLemon = document.getElementById('overlay-lemon');
const closeBtnLemon = document.getElementById('close-btn-lemon');

openBtnLemon.addEventListener('click', function() {
  overlayLemon.style.display = 'block'; 
  setTimeout(() => {
    overlayLemon.style.opacity = '1'; 
    document.getElementById('popup-lemon').style.opacity = '1'; 
  }, 50); // Delay added for smoother transition
});

closeBtnLemon.addEventListener('click', function() {
  overlayLemon.style.opacity = '0';
  document.getElementById('popup-lemon').style.opacity = '0'; 
  setTimeout(() => {
    overlayLemon.style.display = 'none'; 
  }, 300); // Same duration as CSS transition
});