// Main Controlling menu file 
// Here we'll accept input between the options
// Will need to add the case structure to this file
// Main menu

var mainMenu = require("inquirer");
require("ClozeCard.js");
require(BasicCard.js)


function mMenu() {
 mainMenu.prompt([ 
{
   type: "list",
    message: "Select B for Basic Cards, C for Cloze cards, or A for Admin mode",
    choices: ["Basic Cards", "Cloze Cards", "Admin"],
    name: "options"
  }
	]).then(function(select)
	 		{
	        var nuClozecard = new clozeCard(inputs.front, inputs.back);
	       	nucard.writeCLozeCard();
	        if(select.options)
	            getClozeCard();
	        else
            console.log("Exitting add....")
    });

} //  One function to rule them all