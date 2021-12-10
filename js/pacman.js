//la variable de "game" nos sirve para una instancia de la copia del juego o JS

var game = new Phaser.Game(567, 600, Phaser.AUTO,'',{preload:preload, create, update:update});

var player;

// El juego se divide en 3 fases, :precarga(preload), crear(create) y actualizar (update)
// Con preload cargamos en la meoria de la compu. los elemenos que vamos a usar

function preload(){
    game.load.spritesheet("heroe", "sprites/pacman1.png", 244,240);
    game.load.image("bosque", "imagen/fondopac.jpeg",); 
};

// La funcion crear create, nos permite colocar los objetos en el escenario
function create(){
    //agregar color/ imagen de fondo
    fondo = game.add.tileSprite(0,0, 7335, 800, 'bosque');

    // Colocar el heroe en el escenario
    player = game.add.sprite(game.width/800,game.height/2,'heroe');

    // Las animaciónes           el nomero de pose    10=frames(velocidad) por segunda True es que es en loop
    player.animations.add('der',[0, 1], 10,true);
    player.animations.add('izq',[2,3], 10,true);
    player.animations.add('arr',[4, 5],10, true);
    player.animations.add('aba',[6, 7],10, true);

    //Asignar las animaciones a teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    arriba = game.input.keyboard.addKey(Phaser.Keyboard.W);
    abajo = game.input.keyboard.addKey(Phaser.Keyboard.S);
    
};

// La funcion update  permite actualizar las animaciónes con velicidad que elijamos 

function update(){
    if (derecha.isDown){
        player.x +=1;
        player.animations.play('der');
    }

    else if(izquierda.isDown){
        player.x -=1;
        player.animations.play('izq');
    }

    else if(arriba.isDown){
        player.y -=1;
        player.animations.play('arr');
    }

    else if(abajo.isDown){
        player.y +=1;
        player.animations.play('aba');
    }

    else{
        player.animations.stop();
        player.frame =1;
    
    }
};