export default class Notification {
    static success(message, duration = 9000) {
        return new Notification(message, 'success', duration);
    }

    static fail(message, duration = 9000) {
        return new Notification(message, 'fail', duration);
    }

    static warning(message, duration = 9000) {
        return new Notification(message, 'warning', duration);
    }

    static info(message, duration = 9000) {
        return new Notification(message, 'info', duration);
    }

    // o construtor é chamado quando faz o new
    constructor(message, type, duration) {
        this.notificationList = document.getElementById('notification_list');

        if (this.notificationList === null) {
            this.notificationList = document.createElement('ul');
            this.notificationList.id = 'notification_list';

            document.body.appendChild(this.notificationList);
        }

        //this.notificationList.classList.add('dark-mode');

        this.notification = document.createElement('li');
        this.notification.classList.add('notification', type);

        const div = document.createElement('div');

        // Create notification type icon
        div.appendChild(this.mountNotificationTypeIcon(type));

        // Create notification text element
        const textBox = document.createElement('p');
        textBox.classList.add('msg');
        textBox.innerText = message; // texto dentro da tag
        div.appendChild(textBox);

        // Create notification close button
        const closeButton = document.createElement('i');
        closeButton.classList.add('close-btn', 'bx', 'bx-x');

        closeButton.addEventListener('click', () => {
            this.notification.remove()
        });

        div.appendChild(closeButton);
        this.notification.appendChild(div);

        //Create progress bar
        const progressBar = document.createElement('hr');
        this.notification.appendChild(progressBar);
        progressBar.style.animationDuration = `${parseInt(duration) / 1000}s`;

    }


    mountNotificationTypeIcon(type) {
        const typeIcon = document.createElement('i');
        typeIcon.classList.add('bx');

        switch (type) {
            case 'success': {
                typeIcon.classList.add('bxs-check-circle');
                break;
            }
            case 'warning': {
                typeIcon.classList.add('bxs-error');
                break;
            }
            case 'info': {
                typeIcon.classList.add('bxs-info-circle');
                break;
            }
            default: {
                typeIcon.classList.add('bxs-error-circle');
                break;
            }
        }

        return typeIcon;
    }


    fire() {
        this.notification.addEventListener('animationend', () => {
            this.notification.classList.add('fade-out');
            setTimeout(() => {
                this.notification.remove();
            }, 700);
        })
        this.notificationList.appendChild(this.notification);
    }
}
