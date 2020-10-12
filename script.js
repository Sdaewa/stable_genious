const quoteContainer = document.getElementById('quote-container');
const messageText = document.getElementById('message');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



async function getQuote() {
    const API = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data)
        messageText.innerHTML = data.message;

    } catch (error) {
        alert(error)
    }
}
getQuote();