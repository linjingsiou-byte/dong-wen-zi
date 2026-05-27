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
  {
    "id": 1,
    "strokes": "二",
    "component": "丁",
    "common_chars": [
      "仃",
      "可",
      "打",
      "汀",
      "玎",
      "訂",
      "釘"
    ]
  },
  {
    "id": 2,
    "strokes": "二",
    "component": "卜",
    "common_chars": [
      "仆",
      "扑",
      "朴",
      "訃"
    ]
  },
  {
    "id": 3,
    "strokes": "二",
    "component": "厂",
    "common_chars": [
      "仄"
    ]
  },
  {
    "id": 4,
    "strokes": "二",
    "component": "几",
    "common_chars": [
      "仉",
      "朵",
      "肌"
    ]
  },
  {
    "id": 5,
    "strokes": "二",
    "component": "又",
    "common_chars": [
      "叹"
    ]
  },
  {
    "id": 6,
    "strokes": "三",
    "component": "工",
    "common_chars": [
      "扛",
      "杠",
      "江",
      "紅",
      "肛",
      "訌"
    ]
  },
  {
    "id": 7,
    "strokes": "三",
    "component": "口",
    "common_chars": [
      "扣",
      "束",
      "釦"
    ]
  },
  {
    "id": 8,
    "strokes": "三",
    "component": "土",
    "common_chars": [
      "吐",
      "圭",
      "杜",
      "肚",
      "芏"
    ]
  },
  {
    "id": 9,
    "strokes": "三",
    "component": "子",
    "common_chars": [
      "仔",
      "李"
    ]
  },
  {
    "id": 10,
    "strokes": "三",
    "component": "己",
    "common_chars": [
      "圮",
      "忌",
      "杞",
      "紀",
      "芑",
      "記"
    ]
  },
  {
    "id": 11,
    "strokes": "三",
    "component": "寸",
    "common_chars": [
      "付",
      "吋",
      "忖",
      "村",
      "紂",
      "肘",
      "討"
    ]
  },
  {
    "id": 12,
    "strokes": "三",
    "component": "尤",
    "common_chars": []
  },
  {
    "id": 13,
    "strokes": "三",
    "component": "千",
    "common_chars": [
      "仟",
      "扦",
      "芊"
    ]
  },
  {
    "id": 14,
    "strokes": "四",
    "component": "屯",
    "common_chars": [
      "沌",
      "純",
      "肫",
      "鈍"
    ]
  },
  {
    "id": 15,
    "strokes": "四",
    "component": "支",
    "common_chars": [
      "伎",
      "吱",
      "忮",
      "技",
      "枝",
      "肢",
      "芰",
      "跂"
    ]
  },
  {
    "id": 16,
    "strokes": "四",
    "component": "戈",
    "common_chars": [
      "伐",
      "找",
      "栽"
    ]
  },
  {
    "id": 17,
    "strokes": "四",
    "component": "少",
    "common_chars": [
      "吵",
      "抄",
      "杪",
      "沙",
      "紗",
      "鈔"
    ]
  },
  {
    "id": 18,
    "strokes": "四",
    "component": "巴",
    "common_chars": [
      "吧",
      "把",
      "杷",
      "肥",
      "芭",
      "鈀"
    ]
  },
  {
    "id": 19,
    "strokes": "四",
    "component": "方",
    "common_chars": [
      "仿",
      "坊",
      "枋",
      "紡",
      "肪",
      "芳",
      "訪"
    ]
  },
  {
    "id": 20,
    "strokes": "四",
    "component": "牙",
    "common_chars": [
      "呀",
      "枒",
      "芽",
      "訝"
    ]
  },
  {
    "id": 21,
    "strokes": "四",
    "component": "卂",
    "common_chars": [
      "汛",
      "訊"
    ]
  },
  {
    "id": 22,
    "strokes": "四",
    "component": "五",
    "common_chars": [
      "伍",
      "吾"
    ]
  },
  {
    "id": 23,
    "strokes": "四",
    "component": "及",
    "common_chars": [
      "吸",
      "圾",
      "汲",
      "級",
      "芨",
      "趿"
    ]
  },
  {
    "id": 24,
    "strokes": "四",
    "component": "殳",
    "common_chars": [
      "投",
      "股",
      "芟",
      "設"
    ]
  },
  {
    "id": 25,
    "strokes": "四",
    "component": "开",
    "common_chars": [
      "汧",
      "趼"
    ]
  },
  {
    "id": 26,
    "strokes": "四",
    "component": "不",
    "common_chars": [
      "否",
      "杯"
    ]
  },
  {
    "id": 27,
    "strokes": "四",
    "component": "巨",
    "common_chars": [
      "拒",
      "苣",
      "距",
      "鉅"
    ]
  },
  {
    "id": 28,
    "strokes": "四",
    "component": "王",
    "common_chars": [
      "呈",
      "枉",
      "汪",
      "玨"
    ]
  },
  {
    "id": 29,
    "strokes": "四",
    "component": "文",
    "common_chars": [
      "吝",
      "忞",
      "汶",
      "玟",
      "紋"
    ]
  },
  {
    "id": 30,
    "strokes": "四",
    "component": "爪",
    "common_chars": [
      "抓"
    ]
  },
  {
    "id": 31,
    "strokes": "四",
    "component": "犬",
    "common_chars": [
      "伏",
      "吠"
    ]
  },
  {
    "id": 32,
    "strokes": "四",
    "component": "片",
    "common_chars": []
  },
  {
    "id": 33,
    "strokes": "四",
    "component": "市",
    "common_chars": [
      "柿"
    ]
  },
  {
    "id": 34,
    "strokes": "五",
    "component": "且",
    "common_chars": [
      "咀",
      "沮",
      "組",
      "苴",
      "詛"
    ]
  },
  {
    "id": 35,
    "strokes": "五",
    "component": "乍",
    "common_chars": [
      "作",
      "咋",
      "怎",
      "柞",
      "胙",
      "苲",
      "詐"
    ]
  },
  {
    "id": 36,
    "strokes": "五",
    "component": "半",
    "common_chars": [
      "伴",
      "拌",
      "泮",
      "絆",
      "胖"
    ]
  },
  {
    "id": 37,
    "strokes": "五",
    "component": "可",
    "common_chars": [
      "何",
      "呵",
      "坷",
      "柯",
      "河",
      "珂",
      "苛",
      "訶"
    ]
  },
  {
    "id": 38,
    "strokes": "五",
    "component": "皮",
    "common_chars": [
      "坡",
      "披",
      "波",
      "玻",
      "跛"
    ]
  },
  {
    "id": 39,
    "strokes": "五",
    "component": "夗",
    "common_chars": [
      "怨",
      "苑"
    ]
  },
  {
    "id": 40,
    "strokes": "五",
    "component": "㐱",
    "common_chars": [
      "胗",
      "診"
    ]
  },
  {
    "id": 41,
    "strokes": "五",
    "component": "冉",
    "common_chars": [
      "苒"
    ]
  },
  {
    "id": 42,
    "strokes": "五",
    "component": "史",
    "common_chars": []
  },
  {
    "id": 43,
    "strokes": "五",
    "component": "戊",
    "common_chars": [
      "茂"
    ]
  },
  {
    "id": 44,
    "strokes": "五",
    "component": "矛",
    "common_chars": [
      "柔",
      "茅"
    ]
  },
  {
    "id": 45,
    "strokes": "五",
    "component": "矢",
    "common_chars": []
  },
  {
    "id": 46,
    "strokes": "五",
    "component": "永",
    "common_chars": [
      "泳",
      "脈",
      "詠"
    ]
  },
  {
    "id": 47,
    "strokes": "六",
    "component": "亥",
    "common_chars": [
      "咳",
      "垓",
      "核",
      "該"
    ]
  },
  {
    "id": 48,
    "strokes": "六",
    "component": "兆",
    "common_chars": [
      "佻",
      "挑",
      "桃",
      "洮",
      "珧",
      "跳",
      "銚"
    ]
  },
  {
    "id": 49,
    "strokes": "六",
    "component": "各",
    "common_chars": [
      "咯",
      "恪",
      "格",
      "洛",
      "珞",
      "絡",
      "胳",
      "路",
      "鉻"
    ]
  },
  {
    "id": 50,
    "strokes": "六",
    "component": "同",
    "common_chars": [
      "侗",
      "垌",
      "恫",
      "桐",
      "洞",
      "胴",
      "茼",
      "銅"
    ]
  },
  {
    "id": 51,
    "strokes": "六",
    "component": "寺",
    "common_chars": [
      "侍",
      "恃",
      "持",
      "詩"
    ]
  },
  {
    "id": 52,
    "strokes": "六",
    "component": "聿",
    "common_chars": [
      "津"
    ]
  },
  {
    "id": 53,
    "strokes": "六",
    "component": "艮",
    "common_chars": [
      "哏",
      "垠",
      "恨",
      "根",
      "茛",
      "跟",
      "銀"
    ]
  },
  {
    "id": 54,
    "strokes": "六",
    "component": "束",
    "common_chars": [
      "悚",
      "涑"
    ]
  },
  {
    "id": 55,
    "strokes": "六",
    "component": "曲",
    "common_chars": []
  },
  {
    "id": 56,
    "strokes": "六",
    "component": "羊",
    "common_chars": [
      "佯",
      "咩",
      "恙",
      "洋",
      "詳"
    ]
  },
  {
    "id": 57,
    "strokes": "六",
    "component": "缶",
    "common_chars": []
  },
  {
    "id": 58,
    "strokes": "六",
    "component": "羽",
    "common_chars": [
      "栩",
      "詡"
    ]
  },
  {
    "id": 59,
    "strokes": "六",
    "component": "舟",
    "common_chars": []
  },
  {
    "id": 60,
    "strokes": "七",
    "component": "每",
    "common_chars": [
      "侮",
      "悔",
      "梅",
      "海",
      "脢",
      "莓",
      "誨"
    ]
  },
  {
    "id": 61,
    "strokes": "七",
    "component": "甬",
    "common_chars": [
      "俑",
      "恿",
      "捅",
      "桶",
      "涌",
      "誦",
      "踊"
    ]
  },
  {
    "id": 62,
    "strokes": "七",
    "component": "肖",
    "common_chars": [
      "俏",
      "哨",
      "悄",
      "捎",
      "梢",
      "消",
      "誚",
      "銷"
    ]
  },
  {
    "id": 63,
    "strokes": "七",
    "component": "良",
    "common_chars": [
      "朗",
      "浪",
      "琅",
      "莨",
      "踉",
      "鋃"
    ]
  },
  {
    "id": 64,
    "strokes": "七",
    "component": "我",
    "common_chars": [
      "俄",
      "哦",
      "莪"
    ]
  },
  {
    "id": 65,
    "strokes": "七",
    "component": "巠",
    "common_chars": [
      "涇",
      "經",
      "脛",
      "莖",
      "誙"
    ]
  },
  {
    "id": 66,
    "strokes": "七",
    "component": "夆",
    "common_chars": [
      "鋒"
    ]
  },
  {
    "id": 67,
    "strokes": "七",
    "component": "豆",
    "common_chars": []
  },
  {
    "id": 68,
    "strokes": "七",
    "component": "谷",
    "common_chars": [
      "俗",
      "浴"
    ]
  },
  {
    "id": 69,
    "strokes": "七",
    "component": "辛",
    "common_chars": [
      "梓",
      "莘",
      "鋅"
    ]
  },
  {
    "id": 70,
    "strokes": "七",
    "component": "辰",
    "common_chars": [
      "振",
      "脣"
    ]
  },
  {
    "id": 71,
    "strokes": "七",
    "component": "采",
    "common_chars": [
      "採",
      "綵",
      "菜",
      "踩"
    ]
  },
  {
    "id": 72,
    "strokes": "八",
    "component": "侖",
    "common_chars": [
      "倫",
      "掄",
      "淪",
      "綸",
      "論"
    ]
  },
  {
    "id": 73,
    "strokes": "八",
    "component": "宗",
    "common_chars": [
      "棕",
      "淙",
      "琮",
      "綜"
    ]
  },
  {
    "id": 74,
    "strokes": "八",
    "component": "或",
    "common_chars": [
      "域",
      "惑"
    ]
  },
  {
    "id": 75,
    "strokes": "八",
    "component": "果",
    "common_chars": [
      "倮",
      "棵",
      "課",
      "踝"
    ]
  },
  {
    "id": 76,
    "strokes": "八",
    "component": "者",
    "common_chars": [
      "堵",
      "楮",
      "渚",
      "緒",
      "著",
      "諸"
    ]
  },
  {
    "id": 77,
    "strokes": "八",
    "component": "青",
    "common_chars": [
      "倩",
      "情",
      "清",
      "菁",
      "請"
    ]
  },
  {
    "id": 78,
    "strokes": "八",
    "component": "音",
    "common_chars": [
      "喑",
      "意",
      "揞",
      "諳"
    ]
  },
  {
    "id": 79,
    "strokes": "八",
    "component": "非",
    "common_chars": [
      "俳",
      "啡",
      "悲",
      "排",
      "緋",
      "腓",
      "菲",
      "誹"
    ]
  },
  {
    "id": 80,
    "strokes": "八",
    "component": "東",
    "common_chars": [
      "棟"
    ]
  },
  {
    "id": 81,
    "strokes": "九",
    "component": "易",
    "common_chars": [
      "埸",
      "惕",
      "踢",
      "錫"
    ]
  },
  {
    "id": 82,
    "strokes": "九",
    "component": "唐",
    "common_chars": [
      "塘",
      "搪",
      "溏"
    ]
  },
  {
    "id": 83,
    "strokes": "九",
    "component": "軍",
    "common_chars": [
      "揮",
      "渾",
      "葷",
      "諢"
    ]
  },
  {
    "id": 84,
    "strokes": "九",
    "component": "重",
    "common_chars": [
      "腫",
      "董",
      "踵",
      "鍾"
    ]
  },
  {
    "id": 85,
    "strokes": "九",
    "component": "革",
    "common_chars": []
  },
  {
    "id": 86,
    "strokes": "九",
    "component": "奐",
    "common_chars": [
      "喚",
      "換",
      "渙"
    ]
  },
  {
    "id": 87,
    "strokes": "九",
    "component": "韋",
    "common_chars": [
      "偉",
      "瑋",
      "緯",
      "葦",
      "諱"
    ]
  },
  {
    "id": 88,
    "strokes": "九",
    "component": "風",
    "common_chars": [
      "楓",
      "諷"
    ]
  },
  {
    "id": 89,
    "strokes": "九",
    "component": "禺",
    "common_chars": [
      "偶",
      "喁",
      "愚",
      "萬"
    ]
  },
  {
    "id": 90,
    "strokes": "十",
    "component": "專",
    "common_chars": [
      "傳",
      "摶",
      "蓴"
    ]
  },
  {
    "id": 91,
    "strokes": "十",
    "component": "舀",
    "common_chars": [
      "滔",
      "蹈"
    ]
  },
  {
    "id": 92,
    "strokes": "十",
    "component": "爻",
    "common_chars": []
  },
  {
    "id": 93,
    "strokes": "十",
    "component": "芻",
    "common_chars": [
      "謅"
    ]
  },
  {
    "id": 94,
    "strokes": "十",
    "component": "馬",
    "common_chars": [
      "嗎",
      "瑪"
    ]
  },
  {
    "id": 95,
    "strokes": "十",
    "component": "骨",
    "common_chars": [
      "滑"
    ]
  },
  {
    "id": 96,
    "strokes": "十",
    "component": "鬼",
    "common_chars": [
      "傀",
      "塊",
      "愧",
      "槐",
      "瑰",
      "蒐"
    ]
  },
  {
    "id": 97,
    "strokes": "十一",
    "component": "商",
    "common_chars": []
  },
  {
    "id": 98,
    "strokes": "十一",
    "component": "麻",
    "common_chars": [
      "嘛",
      "摩",
      "縻"
    ]
  },
  {
    "id": 99,
    "strokes": "十三",
    "component": "僉",
    "common_chars": [
      "儉",
      "撿",
      "檢",
      "臉"
    ]
  },
  {
    "id": 100,
    "strokes": "十三",
    "component": "會",
    "common_chars": [
      "儈",
      "噲",
      "檜",
      "繪",
      "膾",
      "薈"
    ]
  }
];

