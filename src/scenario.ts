import { Question } from "./question";

export class Scenario {
  evo_environnement: number;
  evo_argent: number;
  evo_ressources: number;
  evo_sante: number;
  evo_frustration: number;
  evo_habitants: number;

  etat_environnement: number;
  etat_argent: number;
  etat_ressources: number;
  etat_sante: number;
  etat_bonheur: number;
  etat_habitants: number;

  constructor() {
    this.evo_environnement = 2;
    this.evo_argent = 4;
    this.evo_ressources = -13;
    this.evo_sante = -1;
    this.evo_frustration = -1;
    this.evo_habitants = 2;

    this.etat_environnement = 0.5;
    this.etat_argent = 50;
    this.etat_ressources = 100;
    this.etat_sante = 80;
    this.etat_bonheur = 50;
    this.etat_habitants = 100000;
  }

  updateScenario(question: Question, reponse: boolean) {
    if (reponse) {
      this.evo_environnement += question.oui.environnement;
      this.evo_argent += question.oui.argent;
      this.evo_ressources += question.oui.ressources;
      this.evo_sante += question.oui.sante;
      this.evo_frustration += question.oui.frustration;
      this.evo_habitants += question.oui.habitants;
    } else {
      this.evo_environnement += question.non.environnement;
      this.evo_argent += question.non.argent;
      this.evo_ressources += question.non.ressources;
      this.evo_sante += question.non.sante;
      this.evo_frustration += question.non.frustration;
      this.evo_habitants += question.non.habitants;
    }
    console.log(reponse ? question.oui : question.non);

    let nbhabbeg = this.etat_habitants;
    let a = 200;

    this.etat_habitants =
      this.etat_habitants *
      ((a + this.evo_habitants) / a) *
      ((50 + this.etat_argent/100) / 50);
    
    this.etat_argent =
      this.etat_argent * (this.etat_habitants / nbhabbeg) * ((a + this.evo_argent) / a);
    
    this.etat_environnement =
      this.etat_environnement *
      ((320 - this.evo_environnement) / 300) * (this.etat_habitants / nbhabbeg);
    this.etat_bonheur =
      this.etat_bonheur * ((100 - this.evo_frustration) / 100) * ((500 + this.etat_sante/100) / 500);
    this.etat_ressources =
      this.etat_ressources - ((this.etat_habitants / nbhabbeg) * (50-this.evo_ressources)/50);
    this.etat_sante =
      this.etat_sante * ((10 + this.evo_sante) / 10) * ((6 + this.etat_environnement/100) / 6);
    
    console.log(this);
  }
}
