(function() {
    'use strict';

  	let rows = document.querySelectorAll('#TableKeys tr');
  
  	let purchased = 0;

    for (let i = 2; i < rows.length; ++i)
    {
        let row = rows[i];

        if(!row.innerHTML.includes('DLC'))
        {
            let id = (row.querySelectorAll("a")[1].getAttribute("href")).replace('account_buy_', '').replace('.html', '');
          	if(id == '1713658' || id == '1979402' || id == '1617912') {
              continue;
            }
          
          	let priceHTML = row.querySelectorAll(".DIG3_14_Gray")[2].innerHTML;
          	let price = '';
          	for(let j = 0; j < priceHTML.length; j++) {
            	if(priceHTML[j] == ' ') { break; }
              price += priceHTML[j];
            }
          	
          	var xprice4 = decodeURIComponent("%0D%0A%09%09%09%09++") + price + decodeURIComponent("++++++++++++++++++");
          	
			console.log(id + ' ' + price);

          	var http = new XMLHttpRequest();
            var url = "https://www.dailyindiegame.com/account_buy.html";
            var params = "quantity=1&xgameid=" + id + "&xgameprice=" + price + "&xgameprice1=" + price + "&xgameprice2=" + price + "&xgameprice3=" + price + "&xgameprice4=" + encodeURIComponent(xprice4);
            http.open("POST", url, true);
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.send(params);
          	
          	if(++purchased >= 20) {
              break;
            }
        }
    }
})();

