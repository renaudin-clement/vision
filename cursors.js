


export class Cursors {

    constructor(pos,canvas) {
        this.pos = pos;
        this.pos.x = pos.x ;
        this.pos.y = pos.y;

        this.canvas = canvas;
        this.canvas.x = canvas.x;
        this.canvas.y = canvas.y;

        let link = document.createElement("link");
        link.setAttribute("rel","stylesheet");
        link.setAttribute("type","text/css");
        link.setAttribute("href","css/cursors.css");
        document.head.append(link)
        
        
        let div = document.querySelector('#fonds');
        let cursor = document.createElement("div");
        cursor.classList.add("cursors");
        div.append(cursor);
        this.cursor = document.querySelector('.cursors');




    }
  

    positionnerCursorsAvecCalcule(){
        document.addEventListener('mousemove', e =>{
            this.pos.x = e.clientX - rect.left; //  clientX = Renvoie la coordonnée horizontale du pointeur de la souris par rapport à la fenêtre courante.
            this.pos.y = e.clientY - rect.top;
            if(this.pos.x < 0 || this.pos.y <0 || this.pos.x > this.canvas.width || this.pos.y > this.canvas.height){
                console.log("no");
            }else{
                this.cursor.setAttribute('style','top:'+(e.pageY - 20)+'px; left:'+(e.pageX - 20)+'px')
            }
        });

    }

     positionnerCursorsSansCalcule(e){
            if(this.pos.x < 0 || this.pos.y <0 || this.pos.x > this.canvas.width || this.pos.y > this.canvas.height){
                console.log("no");
            }else{
                this.cursor.setAttribute('style','top:'+(e.pageY - 20)+'px; left:'+(e.pageX - 20)+'px')
            }
        }

    clique(){
            this.cursor.classList.add('expand');
                setTimeout(() => {
                    cursor.classList.remove('expand');
                }, 500);
    }




}


