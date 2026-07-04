let currentModel = 'sedan';
let currentColor = 'black';
let wheelCost = 0;
let spoilerCost = 0;
const basePrices = 
{
  sedan: 60000,
  coupe: 85000,
  supercar: 190000
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
  const next = document.getElementById(id);
  next.scrollTop = 0;
  next.classList.add('active');
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
    document.getElementById('carLabel').textContent = currentModel.toUpperCase();
    showScreen('customizerScreen');
    };
});
function resetCustomizer() 
{
  document.getElementById('carImage').src = `assets/cars/${currentModel}-${currentColor}.png`;
  document.getElementById('wheelFrontImage').classList.add('hidden');
  document.getElementById('wheelRearImage').classList.add('hidden');
  document.getElementById('spoilerImage').classList.add('hidden');
  updatePrice();
  document.querySelectorAll('.swatch[data-color]').forEach(b => b.classList.remove('active'));
  document.querySelector('.swatch[data-color="black"]').classList.add('active');
  document.querySelectorAll('.wheel-swatch').forEach(b => b.classList.remove('active'));
  document.querySelector('.wheel-swatch[data-wheel="0"]').classList.add('active');
  document.querySelectorAll('.spoiler-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.spoiler-btn[data-spoiler="0"]').classList.add('active');
}
/*Paint*/
document.querySelectorAll('.swatch[data-color]').forEach(btn => {
    btn.onclick = () => 
    {
      currentColor = btn.dataset.color;
      document.querySelectorAll('.swatch[data-color]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const img = document.getElementById('carImage');
      img.classList.add('switching');
      setTimeout(() => 
      {
          img.src = `assets/cars/${currentModel}-${currentColor}.png`;
          img.classList.remove('switching');
      }, 350);
        updatePrice();
    };
});

/*Wheels*/
document.querySelectorAll('.wheel-swatch').forEach(btn => 
{
    btn.onclick = () => 
    {
      wheelCost = parseInt(btn.dataset.wheel);
      document.querySelectorAll('.wheel-swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateWheelPreview(btn);
      updatePrice();
    };
});
function updateWheelPreview(btn)
{
  const frontWheel=document.getElementById('wheelFrontImage');
  const rearWheel=document.getElementById('wheelRearImage');
  if(wheelCost === 0)
  {
    frontWheel.classList.add('hidden');
    rearWheel.classList.add('hidden');
  }
  else
  {
    const wheelSrc=btn.querySelector('img').src;
    frontWheel.src=wheelSrc;
    rearWheel.src=wheelSrc;
    frontWheel.classList.remove('hidden');
    rearWheel.classList.remove('hidden');
  }
}
/*Spoiler*/
document.querySelectorAll('.spoiler-btn').forEach(btn => 
{
  btn.onclick = () => {
    spoilerCost = parseInt(btn.dataset.spoiler);
    document.querySelectorAll('.spoiler-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
      updatePrice();
      updateSpoilerPreview(btn);
    };
});
function updateSpoilerPreview(btn)
{
  const spoilerImage = document.getElementById('spoilerImage');
  if(spoilerCost === 0)
  {
    spoilerImage.classList.add('hidden');
  }
  else
  {
  spoilerImage.src = btn.querySelector('img').src;
  spoilerImage.classList.remove('hidden');
  }
}
/*Price and save build */
function updatePrice() {
  const paintCost = (currentColor === 'red' || currentColor === 'blue') ? 1500 : 0;
  const total = basePrices[currentModel] + paintCost + wheelCost + spoilerCost;
  document.getElementById('totalPrice').textContent = '$' + total.toLocaleString('en-US');
}
document.getElementById('purchaseButton').onclick = () => 
  {
  showScreen('purchaseConfirmationScreen');
};
document.getElementById('purchaseBackHomeBtn').onclick = () => showScreen('homeScreen');
function showToast(message) 
{
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = 
  `position: fixed; bottom: 32px; left: 50%;
   transform: translateX(-50%);
   background: rgba(20,20,20,0.95);
   border: 1px solid rgba(255,255,255,0.12);
    color: #fff; font-family: Inter, sans-serif;
  font-size: 0.78rem; letter-spacing: 0.08em;
  padding: 14px 28px; border-radius: 8px;
  backdrop-filter: blur(16px); z-index: 999;`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}
/* Homescreen pics slideshow*/
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
slides[currentSlide].classList.add('active');
setInterval(() => 
{
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);
/* Test Drive nav*/
document.getElementById('bookDemoBtn').onclick = () => showScreen('demoSignupScreen');
document.getElementById('backFromConfirm').onclick = () => showScreen('homeScreen');
document.getElementById('backHomeBtn').onclick = () => showScreen('homeScreen');

document.getElementById('backFromSignup').onclick = () => 
{
  showScreen('homeScreen');
  setTimeout(() => 
    {
      document.getElementById('homeScreen').scrollTop = 999999;
    }, 50);
};

/*Submit test drive*/
document.getElementById('submitDemo').onclick = () => 
{
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  if (!name || !email) 
  {
    showToast('Please fill in all fields!!');
    return;
  }
  showScreen('confirmationScreen');
};