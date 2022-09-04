let tg = window.Telegram.WebApp; 

tg.expand(); 

let btn = document.getElementById("btn"); 

btn.addEventListener('click', function(){ 
	const getResource = async(url) => {
        const res = await fetch(url);
        const body = await res.json();  
        return body;
    };

    getResource('https://www.cbr-xml-daily.ru/daily_jsonp.js')
        .then((body)=>{
            const usdCur = body[9].Value;
            const eurCur = body[10].Value;

            let coincard = document.getElementById("coincard");
            let converter = document.createElement('p');
            converter.innerText = `${usdCur}\n${eurCur}`
            coincard.appendChild(converter);            
    
        });
});
