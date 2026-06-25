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
const screens ={
    home: document.getElementById('homeScreen'),
    explore: document.getElementById('exploreScreen'),
    build: document.getElementById('buildScreen'),
    customizer: document.getElementById('customizerScreen'),
};
const carImage = document.getElementById('carImage');
const totalPrice = document.getElementById('totalPrice');
const wheelSelect = document.getElementById('wheelSelect');
const spoilerSelect=document.getElementById('spoilerSelect');

function showScreen(name)
{

}