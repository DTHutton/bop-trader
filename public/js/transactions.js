// Dependencies
const axios = require("axios");
// Global Variable
const price = 0;

// Buy option
$("#buyBTC").on("submit", function(event) {
  event.preventDefault();

  // Define apiURL
  var apiURL = "https://api.cryptonator.com/api/ticker/btc-usd";
  var price = axiosGrab(apiURL);

  // Make newBuy object
  var newBuy = {
    amount: $("#btcPurchaseAmt")
      .val()
      .trim(),
    cryptoType: "BTC",
    priceAtBuy: price, // Find BTC price
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newBuy);

  // Send AJAX POST-request
  $.post("/api/buy-transactions", newBuy).then(function() {
    // Successful Buy or Failed to buy
  });

  // Update User current ownings

  // Empty input box
  $("#btcPurchaseAmt").val("");
});
$("#buyLTC").on("submit", function(event) {
  event.preventDefault();

  // Define apiURL
  var apiURL = "https://api.cryptonator.com/api/ticker/ltc-usd";
  var price = axiosGrab(apiURL);

  // Make newBuy object
  var newBuy = {
    amount: $("#LTCPurchaseAmt")
      .val()
      .trim(),
    cryptoType: "LTC",
    priceAtBuy: price, // Find LTC price
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newBuy);

  // Send AJAX POST-request
  $.post("/api/buy-transactions", newBuy).then(function() {
    // Successful Buy or Failed to buy
  });

  // Update User current ownings

  // Empty input box
  $("#LTCPurchaseAmt").val("");
});
$("#buyETH").on("submit", function(event) {
  event.preventDefault();

  // Define apiURL
  var apiURL = "https://api.cryptonator.com/api/ticker/eth-usd";
  var price = axiosGrab(apiURL);

  // Make newBuy object
  var newBuy = {
    amount: $("#ETHPurchaseAmt")
      .val()
      .trim(),
    cryptoType: "ETH",
    priceAtBuy: price, // Find BTC price
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newBuy);

  // Send AJAX POST-request
  $.post("/api/buy-transactions", newBuy).then(function() {
    // Successful Buy or Failed to buy
  });

  // Update User current ownings

  // Empty input box
  $("#ETHPurchaseAmt").val("");
});

// Sell option
$("#sellBTC").on("submit", function(event) {
  event.preventDefault();

  // Define apiURL
  var apiURL = "https://api.cryptonator.com/api/ticker/btc-usd";
  var price = axiosGrab(apiURL);

  // Make new newSell object
  var newSell = {
    amount: $("#btcSaleAmt")
      .val()
      .trim(),
    cryptoType: "BTC",
    priceAtSell: price, // Find BTC price
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newSell);

  // Send AJAX POST-request
  $.post("/api/sell-transactions", newSell).then(function() {
    // Successful Sell or Failed to sell
  });

  // Update User current ownings

  // Empty input box
  $("#btcSaleAmt").val("");
});
$("#sellLTC").on("submit", function(event) {
  event.preventDefault();

  // Define apiURL
  var apiURL = "https://api.cryptonator.com/api/ticker/ltc-usd";
  var price = axiosGrab(apiURL);

  // Make new newSell object
  var newSell = {
    amount: $("#LTCPurchaseAmtSaleAmt")
      .val()
      .trim(),
    cryptoType: "LTC",
    priceAtSell: price, // Find LTC price
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newSell);

  // Send AJAX POST-request
  $.post("/api/sell-transactions", newSell).then(function() {
    // Successful Sell or Failed to sell
  });

  // Update User current ownings

  // Empty input box
  $("#LTCPurchaseAmtSaleAmt").val("");
});
$("#sellETH").on("submit", function(event) {
  event.preventDefault();

  // Define apiURL
  var apiURL = "https://api.cryptonator.com/api/ticker/eth-usd";
  var price = axiosGrab(apiURL);

  // Make new newSell object
  var newSell = {
    amount: $("#ETHPurchaseAmtSaleAmt")
      .val()
      .trim(),
    cryptoType: "ETH",
    priceAtSell: price, // Find LTC price
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newSell);

  // Send AJAX POST-request
  $.post("/api/sell-transactions", newSell).then(function() {
    // Successful Sell or Failed to sell
  });

  // Update User current ownings

  // Empty input box
  $("#ETHPurchaseAmtSaleAmt").val("");
});

// Functions
function axiosGrab(apiURL) {
  axios.get(apiURL).then(function(response) {
    var price = response.data.ticker.price;
    return price;
  });
}
