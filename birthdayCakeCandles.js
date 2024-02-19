function birthdayCakeCandles(candles) {
  let tallestCandle = candles[0];
  for (let candle of candles) {
    if (candle > tallestCandle) {
      tallestCandle = candle;
    }
  }

  let numOfTallestCandles = 0;
  for (let candle of candles) {
    if (candle === tallestCandle) {
      numOfTallestCandles++;
    }
  }

  return numOfTallestCandles;
}
