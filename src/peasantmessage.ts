import {  getQuestionByIndex, getQuestionRandom, getReponseByIndex,fetchdata } from "./Questionnaire.js";
export class PeaseantMessage {
    message: string;
    messages: string[];
    id: number;

    constructor() {
        this.id=0;
        this.messages = [];
        this.initialize();
    }

    private async initialize() {
        try {
          var elements : any = await fetchdata();
          //console.log(elements);
          this.messages = elements.map((element: { question: any; }) => element.question);
          this.message = this.removeRandomElement(this.messages) || "";
          //console.log(this.messages);
        } catch (error) {
          console.error('An error occurred during initialization:', error);
        }
      }

    changeMessage(newMessage: string) {
        this.message = newMessage;
    }

    loadMessages() {}
    selectNewMessage() {
        this.message = this.removeRandomElement(this.messages) || "";
    }
    
    removeRandomElement(arr: string[]): string | undefined {
        if (arr.length === 0) {
            return undefined; // Return undefined if the array is empty
        }
    
        const randomIndex = Math.floor(Math.random() * arr.length);
        const removedElement = arr.splice(randomIndex, 1)[0];
        //console.log(arr);
        return removedElement;
    }

}