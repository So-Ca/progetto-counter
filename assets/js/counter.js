let container = document.querySelector(".container")
let containerTwo = document.querySelector(".container-two")

function createElement(tagName , className, innerHTML, parent) {
  const element = document.createElement(tagName);
  element.className = className;
  element.innerHTML = innerHTML;
  parent.appendChild(element);
  return element;
}

const count = createElement("div", "count", "", container);
const subtract = createElement("button", "subtract", "-", containerTwo);
const clear = createElement("button", "clear", "Clear", containerTwo);
const add = createElement("button", "add", "+", containerTwo);


let counter = 0;
let gifVisible = false;

const counting = document.querySelector('.count');
const buttons = document.querySelectorAll('button');

const audioMinus = new Audio('assets/audio/bump.mp3');
const audioPlus = new Audio('assets/audio/coin.mp3');
const audioClear = new Audio('assets/audio/pause.mp3');

const gifPlus = document.querySelector('.gif-plus');
const gifMinus = document.querySelector('.gif-minus');

buttons.forEach( function (button) {
  button.addEventListener('click', function(e) {

    const type = e.currentTarget.classList;

    if (type.contains("subtract")) {
      counter --;
      audioMinus.play();
      gifMinus.classList.remove("hidden");
      if (!gifVisible) {
       gifMinus.style.opacity = "1";
       gifVisibile = true;
       setTimeout(function(){
         gifMinus.style.opacity = "0";
         gifVisibile = false;
       }, 900);
     }
    } else if (type.contains('add')){
      counter ++;
      audioPlus.play();
      gifPlus.classList.remove("hidden");
      if (!gifVisible) {
       gifPlus.style.opacity = "1";
       gifVisibile = true;
       setTimeout(function(){
         gifPlus.style.opacity = "0";
         gifVisibile = false;
       }, 900);
     }
    } else {
      counter = 0;
      audioClear.play();
      gifPlus.classList.add("hidden");
      gifMinus.classList.add("hidden");
    }

    count.textContent = counter;

    if (counter > 0) {
      counting.style.color = "rgb(56, 118, 29)";
      const image = document.createElement('img');
      image.src = 'assets/img/coin/green-coin.png';
      count.appendChild(image);

    } else if (counter < 0) {
      counting.style.color = "rgb(255, 0, 0)";
      const image = document.createElement('img');
      image.src = 'assets/img/coin/red-coin.webp';
      count.appendChild(image);

    } else {
      counting.style.color = "rgb(241, 194, 50)";
    }
  });
});