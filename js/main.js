let tg = window.Telegram.WebApp; 

tg.expand(); 

let btn = document.getElementById("btn"); 

btn.addEventListener('click', function(){ 
    let coincard = document.getElementById("coincard");
     let converter = document.createElement('p'); 
     converter.innerText = `TEST`; 
     coincard.appendChild(converter);
});
