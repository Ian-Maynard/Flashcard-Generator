// Basic Card - Front and Back info only
var cardfile = require("fs");   // Error Log file 
var bCardPrompt = require("inquirer");


var basicCard = function(front, back) {
	this.front = front;
	this.back = back;

	this.dispBasicCard = function (){
	console.log("Front "+this.front+" "+this.back);
	} //display card

	this writeBasicCard = function() {
	var record = "Front : "+this.front+" - "+"Back : "+this.back;
	cardfile.addendFile("cardfile.txt",record);	
	} // Write the Card

} // Basic Card


inquirer.bCardPrompt([ 
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
	]) then(function(inputs)
	 		{
        var card = new basicCard(inmputs.front, inputs.back);
       	writeBasicCard();

        if(answers.another === true)
            createCard();
        else
            console.log("Exitting add....")
    });


 Module.exports 	