// 組字百格表資料庫 (20個核心部件 x 14個部首) + 補齊部件的組字關係
const COMBINATIONS = {
  "丁": {
    "人": {
      "char": "仃",
      "bopomofo": "ㄉㄧㄥ",
      "words": [
        "伶仃"
      ]
    },
    "口": {
      "char": "可",
      "bopomofo": "ㄎㄜˇ",
      "words": [
        "許可",
        "可貴",
        "可敬"
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
    "釒": {
      "char": "釘",
      "bopomofo": "ㄉㄧㄥ",
      "words": [
        "釘子",
        "鐵釘",
        "螺絲釘"
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
    }
  },
  "卜": {
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
    "木": {
      "char": "朴",
      "bopomofo": "ㄆㄛˋ",
      "words": [
        "朴子",
        "朴素"
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
    "肉": {
      "char": "肌",
      "bopomofo": "ㄐㄧ",
      "words": [
        "面黃肌瘦"
      ]
    }
  },
  "子": {
    "人": {
      "char": "仔",
      "bopomofo": "ㄗ",
      "words": [
        "仔細",
        "牛仔褲"
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
  "寸": {
    "人": {
      "char": "付",
      "bopomofo": "ㄈㄨˋ",
      "words": [
        "交付",
        "託付",
        "付款"
      ]
    },
    "口": {
      "char": "吋",
      "bopomofo": "ㄘㄨㄣˋ",
      "words": [
        "吋子"
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
    "木": {
      "char": "村",
      "bopomofo": "ㄘㄨㄣ",
      "words": [
        "農村",
        "村莊",
        "村民"
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
    },
    "言": {
      "char": "討",
      "bopomofo": "ㄊㄠˇ",
      "words": [
        "討論",
        "討厭",
        "討好"
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
    "土": {
      "char": "坊",
      "bopomofo": "ㄈㄤ",
      "words": [
        "街坊",
        "磨坊",
        "工作坊",
        "染坊"
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
    },
    "口": {
      "char": "吾",
      "bopomofo": "ㄨˊ",
      "words": [
        "吾吾"
      ]
    }
  },
  "支": {
    "人": {
      "char": "伎",
      "bopomofo": "ㄐㄧˋ",
      "words": [
        "舞伎",
        "伎含",
        "盈舞伎"
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
    "忄": {
      "char": "忮",
      "bopomofo": "ㄓˋ",
      "words": [
        "忮色"
      ]
    },
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
      "bopomofo": "ㄑㄧˊ",
      "words": [
        "樹枝",
        "枝條",
        "枝葉"
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
    "口": {
      "char": "吠",
      "bopomofo": "ㄈㄟˋ",
      "words": [
        "蜀犬吠日",
        "狂吠"
      ]
    }
  },
  "戈": {
    "人": {
      "char": "伐",
      "bopomofo": "ㄈㄚ",
      "words": [
        "砍伐",
        "討伐",
        "步伐"
      ]
    },
    "扌": {
      "char": "找",
      "bopomofo": "ㄓㄠˇ",
      "words": [
        "尋找",
        "找錢",
        "找到"
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
      "char": "呵",
      "bopomofo": "ㄏㄜ",
      "words": [
        "呵責",
        "呵叱",
        "呵手"
      ]
    },
    "土": {
      "char": "坷",
      "bopomofo": "ㄎㄜˇ",
      "words": [
        "坷子"
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
    "玉": {
      "char": "珂",
      "bopomofo": "ㄎㄜ",
      "words": [
        "珂子"
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
    "口": {
      "char": "咋",
      "bopomofo": "ㄓㄚˋ",
      "words": [
        "咋子"
      ]
    },
    "忄": {
      "char": "怎",
      "bopomofo": "ㄗㄜˇ",
      "words": [
        "怎麼"
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
    "口": {
      "char": "咩",
      "bopomofo": "ㄇㄧㄝ",
      "words": [
        "咩子"
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
    "玉": {
      "char": "珧",
      "bopomofo": "ㄧㄠˊ",
      "words": [
        "珧子"
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
    "土": {
      "char": "垌",
      "bopomofo": "ㄉㄨㄥˋ",
      "words": [
        "垌子"
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
  "每": {
    "人": {
      "char": "侮",
      "bopomofo": "ㄨˇ",
      "words": [
        "侮辱",
        "欺侮",
        "輕侮"
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
    },
    "言": {
      "char": "誨",
      "bopomofo": "ㄏㄨㄟˇ",
      "words": [
        "教誨",
        "誨人不倦"
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
    "口": {
      "char": "哦",
      "bopomofo": "ㄛˊ",
      "words": [
        "哦子"
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
  "肖": {
    "人": {
      "char": "俏",
      "bopomofo": "ㄑㄧㄠˋ",
      "words": [
        "俏皮",
        "俊俏",
        "俏麗"
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
    "扌": {
      "char": "捎",
      "bopomofo": "ㄕㄠ",
      "words": [
        "捎信",
        "捎帶"
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
    "言": {
      "char": "誚",
      "bopomofo": "ㄑㄧㄠˋ",
      "words": [
        "誚讓",
        "譏誚"
      ]
    },
    "釒": {
      "char": "銷",
      "bopomofo": "ㄒㄧㄠ",
      "words": [
        "銷量",
        "推銷",
        "註銷"
      ]
    }
  },
  "甬": {
    "人": {
      "char": "俑",
      "bopomofo": "ㄩㄥˇ",
      "words": [
        "兵馬俑",
        "始作俑者"
      ]
    },
    "忄": {
      "char": "恿",
      "bopomofo": "ㄩㄥˇ",
      "words": [
        "慫恿"
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
      "char": "涌",
      "bopomofo": "ㄩㄥˇ",
      "words": [
        "涌子"
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
    "足": {
      "char": "踊",
      "bopomofo": "ㄩㄥˇ",
      "words": [
        "踴躍",
        "踊貴"
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
    "口": {
      "char": "啡",
      "bopomofo": "ㄈㄟ",
      "words": [
        "啡子"
      ]
    },
    "忄": {
      "char": "悲",
      "bopomofo": "ㄅㄟ",
      "words": [
        "含悲",
        "樂極生悲",
        "慈悲"
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
  "青": {
    "人": {
      "char": "倩",
      "bopomofo": "ㄑㄧㄢˋ",
      "words": [
        "倩影",
        "倩女"
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
    "艹": {
      "char": "菁",
      "bopomofo": "ㄐㄧㄥ",
      "words": [
        "菁華",
        "蕪菁"
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
    }
  },
  "侖": {
    "人": {
      "char": "倫",
      "bopomofo": "ㄌㄨㄣˊ",
      "words": [
        "倫理",
        "天倫之樂",
        "倫敦"
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
    "氵": {
      "char": "淪",
      "bopomofo": "ㄌㄨㄣˊ",
      "words": [
        "淪陷",
        "淪落",
        "沉淪"
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
    },
    "言": {
      "char": "論",
      "bopomofo": "ㄌㄨㄣˊ",
      "words": [
        "討論",
        "論文",
        "觀點論"
      ]
    }
  },
  "果": {
    "人": {
      "char": "倮",
      "bopomofo": "ㄌㄨㄛˇ",
      "words": [
        "倮色"
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
    "足": {
      "char": "踝",
      "bopomofo": "ㄏㄨㄞˊ",
      "words": [
        "腳踝",
        "踝關節"
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
    "玉": {
      "char": "瑋",
      "bopomofo": "ㄨㄟˇ",
      "words": [
        "瑋子"
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
    "口": {
      "char": "喁",
      "bopomofo": "ㄩˊ",
      "words": [
        "喁子"
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
    "土": {
      "char": "塊",
      "bopomofo": "ㄎㄨㄞˋ",
      "words": [
        "冰塊"
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
    "玉": {
      "char": "瑰",
      "bopomofo": "ㄍㄨㄟ",
      "words": [
        "瓊瑰",
        "瑰奇",
        "瑰寶"
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
  "會": {
    "人": {
      "char": "儈",
      "bopomofo": "ㄎㄨㄞˋ",
      "words": [
        "市儈",
        "牙儈"
      ]
    },
    "口": {
      "char": "噲",
      "bopomofo": "ㄎㄨㄞˋ",
      "words": [
        "噲子"
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
  "僉": {
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
    "肉": {
      "char": "臉",
      "bopomofo": "ㄌㄧㄢˇ",
      "words": [
        "臉色",
        "洗臉",
        "臉譜"
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
    }
  },
  "土": {
    "口": {
      "char": "吐",
      "bopomofo": "ㄊㄨˇ",
      "words": [
        "吐痰",
        "吐哺",
        "吐露"
      ]
    },
    "土": {
      "char": "圭",
      "bopomofo": "ㄍㄨㄟ",
      "words": [
        "日圭",
        "圭表",
        "圭臬"
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
    "口": {
      "char": "吝",
      "bopomofo": "ㄌㄧㄣˋ",
      "words": [
        "吝嗇",
        "吝惜"
      ]
    },
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
    "玉": {
      "char": "玟",
      "bopomofo": "ㄇㄧㄣˊ",
      "words": [
        "玟子"
      ]
    },
    "糸": {
      "char": "紋",
      "bopomofo": "ㄨㄣˊ",
      "words": [
        "指紋",
        "皺紋",
        "紋身"
      ]
    }
  },
  "不": {
    "口": {
      "char": "否",
      "bopomofo": "ㄆㄧˇ",
      "words": [
        "否極泰來",
        "否德",
        "臧否人物"
      ]
    },
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
  "巴": {
    "口": {
      "char": "吧",
      "bopomofo": "˙ㄅㄚ",
      "words": [
        "酒吧",
        "吧檯",
        "吧女"
      ]
    },
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
  "少": {
    "口": {
      "char": "吵",
      "bopomofo": "ㄔㄠˇ",
      "words": [
        "爭吵",
        "吵架"
      ]
    },
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
  "及": {
    "口": {
      "char": "吸",
      "bopomofo": "ㄒㄧ",
      "words": [
        "吸氣",
        "吸菸"
      ]
    },
    "土": {
      "char": "圾",
      "bopomofo": "ㄐㄧˊ",
      "words": [
        "圾子"
      ]
    },
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
  "牙": {
    "口": {
      "char": "呀",
      "bopomofo": "ㄒㄧㄚ",
      "words": [
        "哎呀"
      ]
    },
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
  "王": {
    "口": {
      "char": "呈",
      "bopomofo": "ㄔㄥˊ",
      "words": [
        "呈現",
        "呈獻"
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
      "char": "玨",
      "bopomofo": "ㄐㄩㄝˊ",
      "words": [
        "玨子"
      ]
    }
  },
  "且": {
    "口": {
      "char": "咀",
      "bopomofo": "ㄐㄩˇ",
      "words": [
        "咀子"
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
  "各": {
    "口": {
      "char": "咯",
      "bopomofo": "˙ㄌㄛ",
      "words": [
        "咯子"
      ]
    },
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
    "玉": {
      "char": "珞",
      "bopomofo": "ㄌㄨㄛˋ",
      "words": [
        "珞子"
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
  "亥": {
    "口": {
      "char": "咳",
      "bopomofo": "ㄎㄚˇ",
      "words": [
        "咳痰",
        "咳血"
      ]
    },
    "土": {
      "char": "垓",
      "bopomofo": "ㄍㄞ",
      "words": [
        "垓子"
      ]
    },
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
  "艮": {
    "口": {
      "char": "哏",
      "bopomofo": "ㄍㄣˊ",
      "words": [
        "逗哏",
        "抓哏"
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
  "音": {
    "口": {
      "char": "喑",
      "bopomofo": "ㄧㄣ",
      "words": [
        "喑啞"
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
    "扌": {
      "char": "揞",
      "bopomofo": "ㄢˇ",
      "words": [
        "揞子"
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
  "奐": {
    "口": {
      "char": "喚",
      "bopomofo": "ㄏㄨㄢˋ",
      "words": [
        "喚醒",
        "呼喚",
        "召喚"
      ]
    },
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
  "馬": {
    "口": {
      "char": "嗎",
      "bopomofo": "˙ㄇㄚ",
      "words": [
        "嗎子"
      ]
    },
    "玉": {
      "char": "瑪",
      "bopomofo": "ㄇㄚˇ",
      "words": [
        "瑪子"
      ]
    }
  },
  "麻": {
    "口": {
      "char": "嘛",
      "bopomofo": "˙ㄇㄚ",
      "words": [
        "嘛子"
      ]
    },
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
  "己": {
    "土": {
      "char": "圮",
      "bopomofo": "ㄆㄧˇ",
      "words": [
        "傾圮"
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
    "木": {
      "char": "杞",
      "bopomofo": "ㄑㄧˇ",
      "words": [
        "杞人憂天",
        "枸杞"
      ]
    },
    "糸": {
      "char": "紀",
      "bopomofo": "ㄐㄧˇ",
      "words": [
        "紀錄",
        "紀念",
        "世紀"
      ]
    },
    "艹": {
      "char": "芑",
      "bopomofo": "ㄑㄧˇ",
      "words": [
        "采芑"
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
    }
  },
  "皮": {
    "土": {
      "char": "坡",
      "bopomofo": "ㄆㄛ",
      "words": [
        "山坡",
        "斜坡",
        "陡坡"
      ]
    },
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
    "玉": {
      "char": "玻",
      "bopomofo": "ㄅㄛ",
      "words": [
        "玻子"
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
  "易": {
    "土": {
      "char": "埸",
      "bopomofo": "ㄧˋ",
      "words": [
        "埸子"
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
    },
    "釒": {
      "char": "錫",
      "bopomofo": "ㄒㄧˊ",
      "words": [
        "金屬錫",
        "錫箔紙",
        "無錫"
      ]
    }
  },
  "者": {
    "土": {
      "char": "堵",
      "bopomofo": "ㄉㄨˇ",
      "words": [
        "堵塞",
        "一堵牆",
        "防堵"
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
    "糸": {
      "char": "緒",
      "bopomofo": "ㄒㄩˋ",
      "words": [
        "情緒",
        "思緒",
        "頭緒"
      ]
    },
    "艹": {
      "char": "著",
      "bopomofo": "˙ㄓㄜ",
      "words": [
        "著名",
        "著作",
        "著急"
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
  "束": {
    "忄": {
      "char": "悚",
      "bopomofo": "ㄙㄨㄥˇ",
      "words": [
        "悚色"
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
  "工": {
    "扌": {
      "char": "扛",
      "bopomofo": "ㄍㄤ",
      "words": [
        "扛行李",
        "扛重物"
      ]
    },
    "木": {
      "char": "杠",
      "bopomofo": "ㄍㄤ",
      "words": [
        "杠色"
      ]
    },
    "氵": {
      "char": "江",
      "bopomofo": "ㄐㄧㄤ",
      "words": [
        "長江",
        "江河",
        "江湖"
      ]
    },
    "糸": {
      "char": "紅",
      "bopomofo": "ㄍㄨㄥ",
      "words": [
        "紅色",
        "紅花",
        "紅包"
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
  "口": {
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
      "char": "束",
      "bopomofo": "ㄕㄨˋ",
      "words": [
        "光束"
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
  "軍": {
    "扌": {
      "char": "揮",
      "bopomofo": "ㄏㄨㄟ",
      "words": [
        "揮手",
        "揮舞",
        "揮霍"
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
    "艹": {
      "char": "葷",
      "bopomofo": "ㄏㄨㄣ",
      "words": [
        "葷食",
        "葷菜"
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
  "良": {
    "肉": {
      "char": "朗",
      "bopomofo": "ㄌㄤˇ",
      "words": [
        "明朗",
        "晴朗",
        "朗誦",
        "朗讀"
      ]
    },
    "氵": {
      "char": "浪",
      "bopomofo": "ㄌㄤˊ",
      "words": [
        "海浪",
        "流浪",
        "浪費"
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
    "艹": {
      "char": "莨",
      "bopomofo": "ㄌㄤˊ",
      "words": [
        "莨子"
      ]
    },
    "足": {
      "char": "踉",
      "bopomofo": "ㄌㄧㄤˊ",
      "words": [
        "踉子"
      ]
    },
    "釒": {
      "char": "鋃",
      "bopomofo": "ㄌㄤˊ",
      "words": [
        "鋃子"
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
  "宗": {
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
    "玉": {
      "char": "琮",
      "bopomofo": "ㄘㄨㄥˊ",
      "words": [
        "琮璧",
        "玉琮"
      ]
    },
    "糸": {
      "char": "綜",
      "bopomofo": "ㄗㄨㄥˋ",
      "words": [
        "綜合",
        "綜藝",
        "錯綜複雜"
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
      "bopomofo": "ㄓㄨㄣˇ",
      "words": [
        "單純",
        "純潔",
        "純真"
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
  "重": {
    "肉": {
      "char": "腫",
      "bopomofo": "ㄓㄨㄥˇ",
      "words": [
        "腫脹",
        "紅腫",
        "腫瘤"
      ]
    },
    "艹": {
      "char": "董",
      "bopomofo": "ㄉㄨㄥˇ",
      "words": [
        "董事長",
        "董理"
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
    "釒": {
      "char": "鍾",
      "bopomofo": "ㄓㄨㄥ",
      "words": [
        "鍾愛",
        "鍾情",
        "姓鍾"
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
