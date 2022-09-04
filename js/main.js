let tg = window.Telegram.WebApp; 

tg.expand(); 

let btn = document.getElementById("btn"); 

btn.addEventListener('click', function(){ 
	const getResource = async(url) => {
        const res = await fetch(url);
        const body = await res.json();  
        return body;
    };

    getResource('https://www.cbr-xml-daily.ru/daily_json.js')
        .then((body)=>{
            const usdCur = body.Valute.USD.Value;
            const eurCur = body.Valute.EUR.Value;

            let coincard = document.getElementById("coincard");
            let converter = document.createElement('p');
            
            converter.innerText = `${usdCur}\n${eurCur}`
            coincard.appendChild(converter);            
    
       });
});
