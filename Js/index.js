let coler = document.getElementById('coler');
let download = document.querySelector('.download');
let dropDown = document.querySelector('.drop-down');
let ick = document.querySelector('.ick');
let solid = document.querySelector('#solid');
let drop = document.querySelector('.drop');
let mode = document.querySelector('.mode');
let sun = document.querySelector('#mode');
let hero = document.querySelector('.hero-section');
let circle = document.querySelector('.circle');
let egg = document.querySelector('.egg-white');
let alone = document.getElementById('alone');
let come = document.getElementById('come');
let clone = document.getElementById('clone');
let first = document.getElementById('first');
let sec = document.getElementById('sec');
let third = document.getElementById('third');
let shower = document.getElementById('shower');
let big= document.querySelector('.bigger-img');
let plum= document.querySelectorAll('.plum');
let click= document.querySelectorAll('.click');






const images= [
    "../assets/media/injection.jpg",
    "../assets/media/use.png",
    "../assets/media/luca.jpg"
];
let i=0;


// setInterval(function(){}, 1000)

setInterval(function(){
    if(i===images.length){
        i=0;
    }
    clone.src=images[i];
    i++ ;
},2000);


download.addEventListener("click", ()=> {
    dropDown.classList.toggle("show");
});
ick.addEventListener("click", ()=> {
    solid.classList.toggle("fa-xmark");
    if (solid.classList.contains("fa-xmark")) {
        drop.style.display = "block";
    }
    else{
        drop.style.display = "none";
    }
});

click.addEventListener("click", ()=> {
    big.style.display = "flex";
    big.classList.remove("bigger-img");
});

mode.addEventListener("click", ()=> {
    sun.classList.toggle("fa-moon");
    if (sun.classList.contains("fa-moon")) {
        hero.classList.add("hero-dark");
        circle.classList.add("circle-dark");
        egg.classList.add("egg-white-dark");
    }
    else if(sun.classList.contains("fa-sun")){
        hero.classList.remove("hero-dark");
        circle.classList.remove("circle-dark");
        egg.classList.remove("egg-white-dark");
    }
    else{
        null
    }
});

let list= [
    "tani",
    "books",
    "pen", 
    "bag"
]



alone.addEventListener("click", ()=> {
    come.scrollIntoView({behavior: "smooth"});
});
