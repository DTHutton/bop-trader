/* eslint-disable prettier/prettier */
// Require db to find currency & post info
// db = require

// Create Math function to perform all actions
const Math = {
  buyCurrency: function(amount, type) {
    apiURL = checkType(type);
    cryptoDataHandler(apiURL);
    
  },
  sellCurrency: function(amount, type) {
    apiURL = checkType(type);
    cryptoDataHandler();

  },
  checkCurrency: function(amount, type) {
    apiURL = checkType(type);
    cryptoDataHandler();

  }
};

// Functions
// function makeHttpObject() {
//   try { return new XMLHttpRequest(); }
//   catch (error) { }
// }
// function bitcoinGetData() {
//   var request = makeHttpObject();
//   request.open("GET", apiURL, false);
//   request.send(null);

//   return request.responseText;
// }
// function cryptoDataHandler() {
//   var rawDataString = bitcoinGetData();
//   var data = JSON.parse(raw_data_string);
//   var base = data.ticker.base;
//   var target = data.ticker.target;
//   var price = data.ticker.price;
//   var volume = data.ticker.volume;
//   var change = data.ticker.change;
//   var apiServerEpochTimestamp = data.timestamp;
//   var apiSuccess = data.success;
//   var apiError = data.error;

//   return price;
// }
function checkType(type) {
  if(type === "BTC") {
    var apiURL = "https://api.cryptonator.com/api/ticker/btc-usd";
    console.log("Using BTC");
  }else if(type === "ETH") {
    var apiURL = "https://api.cryptonator.com/api/ticker/eth-usd";
    console.log("Using ETH");
  }else if(type === "LTC") {
    var apiURL = "https://api.cryptonator.com/api/ticker/ltc-usd";
    console.log("Using LTC");
  }
  return apiURL;
}

module.exports = Math;

apiURL = checkType("BTC");
console.log(apiURL);
// console.log(cryptoDataHandler());