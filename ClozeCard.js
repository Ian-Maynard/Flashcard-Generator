// Cloze Card.
var cCardfl = require("fs");   // Error Log file 
var cCardPt = require("inquirer");

var clozeCard = function(cloze,text) {
    this.cloze = cloze;
	this.text = text;
	this.fullText=cloze+text;


    // Cloze Methods 

	this.dispClozeCard = function (){
		 console.log("Cloze "+this.cloze+" "+this.text);
			} //display card


	this.writeClozeCard = function(){
		var record = this.cloze+"*"+this.text+"|";
		cCardfl.appendFile("cardfile.txt","utf8",record);	
		}
}

function getClozeCard(){
cCardPt.prompt([ 
{
    type: "input",
    name: "cloze",
    message: "Enter the first part (front)-  "
  }, {
    type: "input",
    name: "text",
    message: "Enter the rest(back)-  "
  }, {
        type: "confirm",
        message: "Add another?",
        name: "another",
        default: true
        }
	]).then(function(inputs)
	 		{
        var nucard = new clozeCard(inputs.front, inputs.back);
       	nucard.writeCLozeCard();
        if(inputs.another)
            getClozeCard();
        else
            console.log("Exitting add....")
    });
} // Get Card


function readClozeCards(){

cCardfl.readFile("cardfile.txt",'utf8', function(err,record) {
    if(err) return console.log(err);
    
    output=JSON.stringify(record);
    console.log(output.length);
    boutput = output.split(".");
    console.log("# of Cards - ",boutput.length);

    // console.log("\n");
    // console.log(output.split("."), boutput.length);
}); 

}

readClozeCards();





