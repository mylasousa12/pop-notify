import Notification from "./Notification.js";

window.onload = () => {
    document.getElementById('alert_button').addEventListener('click', function () {
       Notification.success('sadasdasd').fire();
    });
}
