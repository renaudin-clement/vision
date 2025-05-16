




// probleme de rapiditer
//image non charger avant de lecrire sur le drawImage




var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let positionImage = {x:0, y:0};




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
// On récupère le décalage du canevas en x et y par rapport aux bords de la page
const rect = c.getBoundingClientRect();
console.log(pos);
document.addEventListener('mousemove', setPosition);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', getMousePosition); 
 
//Fonction getPosition

function setPosition(e) {
  pos.x = e.clientX - rect.left; //  clientX = Renvoie la coordonnée horizontale du pointeur de la souris par rapport à la fenêtre courante.
  pos.y = e.clientY - rect.top; //  clientY = Renvoie la coordonnée verticale du pointeur de la souris par rapport à la fenêtre courante.
  
  if( pos.x < 0 || pos.y <0 || pos.x > c.width || pos.y > c.height ){
        console.log("no");
  }else{
        console.log( Math.round(pos.x) +" || "+  Math.round(pos.y));
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


function chargerPremierPlan() {
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:22, y:22});
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:999, y:202});
  chargerimage("images/decort/maison.png",1,positionImage = {x:585, y:93});
  chargerimage("images/decort/maison.png",2,positionImage = {x:1323, y:34});
}

function chargerDeuxiemePlan() {
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:223, y:400});
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:715, y:538});
}

function chargerTroisiemePlan() {
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:1100, y:778});
  chargerimage("images/decort/buisson2.png",5,positionImage = {x:159, y:664});
}


function chargerBackground() {
  chargerPremierPlan();
  chargerDeuxiemePlan();
  chargerTroisiemePlan();
}



chargerBackground();