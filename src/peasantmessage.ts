import { fetchdata } from "./Questionnaire.js";
import { Question } from "./question.js"; // Import the Question class

export class PeasantMessage {
  message: Question | null; // Change to Question type or null
  messages: Question[];
  id: number;

  constructor() {
    this.id = 0;
    this.messages = [];
    this.message = null;
    this.initialize();
  }

  // Initialize the PeasantMessage with data
  private async initialize() {
    try {
      const elements: any[] = await fetchdata();
      console.log("FETCHED DATA");
      console.log(elements);
      this.messages = elements.map((element) => new Question(element)); // Create Question objects
      console.log(this.messages);
      this.selectNewMessage();
    } catch (error) {
      console.error("An error occurred during initialization:", error);
    }
    
  }

  // Select a new random message
  selectNewMessage(): void {
    const randomQuestion = this.removeRandomElement(this.messages);
    //console.log(randomQuestion);
    this.message = randomQuestion || null;
    //console.log("IMPORTANT" + this.message);
  }

  // Remove a random element from the array and return it
  private removeRandomElement(arr: Question[]): Question | undefined {
    if (arr.length === 0) {
      console.log("-------------");
      return undefined; // Return undefined if the array is empty
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr.splice(randomIndex, 1)[0];
  }
}
