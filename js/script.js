var buttonStart = document.querySelector('.start');
var buttonReset = document.querySelector('.reset');
var buttonSplit = document.querySelector('.split');
var splitList = document.querySelector('.split__list');

var mil;
var sec;
var min;
var hour;

var time = 0;
var run = 0;
var q = 0;
var spl = 0;

buttonStart.addEventListener('click', startPause);
buttonReset.addEventListener('click', reset);
buttonSplit.addEventListener('click', split);

function startPause() {
  if (run == 0) {
    spl = 1;
    run = 1;
    increment();
    document.querySelector('.start__text').innerHTML = 'Pause';
  } else {
    run = 0;
    document.querySelector('.start__text').innerHTML = 'Resume';
    var splitListItem2 = document.createElement('p');
    q++;
    time -= 6;
    splitListItem2.classList.add('split__list__item2');
    splitListItem2.innerHTML = 'Pause ' + [q] + ' - ' + hour + ':' + min + ':' + sec + ' ' + mil;
    splitList.appendChild(splitListItem2);
  }
}

function reset() {
  spl = 0;
  q = 0;
  run = 0;
  time = -6;
  document.querySelector('.start__text').innerHTML = 'Start';
  document.querySelector('.timer__text').innerHTML = '00:00:00';
  document.querySelector('.milisecond__text').innerHTML = '0';
  splitList.innerHTML = '';
}

function split() {
  if (spl == 1) {
    var splitListItem = document.createElement('p');
    q++;
    splitListItem.classList.add('split__list__item');
    splitListItem.innerHTML = 'Split ' + [q] + ' - ' + hour + ':' + min + ':' + sec + ' ' + mil;
    splitList.appendChild(splitListItem);
  }
}

function increment() {
  if (run == 1) {
    setTimeout(function () {
      time += 8 ;
      
      mil = time % 1000;
      sec = Math.floor(time / 1000 % 60);
      min = Math.floor(time / 60000 % 60);
      hour = Math.floor(time / 86400000 % 24);

      if (hour < 10) {
        hour = '0' + hour;
      }
      if (min < 10) {
        min = '0' + min;
      }
      if (sec < 10) {
        sec = '0' + sec;
      }
      document.querySelector('.timer__text').innerHTML = hour + ':' + min + ':' + sec;
      document.querySelector('.milisecond__text').innerHTML = mil;
      increment();
    }, 1);
  }
}