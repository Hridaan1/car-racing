class Form {
    constructor(){

    }
    display(){
       var title =createElement('h2');
       title.html('Car Racing Game') ;
       title.position(140,30);

       var input = createInput('name');
       var button = createButton('PlAy');
       input.position(140,100);
       button.position(140,250);

       var greeting = createElement('h1');
       button.mousePressed(function(){
          input.hide();
          button.hide(); 
          var name = input.value();
          playerCount++;
          player.update(name);
          player.updateCount(playerCount);

          greeting.html("Hello "+name);
          greeting.position(140,200);
       })
    
    
    }   
}
    
