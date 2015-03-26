//I am making the variable test a global variable, then when I peg the function to it,  that is loaded within the document becomes accesible outside it.
var test;

$(document).ready(function() {
//actions that happen immediately after document is loaded
	var endPrint=false;
	console.log("ready");
	console.log(endPrint);
	ask();
	test=ask;

	//this is a printing function to append li arguments to a specific UL
	function Printer(divID) {
		  	
		  	var lineCount = 1;

		  	this.printLine = function() {
			    var message = lineCount + ': ';

			        // start the loop
			    for (var i = 0; i < arguments.length; i++) {
			      // for each argument, add it to the variable m plus a space afterwards
			      message += arguments[i] + ' ';
			    }
			    
			    var n = document.createElement("li"),    // create a new 'pre' element
			        t = document.createTextNode(message); // create a text node to hold our message

			    n.appendChild(t); // append your text to the pre element
			    document.getElementById(divID).appendChild(n); // append your element to the #console element

			    lineCount++;
		  	}
		}
	
	//fizzBuzz logic		
	function fizzBuzzRefact(max) {
		console.log("Let the fizBuzz Games begin");
		console.log(endPrint);
		for (contador=1;contador<=max;contador++) 
			{
				if (endPrint)
					{break;}
				else 
					{
					if (contador%3===0 && contador%5===0)
						{
							liPrint.printLine("fizzBuzz");
						}
					else if (contador%3===0)
						{
							liPrint.printLine("fizz");
						}
					else if (contador%5===0)
						{
							liPrint.printLine("Buzz");
						}
					else
						{
							liPrint.printLine(contador);
						}
				
					}
			}
		}
	
	//function to ask for inputt, check validity and run print statements
	function ask ()
		{
			$( "li" ).remove();
			var endPrint=false;
			endValue=+prompt("Please enter the last FIZZ BUZZ number");
			//Chech the numbers are correctly inputt
			if (endValue==NaN || endValue%1!=0) {
		    	alert("please inter an integer");
		    	endPrint=true;
				}
	
			// Define the printer functions

	
			//initialize the object to be printed to
			liPrint=new Printer("examplelist");

			//this will end the printing loop if a number has not been introduced

			fizzBuzzRefact(endValue);
		}

});

//this will refresh the page case the button is pressed, in order to rerun fizzBuzz logic
function myFunction() {
    location.reload();
}


