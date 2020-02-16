const key = "";
const secret = ""; // put in keys here
const rest = require("restler");
//what is restler?
const async = require("async");
const derb = require("deribit-v2-ws");
const loopInterval = 1000;

const Derb = new derb(key, secret);

let myTrailingStopMAPeriod = 50;
let myHourlyMAs = [myTrailingStopMAPeriod, 400];
let myTrailingStopValue = 1;
let positionSize = 0;
let myInstrument = "BTC-27MAR20";

const wait = (n = new Promise(r => setTimeout(r, n)));

let highs = [];
let lows = [];
let opens = [];
let orderIds = [];

let hourMAs = [];
let candles = {};
let lastHourTimestamp = roundToHour();

function roundToHour() {
  let date = new Date().getTime();
  p = 60 * 60 * 1000;
  return Math.floor(date / p) * p;
}

function loadData() {
  let nearestHour = roundToHour;
  let startTime = 1540000000000;
  let endTime = nearestHour;

  let instrumentName = "BTC-PERPETUAL";
  var string =
    "https://www.deribit.com/api/v2/public/get_tradingview_chart_data" +
    "?instrument_name=" +
    instrumentname +
    "&start_timestamp=" +
    starttime +
    "&end_timestamp=" +
    endtime +
    "&resolution=60";
  rest.get(string).on("complete", function(data) {
    candles = data.result;
    lows = candles.low.reverse();
    highs = candles.high.reverse();
    opens = candles.open.reverse();
    drawMAs();
  });
}

function DrawMAs(i){
    if(i == undefined){i=0}
    let period = myHourlyMAs[i]
    let sum = 0
    let thisData={}
    for(let p=0; p<period;p++)
}
