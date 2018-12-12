/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
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


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote() {
var pickQuote = Math.floor(Math.random()* quotes.length);
return (quotes[pickQuote]);

}
/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/


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


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
