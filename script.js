 async function getQuote() {
     const API = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
     try {
         const response = await fetch(API);
         const data = await response.json();
         console.log(data);
     } catch (error) {
         console.log('Whoops no quote!', error);
     }
 }

 getQuote();