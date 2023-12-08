import { getQuestionnaireJSON, getQuestionByIndex, getQuestionRandom, getReponseByIndex } from "./Questionnaire.js";
export class PeaseantMessage {
    message: string;
    messages: string[];
    id: number;

    constructor() {
        this.id=0;
        getQuestionnaireJSON().then((jsonData) => {
            this.message = getQuestionRandom(jsonData) + this.id.toString() + ".";
        });
        console.log(this.messages);
    }

    changeMessage(newMessage: string) {
        this.message = newMessage;
    }

    loadMessages() {}
    selectNewMessage() {
        this.id++;
        getQuestionnaireJSON().then((jsonData) => {
            //this.message = getQuestionByIndex(jsonData, this.id) + this.id.toString() + ".";
            this.message = getQuestionRandom(jsonData) + this.id.toString() + ".";
        });
    }
}