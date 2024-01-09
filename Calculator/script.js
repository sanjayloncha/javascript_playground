let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
 
  const key = event.key;
  
  if (key.match(/[0-9+\-*/.=]|Enter|Backspace|Escape/)) {
      event.preventDefault();

    if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
      clearDisplay();
    } else {
      appendToDisplay(key);
    }
  }
});
