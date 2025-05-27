
import {chargerimage} from "../utils/utils.js";

let positionImage = {x:0, y:0};

function chargersol(){
  chargerimage("images/decort/herbe.png",5,positionImage = {x:238, y:303});
  chargerimage("images/decort/herbe.png",5,positionImage = {x:783, y:776});
  chargerimage("images/decort/herbe.png",5,positionImage = {x:1089, y:483});
  chargerimage("images/decort/herbe.png",5,positionImage = {x:645, y:55});
}


function chargerPremierPlan() {
  chargerimage("assetsimages/decort/buisson2.png",5,positionImage = {x:22, y:22});
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:999, y:202});
 
  chargerimage("images/decort/buisson3.png",8,positionImage = {x:83, y:235});

  chargerimage("images/decort/buisson3.png",8,positionImage = {x:922, y:24});
}

function chargerDeuxiemePlan() {
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:223, y:400});
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:715, y:538});
  chargerimage("images/decort/buisson3.png",8,positionImage = {x:1049, y:404});
  chargerimage("images/decort/buisson3.png",8,positionImage = {x:1170, y:689});

}

function chargerTroisiemePlan() {
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:1100, y:778});
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:159, y:664});
}


export function chargerBackground() {
  chargersol();
  chargerPremierPlan();
  chargerDeuxiemePlan();
  chargerTroisiemePlan();
}