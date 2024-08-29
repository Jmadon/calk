// Получаем кнопки и поле ввода
const DISPLAY = document.querySelector('input[name="display"]');
const BUTTON1 = document.querySelector('button[name="1"]');
const BUTTON2 = document.querySelector('button[name="2"]');
const BUTTON3 = document.querySelector('button[name="3"]');
const BUTTON4 = document.querySelector('button[name="4"]');
const BUTTON5 = document.querySelector('button[name="5"]');
const BUTTON6 = document.querySelector('button[name="6"]');
const BUTTON7 = document.querySelector('button[name="7"]');
const BUTTON8 = document.querySelector('button[name="8"]');
const BUTTON9 = document.querySelector('button[name="9"]');
const BUTTON0 = document.querySelector('button[name="0"]');
const BUTTONDOT = document.querySelector('button[name="dot"]');

// Операции
const SUBTRACT = document.querySelector('button[name="subtract"]');     // Вычитание    subtract
const ADDING = document.querySelector('button[name="add"]');            // Сложение     ADDING
const DIVIDE = document.querySelector('button[name="divide"]');         // Деление      divide
const MULTIPLY = document.querySelector('button[name="multiply"]');     // Умножение    multiply
const BACKSPACE = document.querySelector('button[name="backspace"]');   // Удаление     backspace
const CLEAR = document.querySelector('button[name="clear"]');           // Очистить     clear
const EQUALS = document.querySelector('button[name="equals"]');         // Равно        equals
const NEGATIVE = document.querySelector('button[name="negative"]');     // +/-          negative

// Переменные для вычисления
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result;
let calk = document.getElementById('calk');
calk.innerHTML = `${firstNumber} ${operator} ${secondNumber}`;
DISPLAY.value = '';

// Добавляем обработчик события на кнопки
BUTTON1.addEventListener('click', () => {
    DISPLAY.value += BUTTON1.name;
});            
BUTTON2.addEventListener('click', () => {
    DISPLAY.value += BUTTON2.name;
});
BUTTON3.addEventListener('click', () => {
    DISPLAY.value += BUTTON3.name;
});
BUTTON4.addEventListener('click', () => {
    DISPLAY.value += BUTTON4.name;
});
BUTTON5.addEventListener('click', () => {
    DISPLAY.value += BUTTON5.name;
});
BUTTON6.addEventListener('click', () => {
    DISPLAY.value += BUTTON6.name;
});
BUTTON7.addEventListener('click', () => {
    DISPLAY.value += BUTTON7.name;
});
BUTTON8.addEventListener('click', () => {
    DISPLAY.value += BUTTON8.name;
});
BUTTON9.addEventListener('click', () => {
    DISPLAY.value += BUTTON9.name;
});
BUTTON0.addEventListener('click', () => {
    DISPLAY.value += BUTTON0.name;
});
BUTTONDOT.addEventListener('click', () => {
    DISPLAY.value += '.';
});

// Очищение
CLEAR.addEventListener('click', () => {
    DISPLAY.value = '';
    calk.innerHTML = '';
});
// Удаление
BACKSPACE.addEventListener('click', () => {
    DISPLAY.value = DISPLAY.value.slice(0, -1);
});

// Операция СЛОЖЕНИЯ
ADDING.addEventListener('click', () => {
    if (DISPLAY.value == '') {
        operator = '+';
    } else {
        firstNumber = Number(DISPLAY.value);   
        operator = '+';
    };
    calk.innerHTML = firstNumber + operator;
    DISPLAY.value = '';
});

// Операция ВЫЧИТАНИЯ
SUBTRACT.addEventListener('click', () => {
    if (DISPLAY.value == '') {
        operator = '&ndash;';
    } else {
        firstNumber = Number(DISPLAY.value);   
        operator = '&ndash;';
    };
    calk.innerHTML = firstNumber + operator;
    DISPLAY.value = '';
});

// Операция УМНОЖЕНИЯ
MULTIPLY.addEventListener('click', () => {
    if (DISPLAY.value == '') {
        operator = '×';
    } else {
        firstNumber = Number(DISPLAY.value);   
        operator = '×';
    };
    calk.innerHTML = firstNumber + operator;
    DISPLAY.value = '';
});

// Операция ДЕЛЕНИЯ
DIVIDE.addEventListener('click', () => {
    if (DISPLAY.value == '') {
        operator = '&divide;';
    } else {
        firstNumber = Number(DISPLAY.value);   
        operator = '&divide;';
    };
    calk.innerHTML = firstNumber + operator;
    DISPLAY.value = '';
});

// Равно
EQUALS.addEventListener('click', () => {
    secondNumber = Number(DISPLAY.value);
    if (operator == '+') {
        result = firstNumber + secondNumber
        calk.innerHTML = result;
    } else if (operator == '&ndash;') {
        result = firstNumber - secondNumber
        calk.innerHTML = result; 
    } else if (operator == '×') {
        result = firstNumber * secondNumber
        calk.innerHTML = result;
    }else if (operator == '&divide;') {
        if (secondNumber == 0) {
            calk.innerHTML = 'Я тебя на 0 поделю!';
            result = '';
        } else {
        result = firstNumber / secondNumber
        calk.innerHTML = result;
        };
    };
    operator = '';
    DISPLAY.value = result;
});

// +/-
NEGATIVE.addEventListener('click', () => {
    if (DISPLAY.value.startsWith('+')) {
        DISPLAY.value = DISPLAY.value.slice(1);
    } else if (DISPLAY.value === '') {
        return;
    } else if (DISPLAY.value.startsWith('-')) {
        DISPLAY.value = DISPLAY.value.slice(1);
    } else {
        DISPLAY.value = '-' + DISPLAY.value;
    }
});

// Фон из https://codepen.io/tmrDevelops/pen/vOPZBv
var c = document.getElementById('canv');
var $ = c.getContext('2d');

var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;
var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.120;
  window.requestAnimationFrame(run);
}

run();