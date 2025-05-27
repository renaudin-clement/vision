
import {chargerimage} from "../utils/utils.js";

let positionImage = {x:0, y:0};


let sol =[];
let premierPlan   = [];
let deuxiemePlan  = [];
let troisiemePlan = [];
let listeChargement =[[],[],[],[]];
 
function chargersol(){
  let herbe1 = new Herbe("herbe.png",{x:238, y:303},5);
  let herbe2 = new Herbe("herbe.png",{x:783, y:776},5);
  let herbe3 = new Herbe("herbe.png",{x:1089, y:483},5);
  let herbe4 = new Herbe("herbe.png",{x:645, y:55},5);

}


function chargerPremierPlan() {
  let buisson = new Buissons("buisson2.png", {x:22, y:22},5);
  let buisson2 = new Buissons("buisson2.png", {x:999, y:202},5);
  let buisson3 = new Buissons("buisson3.png", {x:83, y:402354},8);
  let buisson4 = new Buissons("buisson3.png", {x:922, y:24},8);

}

function chargerDeuxiemePlan() {
  let buisson = new Buissons("buisson2.png", {x:223, y:400},5);
  let buisson2 = new Buissons("buisson2.png", {x:715, y:538},5);
  let buisson3 = new Buissons("buisson3.png", {x:1049, y:404},8);
  let buisson4 = new Buissons("buisson3.png", {x:1170, y:689},8);


}

function chargerTroisiemePlan() {
  let buisson = new Buissons("buisson2.png", {x:1100, y:778},5);
  let buisson2 = new Buissons("buisson2.png", {x:159, y:664},5);
}


export function chargerBackground() {
  chargersol();
  chargerPremierPlan();
  chargerDeuxiemePlan();
  chargerTroisiemePlan();
}



class Buissons{
  constructor(images, position,tailles) {
      this.images = images;
      this.position = position;
      this.tailles =tailles;
  }
  init(){
    chargerimage("/assets/images/vision/ouisti/decort/"+images,tailles,positionImage = position);
  }
}

class Herbe{
  constructor(images, position,tailles) {
      this.images = images;
      this.position = position;
      this.tailles =tailles;
  }
    init(){
    chargerimage("/assets/images/vision/ouisti/decort/"+images,tailles,positionImage = position);
  }
}