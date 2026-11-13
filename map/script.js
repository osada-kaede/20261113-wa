// 例：数値を2倍にする
const numbers = [1,2,3,4,5]

const result = numbers.map((num) => {
    return num * 2; 
})

console.log(result);

// 例：文字列を加工する
const names = ["山田","佐藤","田中"]

const result2 = names.map((name) => {
    return name + "さん";
});

console.log(result2);

// 配列のデータからHTML要素を生成する
// 商品一覧
const products = ["ノートPC","マウス","キーボード"];

// HTMl要素を生成
const elements = products.map((product) => {
    const li = document.createElement("li");
    li.textContent = product;

    return li;
});

// HTMLに追加
document.querySelector("#produt-list").replaceChildren(...elements);