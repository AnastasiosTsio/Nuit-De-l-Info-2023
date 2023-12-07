// Importer le module fs pour la gestion des fichiers
// const fs = require('fs');
var questionnaireJSON;
var jsonFile = '../Questionnaire.json';
function fetchdata() {
    return fetch(jsonFile)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        // Utilisez les données JSON ici
        questionnaireJSON = data;
    })
        .catch(function (error) {
        console.error('Une erreur s\'est produite lors de la récupération du fichier JSON :', error);
    });
}
export function getQuestionnaireJSON() {
    // Returning a promise to handle asynchronous behavior
    return fetchdata().then(function () {
        // Now you can use questionnaireJSON here or call other functions
        return questionnaireJSON;
    });
}
// Définir une fonction pour récupérer la première question
export function getQuestionByIndex(jsonData, index) {
    if (jsonData && jsonData.Questionnaire && jsonData.Questionnaire.length > 0) {
        return jsonData.Questionnaire[index].question;
    }
    else {
        return undefined;
    }
}
function getEffectByIndexOui(jsonData, index) {
    if (jsonData && jsonData.Questionnaire && jsonData.Questionnaire.length > 0) {
        return jsonData.Questionnaire[index].effects.oui;
    }
    else {
        return undefined;
    }
}
function getEffectByIndexNon(jsonData, index) {
    if (jsonData && jsonData.Questionnaire && jsonData.Questionnaire.length > 0) {
        return jsonData.Questionnaire[index].effects.non;
    }
    else {
        return undefined;
    }
}
function getEffectByIndexJsp(jsonData, index) {
    if (jsonData && jsonData.Questionnaire && jsonData.Questionnaire.length > 0) {
        return jsonData.Questionnaire[index].effects.jsp;
    }
    else {
        return undefined;
    }
}
// Utiliser la fonction pour obtenir la première question
// getQuestionnaireJSON().then((jsonData:any) => {
//   const firstQuestion = getQuestionByIndex(jsonData, 0);
//   const firstEffectOui = getEffectByIndexOui(jsonData, 0);
//   const firstEffectNon = getEffectByIndexNon(jsonData, 0);
//   const firstEffectJsp = getEffectByIndexJsp(jsonData, 0);
//   console.log("First Question:", firstQuestion);
//   console.log("First Effect Oui:", firstEffectOui);
//   console.log("First Effect Non:", firstEffectNon);
//   console.log("First Effect Jsp:", firstEffectJsp);
// });
export function getFirstQuestion(jsonData) {
    return getQuestionByIndex(jsonData, 0);
}
