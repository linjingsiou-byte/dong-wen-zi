// 「動文字」資料庫模組 - 收錄部首、部件（1-100，含補齊之1-16）及組字百格表資料

const RADICALS = [
  // 橫軸部首 (Image 5 & 2)
  { char: "艹", name: "艸部", strokes: 6, bopomofo: "ㄘㄠˇ" },
  { char: "土", name: "土部", strokes: 3, bopomofo: "ㄊㄨˇ" },
  { char: "釒", name: "金部", strokes: 8, bopomofo: "ㄐㄧㄣ" },
  { char: "糸", name: "糸部", strokes: 6, bopomofo: "ㄇㄧˋ" },
  { char: "足", name: "足部", strokes: 7, bopomofo: "ㄗㄨˊ" },
  { char: "肉", name: "肉部", strokes: 6, bopomofo: "ㄖㄡˋ" },
  { char: "玉", name: "玉部", strokes: 5, bopomofo: "ㄩˋ" },
  { char: "木", name: "木部", strokes: 4, bopomofo: "ㄇㄨˋ" },
  { char: "氵", name: "水部", strokes: 4, bopomofo: "ㄕㄨㄟˇ" },
  { char: "人", name: "人部", strokes: 2, bopomofo: "ㄖㄣˊ" }, // 網頁簡化字元以「人」或「亻」呈現
  { char: "言", name: "言部", strokes: 7, bopomofo: "ㄧㄢˊ" },
  { char: "扌", name: "手部", strokes: 4, bopomofo: "ㄕㄡˇ" },
  { char: "忄", name: "心部", strokes: 4, bopomofo: "ㄒㄧㄣ" },
  { char: "口", name: "口部", strokes: 3, bopomofo: "ㄎㄡˇ" }
];

const COMPONENTS = [
  // 1-16 補齊部件（2-4畫，邏輯與原書筆畫排序相符）
  { id: 1, strokes: "二", component: "丁", common_chars: ["打", "叮", "盯", "釘", "訂", "汀"] },
  { id: 2, strokes: "二", component: "卜", common_chars: ["朴", "外", "臥", "卦", "扑"] },
  { id: 3, strokes: "二", component: "厂", common_chars: ["歷", "厲", "崖", "厄"] },
  { id: 4, strokes: "二", component: "几", common_chars: ["帆", "汎", "肌", "釩", "朵"] },
  { id: 5, strokes: "二", component: "又", common_chars: ["叉", "仅", "雙", "友", "度"] },
  { id: 6, strokes: "三", component: "工", common_chars: ["江", "紅", "空", "缸", "扛", "釭"] },
  { id: 7, strokes: "三", component: "口", common_chars: ["扣", "古", "右", "加", "占"] },
  { id: 8, strokes: "三", component: "土", common_chars: ["吐", "杜", "肚", "徒", "陡"] },
  { id: 9, strokes: "三", component: "子", common_chars: ["仔", "李", "季", "字", "孫", "吼"] },
  { id: 10, strokes: "三", component: "己", common_chars: ["記", "紀", "杞", "叩", "屺", "芑"] },
  { id: 11, strokes: "三", component: "寸", common_chars: ["村", "討", "忖", "守", "耐", "寺"] },
  { id: 12, strokes: "三", component: "尤", common_chars: ["沈", "枕", "眈", "拋", "疣"] },
  { id: 13, strokes: "三", component: "千", common_chars: ["仟", "扦", "阡", "汘", "銛"] },
  { id: 14, strokes: "四", component: "屯", common_chars: ["沌", "純", "噸", "盹", "頓"] },
  { id: 15, strokes: "四", component: "支", common_chars: ["枝", "技", "吱", "肢", "翅"] },
  { id: 16, strokes: "四", component: "戈", common_chars: ["找", "划", "伐", "戲", "戰"] },

  // 17-100 原書圖片部件 (Page 207, 208, 209)
  { id: 17, strokes: "四", component: "少", common_chars: ["妙", "眇", "秒", "渺"] },
  { id: 18, strokes: "四", component: "巴", common_chars: ["把", "吧", "肥", "邑"] },
  { id: 19, strokes: "四", component: "方", common_chars: ["芳", "坊", "紡", "訪", "放"] },
  { id: 20, strokes: "四", component: "牙", common_chars: ["芽", "邪", "訝", "呀"] },
  { id: 21, strokes: "四", component: "卂", common_chars: ["訊", "迅", "汛"] },
  { id: 22, strokes: "四", component: "五", common_chars: ["吾", "語", "伍", "捂"] },
  { id: 23, strokes: "四", component: "及", common_chars: ["吸", "級", "汲", "笈"] },
  { id: 24, strokes: "四", component: "殳", common_chars: ["投", "段", "股", "般", "役", "毅"] },
  { id: 25, strokes: "四", component: "开", common_chars: ["開", "研", "妍", "形", "型"] },
  { id: 26, strokes: "四", component: "不", common_chars: ["否", "丕", "胚", "坏"] },
  { id: 27, strokes: "四", component: "巨", common_chars: ["拒", "距", "鉅", "矩"] },
  { id: 28, strokes: "四", component: "王", common_chars: ["丟", "全", "框"] },
  { id: 29, strokes: "四", component: "文", common_chars: ["紋", "雯", "蚊", "產"] },
  { id: 30, strokes: "四", component: "爪", common_chars: ["抓", "爬", "爭", "覓"] },
  { id: 31, strokes: "四", component: "犬", common_chars: ["伏", "犯", "狠", "狂"] },
  { id: 32, strokes: "四", component: "片", common_chars: ["牌", "蕭", "版", "牒"] },
  { id: 33, strokes: "四", component: "市", common_chars: ["柿", "鬧"] },
  { id: 34, strokes: "五", component: "且", common_chars: ["沮", "組", "祖", "阻", "狙", "宜", "助"] },
  { id: 35, strokes: "五", component: "乍", common_chars: ["詐", "作", "怎", "炸", "昨"] },
  { id: 36, strokes: "五", component: "半", common_chars: ["伴", "拌", "絆", "判"] },
  { id: 37, strokes: "五", component: "可", common_chars: ["何", "河", "倚", "椅", "寄"] },
  { id: 38, strokes: "五", component: "皮", common_chars: ["彼", "披", "波", "坡", "破"] },
  { id: 39, strokes: "五", component: "夗", common_chars: ["苑", "怨", "碗", "婉"] },
  { id: 40, strokes: "五", component: "㐱", common_chars: ["珍", "診", "參", "滲"] },
  { id: 41, strokes: "五", component: "冉", common_chars: ["再", "稱", "溝"] },
  { id: 42, strokes: "五", component: "史", common_chars: ["使", "吏", "駛"] },
  { id: 43, strokes: "五", component: "戊", common_chars: ["成", "城", "誠", "盛", "喊", "戚"] },
  { id: 44, strokes: "五", component: "矛", common_chars: ["茅", "柔", "務", "橘", "霧"] },
  { id: 45, strokes: "五", component: "矢", common_chars: ["短", "候", "知", "智", "族"] },
  { id: 46, strokes: "五", component: "永", common_chars: ["泳", "詠", "樣"] },
  { id: 47, strokes: "六", component: "亥", common_chars: ["孩", "該", "刻", "核"] },
  { id: 48, strokes: "六", component: "兆", common_chars: ["跳", "桃", "逃", "挑"] },
  { id: 49, strokes: "六", component: "各", common_chars: ["客", "路", "洛", "落", "露"] },
  { id: 50, strokes: "六", component: "同", common_chars: ["洞", "桐", "銅", "筒"] },
  { id: 51, strokes: "六", component: "寺", common_chars: ["特", "侍", "待", "時"] },
  { id: 52, strokes: "六", component: "聿", common_chars: ["津", "建", "律", "肆", "筆"] },
  { id: 53, strokes: "六", component: "艮", common_chars: ["很", "恨", "狠", "眼"] },
  { id: 54, strokes: "六", component: "束", common_chars: ["策", "棘", "棗"] },
  { id: 55, strokes: "六", component: "曲", common_chars: ["曹", "槽", "農", "濃"] },
  { id: 56, strokes: "六", component: "羊", common_chars: ["洋", "佯", "詳", "祥", "善"] },
  { id: 57, strokes: "六", component: "缶", common_chars: ["搖", "缺", "缸", "罐"] },
  { id: 58, strokes: "六", component: "羽", common_chars: ["翔", "翁", "習", "翠"] },
  { id: 59, strokes: "六", component: "舟", common_chars: ["般", "船", "航", "舵"] },
  { id: 60, strokes: "七", component: "每", common_chars: ["梅", "海", "侮", "繁", "悔", "誨"] },
  { id: 61, strokes: "七", component: "甬", common_chars: ["勇", "湧", "通", "痛", "桶"] },
  { id: 62, strokes: "七", component: "肖", common_chars: ["消", "俏", "削", "趙", "屑"] },
  { id: 63, strokes: "七", component: "良", common_chars: ["郎", "朗", "浪", "狼", "娘"] },
  { id: 64, strokes: "七", component: "我", common_chars: ["俄", "義", "儀", "餓"] },
  { id: 65, strokes: "七", component: "巠", common_chars: ["輕", "勁", "徑", "逕"] },
  { id: 66, strokes: "七", component: "夆", common_chars: ["峰", "鋒", "蜂", "烽", "逢", "縫"] },
  { id: 67, strokes: "七", component: "豆", common_chars: ["豈", "豎", "豐", "登", "澄"] },
  { id: 68, strokes: "七", component: "谷", common_chars: ["俗", "裕", "欲", "容", "溶"] },
  { id: 69, strokes: "七", component: "辛", common_chars: ["僻", "宰", "辜", "辭"] },
  { id: 70, strokes: "七", component: "辰", common_chars: ["晨", "振", "農", "濃", "唇", "辱"] },
  { id: 71, strokes: "七", component: "采", common_chars: ["翻", "悉", "審", "奧"] },
  { id: 72, strokes: "八", component: "侖", common_chars: ["倫", "輪", "淪", "論"] },
  { id: 73, strokes: "八", component: "宗", common_chars: ["崇", "棕", "綜", "粽"] },
  { id: 74, strokes: "八", component: "或", common_chars: ["國", "域", "惑"] },
  { id: 75, strokes: "八", component: "果", common_chars: ["顆", "棵", "巢", "夥"] },
  { id: 76, strokes: "八", component: "者", common_chars: ["緒", "著", "煮", "署", "暑", "都"] },
  { id: 77, strokes: "八", component: "青", common_chars: ["靜", "靖", "清", "情", "晴"] },
  { id: 78, strokes: "八", component: "音", common_chars: ["陪", "倍", "賠", "焙", "剖"] },
  { id: 79, strokes: "八", component: "非", common_chars: ["斐", "匪", "菲", "緋", "悲"] },
  { id: 80, strokes: "八", component: "東", common_chars: ["東", "棟", "凍", "陳"] },
  { id: 81, strokes: "九", component: "易", common_chars: ["傷", "湯", "陽", "楊", "濕"] },
  { id: 82, strokes: "九", component: "唐", common_chars: ["唐", "糖", "塘", "溏"] },
  { id: 83, strokes: "九", component: "軍", common_chars: ["軍", "輝", "暈", "揮"] },
  { id: 84, strokes: "九", component: "重", common_chars: ["重", "種", "鍾", "動"] },
  { id: 85, strokes: "九", component: "革", common_chars: ["鞋", "勒", "霸", "靴"] },
  { id: 86, strokes: "九", component: "奐", common_chars: ["喚", "換", "煥", "渙"] },
  { id: 87, strokes: "九", component: "韋", common_chars: ["偉", "圍", "韌", "緯", "葦"] },
  { id: 88, strokes: "九", component: "風", common_chars: ["嵐", "飄", "颯", "颱", "颮"] },
  { id: 89, strokes: "九", component: "禺", common_chars: ["偶", "遇", "厲", "勵", "邁"] },
  { id: 90, strokes: "十", component: "專", common_chars: ["傳", "縛", "博", "簿"] },
  { id: 91, strokes: "十", component: "舀", common_chars: ["掐", "焰", "滔", "諂"] },
  { id: 92, strokes: "十", component: "爻", common_chars: ["搖", "遙", "謠", "瑤"] },
  { id: 93, strokes: "十", component: "芻", common_chars: ["趨", "鄒", "皺", "雛"] },
  { id: 94, strokes: "十", component: "馬", common_chars: ["碼", "馮", "驚", "闖", "罵"] },
  { id: 95, strokes: "十", component: "骨", common_chars: ["滑", "猾", "骯", "骼"] },
  { id: 96, strokes: "十", component: "鬼", common_chars: ["塊", "愧", "蒐", "魂", "魁"] },
  { id: 97, strokes: "十一", component: "商", common_chars: ["摘", "適", "敵", "嫡"] },
  { id: 98, strokes: "十一", component: "麻", common_chars: ["麼", "摩", "魔", "靡"] },
  { id: 99, strokes: "十三", component: "僉", common_chars: ["臉", "險", "檢", "驗", "儉", "撿", "簽", "劍"] },
  { id: 100, strokes: "十三", component: "會", common_chars: ["會", "繪", "燴", "檜", "儈"] }
];

