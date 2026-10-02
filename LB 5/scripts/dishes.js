// RU: Здесь находится массив со всеми блюдами сайта.
// AR: هنا توجد مصفوفة تحتوي على جميع أطباق الموقع.
const dishes = [

    // =========================
    // RU: СУПЫ
    // AR: الشوربات
    // =========================

    // RU: Здесь находится первое блюдо из категории супов.
    // AR: هنا يوجد أول طبق من قسم الشوربات.
    {
        keyword: "lentil-soup",
        name: "Чечевичный суп",
        price: 180,
        category: "soup",
        count: "350 г",
        image: "images/soup1.png",
        kind: "veg"
    },

    // RU: Здесь находится второе блюдо из категории супов.
    // AR: هنا يوجد ثاني طبق من قسم الشوربات.
    {
        keyword: "freekeh-soup",
        name: "Суп из фрике",
        price: 200,
        category: "soup",
        count: "350 г",
        image: "images/soup2.png",
        kind: "veg"
    },

    // RU: Здесь находится третье блюдо из категории супов.
    // AR: هنا يوجد ثالث طبق من قسم الشوربات.
    {
        keyword: "shrimp-soup",
        name: "Суп с креветками",
        price: 270,
        category: "soup",
        count: "350 г",
        image: "images/soup3.png",
        kind: "fish"
    },

    // RU: Здесь находится четвёртое блюдо из категории супов.
    // AR: هنا يوجد رابع طبق من قسم الشوربات.
    {
        keyword: "chicken-soup",
        name: "Куриный суп",
        price: 220,
        category: "soup",
        count: "350 г",
        image: "images/soup4.png",
        kind: "meat"
    },

    // RU: Здесь находится пятое блюдо из категории супов.
    // AR: هنا يوجد خامس طبق من قسم الشوربات.
    {
        keyword: "lamb-soup",
        name: "Суп с бараниной",
        price: 260,
        category: "soup",
        count: "350 г",
        image: "images/soup5.png",
        kind: "meat"
    },

    // RU: Здесь находится шестое блюдо из категории супов.
    // AR: هنا يوجد سادس طبق من قسم الشوربات.
    {
        keyword: "fish-soup",
        name: "Рыбный суп",
        price: 250,
        category: "soup",
        count: "350 г",
        image: "images/soup6.png",
        kind: "fish"
    },


    // =========================
    // RU: ГЛАВНЫЕ БЛЮДА
    // AR: الأطباق الرئيسية
    // =========================

    // RU: Здесь находится первое главное блюдо.
    // AR: هنا يوجد أول طبق من الأطباق الرئيسية.
    {
        keyword: "kibbeh",
        name: "Киббе",
        price: 390,
        category: "main-dish",
        count: "300 г",
        image: "images/main1.png",
        kind: "meat"
    },

    // RU: Здесь находится второе главное блюдо.
    // AR: هنا يوجد ثاني طبق من الأطباق الرئيسية.
    {
        keyword: "fried-fish",
        name: "Жареная рыба",
        price: 430,
        category: "main-dish",
        count: "350 г",
        image: "images/main2.png",
        kind: "fish"
    },

    // RU: Здесь находится третье главное блюдо.
    // AR: هنا يوجد ثالث طبق من الأطباق الرئيسية.
    {
        keyword: "grilled-fish",
        name: "Рыба на гриле",
        price: 460,
        category: "main-dish",
        count: "320 г",
        image: "images/main3.png",
        kind: "fish"
    },

    // RU: Здесь находится четвёртое главное блюдо.
    // AR: هنا يوجد رابع طبق من الأطباق الرئيسية.
    {
        keyword: "chicken-kabsa",
        name: "Кабса с курицей",
        price: 430,
        category: "main-dish",
        count: "400 г",
        image: "images/main4.png",
        kind: "meat"
    },

    // RU: Здесь находится пятое главное блюдо.
    // AR: هنا يوجد خامس طبق من الأطباق الرئيسية.
    {
        keyword: "yalandji",
        name: "Яланджи",
        price: 320,
        category: "main-dish",
        count: "300 г",
        image: "images/main5.png",
        kind: "veg"
    },

    // RU: Здесь находится шестое главное блюдо.
    // AR: هنا يوجد سادس طبق من الأطباق الرئيسية.
    {
        keyword: "mujaddara",
        name: "Муджаддара",
        price: 280,
        category: "main-dish",
        count: "320 г",
        image: "images/main6.png",
        kind: "veg"
    },


    // =========================
    // RU: САЛАТЫ И СТАРТЕРЫ
    // AR: السلطات والمقبلات
    // =========================

    // RU: Здесь находится первый салат или стартер.
    // AR: هنا يوجد أول طبق من قسم السلطات والمقبلات.
    {
        keyword: "fattoush",
        name: "Фаттуш",
        price: 220,
        category: "salad",
        count: "250 г",
        image: "images/salad1.png",
        kind: "veg"
    },

    // RU: Здесь находится второй салат или стартер.
    // AR: هنا يوجد ثاني طبق من قسم السلطات والمقبلات.
    {
        keyword: "tabbouleh",
        name: "Табуле",
        price: 210,
        category: "salad",
        count: "250 г",
        image: "images/salad2.png",
        kind: "veg"
    },

    // RU: Здесь находится третий салат или стартер.
    // AR: هنا يوجد ثالث طبق من قسم السلطات والمقبلات.
    {
        keyword: "hummus-with-meat",
        name: "Хумус с мясом",
        price: 260,
        category: "salad",
        count: "250 г",
        image: "images/salad3.png",
        kind: "meat"
    },

    // RU: Здесь находится четвёртый салат или стартер.
    // AR: هنا يوجد رابع طبق من قسم السلطات والمقبلات.
    {
        keyword: "baba-ghanoush",
        name: "Баба гануш",
        price: 200,
        category: "salad",
        count: "200 г",
        image: "images/salad4.png",
        kind: "veg"
    },

    // RU: Здесь находится пятый салат или стартер.
    // AR: هنا يوجد خامس طبق من قسم السلطات والمقبلات.
    {
        keyword: "muhammara",
        name: "Мухаммара",
        price: 230,
        category: "salad",
        count: "200 г",
        image: "images/salad5.png",
        kind: "veg"
    },

    // RU: Здесь находится шестой салат или стартер.
    // AR: هنا يوجد سادس طبق من قسم السلطات والمقبلات.
    {
        keyword: "tuna-salad",
        name: "Салат с тунцом",
        price: 300,
        category: "salad",
        count: "250 г",
        image: "images/salad6.png",
        kind: "fish"
    },


    // =========================
    // RU: НАПИТКИ
    // AR: المشروبات
    // =========================

    // RU: Здесь находится первый напиток.
    // AR: هنا يوجد أول مشروب.
    {
        keyword: "ayran",
        name: "Айран",
        price: 120,
        category: "drink",
        count: "300 мл",
        image: "images/drink1.png",
        kind: "cold"
    },

    // RU: Здесь находится второй напиток.
    // AR: هنا يوجد ثاني مشروب.
    {
        keyword: "orange-juice",
        name: "Апельсиновый сок",
        price: 140,
        category: "drink",
        count: "300 мл",
        image: "images/drink2.png",
        kind: "cold"
    },

    // RU: Здесь находится третий напиток.
    // AR: هنا يوجد ثالث مشروب.
    {
        keyword: "pomegranate-juice",
        name: "Гранатовый сок",
        price: 160,
        category: "drink",
        count: "300 мл",
        image: "images/drink3.png",
        kind: "cold"
    },

    // RU: Здесь находится четвёртый напиток.
    // AR: هنا يوجد رابع مشروب.
    {
        keyword: "mint-tea",
        name: "Мятный чай",
        price: 100,
        category: "drink",
        count: "250 мл",
        image: "images/drink4.png",
        kind: "hot"
    },

    // RU: Здесь находится пятый напиток.
    // AR: هنا يوجد خامس مشروب.
    {
        keyword: "black-tea",
        name: "Чёрный чай",
        price: 90,
        category: "drink",
        count: "250 мл",
        image: "images/drink5.png",
        kind: "hot"
    },

    // RU: Здесь находится шестой напиток.
    // AR: هنا يوجد سادس مشروب.
    {
        keyword: "arabic-coffee",
        name: "Арабский кофе",
        price: 150,
        category: "drink",
        count: "150 мл",
        image: "images/drink6.png",
        kind: "hot"
    },


    // =========================
    // RU: ДЕСЕРТЫ
    // AR: الحلويات
    // =========================

    // RU: Здесь находится первый десерт.
    // AR: هنا توجد أول حلوى.
    {
        keyword: "baklava",
        name: "Пахлава",
        price: 220,
        category: "dessert",
        count: "200 г",
        image: "images/dessert1.png",
        kind: "small"
    },

    // RU: Здесь находится второй десерт.
    // AR: هنا توجد ثاني حلوى.
    {
        keyword: "kunafa",
        name: "Кнафе",
        price: 260,
        category: "dessert",
        count: "250 г",
        image: "images/dessert2.png",
        kind: "medium"
    },

    // RU: Здесь находится третий десерт.
    // AR: هنا توجد ثالث حلوى.
    {
        keyword: "maamoul",
        name: "Маамуль",
        price: 180,
        category: "dessert",
        count: "150 г",
        image: "images/dessert3.png",
        kind: "small"
    },

    // RU: Здесь находится четвёртый десерт.
    // AR: هنا توجد رابع حلوى.
    {
        keyword: "halawat-al-jibn",
        name: "Халават аль-джибн",
        price: 240,
        category: "dessert",
        count: "180 г",
        image: "images/dessert4.png",
        kind: "small"
    },

    // RU: Здесь находится пятый десерт.
    // AR: هنا توجد خامس حلوى.
    {
        keyword: "muhallabia",
        name: "Мухаллабия",
        price: 200,
        category: "dessert",
        count: "250 г",
        image: "images/dessert5.png",
        kind: "medium"
    },

    // RU: Здесь находится шестой десерт.
    // AR: هنا توجد سادس حلوى.
    {
        keyword: "basbousa",
        name: "Басбуса",
        price: 300,
        category: "dessert",
        count: "350 г",
        image: "images/dessert6.png",
        kind: "large"
    }

];