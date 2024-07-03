class EmailNotification { 
    constructor(notificationId,createdTime,content,receiver){
        this.notificationId=notificationId;
        this.createdTime=createdTime;
        this.content=content;
        this.receiver=receiver;
    }
    send(){
        return console.log("Notification has been sent to "+this.receiver);

    }
}

class SMSNotification extends EmailNotification {
    constructor(notificationId,createdTime,content,phoneNumber){
        super(notificationId,createdTime,content);
        this.phoneNumber=phoneNumber;
    }
    send() {
        return console.log("Notification has been sent to "+this.phoneNumber);
 }
}

const email = new EmailNotification("email",10.00,"Hello world","wasin@gmail.com");
const phoneNumber = new EmailNotification("email",10.00,"Hello world","0880768323");
email.send();
phoneNumber.send();