// 組字百格表資料庫 (20個核心部件 x 14個部首) + 補齊部件的組字關係
const COMBINATIONS = {
  "丁": {
    "口": {
      "char": "叮",
      "bopomofo": "ㄉㄧㄥ",
      "words": [
        "叮嚀",
        "叮咬",
        "叮囑"
      ]
    },
    "扌": {
      "char": "打",
      "bopomofo": "ㄉㄚˇ",
      "words": [
        "打球",
        "打掃",
        "打架"
      ]
    },
    "釒": {
      "char": "釘",
      "bopomofo": "ㄉㄧㄥ",
      "words": [
        "釘子",
        "鐵釘",
        "螺絲釘"
      ]
    },
    "言": {
      "char": "訂",
      "bopomofo": "ㄉㄧㄥˋ",
      "words": [
        "訂購",
        "訂單",
        "訂正"
      ]
    },
    "人": {
      "char": "仃",
      "bopomofo": "ㄉㄧㄥ",
      "words": [
        "伶仃"
      ]
    },
    "氵": {
      "char": "汀",
      "bopomofo": "ㄊㄧㄥ",
      "words": [
        "汀洲"
      ]
    },
    "玉": {
      "char": "玎",
      "bopomofo": "ㄉㄧㄥ",
      "words": [
        "玎璫",
        "玲玎"
      ]
    }
  },
  "卜": {
    "木": {
      "char": "朴",
      "bopomofo": "ㄆㄨˊ",
      "words": [
        "朴子",
        "朴素"
      ]
    },
    "人": {
      "char": "仆",
      "bopomofo": "ㄆㄨ",
      "words": [
        "仆色"
      ]
    },
    "扌": {
      "char": "扑",
      "bopomofo": "ㄆㄨ",
      "words": [
        "鞭扑"
      ]
    },
    "言": {
      "char": "訃",
      "bopomofo": "ㄈㄨˋ",
      "words": [
        "訃告"
      ]
    }
  },
  "又": {
    "口": {
      "char": "叹",
      "bopomofo": "ㄊㄢˋ",
      "words": [
        "嘆氣",
        "嘆息"
      ]
    },
    "肉": {
      "char": "服",
      "bopomofo": "ㄈㄨˊ",
      "words": [
        "制服",
        "禮服",
        "便服"
      ]
    }
  },
  "工": {
    "氵": {
      "char": "江",
      "bopomofo": "ㄐㄧㄤ",
      "words": [
        "長江",
        "江河",
        "江湖"
      ]
    },
    "扌": {
      "char": "扛",
      "bopomofo": "ㄎㄤˊ",
      "words": [
        "扛行李",
        "扛重物"
      ]
    },
    "糸": {
      "char": "紅",
      "bopomofo": "ㄏㄨㄥˊ",
      "words": [
        "紅色",
        "紅花",
        "紅包"
      ]
    },
    "木": {
      "char": "杠",
      "bopomofo": "ㄍㄤ",
      "words": [
        "杠色"
      ]
    },
    "肉": {
      "char": "肛",
      "bopomofo": "ㄍㄤ",
      "words": [
        "肛門"
      ]
    },
    "言": {
      "char": "訌",
      "bopomofo": "ㄏㄨㄥˊ",
      "words": [
        "內訌"
      ]
    }
  },
  "子": {
    "人": {
      "char": "仔",
      "bopomofo": "ㄗˇ",
      "words": [
        "仔細",
        "牛仔褲"
      ]
    },
    "口": {
      "char": "吼",
      "bopomofo": "ㄏㄡˇ",
      "words": [
        "大吼",
        "吼叫",
        "怒吼"
      ]
    },
    "木": {
      "char": "李",
      "bopomofo": "ㄌㄧˇ",
      "words": [
        "李子",
        "行李",
        "桃李"
      ]
    }
  },
  "己": {
    "糸": {
      "char": "紀",
      "bopomofo": "ㄐㄧˇ",
      "words": [
        "紀錄",
        "紀念",
        "世紀"
      ]
    },
    "言": {
      "char": "記",
      "bopomofo": "ㄐㄧˋ",
      "words": [
        "日記",
        "記者",
        "忘記"
      ]
    },
    "木": {
      "char": "杞",
      "bopomofo": "ㄑㄧˇ",
      "words": [
        "杞人憂天",
        "枸杞"
      ]
    },
    "口": {
      "char": "叩",
      "bopomofo": "ㄎㄡˋ",
      "words": [
        "叩頭",
        "叩門",
        "叩首"
      ]
    },
    "忄": {
      "char": "忌",
      "bopomofo": "ㄐㄧˋ",
      "words": [
        "妒忌",
        "猜忌",
        "顧忌"
      ]
    },
    "艹": {
      "char": "芑",
      "bopomofo": "ㄑㄧˇ",
      "words": [
        "采芑"
      ]
    }
  },
  "寸": {
    "木": {
      "char": "村",
      "bopomofo": "ㄘㄨㄣ",
      "words": [
        "農村",
        "村莊",
        "村民"
      ]
    },
    "言": {
      "char": "討",
      "bopomofo": "ㄊㄠˇ",
      "words": [
        "討論",
        "討厭",
        "討好"
      ]
    },
    "忄": {
      "char": "忖",
      "bopomofo": "ㄘㄨㄣˇ",
      "words": [
        "忖度",
        "思忖"
      ]
    },
    "土": {
      "char": "寺",
      "bopomofo": "ㄙˋ",
      "words": [
        "寺廟",
        "山寺",
        "寺院"
      ]
    },
    "人": {
      "char": "付",
      "bopomofo": "ㄈㄨˋ",
      "words": [
        "交付",
        "託付",
        "付款"
      ]
    },
    "糸": {
      "char": "紂",
      "bopomofo": "ㄓㄡˋ",
      "words": [
        "紂色"
      ]
    },
    "肉": {
      "char": "肘",
      "bopomofo": "ㄓㄡˇ",
      "words": [
        "臂肘",
        "肘兒",
        "胳臂肘"
      ]
    }
  },
  "尤": {
    "氵": {
      "char": "沈",
      "bopomofo": "ㄕㄣˇ",
      "words": [
        "沈沒",
        "沈默",
        "沈重"
      ]
    },
    "木": {
      "char": "枕",
      "bopomofo": "ㄓㄣˇ",
      "words": [
        "枕頭",
        "落枕",
        "枕骨"
      ]
    },
    "扌": {
      "char": "拋",
      "bopomofo": "ㄆㄠ",
      "words": [
        "拋棄",
        "拋錨",
        "拋球"
      ]
    }
  },
  "屯": {
    "氵": {
      "char": "沌",
      "bopomofo": "ㄉㄨㄣˋ",
      "words": [
        "混沌",
        "混混沌沌"
      ]
    },
    "糸": {
      "char": "純",
      "bopomofo": "ㄔㄨㄣˊ",
      "words": [
        "單純",
        "純潔",
        "純真"
      ]
    },
    "口": {
      "char": "噸",
      "bopomofo": "ㄉㄨㄣ",
      "words": [
        "公噸",
        "噸位"
      ]
    },
    "肉": {
      "char": "肫",
      "bopomofo": "ㄓㄨㄣ",
      "words": [
        "雞肫",
        "鴨肫",
        "肫肫"
      ]
    },
    "釒": {
      "char": "鈍",
      "bopomofo": "ㄉㄨㄣˋ",
      "words": [
        "鈍刀",
        "鈍器",
        "遲鈍"
      ]
    }
  },
  "支": {
    "扌": {
      "char": "技",
      "bopomofo": "ㄐㄧˋ",
      "words": [
        "技術",
        "技巧",
        "才技"
      ]
    },
    "木": {
      "char": "枝",
      "bopomofo": "ㄓ",
      "words": [
        "樹枝",
        "枝條",
        "枝葉"
      ]
    },
    "口": {
      "char": "吱",
      "bopomofo": "ㄓ",
      "words": [
        "吱吱叫",
        "吱聲"
      ]
    },
    "肉": {
      "char": "肢",
      "bopomofo": "ㄓ",
      "words": [
        "四肢",
        "肢體",
        "下肢"
      ]
    },
    "人": {
      "char": "伎",
      "bopomofo": "ㄐㄧˋ",
      "words": [
        "舞伎",
        "伎含",
        "盈舞伎"
      ]
    },
    "忄": {
      "char": "忮",
      "bopomofo": "ㄓˋ",
      "words": [
        "忮色"
      ]
    },
    "艹": {
      "char": "芰",
      "bopomofo": "ㄐㄧˋ",
      "words": [
        "芰色"
      ]
    },
    "足": {
      "char": "跂",
      "bopomofo": "ㄑㄧˊ",
      "words": [
        "跂色"
      ]
    }
  },
  "戈": {
    "扌": {
      "char": "找",
      "bopomofo": "ㄓㄠˇ",
      "words": [
        "尋找",
        "找錢",
        "找到"
      ]
    },
    "人": {
      "char": "伐",
      "bopomofo": "ㄈㄚˊ",
      "words": [
        "砍伐",
        "討伐",
        "步伐"
      ]
    },
    "木": {
      "char": "栽",
      "bopomofo": "ㄗㄞ",
      "words": [
        "栽樹",
        "栽花",
        "栽牙"
      ]
    }
  },
  "良": {
    "艹": {
      "char": "茛",
      "bopomofo": "ㄍㄣˋ",
      "words": [
        "毛茛",
        "茛苕"
      ]
    },
    "土": {
      "char": "垠",
      "bopomofo": "ㄧㄣˊ",
      "words": [
        "無垠",
        "一望無垠"
      ]
    },
    "釒": {
      "char": "銀",
      "bopomofo": "ㄧㄣˊ",
      "words": [
        "銀行",
        "銀牌",
        "銀色"
      ]
    },
    "足": {
      "char": "跟",
      "bopomofo": "ㄍㄣ",
      "words": [
        "跟隨",
        "高跟鞋",
        "跟班"
      ]
    },
    "玉": {
      "char": "琅",
      "bopomofo": "ㄌㄤˊ",
      "words": [
        "琅琅上口",
        "琳琅滿目"
      ]
    },
    "木": {
      "char": "根",
      "bopomofo": "ㄍㄣ",
      "words": [
        "樹根",
        "根本",
        "根基"
      ]
    },
    "氵": {
      "char": "浪",
      "bopomofo": "ㄌㄤˋ",
      "words": [
        "海浪",
        "流浪",
        "浪費"
      ]
    },
    "人": {
      "char": "佷",
      "bopomofo": "ㄏㄣˇ",
      "words": [
        "佷戾",
        "佷山"
      ]
    },
    "忄": {
      "char": "恨",
      "bopomofo": "ㄏㄣˋ",
      "words": [
        "恨意",
        "痛恨",
        "悔恨"
      ]
    },
    "肉": {
      "char": "朗",
      "bopomofo": "ㄌㄤˇ",
      "words": [
        "明朗",
        "晴朗",
        "朗誦",
        "朗讀"
      ]
    }
  },
  "佳": {
    "土": {
      "char": "堆",
      "bopomofo": "ㄉㄨㄟ",
      "words": [
        "沙堆",
        "堆積",
        "土堆"
      ]
    },
    "釒": {
      "char": "錐",
      "bopomofo": "ㄓㄨㄟ",
      "words": [
        "圓錐",
        "錐子",
        "立錐之地"
      ]
    },
    "糸": {
      "char": "維",
      "bopomofo": "ㄨㄟˊ",
      "words": [
        "維護",
        "維他命",
        "維修"
      ]
    },
    "足": {
      "char": "雖",
      "bopomofo": "ㄙㄨㄟ",
      "words": [
        "雖然",
        "雖則"
      ]
    },
    "木": {
      "char": "椎",
      "bopomofo": "ㄓㄨㄟ",
      "words": [
        "脊椎",
        "胸椎",
        "椎骨"
      ]
    },
    "氵": {
      "char": "淮",
      "bopomofo": "ㄏㄨㄞˊ",
      "words": [
        "淮河",
        "秦淮河"
      ]
    },
    "人": {
      "char": "佳",
      "bopomofo": "ㄐㄧㄚ",
      "words": [
        "佳作",
        "佳節",
        "最佳"
      ]
    },
    "言": {
      "char": "誰",
      "bopomofo": "ㄕㄨㄟˊ",
      "words": [
        "是誰",
        "誰知",
        "誰家"
      ]
    },
    "扌": {
      "char": "推",
      "bopomofo": "ㄊㄨㄟ",
      "words": [
        "推動",
        "推銷",
        "推手"
      ]
    },
    "忄": {
      "char": "惟",
      "bopomofo": "ㄨㄟˊ",
      "words": [
        "惟一",
        "惟恐"
      ]
    },
    "口": {
      "char": "唯",
      "bopomofo": "ㄨㄟˊ",
      "words": [
        "唯一",
        "唯美",
        "唯獨"
      ]
    }
  },
  "肖": {
    "釒": {
      "char": "銷",
      "bopomofo": "ㄒㄧㄠ",
      "words": [
        "銷量",
        "推銷",
        "註銷"
      ]
    },
    "足": {
      "char": "踃",
      "bopomofo": "ㄒㄧㄠ",
      "words": [
        "踃跳"
      ]
    },
    "木": {
      "char": "梢",
      "bopomofo": "ㄕㄠ",
      "words": [
        "樹梢",
        "末梢",
        "梢頭"
      ]
    },
    "氵": {
      "char": "消",
      "bopomofo": "ㄒㄧㄠ",
      "words": [
        "消失",
        "消息",
        "消費"
      ]
    },
    "人": {
      "char": "俏",
      "bopomofo": "ㄑㄧㄠˋ",
      "words": [
        "俏皮",
        "俊俏",
        "俏麗"
      ]
    },
    "言": {
      "char": "誚",
      "bopomofo": "ㄑㄧㄠˋ",
      "words": [
        "誚讓",
        "譏誚"
      ]
    },
    "扌": {
      "char": "捎",
      "bopomofo": "ㄕㄠ",
      "words": [
        "捎信",
        "捎帶"
      ]
    },
    "忄": {
      "char": "悄",
      "bopomofo": "ㄑㄧㄠˇ",
      "words": [
        "悄悄",
        "悄然",
        "靜悄悄"
      ]
    },
    "口": {
      "char": "哨",
      "bopomofo": "ㄕㄠˋ",
      "words": [
        "口哨",
        "哨所",
        "崗哨"
      ]
    }
  },
  "者": {
    "艹": {
      "char": "著",
      "bopomofo": "ㄓㄨˋ",
      "words": [
        "著名",
        "著作",
        "著急"
      ]
    },
    "土": {
      "char": "堵",
      "bopomofo": "ㄉㄨˇ",
      "words": [
        "堵塞",
        "一堵牆",
        "防堵"
      ]
    },
    "釒": {
      "char": "鍺",
      "bopomofo": "ㄓㄜˇ",
      "words": [
        "元素鍺",
        "鍺石"
      ]
    },
    "糸": {
      "char": "緒",
      "bopomofo": "ㄒㄩˋ",
      "words": [
        "情緒",
        "思緒",
        "頭緒"
      ]
    },
    "木": {
      "char": "楮",
      "bopomofo": "ㄔㄨˇ",
      "words": [
        "楮樹",
        "楮紙"
      ]
    },
    "氵": {
      "char": "渚",
      "bopomofo": "ㄓㄨˇ",
      "words": [
        "江渚",
        "沙渚"
      ]
    },
    "言": {
      "char": "諸",
      "bopomofo": "ㄓㄨ",
      "words": [
        "諸位",
        "諸多",
        "諸葛亮"
      ]
    }
  },
  "果": {
    "足": {
      "char": "踝",
      "bopomofo": "ㄏㄨㄞˊ",
      "words": [
        "腳踝",
        "踝關節"
      ]
    },
    "木": {
      "char": "棵",
      "bopomofo": "ㄎㄜ",
      "words": [
        "一棵樹",
        "棵子"
      ]
    },
    "言": {
      "char": "課",
      "bopomofo": "ㄎㄜˋ",
      "words": [
        "課本",
        "上課",
        "課程"
      ]
    },
    "人": {
      "char": "倮",
      "bopomofo": "ㄌㄨㄛˇ",
      "words": [
        "倮色"
      ]
    }
  },
  "僉": {
    "肉": {
      "char": "臉",
      "bopomofo": "ㄌㄧㄢˇ",
      "words": [
        "臉色",
        "洗臉",
        "臉譜"
      ]
    },
    "木": {
      "char": "檢",
      "bopomofo": "ㄐㄧㄢˇ",
      "words": [
        "檢查",
        "檢討",
        "檢驗"
      ]
    },
    "人": {
      "char": "儉",
      "bopomofo": "ㄐㄧㄢˇ",
      "words": [
        "節儉",
        "儉樸",
        "勤儉"
      ]
    },
    "扌": {
      "char": "撿",
      "bopomofo": "ㄐㄧㄢˇ",
      "words": [
        "撿垃圾",
        "撿拾",
        "撿便宜"
      ]
    }
  },
  "音": {
    "艹": {
      "char": "菩",
      "bopomofo": "ㄆㄨˊ",
      "words": [
        "菩薩",
        "菩提樹"
      ]
    },
    "足": {
      "char": "踣",
      "bopomofo": "ㄅㄟˋ",
      "words": [
        "踣斃",
        "屢踣屢起"
      ]
    },
    "人": {
      "char": "倍",
      "bopomofo": "ㄅㄟˋ",
      "words": [
        "加倍",
        "倍數",
        "百倍"
      ]
    },
    "扌": {
      "char": "培",
      "bopomofo": "ㄆㄟˊ",
      "words": [
        "培養",
        "培訓",
        "培育"
      ]
    },
    "忄": {
      "char": "意",
      "bopomofo": "ㄧˋ",
      "words": [
        "意思",
        "春意",
        "醉意"
      ]
    },
    "言": {
      "char": "諳",
      "bopomofo": "ㄢ",
      "words": [
        "不諳",
        "諳水",
        "不諳水"
      ]
    }
  },
  "青": {
    "艹": {
      "char": "菁",
      "bopomofo": "ㄐㄧㄥ",
      "words": [
        "菁華",
        "蕪菁"
      ]
    },
    "氵": {
      "char": "清",
      "bopomofo": "ㄑㄧㄥ",
      "words": [
        "清水",
        "清楚",
        "清潔"
      ]
    },
    "人": {
      "char": "倩",
      "bopomofo": "ㄑㄧㄢˋ",
      "words": [
        "倩影",
        "倩女"
      ]
    },
    "言": {
      "char": "請",
      "bopomofo": "ㄑㄧㄥˇ",
      "words": [
        "請客",
        "請求",
        "請假"
      ]
    },
    "忄": {
      "char": "情",
      "bopomofo": "ㄑㄧㄥˊ",
      "words": [
        "事情",
        "感情",
        "情況"
      ]
    }
  },
  "軍": {
    "艹": {
      "char": "葷",
      "bopomofo": "ㄏㄨㄣ",
      "words": [
        "葷食",
        "葷菜"
      ]
    },
    "氵": {
      "char": "渾",
      "bopomofo": "ㄏㄨㄣˊ",
      "words": [
        "渾身",
        "渾濁",
        "渾水摸魚"
      ]
    },
    "扌": {
      "char": "揮",
      "bopomofo": "ㄏㄨㄟ",
      "words": [
        "揮手",
        "揮舞",
        "揮霍"
      ]
    },
    "忄": {
      "char": "惲",
      "bopomofo": "ㄩㄣˋ",
      "words": [
        "惲代英",
        "姓惲"
      ]
    },
    "言": {
      "char": "諢",
      "bopomofo": "ㄏㄨㄣˋ",
      "words": [
        "打諢",
        "科打諢"
      ]
    }
  },
  "里": {
    "土": {
      "char": "埋",
      "bopomofo": "ㄇㄞˊ",
      "words": [
        "埋怨",
        "埋葬",
        "埋頭苦幹"
      ]
    },
    "釒": {
      "char": "鋰",
      "bopomofo": "ㄌㄧˇ",
      "words": [
        "鋰電池",
        "金屬鋰"
      ]
    },
    "玉": {
      "char": "理",
      "bopomofo": "ㄌㄧˇ",
      "words": [
        "道理",
        "整理",
        "理解"
      ]
    },
    "人": {
      "char": "俚",
      "bopomofo": "ㄌㄧˇ",
      "words": [
        "俚語",
        "俚俗"
      ]
    },
    "口": {
      "char": "哩",
      "bopomofo": "ㄌㄧ",
      "words": [
        "哩哩啦啦",
        "英哩"
      ]
    }
  },
  "會": {
    "糸": {
      "char": "繪",
      "bopomofo": "ㄏㄨㄟˋ",
      "words": [
        "繪畫",
        "彩繪",
        "描繪"
      ]
    },
    "肉": {
      "char": "膾",
      "bopomofo": "ㄎㄨㄞˋ",
      "words": [
        "膾炙人口",
        "膾魚"
      ]
    },
    "木": {
      "char": "檜",
      "bopomofo": "ㄍㄨㄟˋ",
      "words": [
        "檜木",
        "紅檜"
      ]
    },
    "人": {
      "char": "儈",
      "bopomofo": "ㄎㄨㄞˋ",
      "words": [
        "市儈",
        "牙儈"
      ]
    },
    "艹": {
      "char": "薈",
      "bopomofo": "ㄏㄨㄟˋ",
      "words": [
        "文薈",
        "薈萃",
        "人文薈"
      ]
    }
  },
  "每": {
    "木": {
      "char": "梅",
      "bopomofo": "ㄇㄟˊ",
      "words": [
        "梅花",
        "青梅竹馬",
        "楊梅"
      ]
    },
    "氵": {
      "char": "海",
      "bopomofo": "ㄏㄞˇ",
      "words": [
        "海洋",
        "海水",
        "海灘"
      ]
    },
    "人": {
      "char": "侮",
      "bopomofo": "ㄨˇ",
      "words": [
        "侮辱",
        "欺侮",
        "輕侮"
      ]
    },
    "言": {
      "char": "誨",
      "bopomofo": "ㄏㄨㄟˋ",
      "words": [
        "教誨",
        "誨人不倦"
      ]
    },
    "忄": {
      "char": "悔",
      "bopomofo": "ㄏㄨㄟˇ",
      "words": [
        "後悔",
        "悔恨",
        "懺悔"
      ]
    },
    "肉": {
      "char": "脢",
      "bopomofo": "ㄇㄟˊ",
      "words": [
        "脢子肉"
      ]
    },
    "艹": {
      "char": "莓",
      "bopomofo": "ㄇㄟˊ",
      "words": [
        "草莓"
      ]
    }
  },
  "甬": {
    "足": {
      "char": "踊",
      "bopomofo": "ㄩㄥˇ",
      "words": [
        "踴躍",
        "踊貴"
      ]
    },
    "木": {
      "char": "桶",
      "bopomofo": "ㄊㄨㄥˇ",
      "words": [
        "木桶",
        "水桶",
        "垃圾桶"
      ]
    },
    "氵": {
      "char": "湧",
      "bopomofo": "ㄩㄥˇ",
      "words": [
        "湧現",
        "湧出",
        "泉湧"
      ]
    },
    "人": {
      "char": "俑",
      "bopomofo": "ㄩㄥˇ",
      "words": [
        "兵馬俑",
        "始作俑者"
      ]
    },
    "言": {
      "char": "誦",
      "bopomofo": "ㄙㄨㄥˋ",
      "words": [
        "朗誦",
        "背誦",
        "誦經"
      ]
    },
    "扌": {
      "char": "捅",
      "bopomofo": "ㄊㄨㄥˇ",
      "words": [
        "捅馬蜂窩",
        "捅破"
      ]
    },
    "忄": {
      "char": "恿",
      "bopomofo": "ㄩㄥˇ",
      "words": [
        "慫恿"
      ]
    }
  },
  "見": {
    "艹": {
      "char": "莧",
      "bopomofo": "ㄒㄧㄢˋ",
      "words": [
        "莧菜",
        "野莧"
      ]
    },
    "玉": {
      "char": "現",
      "bopomofo": "ㄒㄧㄢˋ",
      "words": [
        "現在",
        "現場",
        "表現"
      ]
    }
  },
  "重": {
    "艹": {
      "char": "董",
      "bopomofo": "ㄉㄨㄥˇ",
      "words": [
        "董事長",
        "董理"
      ]
    },
    "釒": {
      "char": "鍾",
      "bopomofo": "ㄓㄨㄥ",
      "words": [
        "鍾愛",
        "鍾情",
        "姓鍾"
      ]
    },
    "足": {
      "char": "踵",
      "bopomofo": "ㄓㄨㄥˇ",
      "words": [
        "接踵而來",
        "踵事增華"
      ]
    },
    "肉": {
      "char": "腫",
      "bopomofo": "ㄓㄨㄥˇ",
      "words": [
        "腫脹",
        "紅腫",
        "腫瘤"
      ]
    }
  },
  "唐": {
    "土": {
      "char": "塘",
      "bopomofo": "ㄊㄤˊ",
      "words": [
        "池塘",
        "塘堰"
      ]
    },
    "扌": {
      "char": "搪",
      "bopomofo": "ㄊㄤˊ",
      "words": [
        "搪塞",
        "搪瓷"
      ]
    },
    "氵": {
      "char": "溏",
      "bopomofo": "ㄊㄤˊ",
      "words": [
        "溏便",
        "溏心"
      ]
    }
  },
  "宗": {
    "糸": {
      "char": "綜",
      "bopomofo": "ㄗㄨㄥ",
      "words": [
        "綜合",
        "綜藝",
        "錯綜複雜"
      ]
    },
    "玉": {
      "char": "琮",
      "bopomofo": "ㄘㄨㄥˊ",
      "words": [
        "琮璧",
        "玉琮"
      ]
    },
    "木": {
      "char": "棕",
      "bopomofo": "ㄗㄨㄥ",
      "words": [
        "棕色",
        "棕櫚樹",
        "椰棕"
      ]
    },
    "氵": {
      "char": "淙",
      "bopomofo": "ㄘㄨㄥ",
      "words": [
        "淙淙流水",
        "淙淙"
      ]
    },
    "忄": {
      "char": "悰",
      "bopomofo": "ㄘㄨㄥˊ",
      "words": [
        "樂悰",
        "歡悰"
      ]
    }
  },
  "或": {
    "土": {
      "char": "域",
      "bopomofo": "ㄩˋ",
      "words": [
        "領域",
        "區域",
        "地域"
      ]
    },
    "忄": {
      "char": "惑",
      "bopomofo": "ㄏㄨㄛˋ",
      "words": [
        "疑惑",
        "迷惑",
        "誘惑"
      ]
    }
  },
  "侖": {
    "氵": {
      "char": "淪",
      "bopomofo": "ㄌㄨㄣˊ",
      "words": [
        "淪陷",
        "淪落",
        "沉淪"
      ]
    },
    "人": {
      "char": "倫",
      "bopomofo": "ㄌㄨㄣˊ",
      "words": [
        "倫理",
        "天倫之樂",
        "倫敦"
      ]
    },
    "言": {
      "char": "論",
      "bopomofo": "ㄌㄨㄣˋ",
      "words": [
        "討論",
        "論文",
        "觀點論"
      ]
    },
    "扌": {
      "char": "掄",
      "bopomofo": "ㄌㄨㄣˊ",
      "words": [
        "掄拳",
        "掄板斧"
      ]
    },
    "糸": {
      "char": "綸",
      "bopomofo": "ㄌㄨㄣˊ",
      "words": [
        "有綸",
        "綸直",
        "國有綸"
      ]
    }
  },
  "易": {
    "土": {
      "char": "場",
      "bopomofo": "ㄔㄤˊ",
      "words": [
        "操場",
        "市場",
        "場合"
      ]
    },
    "釒": {
      "char": "錫",
      "bopomofo": "ㄒㄧˊ",
      "words": [
        "金屬錫",
        "錫箔紙",
        "無錫"
      ]
    },
    "肉": {
      "char": "腸",
      "bopomofo": "ㄔㄤˊ",
      "words": [
        "大腸",
        "香腸",
        "心腸"
      ]
    },
    "玉": {
      "char": "瑒",
      "bopomofo": "ㄧㄤˊ",
      "words": [
        "瑒玉",
        "瑒琠"
      ]
    },
    "木": {
      "char": "楊",
      "bopomofo": "ㄧㄤˊ",
      "words": [
        "楊樹",
        "百家姓楊",
        "楊桃"
      ]
    },
    "氵": {
      "char": "湯",
      "bopomofo": "ㄊㄤ",
      "words": [
        "喝湯",
        "湯圓",
        "熱湯"
      ]
    },
    "扌": {
      "char": "揚",
      "bopomofo": "ㄧㄤˊ",
      "words": [
        "表揚",
        "揚手",
        "昂首挺揚"
      ]
    },
    "忄": {
      "char": "惕",
      "bopomofo": "ㄊㄧˋ",
      "words": [
        "警惕"
      ]
    },
    "足": {
      "char": "踢",
      "bopomofo": "ㄊㄧ",
      "words": [
        "踢皮",
        "踢皮球",
        "踢他"
      ]
    }
  },
  "厂": {
    "人": {
      "char": "仄",
      "bopomofo": "ㄗㄜˋ",
      "words": [
        "狹仄",
        "仄路",
        "仄聲"
      ]
    },
    "口": {
      "char": "嚴",
      "bopomofo": "ㄧㄢˊ",
      "words": [
        "態嚴",
        "嚴重",
        "事態嚴"
      ]
    },
    "言": {
      "char": "詹",
      "bopomofo": "ㄓㄢ",
      "words": [
        "謹詹",
        "詹於",
        "謹詹於"
      ]
    }
  },
  "几": {
    "人": {
      "char": "仉",
      "bopomofo": "ㄓㄤˇ",
      "words": [
        "有仉",
        "仉經",
        "代有仉"
      ]
    },
    "木": {
      "char": "朵",
      "bopomofo": "ㄉㄨㄛˇ",
      "words": [
        "花朵",
        "一朵花"
      ]
    },
    "氵": {
      "char": "沿",
      "bopomofo": "ㄧㄢˊ",
      "words": [
        "沿途",
        "沿街",
        "沿街叫"
      ]
    },
    "肉": {
      "char": "肌",
      "bopomofo": "ㄐㄧ",
      "words": [
        "面黃肌瘦"
      ]
    },
    "釒": {
      "char": "鉛",
      "bopomofo": "ㄑㄧㄢ",
      "words": [
        "鉛色"
      ]
    }
  },
  "千": {
    "人": {
      "char": "仟",
      "bopomofo": "ㄑㄧㄢ",
      "words": [
        "仟子"
      ]
    },
    "扌": {
      "char": "扦",
      "bopomofo": "ㄑㄧㄢ",
      "words": [
        "扦子"
      ]
    },
    "艹": {
      "char": "芊",
      "bopomofo": "ㄑㄧㄢ",
      "words": [
        "芊芊"
      ]
    }
  },
  "方": {
    "人": {
      "char": "仿",
      "bopomofo": "ㄈㄤˇ",
      "words": [
        "仿古",
        "模仿",
        "效仿"
      ]
    },
    "忄": {
      "char": "愣",
      "bopomofo": "ㄌㄥ",
      "words": [
        "愣兒"
      ]
    },
    "木": {
      "char": "枋",
      "bopomofo": "ㄈㄤ",
      "words": [
        "枋色"
      ]
    },
    "糸": {
      "char": "紡",
      "bopomofo": "ㄈㄤˇ",
      "words": [
        "紡子"
      ]
    },
    "肉": {
      "char": "肪",
      "bopomofo": "ㄈㄤ",
      "words": [
        "肪色"
      ]
    },
    "艹": {
      "char": "芳",
      "bopomofo": "ㄈㄤ",
      "words": [
        "孤芳自賞",
        "流芳百世"
      ]
    },
    "言": {
      "char": "訪",
      "bopomofo": "ㄈㄤˇ",
      "words": [
        "明察暗訪",
        "探訪",
        "拜訪"
      ]
    }
  },
  "五": {
    "人": {
      "char": "伍",
      "bopomofo": "ㄨˇ",
      "words": [
        "入伍"
      ]
    }
  },
  "犬": {
    "人": {
      "char": "伏",
      "bopomofo": "ㄈㄨˊ",
      "words": [
        "倒伏",
        "伏案",
        "蟄伏",
        "危機四伏"
      ]
    },
    "艹": {
      "char": "莽",
      "bopomofo": "ㄇㄤˇ",
      "words": [
        "莽草",
        "莽夫",
        "莽漢"
      ]
    }
  },
  "半": {
    "人": {
      "char": "伴",
      "bopomofo": "ㄅㄢˋ",
      "words": [
        "伴侶",
        "老伴",
        "夥伴"
      ]
    },
    "扌": {
      "char": "拌",
      "bopomofo": "ㄅㄢˋ",
      "words": [
        "拌勻",
        "攪拌"
      ]
    },
    "氵": {
      "char": "泮",
      "bopomofo": "ㄆㄢˋ",
      "words": [
        "泮宮"
      ]
    },
    "糸": {
      "char": "絆",
      "bopomofo": "ㄅㄢˋ",
      "words": [
        "絆倒",
        "羈絆"
      ]
    },
    "肉": {
      "char": "胖",
      "bopomofo": "ㄆㄢˊ",
      "words": [
        "胖色"
      ]
    }
  },
  "可": {
    "人": {
      "char": "何",
      "bopomofo": "ㄏㄜˊ",
      "words": [
        "何故",
        "何時",
        "何必",
        "何不"
      ]
    },
    "口": {
      "char": "哥",
      "bopomofo": "ㄍㄜ",
      "words": [
        "大哥",
        "哥哥",
        "老哥"
      ]
    },
    "木": {
      "char": "柯",
      "bopomofo": "ㄎㄜ",
      "words": [
        "有柯",
        "柯夢",
        "代有柯"
      ]
    },
    "氵": {
      "char": "河",
      "bopomofo": "ㄏㄜˊ",
      "words": [
        "河流",
        "運河",
        "河套",
        "星河"
      ]
    },
    "艹": {
      "char": "苛",
      "bopomofo": "ㄎㄜ",
      "words": [
        "苛刻",
        "苛責"
      ]
    },
    "言": {
      "char": "訶",
      "bopomofo": "ㄏㄜ",
      "words": [
        "訶色"
      ]
    }
  },
  "乍": {
    "人": {
      "char": "作",
      "bopomofo": "ㄗㄨㄛ",
      "words": [
        "木作",
        "作坊"
      ]
    },
    "忄": {
      "char": "怍",
      "bopomofo": "ㄗㄨㄛˋ",
      "words": [
        "愧怍"
      ]
    },
    "木": {
      "char": "柞",
      "bopomofo": "ㄗㄜˊ",
      "words": [
        "柞色"
      ]
    },
    "肉": {
      "char": "胙",
      "bopomofo": "ㄗㄨㄛˋ",
      "words": [
        "胙色"
      ]
    },
    "艹": {
      "char": "苲",
      "bopomofo": "ㄓㄚˇ",
      "words": [
        "苲色"
      ]
    },
    "言": {
      "char": "詐",
      "bopomofo": "ㄓㄚˇ",
      "words": [
        "詐騙",
        "敲詐",
        "詐降"
      ]
    }
  },
  "羊": {
    "人": {
      "char": "佯",
      "bopomofo": "ㄧㄤˊ",
      "words": [
        "佯子"
      ]
    },
    "忄": {
      "char": "恙",
      "bopomofo": "ㄧㄤˋ",
      "words": [
        "小恙",
        "無恙",
        "來無恙"
      ]
    },
    "氵": {
      "char": "洋",
      "bopomofo": "ㄧㄤˊ",
      "words": [
        "太平洋",
        "大西洋",
        "印度洋"
      ]
    },
    "言": {
      "char": "詳",
      "bopomofo": "ㄒㄧㄤˊ",
      "words": [
        "內詳",
        "詳察",
        "詳談",
        "安詳"
      ]
    }
  },
  "兆": {
    "人": {
      "char": "佻",
      "bopomofo": "ㄊㄧㄠ",
      "words": [
        "輕佻"
      ]
    },
    "扌": {
      "char": "挑",
      "bopomofo": "ㄊㄧㄠ",
      "words": [
        "挑選",
        "挑剔",
        "挑毛病"
      ]
    },
    "木": {
      "char": "桃",
      "bopomofo": "ㄊㄠˊ",
      "words": [
        "壽桃",
        "桃酥"
      ]
    },
    "氵": {
      "char": "洮",
      "bopomofo": "ㄊㄠˊ",
      "words": [
        "洮米",
        "洮河"
      ]
    },
    "足": {
      "char": "跳",
      "bopomofo": "ㄊㄧㄠˋ",
      "words": [
        "跳躍",
        "跳遠",
        "雞飛狗跳",
        "心跳"
      ]
    },
    "釒": {
      "char": "銚",
      "bopomofo": "ㄉㄧㄠˋ",
      "words": [
        "瓦銚",
        "茶銚",
        "酒銚"
      ]
    }
  },
  "口": {
    "人": {
      "char": "侃",
      "bopomofo": "ㄎㄢˇ",
      "words": [
        "侃侃",
        "侃爾"
      ]
    },
    "口": {
      "char": "古",
      "bopomofo": "ㄍㄨˇ",
      "words": [
        "古今中外",
        "貴古賤今"
      ]
    },
    "扌": {
      "char": "扣",
      "bopomofo": "ㄎㄡˋ",
      "words": [
        "扣緊",
        "扣押",
        "扣留"
      ]
    },
    "木": {
      "char": "杏",
      "bopomofo": "ㄒㄧㄥˋ",
      "words": [
        "杏色"
      ]
    },
    "言": {
      "char": "言",
      "bopomofo": "ㄧㄢˊ",
      "words": [
        "難言",
        "言之",
        "難言之"
      ]
    },
    "足": {
      "char": "足",
      "bopomofo": "ㄐㄩˋ",
      "words": [
        "足恭"
      ]
    },
    "釒": {
      "char": "釦",
      "bopomofo": "ㄎㄡˋ",
      "words": [
        "釦色"
      ]
    }
  },
  "寺": {
    "人": {
      "char": "侍",
      "bopomofo": "ㄕˋ",
      "words": [
        "女侍",
        "侍從"
      ]
    },
    "忄": {
      "char": "恃",
      "bopomofo": "ㄕˋ",
      "words": [
        "恃才",
        "恃才傲",
        "有恃"
      ]
    },
    "扌": {
      "char": "持",
      "bopomofo": "ㄔˊ",
      "words": [
        "持槍",
        "持筆",
        "保持"
      ]
    },
    "言": {
      "char": "詩",
      "bopomofo": "ㄕ",
      "words": [
        "詩經"
      ]
    }
  },
  "同": {
    "人": {
      "char": "侗",
      "bopomofo": "ㄉㄨㄥˋ",
      "words": [
        "侗族"
      ]
    },
    "忄": {
      "char": "恫",
      "bopomofo": "ㄉㄨㄥˋ",
      "words": [
        "恫喝",
        "恫嚇"
      ]
    },
    "木": {
      "char": "桐",
      "bopomofo": "ㄊㄨㄥˊ",
      "words": [
        "泡桐",
        "梧桐",
        "油桐"
      ]
    },
    "氵": {
      "char": "洞",
      "bopomofo": "ㄉㄨㄥˋ",
      "words": [
        "山洞",
        "洞悉"
      ]
    },
    "肉": {
      "char": "胴",
      "bopomofo": "ㄉㄨㄥˋ",
      "words": [
        "胴體"
      ]
    },
    "艹": {
      "char": "茼",
      "bopomofo": "ㄊㄨㄥˊ",
      "words": [
        "茼蒿"
      ]
    },
    "釒": {
      "char": "銅",
      "bopomofo": "ㄊㄨㄥˊ",
      "words": [
        "銅綠"
      ]
    }
  },
  "我": {
    "人": {
      "char": "俄",
      "bopomofo": "ㄜˊ",
      "words": [
        "俄羅斯"
      ]
    },
    "艹": {
      "char": "莪",
      "bopomofo": "ㄜˊ",
      "words": [
        "即莪",
        "莪蒿",
        "即莪蒿"
      ]
    }
  },
  "且": {
    "人": {
      "char": "俎",
      "bopomofo": "ㄗㄨˇ",
      "words": [
        "有俎",
        "俎有",
        "代有俎"
      ]
    },
    "氵": {
      "char": "沮",
      "bopomofo": "ㄐㄩ",
      "words": [
        "沮壞",
        "沮喪",
        "氣沮"
      ]
    },
    "糸": {
      "char": "組",
      "bopomofo": "ㄗㄨˇ",
      "words": [
        "小組",
        "組織",
        "組閣"
      ]
    },
    "艹": {
      "char": "苴",
      "bopomofo": "ㄐㄩ",
      "words": [
        "有苴",
        "苴那",
        "代有苴"
      ]
    },
    "言": {
      "char": "詛",
      "bopomofo": "ㄗㄨˇ",
      "words": [
        "詛咒"
      ]
    }
  },
  "谷": {
    "人": {
      "char": "俗",
      "bopomofo": "ㄙㄨˊ",
      "words": [
        "禮俗",
        "陋俗",
        "入境隨俗",
        "移風易俗"
      ]
    },
    "氵": {
      "char": "浴",
      "bopomofo": "ㄩˋ",
      "words": [
        "沐浴",
        "浴佛",
        "浴血"
      ]
    }
  },
  "非": {
    "人": {
      "char": "俳",
      "bopomofo": "ㄆㄞˊ",
      "words": [
        "俳倡",
        "俳優",
        "俳體"
      ]
    },
    "忄": {
      "char": "悱",
      "bopomofo": "ㄈㄟˇ",
      "words": [
        "悱色"
      ]
    },
    "扌": {
      "char": "排",
      "bopomofo": "ㄆㄞˇ",
      "words": [
        "排子車",
        "鞋排",
        "排一"
      ]
    },
    "糸": {
      "char": "緋",
      "bopomofo": "ㄈㄟ",
      "words": [
        "緋子"
      ]
    },
    "肉": {
      "char": "腓",
      "bopomofo": "ㄈㄟˊ",
      "words": [
        "腓辟",
        "作腓",
        "臏作腓"
      ]
    },
    "艹": {
      "char": "菲",
      "bopomofo": "ㄈㄟ",
      "words": [
        "芳菲",
        "菲菲",
        "菲律賓"
      ]
    },
    "言": {
      "char": "誹",
      "bopomofo": "ㄈㄟˇ",
      "words": [
        "誹謗",
        "怨誹"
      ]
    }
  },
  "韋": {
    "人": {
      "char": "偉",
      "bopomofo": "ㄨㄟˇ",
      "words": [
        "偉績",
        "豐功偉業"
      ]
    },
    "糸": {
      "char": "緯",
      "bopomofo": "ㄨㄟˇ",
      "words": [
        "北緯",
        "南緯",
        "緯書"
      ]
    },
    "艹": {
      "char": "葦",
      "bopomofo": "ㄨㄟˇ",
      "words": [
        "蘆葦"
      ]
    },
    "言": {
      "char": "諱",
      "bopomofo": "ㄏㄨㄟˋ",
      "words": [
        "諱言",
        "無諱",
        "言無諱"
      ]
    }
  },
  "禺": {
    "人": {
      "char": "偶",
      "bopomofo": "ㄡˇ",
      "words": [
        "木偶",
        "怨偶",
        "佳偶天成"
      ]
    },
    "忄": {
      "char": "愚",
      "bopomofo": "ㄩˊ",
      "words": [
        "愚笨",
        "愚昧",
        "愚昧無"
      ]
    },
    "艹": {
      "char": "萬",
      "bopomofo": "ㄨㄢˋ",
      "words": [
        "除萬",
        "萬難",
        "排除萬"
      ]
    }
  },
  "鬼": {
    "人": {
      "char": "傀",
      "bopomofo": "ㄍㄨㄟ",
      "words": [
        "傀色"
      ]
    },
    "忄": {
      "char": "愧",
      "bopomofo": "ㄎㄨㄟˋ",
      "words": [
        "慚愧",
        "愧不敢當"
      ]
    },
    "木": {
      "char": "槐",
      "bopomofo": "ㄏㄨㄞˊ",
      "words": [
        "科槐",
        "槐樹",
        "豆科槐"
      ]
    },
    "艹": {
      "char": "蒐",
      "bopomofo": "ㄙㄡ",
      "words": [
        "蒐子"
      ]
    }
  },
  "專": {
    "人": {
      "char": "傳",
      "bopomofo": "ㄓㄨㄢˋ",
      "words": [
        "小傳",
        "自傳"
      ]
    },
    "扌": {
      "char": "摶",
      "bopomofo": "ㄊㄨㄢˊ",
      "words": [
        "摶弄",
        "摶土",
        "摶麵"
      ]
    },
    "艹": {
      "char": "蓴",
      "bopomofo": "ㄔㄨㄣˊ",
      "words": [
        "蓴菜",
        "科蓴",
        "蓴菜科"
      ]
    }
  },
  "土": {
    "土": {
      "char": "在",
      "bopomofo": "ㄗㄞˋ",
      "words": [
        "健在",
        "永在",
        "神永在"
      ]
    },
    "木": {
      "char": "杜",
      "bopomofo": "ㄉㄨˋ",
      "words": [
        "杜塞",
        "杜絕"
      ]
    },
    "玉": {
      "char": "王",
      "bopomofo": "ㄨㄤˊ",
      "words": [
        "君王",
        "帝王",
        "國王"
      ]
    },
    "肉": {
      "char": "肚",
      "bopomofo": "ㄉㄨˇ",
      "words": [
        "豬肚"
      ]
    },
    "艹": {
      "char": "芏",
      "bopomofo": "ㄊㄨˇ",
      "words": [
        "江芏",
        "即江芏"
      ]
    }
  },
  "文": {
    "忄": {
      "char": "忞",
      "bopomofo": "ㄇㄧㄣˊ",
      "words": [
        "忞色"
      ]
    },
    "氵": {
      "char": "汶",
      "bopomofo": "ㄨㄣˋ",
      "words": [
        "汶水"
      ]
    },
    "糸": {
      "char": "紊",
      "bopomofo": "ㄨㄣˋ",
      "words": [
        "不紊",
        "條不紊"
      ]
    }
  },
  "不": {
    "木": {
      "char": "杯",
      "bopomofo": "ㄅㄟ",
      "words": [
        "獎杯",
        "界杯",
        "世界杯"
      ]
    }
  },
  "夗": {
    "忄": {
      "char": "怨",
      "bopomofo": "ㄩㄢ",
      "words": [
        "結怨",
        "宿怨",
        "報怨"
      ]
    },
    "艹": {
      "char": "苑",
      "bopomofo": "ㄩˋ",
      "words": [
        "林苑",
        "上林苑",
        "藝苑"
      ]
    }
  },
  "艮": {
    "忄": {
      "char": "恨",
      "bopomofo": "ㄏㄣˋ",
      "words": [
        "恨意",
        "痛恨",
        "悔恨"
      ]
    },
    "木": {
      "char": "根",
      "bopomofo": "ㄍㄣ",
      "words": [
        "樹根",
        "根本",
        "根基"
      ]
    },
    "艹": {
      "char": "茛",
      "bopomofo": "ㄍㄣˋ",
      "words": [
        "毛茛",
        "茛苕"
      ]
    },
    "足": {
      "char": "跟",
      "bopomofo": "ㄍㄣ",
      "words": [
        "跟隨",
        "高跟鞋",
        "跟班"
      ]
    },
    "釒": {
      "char": "銀",
      "bopomofo": "ㄧㄣˊ",
      "words": [
        "銀行",
        "銀牌",
        "銀色"
      ]
    }
  },
  "各": {
    "忄": {
      "char": "恪",
      "bopomofo": "ㄎㄜˋ",
      "words": [
        "恪守",
        "恪遵",
        "有恪"
      ]
    },
    "木": {
      "char": "格",
      "bopomofo": "ㄍㄜˊ",
      "words": [
        "窗格",
        "方格",
        "三格"
      ]
    },
    "氵": {
      "char": "洛",
      "bopomofo": "ㄌㄨㄛˋ",
      "words": [
        "洛水",
        "洛陽"
      ]
    },
    "糸": {
      "char": "絡",
      "bopomofo": "ㄌㄠˋ",
      "words": [
        "絡色"
      ]
    },
    "肉": {
      "char": "胳",
      "bopomofo": "ㄍㄜ",
      "words": [
        "胳膊",
        "胳臂"
      ]
    },
    "足": {
      "char": "路",
      "bopomofo": "ㄌㄨˋ",
      "words": [
        "陸路",
        "水路",
        "高速公路",
        "思路"
      ]
    },
    "釒": {
      "char": "鉻",
      "bopomofo": "ㄍㄜˋ",
      "words": [
        "鉻色"
      ]
    }
  },
  "束": {
    "忄": {
      "char": "悚",
      "bopomofo": "ㄙㄨㄥˇ",
      "words": [
        "悚色"
      ]
    },
    "木": {
      "char": "柬",
      "bopomofo": "ㄐㄧㄢˇ",
      "words": [
        "書柬",
        "請柬"
      ]
    },
    "氵": {
      "char": "涑",
      "bopomofo": "ㄙㄨˋ",
      "words": [
        "涑水"
      ]
    }
  },
  "少": {
    "扌": {
      "char": "抄",
      "bopomofo": "ㄔㄠ",
      "words": [
        "包抄",
        "抄捷",
        "抄捷徑"
      ]
    },
    "木": {
      "char": "杪",
      "bopomofo": "ㄇㄧㄠˇ",
      "words": [
        "木杪",
        "樹杪",
        "歲杪"
      ]
    },
    "氵": {
      "char": "沙",
      "bopomofo": "ㄕㄚ",
      "words": [
        "風沙",
        "泥沙",
        "飛沙"
      ]
    },
    "糸": {
      "char": "紗",
      "bopomofo": "ㄕㄚ",
      "words": [
        "窗紗",
        "鐵紗",
        "棉紗"
      ]
    },
    "釒": {
      "char": "鈔",
      "bopomofo": "ㄔㄠ",
      "words": [
        "大鈔",
        "元大鈔",
        "破鈔"
      ]
    }
  },
  "巴": {
    "扌": {
      "char": "把",
      "bopomofo": "ㄅㄚˇ",
      "words": [
        "把手言歡",
        "把守",
        "把關"
      ]
    },
    "木": {
      "char": "杷",
      "bopomofo": "˙ㄅㄚ",
      "words": [
        "杷色"
      ]
    },
    "玉": {
      "char": "琶",
      "bopomofo": "˙ㄅㄚ",
      "words": [
        "琶色"
      ]
    },
    "糸": {
      "char": "絕",
      "bopomofo": "ㄐㄩㄝˊ",
      "words": [
        "斷絕",
        "隔絕",
        "杜絕"
      ]
    },
    "肉": {
      "char": "肥",
      "bopomofo": "ㄈㄟˊ",
      "words": [
        "肥胖",
        "肥豬",
        "肥肉",
        "肥缺"
      ]
    },
    "艹": {
      "char": "芭",
      "bopomofo": "ㄅㄚ",
      "words": [
        "芭蕉",
        "有芭",
        "芭莨"
      ]
    },
    "釒": {
      "char": "鈀",
      "bopomofo": "ㄅㄚ",
      "words": [
        "鈀色"
      ]
    }
  },
  "爪": {
    "扌": {
      "char": "抓",
      "bopomofo": "ㄓㄠ",
      "words": [
        "抓癢",
        "抓一把",
        "抓住"
      ]
    }
  },
  "殳": {
    "扌": {
      "char": "投",
      "bopomofo": "ㄊㄡˊ",
      "words": [
        "投籃",
        "投入"
      ]
    },
    "肉": {
      "char": "股",
      "bopomofo": "ㄍㄨˇ",
      "words": [
        "合股",
        "拆股"
      ]
    },
    "艹": {
      "char": "芟",
      "bopomofo": "ㄕㄢ",
      "words": [
        "芟色"
      ]
    },
    "言": {
      "char": "設",
      "bopomofo": "ㄕㄜˋ",
      "words": [
        "擺設",
        "設計",
        "設法"
      ]
    },
    "釒": {
      "char": "鑿",
      "bopomofo": "ㄗㄠˊ",
      "words": [
        "鑿色"
      ]
    }
  },
  "皮": {
    "扌": {
      "char": "披",
      "bopomofo": "ㄆㄟ",
      "words": [
        "披卷",
        "披襟",
        "披頭"
      ]
    },
    "氵": {
      "char": "波",
      "bopomofo": "ㄅㄛ",
      "words": [
        "海波",
        "眼波",
        "秋波"
      ]
    },
    "足": {
      "char": "跛",
      "bopomofo": "ㄅㄛˇ",
      "words": [
        "跛腳"
      ]
    }
  },
  "巨": {
    "扌": {
      "char": "拒",
      "bopomofo": "ㄐㄩˋ",
      "words": [
        "抗拒",
        "拒敵",
        "拒絕",
        "來者不拒"
      ]
    },
    "艹": {
      "char": "苣",
      "bopomofo": "ㄐㄩˋ",
      "words": [
        "萵苣"
      ]
    },
    "足": {
      "char": "距",
      "bopomofo": "ㄐㄩˋ",
      "words": [
        "行距",
        "距離"
      ]
    },
    "釒": {
      "char": "鉅",
      "bopomofo": "ㄐㄩˋ",
      "words": [
        "鉅款"
      ]
    }
  },
  "辰": {
    "扌": {
      "char": "振",
      "bopomofo": "ㄓㄣ",
      "words": [
        "振振",
        "大振",
        "不振"
      ]
    },
    "肉": {
      "char": "脣",
      "bopomofo": "ㄔㄨㄣˊ",
      "words": [
        "嘴脣",
        "兔脣",
        "脣齒"
      ]
    }
  },
  "采": {
    "扌": {
      "char": "採",
      "bopomofo": "ㄘㄞˇ",
      "words": [
        "採色"
      ]
    },
    "糸": {
      "char": "綵",
      "bopomofo": "ㄘㄞˇ",
      "words": [
        "綵色"
      ]
    },
    "艹": {
      "char": "菜",
      "bopomofo": "ㄘㄞˋ",
      "words": [
        "白菜",
        "菠菜",
        "川菜"
      ]
    },
    "足": {
      "char": "踩",
      "bopomofo": "ㄘㄞˇ",
      "words": [
        "踩高",
        "踩高蹺",
        "勿踩"
      ]
    }
  },
  "奐": {
    "扌": {
      "char": "換",
      "bopomofo": "ㄏㄨㄢˋ",
      "words": [
        "換錢",
        "互換",
        "交換",
        "更換"
      ]
    },
    "氵": {
      "char": "渙",
      "bopomofo": "ㄏㄨㄢˋ",
      "words": [
        "渙散"
      ]
    }
  },
  "麻": {
    "扌": {
      "char": "摩",
      "bopomofo": "ㄇㄚ",
      "words": [
        "摩挲",
        "摩擦",
        "觀摩"
      ]
    },
    "糸": {
      "char": "縻",
      "bopomofo": "ㄇㄧˊ",
      "words": [
        "有縻",
        "縻元",
        "代有縻"
      ]
    }
  },
  "王": {
    "肉": {
      "char": "望",
      "bopomofo": "ㄨㄤˋ",
      "words": [
        "高望",
        "望遠",
        "登高望"
      ]
    },
    "木": {
      "char": "枉",
      "bopomofo": "ㄨㄤˇ",
      "words": [
        "枉尺",
        "贓枉",
        "枉法"
      ]
    },
    "氵": {
      "char": "汪",
      "bopomofo": "ㄨㄤ",
      "words": [
        "汪洋",
        "汪洋大",
        "一汪"
      ]
    },
    "玉": {
      "char": "玉",
      "bopomofo": "ㄩˋ",
      "words": [
        "閃玉",
        "玉或",
        "輝玉"
      ]
    },
    "釒": {
      "char": "金",
      "bopomofo": "ㄐㄧㄣ",
      "words": [
        "金屬",
        "金屬元",
        "合金"
      ]
    }
  },
  "牙": {
    "木": {
      "char": "枒",
      "bopomofo": "ㄧㄚˊ",
      "words": [
        "枒杈"
      ]
    },
    "艹": {
      "char": "芽",
      "bopomofo": "ㄧㄚˊ",
      "words": [
        "豆芽",
        "麥芽",
        "嫩芽",
        "肉芽"
      ]
    },
    "言": {
      "char": "訝",
      "bopomofo": "ㄧㄚˋ",
      "words": [
        "驚訝",
        "訝異"
      ]
    }
  },
  "矛": {
    "木": {
      "char": "柔",
      "bopomofo": "ㄖㄡˊ",
      "words": [
        "柔弱",
        "柔能克剛"
      ]
    },
    "艹": {
      "char": "茅",
      "bopomofo": "ㄇㄠˊ",
      "words": [
        "白茅"
      ]
    }
  },
  "市": {
    "木": {
      "char": "柿",
      "bopomofo": "ㄕˋ",
      "words": [
        "柿餅"
      ]
    }
  },
  "羽": {
    "木": {
      "char": "栩",
      "bopomofo": "ㄒㄩˇ",
      "words": [
        "栩栩"
      ]
    },
    "言": {
      "char": "詡",
      "bopomofo": "ㄒㄩˇ",
      "words": [
        "自詡"
      ]
    },
    "足": {
      "char": "蹋",
      "bopomofo": "ㄊㄚˋ",
      "words": [
        "蹧蹋"
      ]
    }
  },
  "亥": {
    "木": {
      "char": "核",
      "bopomofo": "ㄏㄜˊ",
      "words": [
        "果核",
        "細胞核"
      ]
    },
    "言": {
      "char": "該",
      "bopomofo": "ㄍㄞ",
      "words": [
        "應該",
        "該處",
        "該帳"
      ]
    }
  },
  "辛": {
    "木": {
      "char": "梓",
      "bopomofo": "ㄗˇ",
      "words": [
        "科梓",
        "梓屬",
        "葳科梓"
      ]
    },
    "艹": {
      "char": "莘",
      "bopomofo": "ㄒㄧㄣ",
      "words": [
        "莘色"
      ]
    },
    "糸": {
      "char": "辮",
      "bopomofo": "ㄅㄧㄢˋ",
      "words": [
        "髮辮",
        "垂辮",
        "結辮"
      ]
    },
    "釒": {
      "char": "鋅",
      "bopomofo": "ㄒㄧㄣ",
      "words": [
        "中鋅",
        "鋅均",
        "界中鋅"
      ]
    }
  },
  "東": {
    "木": {
      "char": "棟",
      "bopomofo": "ㄉㄨㄥˋ",
      "words": [
        "棟子"
      ]
    }
  },
  "風": {
    "木": {
      "char": "楓",
      "bopomofo": "ㄈㄥ",
      "words": [
        "角楓",
        "三角楓",
        "五角楓"
      ]
    },
    "言": {
      "char": "諷",
      "bopomofo": "ㄈㄥ",
      "words": [
        "諷色"
      ]
    }
  },
  "卂": {
    "氵": {
      "char": "汛",
      "bopomofo": "ㄒㄩㄣˋ",
      "words": [
        "汛掃",
        "潮汛",
        "秋汛",
        "桃花汛"
      ]
    },
    "言": {
      "char": "訊",
      "bopomofo": "ㄒㄩㄣˋ",
      "words": [
        "審訊",
        "偵訊",
        "喜訊",
        "問訊"
      ]
    }
  },
  "开": {
    "氵": {
      "char": "汧",
      "bopomofo": "ㄑㄧㄢ",
      "words": [
        "汧色"
      ]
    },
    "足": {
      "char": "趼",
      "bopomofo": "ㄐㄧㄢˇ",
      "words": [
        "趼色"
      ]
    }
  },
  "及": {
    "氵": {
      "char": "汲",
      "bopomofo": "ㄐㄧˊ",
      "words": [
        "汲水",
        "汲引"
      ]
    },
    "糸": {
      "char": "級",
      "bopomofo": "ㄐㄧˊ",
      "words": [
        "高級",
        "特級",
        "輔導級"
      ]
    },
    "艹": {
      "char": "芨",
      "bopomofo": "ㄐㄧˊ",
      "words": [
        "白芨",
        "芨屬",
        "科白芨"
      ]
    },
    "足": {
      "char": "趿",
      "bopomofo": "ㄊㄚ",
      "words": [
        "趿拉"
      ]
    }
  },
  "永": {
    "氵": {
      "char": "泳",
      "bopomofo": "ㄩㄥˇ",
      "words": [
        "游泳"
      ]
    },
    "肉": {
      "char": "脈",
      "bopomofo": "ㄇㄛˋ",
      "words": [
        "脈脈"
      ]
    },
    "言": {
      "char": "詠",
      "bopomofo": "ㄩㄥˇ",
      "words": [
        "吟詠"
      ]
    }
  },
  "聿": {
    "氵": {
      "char": "津",
      "bopomofo": "ㄐㄧㄣ",
      "words": [
        "生津止渴",
        "津浦鐵路"
      ]
    }
  },
  "巠": {
    "氵": {
      "char": "涇",
      "bopomofo": "ㄐㄧㄥ",
      "words": [
        "涇河"
      ]
    },
    "糸": {
      "char": "經",
      "bopomofo": "ㄐㄧㄥ",
      "words": [
        "東經",
        "西經",
        "經脈"
      ]
    },
    "肉": {
      "char": "脛",
      "bopomofo": "ㄐㄧㄥˋ",
      "words": [
        "脛色"
      ]
    },
    "艹": {
      "char": "莖",
      "bopomofo": "ㄐㄧㄥ",
      "words": [
        "數莖",
        "草數莖"
      ]
    },
    "言": {
      "char": "誙",
      "bopomofo": "ㄎㄥ",
      "words": [
        "誙誙"
      ]
    }
  },
  "片": {
    "氵": {
      "char": "淵",
      "bopomofo": "ㄩㄢ",
      "words": [
        "深淵",
        "臨深淵",
        "淵源"
      ]
    }
  },
  "骨": {
    "氵": {
      "char": "滑",
      "bopomofo": "ㄍㄨˇ",
      "words": [
        "滑稽",
        "光滑",
        "滑頭"
      ]
    }
  },
  "舀": {
    "氵": {
      "char": "滔",
      "bopomofo": "ㄊㄠ",
      "words": [
        "滔天",
        "滔滔"
      ]
    },
    "足": {
      "char": "蹈",
      "bopomofo": "ㄉㄠˋ",
      "words": [
        "湯蹈",
        "蹈火",
        "赴湯蹈"
      ]
    }
  },
  "㐱": {
    "肉": {
      "char": "胗",
      "bopomofo": "ㄓㄣ",
      "words": [
        "雞胗",
        "鴨胗"
      ]
    },
    "言": {
      "char": "診",
      "bopomofo": "ㄓㄣ",
      "words": [
        "診子"
      ]
    }
  },
  "冉": {
    "艹": {
      "char": "苒",
      "bopomofo": "ㄖㄢˇ",
      "words": [
        "苒苒",
        "苒荏"
      ]
    }
  },
  "戊": {
    "艹": {
      "char": "茂",
      "bopomofo": "ㄇㄠˋ",
      "words": [
        "茂盛",
        "茂密",
        "葉茂"
      ]
    }
  },
  "芻": {
    "言": {
      "char": "謅",
      "bopomofo": "ㄗㄡ",
      "words": [
        "瞎謅",
        "胡謅",
        "口胡謅"
      ]
    }
  },
  "夆": {
    "釒": {
      "char": "鋒",
      "bopomofo": "ㄈㄥ",
      "words": [
        "刀鋒",
        "筆鋒",
        "針鋒"
      ]
    }
  }
};
