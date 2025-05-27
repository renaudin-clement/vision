


export function chargerimage(chemin,tailles =1,positionImage){
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