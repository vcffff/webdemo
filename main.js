const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        let expression = display.value.replace(/√(\d+|\(.+?\))/g, (match, number) => {
            return `Math.sqrt(${number})`;
        });
        display.value = eval(expression);
    } catch (error) {
        display.value = "ERROR";
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
function append() {
    display.value += "√";
}
