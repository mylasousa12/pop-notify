import Notification from "./Notification.js";

window.onload = () => {
    document.getElementById('alert_button').addEventListener('click', function () {
       Notification.fail('Notification', 700000).fire();
    });
}

// Não acessa o "this" dentro da classe, ano
const xasasa = function (number1, number2) {
    return number1 + number2;
}

// Esses dois acessam (arrow function)
const qxswad = (number1, number2) => {
    return number1 + number2;
}

const dewkhu = (number1, number2) => number1 + number2;
