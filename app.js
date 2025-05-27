 import {Cursors} from "./js/composant/cursors.js";
// probleme de rapiditer
//image non charger avant de lecrire sur le drawImage




let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let positionImage = {x:0, y:0};
ctx.clearRect( 0, 0, c.width, c.height);
ctx.beginPath();




function chargerimage(chemin,tailles =1,positionImage){
  let img = new Image();
  img.crossOrigin = "anonymous";
  img.src = chemin;

  img.onload = function() {
      let c = document.getElementById("myCanvas");
      let ctx = c.getContext("2d");

      ctx.moveTo(0, 0);
      ctx.lineTo(c.width,c.height );
      ctx.moveTo(c.width, 0);
      ctx.lineTo(0, c.height);
      ctx.stroke();

      
      //ctx.font = "30px Arial";
      //ctx.fillText("C", 70, 50);

      

      img = diminuer_taille(img,tailles);

      ctx.drawImage(img, positionImage.x, positionImage.y,img.width,img.height);
  };
}

function diminuer_taille(img,diviser){
          img.width = Math.round(img.width/diviser);
          img.height = Math.round(img.height/diviser);
          console.log(img.width);
          console.log(img.height);

          return img;

            
};




//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                 partie positions
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var pos = {x:0, y:0};
let cursor = new Cursors(pos,c);

// On récupère le décalage du canevas en x et y par rapport aux bords de la page
let rect = c.getBoundingClientRect();
console.log(pos);
document.addEventListener('mousemove', setPosition);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', getMousePosition); 
document.addEventListener('click', cursor.clique); 
 
//Fonction getPosition

function setPosition(e) {
  rect = c.getBoundingClientRect();
  pos.x = e.clientX - rect.left; //  clientX = Renvoie la coordonnée horizontale du pointeur de la souris par rapport à la fenêtre courante.
  pos.y = e.clientY - rect.top; //  clientY = Renvoie la coordonnée verticale du pointeur de la souris par rapport à la fenêtre courante.
  
  if( pos.x < 0 || pos.y <0 || pos.x > c.width || pos.y > c.height ){
        console.log("no");
  }else{
        console.log("c.height : " + c.height);
        console.log( Math.round(pos.x) +" || "+  Math.round(pos.y));
        cursor.positionnerCursorsSansCalcule(e);
  }

    
};

function getMousePosition(e) {
  pos.x = e.offsetX;
  pos.y = e.offsetY;
}


/**
   * description.
   * @param  {String} name  description.
   * @param  {String} sep   description.
   * @param  {String} trail description.
   * @param  {String} hyph  description.
   * @return {String}       description.
*/
  


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                 Partie Main
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function chargersol(){
  chargerimage("images/decort/herbe.png",5,positionImage = {x:238, y:303});
  chargerimage("images/decort/herbe.png",5,positionImage = {x:783, y:776});
  chargerimage("images/decort/herbe.png",5,positionImage = {x:1089, y:483});
  chargerimage("images/decort/herbe.png",5,positionImage = {x:645, y:55});
}


function chargerPremierPlan() {
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:22, y:22});
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:999, y:202});
  chargerimage("images/animaux/9.png",5,positionImage = {x:1323, y:34});
  chargerimage("images/animaux/6.png",5,positionImage = {x:585, y:93});
  chargerimage("images/decort/buisson3.png",8,positionImage = {x:83, y:235});

  chargerimage("images/decort/buisson3.png",8,positionImage = {x:922, y:24});
}

function chargerDeuxiemePlan() {
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:223, y:400});
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:715, y:538});
  chargerimage("images/decort/buisson3.png",8,positionImage = {x:1049, y:404});
  chargerimage("images/decort/buisson3.png",8,positionImage = {x:1170, y:689});
  chargerimage("images/animaux/11.png",5,positionImage = {x:223, y:500});
  chargerimage("images/animaux/4.png",5,positionImage = {x:715, y:538});
  chargerimage("images/animaux/1.png",5,positionImage = {x:681, y:335});
}

function chargerTroisiemePlan() {
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:1100, y:778});
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:159, y:664});
}


function chargerBackground() {
  chargersol();
  chargerPremierPlan();
  chargerDeuxiemePlan();
  chargerTroisiemePlan();
}
 
chargerBackground();

console.log("marche");


function clearCanvas() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect( 0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

clearCanvas();

class point_apparition{
  constructor(position) {
      this.position = position;
    }
}















class Cible{
  constructor(hauteur, largeur) {
      this.hauteur = hauteur;
      this.largeur = largeur;
    }
}

class Buissons{
  constructor(images, position) {
      this.images = images;
      this.position = position;
    }
}

class TypeDeVue{
  constructor(hauteur, largeur) {
      this.hauteur = hauteur;
      this.largeur = largeur;
    }
}

