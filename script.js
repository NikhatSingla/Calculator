const textBox = document.querySelector(".inner-textbox");
const buttons = document.querySelectorAll("button:not(.equal-to, .clear)");

function calculate() {
    try {
        textBox.value = eval(textBox.value)
    } catch (error) {
        alert("Non-evaluable expression.");
    }
}

function addToTextBox(value) {
    textBox.value += value;
}

buttons.forEach(button => button.setAttribute("onclick", "addToTextBox(this.innerText)"));