let tg = window.Telegram.WebApp; 

tg.expand(); 

tg.MainButton.setText(`TEST`); 
tg.MainButton.textColor = "#FFF"; 
tg.MainButton.color = "#ffd800"; 

let btn = document.getElementById("convert"); 

btn.addEventListener('click', function(){ 
   if (tg.MainButton.isVisible){ 
      tg.MainButton.hide() 
   }
   else{ 
      tg.MainButton.show() 
   }
});
