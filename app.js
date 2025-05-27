import {Cursors} from "./js/composant/cursors.js";
import {chargerBackground} from "./js/composant/decorts.js";
 

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");


ctx.clearRect( 0, 0, c.width, c.height);
ctx.beginPath();









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

