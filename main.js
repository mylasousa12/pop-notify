import Notification from "./src/js/Notification.js";
// import './src/css/style.css'

window.onload = () => {
    document.getElementById('alert_button').addEventListener('click', function () {
        Notification.success('Lorem Ipsu', 'aaaaaaaaaaaaaaaaaa',700000, false).fire();
        Notification.fail('Lorem Ipsu', 'aaaaaaaaaaaaaaaaaa',700000, false).fire();
        Notification.info('Lorem Ipsu', 'aaaaaaaaaaaaaaaaaa',700000, false).fire();
        Notification.warning('Lorem Ipsu', 'aaaaaaaaaaaaaaaaaa',700000, false).fire();
    });
}
