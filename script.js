let currentModel = 'sedan';
let currentColor = 'black';
let wheelCost = 0;
let spoilerCost = 0;
const basePrices = 
{
  sedan: 60000,
  coupe: 85000,
  supercar: 19000
};
/* Screen Navigation */
document.getElementById('buildBtn').onclick = () => showScreen('buildScreen');
document.getElementById('exploreBtn').onclick = () => showScreen('exploreScreen');
document.getElementById('backFromExplore').onclick = () => showScreen('homeScreen');
document.getElementById('backFromBuild').onclick = () => showScreen('homeScreen');
document.getElementById('backToModels').onclick = () => showScreen('buildScreen');
function showScreen(id) 
{
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
/* Car model cards */
document.querySelectorAll('.model-card.selectable').forEach(card => 
{
  card.onclick = () => 
  {
    currentModel = card.dataset.model;
    currentColor = 'black';
    wheelCost = 0;
    spoilerCost = 0;
    resetCustomizer();
    showScreen('customizerScreen');
    };
});
function resetCustomizer() 
{
  document.getElementById('carImage').src = `assets/cars/${currentModel}-${currentColor}.png`;
  updatePrice();
  document.querySelectorAll('.swatch[data-color]').forEach(b => b.classList.remove('active'));
  document.querySelector('.swatch[data-color="black"]').classList.add('active');
  document.querySelectorAll('.wheel-swatch').forEach(b => b.classList.remove('active'));
  document.querySelector('.wheel-swatch[data-wheel="0"]').classList.add('active');
  document.querySelectorAll('.spoiler-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.spoiler-btn[data-spoiler="0"]').classList.add('active');
}
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
slides[currentSlide].classList.add('active');

setInterval(() => 
{
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);