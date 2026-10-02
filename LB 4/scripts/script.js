// RU: Здесь находятся контейнеры для разных категорий блюд.
// AR: هنا نحدد الحاويات الخاصة بكل قسم من الأطباق.
const soupGrid = document.querySelector("#soup-grid");
const mainDishGrid = document.querySelector("#main-dish-grid");
const drinkGrid = document.querySelector("#drink-grid");


// RU: Здесь создаётся функция для отображения карточек блюд.
// AR: هنا ننشئ دالة لعرض بطاقات الأطباق.
function renderDishes(category, container) {

    // RU: Здесь выбираются блюда нужной категории.
    // AR: هنا نختار الأطباق التابعة للقسم المطلوب.
    const filteredDishes = dishes.filter(function (dish) {
        return dish.category === category;
    });

    // RU: Здесь блюда сортируются по алфавиту.
    // AR: هنا يتم ترتيب الأطباق حسب الترتيب الأبجدي.
    filteredDishes.sort(function (a, b) {
        return a.name.localeCompare(b.name, "ru");
    });

    // RU: Здесь создаётся карточка для каждого блюда.
    // AR: هنا يتم إنشاء بطاقة لكل طبق.
    filteredDishes.forEach(function (dish) {

        const card = document.createElement("div");

        // RU: Здесь задаётся класс карточки блюда.
        // AR: هنا نضع الكلاس الخاص ببطاقة الطبق.
        card.className = "dish-card";

        // RU: Здесь сохраняется keyword блюда в data-атрибуте.
        // AR: هنا نحفظ keyword الخاص بالطبق داخل data attribute.
        card.dataset.dish = dish.keyword;

        // RU: Здесь добавляется содержимое карточки.
        // AR: هنا نضيف محتوى البطاقة.
        card.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <p class="price">${dish.price}₽</p>
            <p class="dish-name">${dish.name}</p>
            <p class="weight">${dish.count}</p>
            <button type="button">Добавить</button>
        `;

        // RU: Здесь карточка добавляется в нужный раздел.
        // AR: هنا نضيف البطاقة إلى القسم المناسب.
        container.appendChild(card);
    });
}

 // RU: Здесь отображаются супы.
// AR: هنا يتم عرض الشوربات.
renderDishes("soup", soupGrid);

// RU: Здесь отображаются главные блюда.
// AR: هنا يتم عرض الأطباق الرئيسية.
renderDishes("main-dish", mainDishGrid);

// RU: Здесь отображаются напитки.
// AR: هنا يتم عرض المشروبات.
renderDishes("drink", drinkGrid);
// RU: Здесь хранятся выбранные пользователем блюда.
// AR: هنا يتم حفظ الأطباق التي اختارها المستخدم.
let selectedSoup;
let selectedMainDish;
let selectedDrink;


// RU: Здесь находится блок "Ваш заказ".
// AR: هنا نحدد قسم "طلبك".
const selectedDishes = document.querySelector("#selected-dishes");


// RU: Здесь обновляется содержимое блока "Ваш заказ".
// AR: هنا يتم تحديث محتوى قسم "طلبك".
function updateOrder() {

    // RU: Если ничего не выбрано, показывается сообщение.
    // AR: إذا لم يتم اختيار أي طبق، تظهر رسالة.
    if (!selectedSoup && !selectedMainDish && !selectedDrink) {
        selectedDishes.innerHTML = `
            <p id="nothing-selected">Ничего не выбрано</p>
        `;
        return;
    }

    let orderHTML = "";
    let totalPrice = 0;


    // RU: Здесь отображается выбранный суп.
    // AR: هنا يتم عرض الشوربة المختارة.
    if (selectedSoup) {
        orderHTML += `
            <div class="selected-item">
                <strong>Суп</strong>
                <p>${selectedSoup.name} ${selectedSoup.price}₽</p>
            </div>
        `;

        totalPrice += selectedSoup.price;
    } else {
        orderHTML += `
            <div class="selected-item">
                <strong>Суп</strong>
                <p>Блюдо не выбрано</p>
            </div>
        `;
    }


    // RU: Здесь отображается выбранное главное блюдо.
    // AR: هنا يتم عرض الطبق الرئيسي المختار.
    if (selectedMainDish) {
        orderHTML += `
            <div class="selected-item">
                <strong>Главное блюдо</strong>
                <p>${selectedMainDish.name} ${selectedMainDish.price}₽</p>
            </div>
        `;

        totalPrice += selectedMainDish.price;
    } else {
        orderHTML += `
            <div class="selected-item">
                <strong>Главное блюдо</strong>
                <p>Блюдо не выбрано</p>
            </div>
        `;
    }


    // RU: Здесь отображается выбранный напиток.
    // AR: هنا يتم عرض المشروب المختار.
    if (selectedDrink) {
        orderHTML += `
            <div class="selected-item">
                <strong>Напиток</strong>
                <p>${selectedDrink.name} ${selectedDrink.price}₽</p>
            </div>
        `;

        totalPrice += selectedDrink.price;
    } else {
        orderHTML += `
            <div class="selected-item">
                <strong>Напиток</strong>
                <p>Напиток не выбран</p>
            </div>
        `;
    }


    // RU: Здесь отображается итоговая стоимость заказа.
    // AR: هنا يتم عرض السعر الإجمالي للطلب.
    orderHTML += `
        <div class="selected-item">
            <strong>Стоимость заказа</strong>
            <p>${totalPrice}₽</p>
        </div>
    `;

    selectedDishes.innerHTML = orderHTML;
}
// RU: Здесь обрабатывается нажатие на карточку блюда.
// AR: هنا نعالج الضغط على بطاقة الطبق.
document.querySelectorAll(".dish-card").forEach(function (card) {

    // RU: Здесь находится кнопка "Добавить" внутри карточки.
    // AR: هنا نحدد زر "Добавить" داخل البطاقة.
    const button = card.querySelector("button");

    button.addEventListener("click", function () {

        // RU: Здесь получаем keyword выбранного блюда.
        // AR: هنا نأخذ keyword الخاص بالطبق المختار.
        const dishKeyword = card.dataset.dish;

        // RU: Здесь ищем выбранное блюдо в массиве dishes.
        // AR: هنا نبحث عن الطبق المختار داخل مصفوفة dishes.
        const selectedDish = dishes.find(function (dish) {
            return dish.keyword === dishKeyword;
        });


        // RU: Здесь сохраняется выбранный суп.
        // AR: هنا يتم حفظ الشوربة المختارة.
        if (selectedDish.category === "soup") {
            selectedSoup = selectedDish;
        }


        // RU: Здесь сохраняется выбранное главное блюдо.
        // AR: هنا يتم حفظ الطبق الرئيسي المختار.
        if (selectedDish.category === "main-dish") {
            selectedMainDish = selectedDish;
        }


        // RU: Здесь сохраняется выбранный напиток.
        // AR: هنا يتم حفظ المشروب المختار.
        if (selectedDish.category === "drink") {
            selectedDrink = selectedDish;
        }


        // RU: Здесь обновляется блок "Ваш заказ".
        // AR: هنا يتم تحديث قسم "Ваш заказ".
        updateOrder();
    });
});