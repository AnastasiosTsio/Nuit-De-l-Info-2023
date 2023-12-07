// Importer le module fs pour la gestion des fichiers
const fs = require('fs');

// Charger le contenu du fichier JSON externe
const questionnaireJSON = JSON.parse(fs.readFileSync('../Questionnaire.json', 'utf8'));

// Définir une fonction pour récupérer la première question
function getQuestionByIndex(jsonData: any, index: number): string | undefined {
  if (jsonData && jsonData.Questionnaire && jsonData.Questionnaire.length > 0) {
    return jsonData.Questionnaire[index].question;
  } else {
    return undefined;
  }
}

function getEffectByIndexOui(jsonData: any, index: number): string | undefined {
  if (jsonData && jsonData.Questionnaire && jsonData.Questionnaire.length > 0) {
    return jsonData.Questionnaire[index].effects.oui;
  } else {
    return undefined;
  }
}

function getEffectByIndexNon(jsonData: any, index: number): string | undefined {
  if (jsonData && jsonData.Questionnaire && jsonData.Questionnaire.length > 0) {
    return jsonData.Questionnaire[index].effects.non;
  } else {
    return undefined;
  }
}

function getEffectByIndexJsp(jsonData: any, index: number): string | undefined {
  if (jsonData && jsonData.Questionnaire && jsonData.Questionnaire.length > 0) {
    return jsonData.Questionnaire[index].effects.jsp;
  } else {
    return undefined;
  }
}

// Utiliser la fonction pour obtenir la première question
const firstQuestion = getQuestionByIndex(questionnaireJSON, 1) ;
const firstEffectOui = getEffectByIndexOui(questionnaireJSON, 0) ;
const firstEffectNon = getEffectByIndexNon(questionnaireJSON, 1) ;
const firstEffectJsp = getEffectByIndexJsp(questionnaireJSON, 1) ;


// document.getElementById("counter").innerText = firstQuestion;
// Afficher la première question
if (firstQuestion !== undefined) {
  console.log("Première question :", firstQuestion);
  console.log("Première effet oui:", firstEffectOui);
  console.log("Première effet non:", firstEffectNon);
  console.log("Première effet jsp:", firstEffectJsp);


} else {
  console.log("Aucune question trouvée.");
}
