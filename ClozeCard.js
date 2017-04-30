// Cloze Card.

var clozeCard = function(cloze,text) {
	this.cloze = cloze;
	this.text = text;
	this.fullText=cloze+text;

	this.dispCard = function (){
		console.log("Cloze "+this.cloze+" "+this.text);

		} //display card


}
