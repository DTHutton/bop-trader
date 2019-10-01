/* eslint-disable no-unused-vars */

$(document).ready(function() {
  // Global Variables/ testing variables
  var price = 0;
  var priceOfBuying = 8000;
  var userCash = 100000;
  var amountToBuy = 5;
  var currencyOwned = 2;
  var i = 0;

  console.log("Hello!");

  // Buy option
  $("#confirmBuyBTC").click(function() {
    console.log("hello hello hello!");
    event.preventDefault();

    // Get user info
    info = getInfo();

    // Run makeTransaction()
    makeTransaction(
      "https://api.cryptonator.com/api/ticker/btc-usd",
      "buy",
      "BTC",
      $("#btcPurchaseAmt")
        .val()
        .trim()
    );

    // Empty input box
    $("#btcPurchaseAmt").val("");

    // Close box
    $("#buyBTC").modal("hide");
    return false;
  });
  $("#confirmBuyLTC").click(function(event) {
    event.preventDefault();

    // Check if enough money is availiable to buy amount
    // Need to update values
    buyCheck(priceOfBuying, userCash, amountToBuy);

    // Run makeTransaction()
    makeTransaction(
      "https://api.cryptonator.com/api/ticker/ltc-usd",
      "buy",
      "LTC",
      $("#LTCPurchaseAmt")
        .val()
        .trim()
    );

    // Empty input box
    $("#LTCPurchaseAmt").val("");
  });
  $("#confirmBuyETH").click(function(event) {
    event.preventDefault();

    // Check if enough money is availiable to buy amount
    // Need to update values
    buyCheck(priceOfBuying, userCash, amountToBuy);

    // Run makeTransaction()
    makeTransaction(
      "https://api.cryptonator.com/api/ticker/eth-usd",
      "buy",
      "ETH",
      $("#ETHPurchaseAmt")
        .val()
        .trim()
    );

    // Empty input box
    $("#ETHPurchaseAmt").val("");
  });

  // Sell option
  $("#confirmSellBTC").click(function(event) {
    event.preventDefault();

    // Check if enough currency is availiable to sell amount
    // Need to update values
    sellCheck(currencyOwned, amountToBuy);

    // Run makeTransaction()
    makeTransaction(
      "https://api.cryptonator.com/api/ticker/btc-usd",
      "sell",
      "BTC",
      $("#btcSaleAmt")
        .val()
        .trim()
    );

    // Empty input box
    $("#btcSaleAmt").val("");
  });
  $("#confirmSellLTC").click(function(event) {
    event.preventDefault();

    // Check if enough currency is availiable to sell amount
    // Need to update values
    sellCheck(currencyOwned, amountToBuy);

    // Run makeTransaction()
    makeTransaction(
      "https://api.cryptonator.com/api/ticker/ltc-usd",
      "sell",
      "LTC",
      $("#LTCSaleAmt")
        .val()
        .trim()
    );

    // Empty input box
    $("#LTCSaleAmt").val("");
  });
  $("#confirmSellETH").click(function(event) {
    event.preventDefault();

    // Check if enough currency is availiable to sell amount
    // Need to update values
    sellCheck(currencyOwned, amountToBuy);

    // Run makeTransaction()
    makeTransaction(
      "https://api.cryptonator.com/api/ticker/eth-usd",
      "sell",
      "ETH",
      $("#ETHSaleAmt")
        .val()
        .trim()
    );

    // Empty input box
    $("#ETHSaleAmt").val("");
  });

  // Axios API GET function
  function axiosGrab(apiURL) {
    // axios.get(apiURL).then(function(response) {
    //   return response.data.ticker.price;
    // });
    return $.ajax({
      url: apiURL,
      method: "GET"
    });
  }

  // Display Transaction History
  $.get("/api/transactions/all", function(data) {
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

  // Make Transaction Function
  function makeTransaction(apiURL, transactionType, cryptoType, quantity) {
    i = 0;
    if (transactionType === "buy") {
      axiosGrab(apiURL).then(function(response) {
        // Define price
        price = response.ticker.price;

        console.log(price);
        // Make newBuy object
        var newBuy = {
          amount: quantity,
          cryptoType: cryptoType,
          transactionType: transactionType,
          priceAtSale: parseInt(price), // Find BTC price
          totalPrice: price * quantity,
          userId: getId(i)
        };

        i = i++;

        buyCheck(newSell.priceAtSale, info.cash, newSell.amount);

        console.log(newBuy);

        if (!newBuy.amount) {
          alert("You must enter a valid amount for purchase");
          return;
        } else {
          // Send AJAX POST-request
          $.post("/api/transactions/all", newBuy).then(function() {
            // Successful Buy or Failed to buy
            console.log("Successful Purchase");
            return newBuy;
          });
        }

        // Update User current ownings
      });
    } else if (transactionType === "sell") {
      axiosGrab(apiURL).then(function(response) {
        // Define price
        price = response.ticker.price;
        console.log(price);
        // Make new newSell object
        var newSell = {
          amount: quantity,
          cryptoType: cryptoType,
          transactionType: transactionType,
          priceAtSale: parseInt(price), // Find BTC price
          totalPrice: price * quantity
        };
        i = i++;

        var info = getInfo()
        // Check if enough money is availiable to buy amount
        // Need to update values to current user information
        sellCheck(info.btcOwned, newSell.amount);
        console.log(newSell);

        if (!newSell.amount) {
          alert("You must enter a valid amount for purchase");
          return;
        } else {
          // Send AJAX POST-request
          $.post("/api/transactions/all", newSell).then(function() {
            // Successful Buy or Failed to buy
            console.log("Successful Sale");
            return newSell;
          });
        }
        // Update User current ownings
      });
    } else {
      return console.error("Illegal");
    }
  }

  // UserId request function
  function getId(i) {
    $.ajax({
      url: "/api/users",
      method: "GET"
    }).then(function(request) {
      console.log(request[i].userId);
      return request[i].userId;
    });
  }

  // Get info
  function getInfo() {
    $.ajax({
      url: "/api/users",
      method: "GET"
    }).then(function(request) {
      var req = request[0];
      console.log(req);
      return (info = {
        btcOwned: req.bitcoin,
        ltcOwned: req.litecoin,
        ethOwned: req.ethereum,
        cash: req.cash,
        id: req.userId
      });
    });
  }

  // End Document.ready
});
