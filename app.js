/*const request = require('request');

var activelink = 'https://cc2eee57.ngrok.io/'

module.exports =  function(sender, messageData){
	  
	  var messageData = {'name':'Hyderabadi Spice','ID':2,"data":[{"restID":2,"qty_left":10,"qty_sold":0,"dish":"Chicken Tikka","originalPrice":120,"offerPrice":70,"type":"Starters[Non-Veg]","tag":['Non-Veg']},
{"restID":2,"qty_left":5,"qty_sold":0,"dish":"Chicken Makhanwala","originalPrice":120,"offerPrice":100,"type":"Starters[Non-Veg]","tag":['Non-Veg']},
{"restID":2,"qty_left":6,"qty_sold":0,"dish":"Hariyali Chicken Kebab","originalPrice":150,"offerPrice":110,"type":"Starters[Non-Veg]","tag":['Non-Veg']},
{"restID":2,"qty_left":4,"qty_sold":0,"dish":"Malai Chicken Kebab","originalPrice":130,"offerPrice":100,"type":"Kebab","tag":['Non-Veg']},
{"restID":2,"qty_left":8,"qty_sold":0,"dish":"Mutton Seekh Kebab","originalPrice":250,"offerPrice":150,"type":"Kebab","tag":['Non-Veg']},
{"restID":2,"qty_left":8,"qty_sold":0,"dish":"Mutton Biryani","originalPrice":170,"offerPrice":110,"type":"Biryani","tag":['Non-Veg']},
{"restID":2,"qty_left":8,"qty_sold":0,"dish":"Chiken Biryani","originalPrice":200,"offerPrice":150,"type":"Biryani","tag":['Non-Veg']},
{"restID":2,"qty_left":8,"qty_sold":0,"dish":"Paneer Kathi Roll","originalPrice":150,"offerPrice":50,"type":"Roll","tag":['Veg']},
{"restID":2,"qty_left":8,"qty_sold":0,"dish":"Pindi Chole","originalPrice":130,"offerPrice":90,"type":"Main Course","tag":['Veg']},
{"restID":2,"qty_left":8,"qty_sold":0,"dish":"Subzi Meloni","originalPrice":170,"offerPrice":100,"type":"Main Course","tag":['Veg']},
{"restID":2,"qty_left":8,"qty_sold":0,"dish":"Dal Makhani","originalPrice":180,"offerPrice":100,"type":"Main Course","tag":['Veg']},
{"restID":2,"qty_left":8,"qty_sold":0,"dish":"Paneer Lababdar","originalPrice":250,"offerPrice":150,"type":"Main Course","tag":['Veg']},
{"restID":2,"qty_left":8,"qty_sold":0,"dish":"Mutton Rogan Josh","originalPrice":170,"offerPrice":120,"type":"Kebab","tag":['Non-Veg']}]}
 

 	var activelink = 'https://cc2eee57.ngrok.io/';
    console.log(messageData)
    //console.log(activelink)
      request({
      uri:activelink + 'addOffers',
      method:'POST',
      json: messageData
    }, function(error, response, body){
      if(error) throw error;
      //console.log(response.body)

	})
		return "Successfully added dishes";
	}
*/
