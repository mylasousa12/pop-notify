import Notification from "./src/js/Notification.js";
// import './src/css/style.css'

window.onload = () => {
    document.getElementById('alert_button').addEventListener('click', function () {
        Notification.success('dfbdfberfhbrehgybrehbfjiruehguirehgrehurhgurheguhrguhreguhreughrueghruhgu', 700000).fire();
    });
}
