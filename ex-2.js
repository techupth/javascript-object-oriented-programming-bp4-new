class Notification { 
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

class EmailNotification extends Notification{ 
    constructor(notificationId,createdTime,content,receiver){
        super(notificationId,createdTime,content,receiver);
    }
}

class SMSNotification extends Notification { 
    constructor(notificationId,createdTime,content,receiver){
        super(notificationId,createdTime,content,receiver);
    }
}
const email = new EmailNotification("email",10.00,"Hello world","wasin@gmail.com");
const phoneNumber = new EmailNotification("email",10.00,"Hello world","0880768323");
email.send();
phoneNumber.send();
