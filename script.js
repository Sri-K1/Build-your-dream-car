const state = 
{
    model: 'sedan',
    color: 'black',
    wheels: 0,
    spoiler: 0,
};
const basePrices =
{
    sedan: 35000,
    coupe: 40000,
    supercar: 125000,
};

const screens = 
{
  home:       document.getElementById('homeScreen'),
  explore:    document.getElementById('exploreScreen'),
  build:      document.getElementById('buildScreen'),
  customizer: document.getElementById('customizerScreen'),
};

const carImage   = document.getElementById('carImage');
const totalPrice = document.getElementById('totalPrice');

function showScreen(name) 
{
  Object.entries(screens).forEach(([key, el]) => 
    {
    el.classList.toggle('active', key === name);
    if (key === name) el.scrollTop = 0;
    });
}
document.getElementById('buildBtn').addEventListener('click',() => showScreen('build'));
document.getElementById('exploreBtn').addEventListener('click',() => showScreen('explore'));
document.getElementById('backFromExplore').addEventListener('click',() => showScreen('home'));
document.getElementById('backFromBuild').addEventListener('click',() => showScreen('home'));
document.getElementById('backToModels').addEventListener('click',() => showScreen('build'));

/* Model Selection*/
document.querySelectorAll('.model-card.selectable').forEach(card => 
{
  card.addEventListener('click', () => 
 {
    document.querySelectorAll('.model-card.selectable').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    state.model = card.dataset.model;
    setTimeout(() => 
    {
      initCustomizer();
      showScreen('customizer');
    }, 180);
  });
});
/* Customizer */
function initCustomizer()
{
    state.color = 'black';
    state.wheels = 0;
    state.spoiler = 0;
}