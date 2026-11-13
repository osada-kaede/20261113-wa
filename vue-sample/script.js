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
    name: "ノートパソコン Pro",
    category: "パソコン",
    price: 128000,
    stock: 5,
    image: "https://placehold.jp/600x450.png?text=NOTE+PC"
  },
  {
    id: 2,
    name: "ワイヤレスマウス",
    category: "周辺機器",
    price: 3980,
    stock: 12,
    image: "https://placehold.jp/600x450.png?text=MOUSE"
  },
  {
    id: 3,
    name: "メカニカルキーボード",
    category: "周辺機器",
    price: 9800,
    stock: 0,
    image: "https://placehold.jp/600x450.png?text=KEYBOARD"
  },
  {
    id: 4,
    name: "タブレット Air",
    category: "パソコン",
    price: 68000,
    stock: 3,
    image: "https://placehold.jp/600x450.png?text=TABLET"
  },
  {
    id: 5,
    name: "USB-Cハブ",
    category: "アクセサリー",
    price: 4500,
    stock: 8,
    image: "https://placehold.jp/600x450.png?text=USB+HUB"
  },
  {
    id: 6,
    name: "ワイヤレスイヤホン",
    category: "アクセサリー",
    price: 12800,
    stock: 2,
    image: "https://placehold.jp/600x450.png?text=EARPHONE"
  },
  {
    id: 7,
    name: "ゲーミングモニター",
    category: "周辺機器",
    price: 39800,
    stock: 4,
    image: "https://placehold.jp/600x450.png?text=MONITOR"
  },
  {
    id: 8,
    name: "ノートパソコン Lite",
    category: "パソコン",
    price: 85000,
    stock: 0,
    image: "https://placehold.jp/600x450.png?text=NOTE+PC"
  },
  {
    id: 9,
    name: "PCスタンド",
    category: "アクセサリー",
    price: 3200,
    stock: 15,
    image: "https://placehold.jp/600x450.png?text=PC+STAND"
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