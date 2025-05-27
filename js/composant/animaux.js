class Animaux{
    constructor(position,tailles) {
      this.position = position;
      this.tailles = tailles;
  
    }

    voix() {
       console.log("crie");
    }

}

class Tigre extends Animaux{
    constructor(position,tailles) {
      super(position,tailles);
      this.images = "images/animaux/1.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Tigre";
    }
    voix() {
       console.log("Rrrrrrr");
    }
}

class Pandas extends Animaux{
    constructor(position,tailles) {
      super(position,tailles);
      this.images = "images/animaux/2.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Pandas";
    }
    voix() {
       console.log("crie");
    }
}

class Singe extends Animaux{
    constructor(position,tailles) {
      super(position,tailles);
      this.images = "images/animaux/3.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Singe";
    }

    voix() {
       console.log("crie");
    }
}

class Zebre extends Animaux{
    constructor(position,tailles) {
      super(position,tailles);
      this.images = "images/animaux/4.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Zebre";
    }

    voix() {
       console.log("crie");
    }
}

class Poule extends Animaux{
    constructor(position,tailles) {
      super(position,tailles);
      this.images = "images/animaux/6.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Poule";
    }

    voix() {
       console.log("piupiu");
    }
}

class Hiboux extends Animaux{
    constructor(position,tailles) {
      super(position,tailles);
      this.images =  "images/animaux/7.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Hiboux";
    }

    voix() {
       console.log("houhou");
    }
}

class Chevre extends Animaux{
    constructor(position,tailles) {
      super(position,tailles);
      this.images = "images/animaux/8.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Chevre";
    }

    voix() {
       console.log("bee");
    }
}



class Cerf extends Animaux{
    constructor(position,tailles) {
      super(position,tailles);
      this.images = "images/animaux/9.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Cerf";
    }

    voix() {
       console.log("crie");
    }
}

class Vache extends Animaux{
    constructor(position,tailles) {
      super(position,tailles);
      this.images = "images/animaux/10.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Vache";
    }

    voix() {
       console.log("meu");
    }
}

class Ane extends Animaux{
    constructor(position,tailles) {
      super(position,tailles);
      this.images = "images/animaux/11.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Ane";
    }
    voix() {
       console.log("i en i en");
    }
}

class Chien extends Animaux{
     constructor(position,tailles) {
      super(position,tailles);
      this.images = "images/animaux/12.png";
      this.position = position;
      this.tailles = tailles;
      this.name ="Chien";
    }
    voix() {
       console.log("waf");
    }
}