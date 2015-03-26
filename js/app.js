$(document).ready(function() {
//actions that happen immediately after document is loaded
	var endPrint=false;
	console.log("ready");
	ask();

	console.log(endValue);
	//Chech the numbers are correctly inputt
	if (endValue==NaN || endValue%1!=0) {
    	alert("please inter an integer");
    	endPrint=true;
		}
	
	// Define the printer functions

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

	//initialize the object to be printed to
	liPrint=new Printer("examplelist");

	//this will end the printing loop if a number has not been introduced

	fizzBuzzRefact(endValue);
	function ask ()
		{
			endValue=+prompt("Please enter the last FIZZ BUZZ number");
		}
		
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
	
});