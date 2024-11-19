// Function that determines the maximum profit you can achieve by buying and selling the stock once
function maxTheStock(arr) {
  // Variables to store the minimum buy price and maximum profit
  let minBuyPrice = Infinity;
  let maxProfit = 0;

  // Loop through input array
  for(let i = 0; i < arr.length; i++) {
    // Variables to store the current price and profit
    let price = arr[i];
    let profit = arr[i] - minBuyPrice;

    // If the price is less than the current minBuyPrice, update the minBuyPrice
    minBuyPrice = Math.min(minBuyPrice, price);

    // If the profit is more than the current maxProfit, update the maxProfit
    maxProfit = Math.max(maxProfit, profit);
  }
  // Return the maxProfit
  return maxProfit;
}

// console.log(maxTheStock([7, 1, 5, 3, 6, 4]));
// console.log(maxTheStock([7, 6, 4, 3, 1]));
