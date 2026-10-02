// RU: Здесь находятся контейнеры для разных категорий блюд.
// AR: هنا نحدد الحاويات الخاصة بكل قسم من الأطباق.
const soupGrid = document.querySelector("#soup-grid");
const mainDishGrid = document.querySelector("#main-dish-grid");
const saladGrid = document.querySelector("#salad-grid");
const drinkGrid = document.querySelector("#drink-grid");
const dessertGrid = document.querySelector("#dessert-grid");


// RU: Здесь хранятся выбранные пользователем блюда.
// AR: هنا يتم حفظ الأطباق التي اختارها المستخدم.
let selectedSoup;
let selectedMainDish;
let selectedSalad;
let selectedDrink;
let selectedDessert;


// RU: Здесь находится блок "Ваш заказ".
// AR: هنا نحدد قسم "طلبك".
const selectedDishes = document.querySelector("#selected-dishes");


// RU: Здесь возвращается выбранное блюдо для нужной категории.
// AR: هنا نحصل على الطبق المختار حسب القسم.
function getSelectedDish(category) {

    if (category === "soup") {
        return selectedSoup;
    }

    if (category === "main-dish") {
        return selectedMainDish;
    }

    if (category === "salad") {
        return selectedSalad;
    }

    if (category === "drink") {
        return selectedDrink;
    }

    if (category === "dessert") {
        return selectedDessert;
    }
}


// RU: Здесь сохраняется выбранное пользователем блюдо.
// AR: هنا يتم حفظ الطبق الذي اختاره المستخدم.
function saveSelectedDish(dish) {

    if (dish.category === "soup") {
        selectedSoup = dish;
    }

    if (dish.category === "main-dish") {
        selectedMainDish = dish;
    }

    if (dish.category === "salad") {
        selectedSalad = dish;
    }

    if (dish.category === "drink") {
        selectedDrink = dish;
    }

    if (dish.category === "dessert") {
        selectedDessert = dish;
    }
}


// RU: Здесь создаётся функция для отображения карточек блюд.
// AR: هنا ننشئ دالة لعرض بطاقات الأطباق.
function renderDishes(category, container, kind = null) {

    // RU: Перед новым отображением контейнер очищается.
    // AR: قبل عرض الأطباق من جديد يتم تفريغ الحاوية.
    container.innerHTML = "";


    // RU: Здесь выбираются блюда нужной категории.
    // AR: هنا نختار الأطباق التابعة للقسم المطلوب.
    let filteredDishes = dishes.filter(function (dish) {
        return dish.category === category;
    });


    // RU: Если выбран фильтр, остаются блюда соответствующего типа.
    // AR: إذا تم اختيار فلتر، نعرض فقط الأطباق من النوع المطلوب.
    if (kind) {
        filteredDishes = filteredDishes.filter(function (dish) {
            return dish.kind === kind;
        });
    }


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


        // RU: Если блюдо уже выбрано, карточке добавляется класс selected.
        // AR: إذا كان الطبق مختاراً مسبقاً نضيف للبطاقة الكلاس selected.
        const currentSelectedDish = getSelectedDish(category);

        if (
            currentSelectedDish &&
            currentSelectedDish.keyword === dish.keyword
        ) {
            card.classList.add("selected");
        }


        // RU: Здесь обрабатывается нажатие на карточку блюда.
        // AR: هنا نعالج الضغط على بطاقة الطبق.
        card.addEventListener("click", function () {

            // RU: Здесь сохраняется выбранное блюдо.
            // AR: هنا يتم حفظ الطبق المختار.
            saveSelectedDish(dish);


            // RU: У всех карточек этой категории удаляется класс selected.
            // AR: هنا نحذف selected من جميع بطاقات هذا القسم.
            container.querySelectorAll(".dish-card").forEach(function (item) {
                item.classList.remove("selected");
            });


            // RU: Выбранной карточке добавляется класс selected.
            // AR: هنا نضيف selected للبطاقة المختارة.
            card.classList.add("selected");


            // RU: Здесь обновляется блок "Ваш заказ".
            // AR: هنا يتم تحديث قسم "طلبك".
            updateOrder();
        });


        // RU: Здесь карточка добавляется в нужный раздел.
        // AR: هنا نضيف البطاقة إلى القسم المناسب.
        container.appendChild(card);
    });
}


