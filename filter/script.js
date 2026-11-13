// 例：条件に一致する数値を取得
const numbers = [5, 10, 15];

const result = numbers.filter(number => {
  return number >= 10;
});

console.log(result);

// 例：条件に一致する文字列を取得
const fruits = ["りんご", "みかん", "ぶどう", "いちご"];

const result2 = fruits.find((fruit) => {
  return fruit === "ぶどう";
});

console.log(result2);

// 例：条件に一致する要素がない場合
const numbers2 = [10, 20, 30, 40, 50];

const result3 = numbers2.find((num) => {
  return num >= 100;
});

console.log(result3);
