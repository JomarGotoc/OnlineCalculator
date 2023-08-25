let outScreen = document.querySelector('.output input');
mode = 'calc';

function insert (num) {
  outScreen.value += num;
  if (mode == 'equal') {
    outScreen.value = '';
    outScreen.value += num;
    mode = 'calc';
  };
};

function clr() {
  outScreen.value = '';
};

function del() {
  outScreen.value = outScreen.value.slice(0, -1);
  if (mode == 'equal') {
    outScreen.value = '';
  };
};

function calc() {
  try {
    outScreen.value = eval(outScreen.value);
    mode = 'equal';
  } catch (err) {
    outScreen.value = 'Syntax Error';
    mode = 'equal';
  };
};

let menuIcon = document.querySelector('.icon'),
  menu = document.querySelector('.menu');

menuIcon.onclick = function() {
  menu.classList.toggle('open');
};

let bluetheme = document.querySelector('.blue'),
  orangetheme = document.querySelector('.orange'),
  redtheme = document.querySelector('.red'),
  yellowtheme = document.querySelector('.yellow'),
  pinktheme = document.querySelector('.pink');

redtheme.onclick = function() {
  document.body.classList.remove('orange');
  document.body.classList.remove('blue');
  document.body.classList.remove('yellow');
  document.body.classList.remove('pink');
  document.body.classList.add('red');
  menu.classList.remove('open');
}

bluetheme.onclick = function() {
  document.body.classList.remove('orange');
  document.body.classList.remove('red');
  document.body.classList.remove('yellow');
  document.body.classList.remove('pink');
  document.body.classList.add('blue');
  menu.classList.remove('open');
}

orangetheme.onclick = function() {
  document.body.classList.remove('red');
  document.body.classList.remove('blue');
  document.body.classList.remove('yellow');
  document.body.classList.remove('pink');
  document.body.classList.add('orange');
  menu.classList.remove('open');
}

yellowtheme.onclick = function() {
  document.body.classList.remove('orange');
  document.body.classList.remove('red');
  document.body.classList.remove('blue');
  document.body.classList.remove('pink');
  document.body.classList.add('yellow');
  menu.classList.remove('open');
}

pinktheme.onclick = function() {
  document.body.classList.remove('orange');
  document.body.classList.remove('red');
  document.body.classList.remove('yellow');
  document.body.classList.remove('blue');
  document.body.classList.add('pink');
  menu.classList.remove('open');
};