const quoteContainer = document.getElementById('quote-container');
const messageText = document.getElementById('message');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
const date = document.getElementById('date');
const sourceBtn = document.getElementById('source');
const link = document.querySelector('.quote-text a');



async function getQuote() {
    loadingSpinner();
    const API = 'https://tronalddump.io/random/quote';

    try {
        const response = await fetch(API);
        const data = await response.json();
        messageText.innerText = data.value;
        if (is_url(data.value)) {
            return console.log(messageText.innerText = data.value, hyperLink);
        };
        if (!is_url(data.value)) {
            return console.log(messageText.innerText = data.value);
        }
        date.innerText = new Date(data.appeared_at).toDateString();
        source = data._embedded.source[0].url;
        if (data.value.length > 120) {
            messageText.classList.add('long-quote');
        } else {
            messageText.classList.remove('long-quote');
        }

        completeSpinner();

    } catch (error) {
        // getQuote();
        alert(error)
    };


    function is_url(str) {
        regexp = /([\w+]+\:\/\/)?()*[\w-]+[\.\:]\w+([\/\?\]?[\w-]+)*\/?/igm;
        let hyperLink = str.match(regexp);
        return hyperLink;
    }
}

function loadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function completeSpinner() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    };
}

function getSource() {
    sourceTweet = source;
    window.open(sourceTweet);
}

function tweetQuote() {
    const quote = messageText.innerText;
    const author = 'Donald J Trump';
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterURL, '_blank');
}

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);
sourceBtn.addEventListener('click', getSource);

getQuote();