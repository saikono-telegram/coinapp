let tg = window.Telegram.WebApp; 

tg.expand(); 

let btn = document.getElementById("btn"); 

btn.addEventListener('click', function(){ 
	axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
    .then((res) => { 
    	let coincard = document.getElementById("coincard");
        let converter = document.createElement('p'); 
        valute.EUR = res.data.Valute.EUR.Value
        valute.USD = res.data.Valute.USD.Value
        converter.innerText = `${valute.EUR}\n${valute.USD}`
        coincard.appendChild(converter);   
    });
});
