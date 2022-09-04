let tg = window.Telegram.WebApp; 

tg.expand(); 

let btn = document.getElementById("btn"); 

btn.addEventListener('click', function(){ 
	const getResource = async(url) => {
        const res = await fetch(url);
        const body = await res.json();  
        return body;
    };

    getResource('https://www.nbrb.by/API/ExRates/Rates?Periodicity=0')
        .then((body)=>{
            const usdCur = body[7].Cur_OfficialRate;
            const eurCur = body[9].Cur_OfficialRate;

            let coincard = document.getElementById("coincard");
            let converter = document.createElement('p');
            converter.innerText = `${usdCur}\n${eurCur}`
            coincard.appendChild(converter);            
    
        });
});
