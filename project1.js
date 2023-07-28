//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

async function fetchQuotes(){
    try{
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        return data;
    }catch(error){
        console.error("Unable to fetch Quotes",error);
        return[];
    }
}

let quotes =[];

fetchQuotes().then((data) =>{
    quotes = data;
});

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() *quotes.length);
    quote.innerText = quotes[random].text;
    person.innerText =quotes[random].author.split(",")[0];
})
