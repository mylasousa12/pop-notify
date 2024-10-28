import Notification from "./src/js/Notification.js";
// import './src/css/style.css'

window.onload = () => {
    document.getElementById('alert_button').addEventListener('click', function () {
        Notification.info('Notification', 700000).fire();
    });
}