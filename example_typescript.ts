import { MexcSpotAPI } from "./mexc_spot";

const key = "...";
const api = new MexcSpotAPI(key);

const order1 = await api.createLimitOrder({
  symbol: "BTC_USDT",
  tradeType: "BUY",
  price: "90500",
  quantity: "0.00004",
});
console.log("Order 1", order1);

const order2 = await api.createLimitOrder({
  symbol: "BTC_USDT",
  tradeType: "BUY",
  price: "91000",
  quantity: "0.000011",
});
console.log("Order 2", order2);
