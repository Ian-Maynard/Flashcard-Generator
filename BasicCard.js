// Basic Card - Front and Back info only
var bCardfl = require("fs");   // Error Log file 
var bCardPt = require("inquirer");

function basicCard(front, back) {
    
  if (front.indexOf("?")=0) 
    this.front = front+"?";
        else this.front = front;

    if (back.indexOf(".")===0)  this.back= back+".";
        else this.back = back;

    this.dispBasicCard = function (){
    console.log("Front "+this.front+" "+this.back);
    } //display card Method 

    this.writeBasicCard = function() {
    var record = this.front+" - "+this.back+"|";
    bCardfl.appendFile("bcardfl.txt",record);   
    } // Write the Card

} // Basic Card


function getBasicCard(){

    bCardPt.prompt([    
    {
        type: "input",
        name: "front",
        message: "Enter the question "
      }, {
        type: "input",
        name: "back",
        message: "Enter the answer "
      }, {
            type: "confirm",
            message: "Add another?",
            name: "another",
            default: true
            }
    	]).then(function(inputs,err)
    	 		{
            var nucard = new basicCard(inputs.front, inputs.back);
           	nucard.writeBasicCard();
            if(inputs.another)
                getBasicCard();
            else
                console.log("Exitting Basic card add....")
        });


    // bCardfl.readFile("cardfile.txt",'utf8', function(err,record) {
    //     if(err) return console.log(err);
        
    //     output=JSON.stringify(record);
    //     console.log(output);
    //     console.log("\n");
    //     console.log(output.split("."));
    // }); 


} // Get Card


function basicCardRun(){
        bCardfl.readFile("cardfile.txt",'utf8', function(err,record) {
            if(err){
                 console.log(err);
                 return;
            } 
        var breakOut  = false;
        var cardDeck  = record.split("|");
        var cardCount = cardDeck.length;

         while (breakOut=false) {
            var currCardIndex = Math.floor(Math.random() * (cardCount + 1));
            var currCard = cardDeck[currCardIndex];
            console.log(currCard);
            breakOut=true;
        } // While loop 
    });    // Get random index to display q/a pair
}

// Start execution here 

getBasicCard();
