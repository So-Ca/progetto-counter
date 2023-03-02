let container = document.querySelector(".container")
let containerTwo = document.querySelector(".container-two")

let count = document.createElement("div");
count.id = "count";
count.innerHTML = "";
container.appendChild(count);

let subtract = document.createElement('button');
subtract.className = "subtract";
subtract.innerHTML = "-";
containerTwo.appendChild(subtract);

let clear = document.createElement('button');
clear.className = "clear";
clear.innerHTML = "Clear";
containerTwo.appendChild(clear);

let add = document.createElement('button');
add.className = "add";
add.innerHTML = "+";
containerTwo.appendChild(add);

let counter = 0;
let gifVisible = false;
const counting = document.getElementById('count');
const buttons = document.querySelectorAll('button');


buttons.forEach( function (button) {
  button.addEventListener('click', function(e) {

    const audioMinus = new Audio('assets/audio/bump.mp3');
    const audioPlus = new Audio('assets/audio/coin.mp3');
    const audioClear = new Audio('assets/audio/pause.mp3');
    const gifPlus = document.querySelector('.gif-plus');
    const gifMinus = document.querySelector('.gif-minus');
    const type = e.currentTarget.classList;

    if (type.contains("subtract")) {
      counter --;
      audioMinus.play();
      gifMinus.classList.remove("hidden");
      if (!gifVisible) {
        gifMinus.style.opacity = "1";
        gifVisible = true;
        setTimeout(function(){
          gifMinus.style.opacity = "0";
          gifVisible = false;
        }, 900);
      }
    } else if (type.contains('add')){
      counter ++;
      audioPlus.play();
      gifPlus.classList.remove("hidden");
      if (!gifVisible) {
        gifPlus.style.opacity = "1";
        gifVisible = true;
        setTimeout(function(){
          gifPlus.style.opacity = "0";
          gifVisible = false;
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