/**
 * 1°) A notificação(li) deve ter um id único.
 * 2º) O botão de fechar deve sumir apenas com a sua notificação de acordo com esse id único.
 * 3º) Programar as posições, quando criar uma notificação deve ser possível escolher a posição.
 * 4º) Implementar a barra de progresso. A barra de progresso deve ser sincronizada com o momento que a notificação será removida. Tentar usar o efeito "fade".
 * 5º) Possibilitar ter notificações em lista ou não.
 */
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

    constructor(message, type, duration) {
         if (!window.hasOwnProperty('notification_id')) {
             window.notification_id = 0;
         } else {
             window.notification_id++;
         }

        this.notificationList = document.getElementById('notification_list');

        if (this.notificationList === null) {
            this.notificationList = document.createElement('ul');
            this.notificationList.id = 'notification_list';

            document.body.appendChild(this.notificationList);
        }

        this.notification = document.createElement('li');
        this.notification.classList.add('notification', type, duration.toString());

        // Create notification type icon
        this.notification.appendChild(this.mountNotificationTypeIcon(type));

        // Create notification text element
        const textBox = document.createElement('span');
        textBox.classList.add('msg');
        textBox.innerText = message;
        this.notification.appendChild(textBox);
        this.notification.id = window.notification_id;

        // Create notification close button
        const closeButton = document.createElement('i');
        closeButton.classList.add('close-btn', 'bx', 'bx-x');
        closeButton.dataset.notification_id = window.notification_id;

        closeButton.addEventListener('click', function (event) {
            console.log(event.target)
            document.getElementById(event.target.dataset.notification_id).remove();
        });

        this.notification.appendChild(closeButton);
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
                 typeIcon.classList.add('bxs-error-circle');
                 break;
             }
             case 'info': {
                 typeIcon.classList.add('bxs-info-circle');
                 break;
             }
             default: {
                 typeIcon.classList.add('bx-x-circle');
                 break;
             }
         }

         return typeIcon;
    }

    rightTopPosition() {

    }

    rightBottomPosition() {

    }

    leftTopPosition() {

    }

    leftBottomPosition() {

    }

    fire() {
        this.notificationList.appendChild(this.notification);
    }
}