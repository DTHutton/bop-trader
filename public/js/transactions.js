$(document).ready(function() {
  // Dependencies
  const axios = require("axios");
  // Global Variable
  const price = 0;
  var priceOfBuying = 8000;
  var userCash = 100000;
  var amountToBuy = 5;
  var currencyOwned = 2;

  // Buy option
  $("#confirmBuyBTC").on("click", function(event) {
    event.preventDefault();

    // Check if enough money is availiable to buy amount
    // Need to update values
    buyCheck(priceOfBuying, userCash, amountToBuy);

    // Define apiURL
    var apiURL = "https://api.cryptonator.com/api/ticker/btc-usd";
    var price = axiosGrab(apiURL);

    // Make newBuy object
    var newBuy = {
      amount: $("#btcPurchaseAmt")
        .val()
        .trim(),
      cryptoType: "BTC",
      transactionType: "buy",
      priceAtSale: price, // Find BTC price
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newBuy);

    if (!newBuy.amount) {
      alert("You must enter a valid amount for purchase");
      return;
    }

    // Send AJAX POST-request
    $.post("/api/transactions", newBuy).then(function() {
      // Successful Buy or Failed to buy
    });

    // Update User current ownings

    // Empty input box
    $("#btcPurchaseAmt").val("");
  });
  $("#confirmBuyLTC").on("submit", function(event) {
    event.preventDefault();

    // Check if enough money is availiable to buy amount
    // Need to update values
    buyCheck(priceOfBuying, userCash, amountToBuy);

    // Define apiURL
    var apiURL = "https://api.cryptonator.com/api/ticker/ltc-usd";
    var price = axiosGrab(apiURL);

    // Make newBuy object
    var newBuy = {
      amount: $("#LTCPurchaseAmt")
        .val()
        .trim(),
      cryptoType: "LTC",
      transactionType: "buy",
      priceAtSale: price, // Find LTC price
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newBuy);

    if (!newBuy.amount) {
      alert("You must enter a valid amount for purchase");
      return;
    }

    // Send AJAX POST-request
    $.post("/api/transactions", newBuy).then(function() {
      // Successful Buy or Failed to buy
    });

    // Update User current ownings

    // Empty input box
    $("#LTCPurchaseAmt").val("");
  });
  $("#confirmBuyETH").on("submit", function(event) {
    event.preventDefault();

    // Check if enough money is availiable to buy amount
    // Need to update values
    buyCheck(priceOfBuying, userCash, amountToBuy);

    // Define apiURL
    var apiURL = "https://api.cryptonator.com/api/ticker/eth-usd";
    var price = axiosGrab(apiURL);

    // Make newBuy object
    var newBuy = {
      amount: $("#ETHPurchaseAmt")
        .val()
        .trim(),
      cryptoType: "ETH",
      transactionType: "buy",
      priceAtSale: price, // Find BTC price
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newBuy);

    if (!newBuy.amount) {
      alert("You must enter a valid amount for purchase");
      return;
    }

    // Send AJAX POST-request
    $.post("/api/transactions", newBuy).then(function() {
      // Successful Buy or Failed to buy
    });

    // Update User current ownings

    // Empty input box
    $("#ETHPurchaseAmt").val("");
  });

  // Sell option
  $("#confirmSellBTC").on("submit", function(event) {
    event.preventDefault();

    // Check if enough currency is availiable to sell amount
    // Need to update values
    sellCheck(currencyOwned, amountToBuy);

    // Define apiURL
    var apiURL = "https://api.cryptonator.com/api/ticker/btc-usd";
    var price = axiosGrab(apiURL);

    // Make new newSell object
    var newSell = {
      amount: $("#btcSaleAmt")
        .val()
        .trim(),
      cryptoType: "BTC",
      transactionType: "sell",
      priceAtSale: price, // Find BTC price
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newSell);

    if (!newSell.amount) {
      alert("You must enter a valid amount for purchase");
      return;
    }

    // Send AJAX POST-request
    $.post("/api/transactions", newSell).then(function() {
      // Successful sell or Failed to sell
    });

    // Update User current ownings

    // Empty input box
    $("#btcSaleAmt").val("");
  });
  $("#confirmSellLTC").on("submit", function(event) {
    event.preventDefault();

    // Check if enough currency is availiable to sell amount
    // Need to update values
    sellCheck(currencyOwned, amountToBuy);

    // Define apiURL
    var apiURL = "https://api.cryptonator.com/api/ticker/ltc-usd";
    var price = axiosGrab(apiURL);

    // Make new newSell object
    var newSell = {
      amount: $("#LTCPurchaseAmtSaleAmt")
        .val()
        .trim(),
      cryptoType: "LTC",
      transactionType: "sell",
      priceAtSale: price, // Find LTC price
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newSell);

    if (!newSell.amount) {
      alert("You must enter a valid amount for purchase");
      return;
    }

    // Send AJAX POST-request
    $.post("/api/transactions", newSell).then(function() {
      // Successful sell or Failed to sell
    });

    // Update User current ownings

    // Empty input box
    $("#LTCPurchaseAmtSaleAmt").val("");
  });
  $("#confirmSellETH").on("submit", function(event) {
    event.preventDefault();

    // Check if enough currency is availiable to sell amount
    // Need to update values
    sellCheck(currencyOwned, amountToBuy);

    // Define apiURL
    var apiURL = "https://api.cryptonator.com/api/ticker/eth-usd";
    var price = axiosGrab(apiURL);

    // Make new newSell object
    var newSell = {
      amount: $("#ETHPurchaseAmtSaleAmt")
        .val()
        .trim(),
      cryptoType: "ETH",
      transactionType: "sell",
      priceAtSale: price, // Find LTC price
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newSell);

    if (!newSell.amount) {
      alert("You must enter a valid amount for purchase");
      return;
    }

    // Send AJAX POST-request
    $.post("/api/transactions", newSell).then(function() {
      // Successful sell or Failed to sell
    });

    // Update User current ownings

    // Empty input box
    $("#ETHPurchaseAmtSaleAmt").val("");
  });

  // Axios API GET function
  function axiosGrab(apiURL) {
    axios.get(apiURL).then(function(response) {
      var price = response.data.ticker.price;
      return price;
    });
  }

  // Display Transaction History
  $.get("/api/transactions", function(data) {
    // If userId matches foreign key from transaction table
    // Then post their data
    var id = true; // for test purposes
    if (id) {
      for (var i = 0; i < data.length; i++) {
        if (data.transactionType === "") {
          var newPost = `
            <th scope="row">1</th>
            <td>${data.saleAt}<td>
            <td>${data.amount}<td>
            <td>${data.priceAtSale}<td>
            <td>${checkType(data.transactionType)}<td>
            `;

          $("#transaction-history").append(newPost);
        }
      }
    } else {
      console.log("Could not find any tranactional data");
    }
  });

  // Determine currency type
  function checkType(type) {
    if (type === "BTC") {
      var apiURL = "https://api.cryptonator.com/api/ticker/btc-usd";
      return (price = axiosGrab(apiURL));
    } else if (type === "LTC") {
      var apiURL = "https://api.cryptonator.com/api/ticker/ltc-usd";
      return (price = axiosGrab(apiURL));
    } else if (type === "ETH") {
      var apiURL = "https://api.cryptonator.com/api/ticker/eth-usd";
      return (price = axiosGrab(apiURL));
    }
  }

  // Buy Check
  function buyCheck(priceOfBuying, userCash, amountToBuy) {
    if (priceOfBuying > userCash * amountToBuy) {
      return alert("You do not have enough $USD to complete this transaction.");
    }
  }
  // Sell Check
  function sellCheck(currencyOwned, amountToBuy) {
    if (currencyOwned < amountToBuy) {
      return alert(
        "You do not have enough currency of this type to complete this transaction."
      );
    }
  }
});
