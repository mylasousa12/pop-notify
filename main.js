import Notification from "./src/js/Notification.js";
// import './src/css/style.css'

window.onload = () => {
    document.getElementById('alert_button').addEventListener('click', function () {
        Notification.info('Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'aaaaaaaaaaaaaaaaaa',700000).fire()});
}
