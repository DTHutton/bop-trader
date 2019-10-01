/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
//Fetch the value of Bitcoin
const api_url = "https://api.cryptonator.com/api/ticker/btc-usd";
// Log initial price at page loadup
// console.log(bitcoinDataHandler().toString());
const time_interval = 2;
function addLeadingZero(num) {
  return num <= 9 ? "0" + num : num;
}
function clientDateTime() {
  var date_time = new Date();
  var curr_hour = date_time.getHours();
  var zero_added_curr_hour = addLeadingZero(curr_hour);
  var curr_min = date_time.getMinutes();
  var curr_sec = date_time.getSeconds();
  var curr_time = zero_added_curr_hour + ":" + curr_min + ":" + curr_sec;
  return curr_time;
}
function makeHttpObject() {
  try {
    return new XMLHttpRequest();
<<<<<<< HEAD
  } catch (error) {}
=======
  // eslint-disable-next-line no-empty
  } catch (error) { }
>>>>>>> f9269439648dd8f631598bb6e15b3635c5a2a814
}
function bitcoinGetData() {
  var request = makeHttpObject();
  request.open("GET", api_url, false);
  request.send(null);
  return request.responseText;
}
function bitcoinDataHandler() {
  var raw_data_string = bitcoinGetData();
  var data = JSON.parse(raw_data_string);
  var base = data.ticker.base;
  var target = data.ticker.target;
  var price = data.ticker.price;
  var volume = data.ticker.volume;
  var change = data.ticker.change;
  var api_server_epoch_timestamp = data.timestamp;
  var api_success = data.success;
  var api_error = data.error;
  return price;
}
document.getElementById("btc_val").innerHTML =
  "BTC - " + "$" + Math.round(bitcoinDataHandler()) + " USD";
