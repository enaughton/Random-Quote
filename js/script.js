// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Array of Quotes to be Displayed
var quotes = [
			 	{
			 	quotes: "No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true", 
				source: "Cinderella",
				year: 1960},
				{
				quotes: "If you can’t say something nice, don’t say nothin’ at all.",
				source: "Bambi",
				year: 1950},
				{
				quotes: "Ohana means family, and family means no one gets left behind or forgotten.",
				source: "Lilo & Stitch",
				year: 2002},
				{
				quotes: "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
				source: "The Lion King",
				year: 1994},
				{
				quotes: "You’re braver than you believe, and stronger than you seem, and smarter than you think.",
				source: "Winnie the Pooh",
				year: 1997}
			
				];


//Selects a Random Number, Picks the quote in that location in the array of Quotes
function getRandomQuote() {
const number = Math.floor(Math.random() * 5);
const randomQuote = quotes[number];
const source = quotes[number].source;


return randomQuote;
}

//Takes the Random Quote from getRandomQuote(), and displays it in the paragraphs with the class of ('quote', 'source')
function printQuote() {
	// quote stores the random quote from the getRandomQuote() function.
	const quote 	 = getRandomQuote();
	// author stores the author part of the Quotes Object array.
	const author = quote.source;
	// said stores the quote part of the Quotes Object array.
	const said = quote.quotes;
	//print creates a template that will be used to display the quotes/source/year/citations
	var print = '<p class="quote">' + said + '</p>';
		print += '<p class="source">' + author  	;
	//if there is a citation in the Object Array it will be added to the output
	if(quote.citation){
		print +=	'<span class="citation">' + quote.citation + '</span>';
	}

	//if there is a year in the Object Array it will be added to the output
	if(quote.year){
		print +=  '<span class="year">' + quote.year + '</span>';
	}

	print += '</p>';
	//This will display the HTML template to the screen
 	document.getElementById('quote-box').innerHTML =  print;

return;
}


printQuote();