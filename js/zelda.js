// La variable "game" nos sirve para almacenar una instancia del juego 

var game = new Phaser.Game(976, 1000, Phaser.AUTO, '', {preload: preload, create: create, update})

var player;

// El juego se divide en tres fases: precarga(preload), crear (create), y actualizar (update). 
// Con el preload cargamos memoria de la computadora con los elementos que vamos a usar

function preload(){
    game.load.spritesheet('heroe', 'sprites/link.png', 103, 111);
    game.load.image("bosque", "fondos/fondozelda1.png",); 
};

// la función de crear nos permirmite colocar los objetos en el escenario 

function create(){
    // agregar color de fondo
    // game.stage.backgroundColor = '#4488AA';
    fondo = game.add.tileSprite(0,0, 8000, 1000, 'bosque');
    
    //Colocar herore en el escenario
    player = game.add.sprite(game.width / 2, game.height / 2, 'heroe');
    
    //Las animaciones
    player.animations.add('der', [63, 64, 65, 66, 67, 68, 69, 70, 71, 72], 10, true);
    player.animations.add('izq', [46,47, 48, 49, 50,51, 52, 53], 10, true);
    player.animations.add('arr', [54, 55, 56, 57, 58, 59, 60, 61, 62], 10, true);
    player.animations.add('aba', [36,37,38,39,40,41,42,43,44], 10, true);

    //asignar las animaciones a teclas 
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    arriba = game.input.keyboard.addKey(Phaser.Keyboard.W);
    abajo = game.input.keyboard.addKey(Phaser.Keyboard.S);
    
};

// La funcion de update permite actualizar las animaciones con velocidad que elijamos 

function update(){
    if (derecha.isDown){
        player.x += 1;
        player.animations.play('der')
    }
    else if (izquierda.isDown){
        player.x -=1;
        player.animations.play('izq')
    }
    else if (arriba.isDown){
        player.y -=1;
        player.animations.play('arr')
    }
    else if (abajo.isDown){
        player.y +=1;
        player.animations.play('aba')
    }
    else {
        player.animations.stop();
        player.frame = 0;
    }

};