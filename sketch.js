var game, player, form;
var database;

var playerCount,gameState;

function setup(){
  database = firebase.database();
//  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
   
  
}
