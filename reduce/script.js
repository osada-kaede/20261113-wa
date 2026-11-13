// 例：配列の数値を合計する
const numbers = [10, 20, 30];

const result = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(result);
