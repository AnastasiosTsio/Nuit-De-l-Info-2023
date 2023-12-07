export class PeaseantMessage {
    message: string;
    messages: string[];
    id: number;

    constructor() {
        this.id=0;
        this.message = "Hello, I am a peasant "+this.id.toString()+".";
    }

    changeMessage(newMessage: string) {
        this.message = newMessage;
    }

    loadMessages() {}
    selectNewMessage() {
        this.id++;
        this.changeMessage("I am a peasant "+this.id.toString()+".");
    }
}