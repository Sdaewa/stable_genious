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
        messageText.innerText = data.message;
        authorText.innerText = ' - Donald J Trump';
        if (data.message.length > 120) {
            messageText.classList.add('long-quote');
        } else {
            messageText.classList.remove('long-quote');
        }
    } catch (error) {
        alert(error)
    }
}


function tweetQuote() {
    const quote = messageText.innerText;
    const author = authorText.innerText;
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote} ${author}`;
    window.open(twitterURL, '_blank');
}

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuote();