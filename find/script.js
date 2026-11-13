// 例：条件に一致する数値を取得
const numbers = [10, 20, 30, 40, 50];

const result = numbers.find((num) => {
  return num >= 30;
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
