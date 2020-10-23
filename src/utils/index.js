export const createCoinNameArray = (coinArray) => {
  return coinArray.map((coin) => coin.name);
};

export const getFirst20Items = (items) => {
  return items.slice(0, 20);
};

export const getCoinIDs = (coinArray) => {
  return coinArray.map((coin) => coin.id);
};
