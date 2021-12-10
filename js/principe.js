// La variable "game" nos sirve para almacenar una instancia del juego 

var game = new Phaser.Game(1300, 298, Phaser.AUTO, '', {preload: preload, create: create, update})

var player;

// El juego se divide en tres fases: precarga(preload), crear (create), y actualizar (update). 
// Con el preload cargamos memoria de la computadora con los elementos que vamos a usar

function preload(){
    game.load.spritesheet('heroe', 'sprites/principe2.png', 45, 43);
    game.load.image('bosque', 'fondos/fondopersia.png');
};

// la función de crear nos permirmite colocar los objetos en el escenario 

function create(){
    // agregar imagen de fondo que se desplaza
    fondo = game.add.tileSprite(0,0, 7335, 298, 'bosque');
    
    //Colocar herore en el escenario
    player = game.add.sprite(game.width / 120, 119, 'heroe');
    
    //Las animaciones
    player.animations.add('der', [4, 5, 6, 7], 10, true);
    player.animations.add('izq', [4, 5, 6, 7], 10, true);

    player.animations.add('corder', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    player.animations.add('corizq', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);

    //asignar las animaciones a teclas 
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.L);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.j);

    correrderecha = game.input.keyboard.addKey(Phaser.Keyboard.L)
    correrizquierda = game.input.keyboard.addKey(Phaser.Keyboard.J)
    
};

// La funcion de update permite actualizar las animaciones con velocidad que elijamos 

function update(){
    if (derecha.isDown){
        fondo.tilePosition.x -= 1;
        player.animations.play('der')
    }
    else if (izquierda.isDown){
        fondo.tilePosition.x +=1;
        player.animations.play('izq')
    }
    else {
        player.animations.stop();
        player.frame = 128;
    }

    // if (correrderecha.isDown){
    //     player.x += 1;
    //     player.animations.play('corder')
    // }
    // else if (correrizquierda.isDown){
    //     player.x -=1;
    //     player.animations.play('corizq')
    // }
    // else {
    //     player.animations.stop();
    //     player.frame = 128;
    // }

};