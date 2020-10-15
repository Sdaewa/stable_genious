const quoteContainer = document.getElementById('quote-container');
const messageText = document.getElementById('message');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
const date = document.getElementById('date');
// const hyperlinkText = document.body.getAttribute('hyperlink');

// console.log(hyperlinkText)


async function getQuote() {
    loadingSpinner();
    const API = 'https://tronalddump.io/random/quote';

    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data.value)
        messageText.innerText = data.value;
        date.innerText = new Date(data.appeared_at).toDateString();
        // authorText.innerText = data._embedded.author[0].name;
        console.log(messageText)
        if (data.value.length > 120) {
            messageText.classList.add('long-quote');
        } else {
            messageText.classList.remove('long-quote');
        }

        completeSpinner();
    } catch (error) {
        // alert(error);
        getQuote();
    };
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

function tweetQuote() {
    const quote = messageText.innerText;
    const author = 'Donald J Trump';
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterURL, '_blank');
}

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuote();