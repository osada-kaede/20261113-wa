Vue.createApp({
  data() {
    return {
      // 検索・絞り込み条件
      keyword: "",
      selectedCategory: "",
      stockOnly: false,
      sortType: "default",

// 商品データ
products: [
  {
    id: 1,
    name: "e 東京喰種",
    category: "ビスティ",
    price: 455200,
    stock: 5,
    image: "./images/喰種.webp"
  },
  {
    id: 2,
    name: "e Re:ゼロから始める異世界生活 season2",
    category: "大都技研",
    price: 173900,
    stock: 12,
    image: "./images/リゼロ.webp"
  },
  {
    id: 3,
    name: "eフィーバー妖怪ウォッチ",
    category: "SANKYO",
    price: 499000,
    stock: 0,
    image: "./images/妖怪ウォッチ.webp"
  },
  {
    id: 4,
    name: "eフィーバーブルーロック",
    category: "	SANKYO",
    price: 88400,
    stock: 3,
    image: "./images/ブルロ.webp"
  },
  {
    id: 5,
    name: "P にゃんこ大戦争 多様性のネコ",
    category: "京楽",
    price: 78300,
    stock: 0,
    image: "./images/にゃんこ.webp"
  },
  {
    id: 6,
    name: "eフィーバー炎炎ノ消防隊2 紅丸ver.",
    category: "SANKYO",
    price: 99000,
    stock: 2,
    image: "./images/炎炎.webp"
  },
  {
    id: 7,
    name: "eノーゲーム・ノーライフ 199Ver.",
    category: "高尾",
    price: 73300,
    stock: 4,
    image: "./images/ノゲノラ.webp"
  },
  {
    id: 8,
    name: "新世紀エヴァンゲリオン〜未来への咆哮〜",
    category: "ビスティ",
    price: 97000,
    stock: 30,
    image: "./images/エヴァ.webp"
  },
  {
    id: 9,
    name: "e範馬刃牙",
    category: "アムテックス",
    price: 100400,
    stock: 15,
    image: "./images/バキ.webp"
  }
]
    };
  },

  computed: {
    // filter：検索・絞り込み条件に一致する商品を抽出
    filteredProducts() {
      return this.products.filter(product => {
        // 商品名に検索キーワードが含まれているか判定
        const matchKeyword =
          product.name.includes(this.keyword);

        // カテゴリーが選択されていない場合、または一致する場合
        const matchCategory =
          this.selectedCategory === "" ||
          product.category === this.selectedCategory;

        // 在庫のみ表示がOFF、または在庫が1点以上ある場合
        const matchStock =
          !this.stockOnly || product.stock > 0;

        // すべての条件を満たす商品だけを抽出
        return matchKeyword && matchCategory && matchStock;
      });
    },

    // sort：商品の価格を基準に並び替え
    sortedProducts() {
      // 元の配列を変更しないようにコピーを作成
      const products = [...this.filteredProducts];

      // 価格の安い順に並び替え
      if (this.sortType === "asc") {
        products.sort((a, b) => a.price - b.price);
      }

      // 価格の高い順に並び替え
      if (this.sortType === "desc") {
        products.sort((a, b) => b.price - a.price);
      }

      return products;
    },

    // map：商品データを画面表示用に加工
    displayProducts() {
      return this.sortedProducts.map(product => {
        return {
          // 元の商品データをすべて引き継ぐ
          ...product,

          // 価格をカンマ区切りに加工
          formattedPrice: "¥" + product.price.toLocaleString(),

          // 在庫数に応じた表示テキストを作成
          stockLabel: product.stock > 0
            ? "在庫あり：" + product.stock + "点"
            : "在庫切れ"
        };
      });
    }
  }
}).mount("#app");