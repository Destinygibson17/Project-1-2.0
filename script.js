


/***
This is my object array. It contains my favorite quotes about reading.
***/

var quotes = [
  {
    quote: "I have lived a thousand lives and I’ve loved a thousand loves. I’ve walked on distant worlds and seen the end of time. Because I read.",
   source:" George R. R. Martin"
  },
   {
     quote:"Until I feared I would lose it, I never loved to read. One does not love breathing.",
   source:"Harper Lee"
  },
   {
     quote:"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
   source: "Dr.Seuss"
  },
   {
     quote:"So please, oh please, we beg, we pray, go throw your TV set away, and in its place you can install a lovely bookshelf on the wall." ,
  source:"Roald Dahl"
  },
   {
     quote:"If you don’t like to read, you haven’t found the right book.",
  source:"J.K. Rowling"
  },
   {
     quote:"Books are a uniquely portable magic.",
   source: "Stephen King"
  },
   {
     quote:"Reading brings us unknown friends.",
   source:"Honoré de Balzac"
  },
   {
     quote:"Once you have read a book you care about, some part of it is always with you.",
   source:"Louis L’Amour"
  },
   {
     quote:"It’s not that I don’t like people. It’s just that when I’m in the company of others – even my nearest and dearest – there always comes a moment when I’d rather be reading a book.",
   source: "Maureen Corrigan"
   },
  {
    quote:"One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.",
   source:"Carl Sagan"
  }
];


/*
This function will generate a random number and pick the quote that matches that number within the object array.
*/

function getRandomQuote() {
var pickQuote = Math.floor(Math.random()* quotes.length);
return (quotes[pickQuote]);

}
/*
This is my printQuote. It takes the information and prints it to the page.
*/


function printQuote() {
var print = getRandomQuote();
console.log(print);
var data = '<p class="quote">';
data += print.quote;
data += '</p>';
data += '<p class="source">';
data += print.source;
data += '</p>';
document.getElementById('quote-box').innerHTML= data;
console.log(data);
}


/*
When you press the button, you get a new quote. Yay!
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
