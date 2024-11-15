export default class Notification {
    static success(title, body = null, duration = 9000) {
        return new Notification(title, body, 'success', duration);
    }

    static fail(title, body = null, duration = 9000) {
        return new Notification(title, body, 'fail', duration);
    }

    static warning(title, body = null, duration = 9000) {
        return new Notification(title, body, 'warning', duration);
    }

    static info(title, body = null, duration = 9000) {
        return new Notification(title, body, 'info', duration);
    }

    constructor(title, body, type, duration) {
        this.notificationList = document.getElementById('notification_list');

        if (this.notificationList === null) {
            this.notificationList = document.createElement('ul');
            this.notificationList.id = 'notification_list';

            document.body.appendChild(this.notificationList);
        }

        this.notification = document.createElement('li');
        this.notification.classList.add('notification', type);

        const div = document.createElement('div');

        // Create notification type icon
        div.appendChild(this.mountNotificationTypeIcon(type));

        // Create notification text element
        const titleElement = document.createElement('h2');
        titleElement.innerText = title;
        div.appendChild(titleElement);

        const dropButton = document.createElement('i');
        dropButton.classList.add('drop-btn', 'bx', 'bx-chevron-down');

        // Create notification close button
        const closeButton = document.createElement('i');
        closeButton.classList.add('close-btn', 'bx', 'bx-x');

        closeButton.addEventListener('click', () => {
            this.notification.remove()
        });

        div.appendChild(dropButton);
        div.appendChild(closeButton);
        this.notification.appendChild(div);

        const bodyElement = document.createElement('p');
        bodyElement.innerText = body;
        this.notification.appendChild(bodyElement);

        dropButton.addEventListener('click', () => {
            bodyElement.classList.toggle('show');
        });

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