// RU: Здесь обновляется содержимое блока "Ваш заказ".
// AR: هنا يتم تحديث محتوى قسم "طلبك".
function updateOrder() {

    // RU: Если ничего не выбрано, показывается сообщение.
    // AR: إذا لم يتم اختيار أي طبق، تظهر هذه الرسالة.
    if (
        !selectedSoup &&
        !selectedMainDish &&
        !selectedSalad &&
        !selectedDrink &&
        !selectedDessert
    ) {
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


    // RU: Здесь отображается выбранный салат или стартер.
    // AR: هنا يتم عرض السلطة أو المقبلات المختارة.
    if (selectedSalad) {
        orderHTML += `
            <div class="selected-item">
                <strong>Салат/стартер</strong>
                <p>${selectedSalad.name} ${selectedSalad.price}₽</p>
            </div>
        `;

        totalPrice += selectedSalad.price;
    } else {
        orderHTML += `
            <div class="selected-item">
                <strong>Салат/стартер</strong>
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


    // RU: Здесь отображается выбранный десерт.
    // AR: هنا يتم عرض الحلوى المختارة.
    if (selectedDessert) {
        orderHTML += `
            <div class="selected-item">
                <strong>Десерт</strong>
                <p>${selectedDessert.name} ${selectedDessert.price}₽</p>
            </div>
        `;

        totalPrice += selectedDessert.price;
    } else {
        orderHTML += `
            <div class="selected-item">
                <strong>Десерт</strong>
                <p>Блюдо не выбрано</p>
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


// RU: Здесь отображаются все блюда при загрузке страницы.
// AR: هنا يتم عرض جميع الأطباق عند فتح الصفحة.
renderDishes("soup", soupGrid);
renderDishes("main-dish", mainDishGrid);
renderDishes("salad", saladGrid);
renderDishes("drink", drinkGrid);
renderDishes("dessert", dessertGrid);


// RU: Здесь настраиваются фильтры для каждой категории.
// AR: هنا نقوم بتشغيل الفلاتر لكل قسم.
document.querySelectorAll("section").forEach(function (section) {

    const filterButtons = section.querySelectorAll(
        ".filters button"
    );

    const grid = section.querySelector(".dishes-grid");


    // RU: Если в разделе нет фильтров или сетки блюд, он пропускается.
    // AR: إذا لم يوجد فلتر أو حاوية أطباق في هذا القسم، نتجاوزه.
    if (filterButtons.length === 0 || !grid) {
        return;
    }


    // RU: Здесь определяется категория раздела.
    // AR: هنا نحدد فئة القسم.
    let category;

    if (grid.id === "soup-grid") {
        category = "soup";
    }

    if (grid.id === "main-dish-grid") {
        category = "main-dish";
    }

    if (grid.id === "salad-grid") {
        category = "salad";
    }

    if (grid.id === "drink-grid") {
        category = "drink";
    }

    if (grid.id === "dessert-grid") {
        category = "dessert";
    }


    filterButtons.forEach(function (button) {

        // RU: Здесь обрабатывается нажатие на кнопку фильтра.
        // AR: هنا نعالج الضغط على زر الفلتر.
        button.addEventListener("click", function () {

            const selectedKind = button.dataset.kind;


            // RU: Если активный фильтр нажали ещё раз,
            // RU: он отключается и снова отображаются все блюда.
            // AR: إذا ضغط المستخدم على الفلتر النشط مرة ثانية،
            // AR: يتم إلغاؤه وتظهر جميع الأطباق من جديد.
            if (button.classList.contains("active")) {

                button.classList.remove("active");

                renderDishes(category, grid);

                return;
            }


            // RU: Здесь удаляется active с других фильтров категории.
            // AR: هنا نحذف active من باقي فلاتر القسم.
            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });


            // RU: Здесь выбранному фильтру добавляется класс active.
            // AR: هنا نضيف active للفلتر المختار.
            button.classList.add("active");


            // RU: Здесь отображаются только подходящие блюда.
            // AR: هنا يتم عرض الأطباق المطابقة للفلتر فقط.
            renderDishes(category, grid, selectedKind);
        });
    });
});