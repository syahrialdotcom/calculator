let operation = "";
let firstValue = 0;
let secondValue = 0;

const input = document.getElementById("input-value");
const action = document.getElementsByClassName("action");
const reset = document.getElementById("reset");

for (let i = 0; i < action.length; i++) {
    action[i].addEventListener("click", function () {
        if (
            action[i].innerText === "+" ||
            action[i].innerText === "-" ||
            action[i].innerText === "x" ||
            action[i].innerText === "/"
        ) {
            operation = action[i].innerText;
            firstValue = input.value;
            input.value = 0;
        } else if (action[i].innerText === "=") {
            secondValue = input.value;
            if (operation === "+")
                input.value = parseInt(firstValue) + parseInt(secondValue);
            if (operation === "-")
                input.value = parseInt(firstValue) - parseInt(secondValue);
            if (operation === "x")
                input.value = parseInt(firstValue) * parseInt(secondValue);
            if (operation === "/")
                input.value = parseInt(firstValue) / parseInt(secondValue);
        } else {
            const currentValue = parseInt(input.value);
            if (currentValue === 0) {
                input.value = action[i].innerText;
            } else {
                input.value = currentValue + action[i].innerText;
            }
        }
    });
}

reset.addEventListener("click", function () {
    operation = "";
    firstValue = 0;
    secondValue = 0;
    input.value = 0;
});