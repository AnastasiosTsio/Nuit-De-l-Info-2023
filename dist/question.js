var Question = /** @class */ (function () {
    function Question(JSONData) {
        var _this = this;
        var _a, _b, _c;
        this.oui = {
            environnement: 0,
            argent: 0,
            ressources: 0,
            sante: 0,
            frustration: 0,
            developpement: 0,
        };
        this.non = {
            environnement: 0,
            argent: 0,
            ressources: 0,
            sante: 0,
            frustration: 0,
            developpement: 0,
        };
        // Check if JSONData is null or undefined
        if (!JSONData) {
            this.question = "";
            this.reponse = null;
            this.explication = "";
            return;
        }
        // Assign properties from JSONData
        this.question = (_a = JSONData.question) !== null && _a !== void 0 ? _a : "";
        this.reponse = (_b = JSONData.reponse) !== null && _b !== void 0 ? _b : null;
        this.explication = (_c = JSONData.explication) !== null && _c !== void 0 ? _c : "";
        // Assign values to oui and non from JSONData if available
        if (JSONData.oui) {
            Object.keys(this.oui).forEach(function (key) {
                if (JSONData.oui.hasOwnProperty(key)) {
                    _this.oui[key] = JSONData.oui[key];
                }
            });
        }
        if (JSONData.non) {
            Object.keys(this.non).forEach(function (key) {
                if (JSONData.non.hasOwnProperty(key)) {
                    _this.non[key] = JSONData.non[key];
                }
            });
        }
        console.log(this);
    }
    return Question;
}());
export { Question };
// Example usage
//new Question(null);
// Function to create a new Question from JSON
export function createQuestionFromJSON(jsonData) {
    return new Question(jsonData);
}
// Function to update an existing Question
// function updateQuestion(question :any , newData:any) {
//   if (newData.question) question.question = newData.question;
//   if (newData.oui) {
//     Object.keys(question.oui).forEach((key) => {
//       if (newData.oui.hasOwnProperty(key)) {
//         question.oui[key] = newData.oui[key];
//       }
//     });
//   }
//   if (newData.non) {
//     Object.keys(question.non).forEach((key) => {
//       if (newData.non.hasOwnProperty(key)) {
//         question.non[key] = newData.non[key];
//       }
//     });
//   }
//   if (newData.reponse !== undefined) question.reponse = newData.reponse;
//   if (newData.explication) question.explication = newData.explication;
// }
// Function to display a Question
export function displayQuestion(question) {
    console.log("Question: " + question.question);
    console.log("Oui: ", question.oui);
    console.log("Non: ", question.non);
    console.log("Réponse: " + (question.reponse ? "Oui" : "Non"));
    console.log("Explication: " + question.explication);
}
// Function to evaluate a response
export function evaluateResponse(question, userResponse) {
    return question.reponse === userResponse;
}
// // Example usage
// let sampleJSON = {
//   question: "Should we plant more trees to reduce CO2?",
//   oui: { environnement: 1, argent: -1, ressources: 1 },
//   reponse: true,
//   explication:
//     "Trees absorb CO2 but cannot capture all atmospheric CO2 by themselves.",
// };
// let newQuestion = createQuestionFromJSON(sampleJSON);
// displayQuestion(newQuestion);
// displayQuestion(newQuestion);
// // Example of evaluating a response
// console.log("Is the response correct?", evaluateResponse(newQuestion, true));
