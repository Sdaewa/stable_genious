 async function getQuote() {
     const API = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
     try {
         const reponse = await fetch(API);
         const data = await Response.json();
         console.loog(data);
     } catch (error) {
         console.log('Whoops no quote!', error);
     }
 }

 getQuote();