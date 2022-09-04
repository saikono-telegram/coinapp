let tg = window.Telegram.WebApp; 

tg.expand(); 

let btn = document.getElementById("btn"); 

const getResource = async(url) => {
    const res = await fetch(url);
    const body = await res.json();  
    return body;
};

getResource('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((body)=>{
        const summ = document.getElementById('summ').value;

        const usdCur = Math.floor(summ / body.Valute.USD.Value);
        const eurCur = Math.floor(summ / body.Valute.EUR.Value);

        tg.MainButton.setText(`${summ}₽ = ${usdCur}$ | ${eurCur}€!`); 
        tg.MainButton.textColor = "#FFF"; 
        tg.MainButton.color = "#ffd800"; 
   });

btn.addEventListener('click', function(){ 
   if (tg.MainButton.isVisible){ 
      tg.MainButton.hide() 
   }
   else{ 
      tg.MainButton.show()       
   }
});
