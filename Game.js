class Game {
    constructor(){

    }
    //reading from the database
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    //writing in the database
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }

    // gameState is 0 as long as four players have not registered.
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    
    }

}