let display = document.getElementById('display');


function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}

function calculate() {
    if (display.value = eval(display.value))
    {
        console.log(value);
    } else {
        display.value = ' ';
    }
}



