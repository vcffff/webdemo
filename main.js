const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        let expression = display.value.replace(/√(\d+|\(.+?\))/g, (match, number) => {
            return `Math.sqrt(${number})`;
        });
        
        let result=eval(expression);
        display.value=parseFloat(result.toFixed(2))
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

function appendToDisplay(input) {
    if (display.value === "ERROR"|| display.value==='Infinity' )  {
        return; 
    }
    display.value += input;
}
