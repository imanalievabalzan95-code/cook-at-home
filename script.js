
const recipes = [
    {
        id: 1,
        name: "Овсяная каша",
        category: "Завтрак",
        emoji: "🥣",
        image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600",
        time: "10 минут",
        difficulty: "Легко",
        description: "Полезная овсяная каша для хорошего начала дня.",
        ingredients: ["Овсяные хлопья — 50 г", "Молоко — 200 мл", "Мёд по вкусу", "Банан или ягоды"],
        steps: [
            "Налей молоко в кастрюлю и нагрей.",
            "Добавь овсяные хлопья.",
            "Вари 5–7 минут, постоянно помешивая.",
            "Добавь мёд и фрукты по вкусу."
        ]
    },
    {
        id: 2,
        name: "Пышные панкейки",
        category: "Завтрак",
        emoji: "🥞",
        time: "20 минут",
        difficulty: "Легко",
        description: "Мягкие панкейки к завтраку.",
        ingredients: ["Мука — 150 г", "Молоко — 180 мл", "Яйцо — 1 шт.", "Сахар — 2 ст. л."],
        steps: [
            "Смешай яйцо, молоко и сахар.",
            "Добавь муку и перемешай.",
            "Выкладывай тесто на разогретую сковороду.",
            "Обжарь с двух сторон до золотистого цвета."
        ]
    },
    {
        id: 3,
        name: "Омлет",
        category: "Завтрак",
        emoji: "🍳",
        time: "10 минут",
        difficulty: "Легко",
        description: "Нежный омлет на каждый день.",
        ingredients: ["Яйца — 2 шт.", "Молоко — 2 ст. л.", "Соль по вкусу"],
        steps: [
            "Взбей яйца с молоком и солью.",
            "Вылей смесь на разогретую сковороду.",
            "Готовь под крышкой 5–7 минут."
        ]
    },
    {
        id: 4,
        name: "Сырники",
        category: "Завтрак",
        emoji: "🥞",
        time: "25 минут",
        difficulty: "Средне",
        description: "Румяные сырники с творогом.",
        ingredients: ["Творог — 300 г", "Яйцо — 1 шт.", "Мука — 3 ст. л.", "Сахар — 1 ст. л."],
        steps: [
            "Разомни творог вилкой.",
            "Добавь яйцо, сахар и муку.",
            "Сформируй сырники.",
            "Обжарь с обеих сторон."
        ]
    },
    {
        id: 5,
        name: "Куриный суп",
        category: "Обед",
        emoji: "🍲",
        time: "45 минут",
        difficulty: "Средне",
        description: "Домашний суп с курицей и овощами.",
        ingredients: ["Курица — 300 г", "Картофель — 2 шт.", "Морковь — 1 шт.", "Лук — 1 шт.", "Вода — 1,5 л"],
        steps: [
            "Отвари курицу в воде.",
            "Добавь нарезанный картофель.",
            "Добавь лук и морковь.",
            "Вари до готовности овощей."
        ]
    },
    {
        id: 6,
        name: "Паста с томатным соусом",
        category: "Обед",
        emoji: "🍝",
        time: "25 минут",
        difficulty: "Легко",
        description: "Паста с ароматным томатным соусом.",
        ingredients: ["Макароны — 200 г", "Томаты — 2 шт.", "Чеснок", "Масло", "Соль"],
        steps: [
            "Отвари макароны.",
            "Нарежь томаты и чеснок.",
            "Обжарь чеснок, добавь томаты и туши 10 минут.",
            "Смешай соус с макаронами."
        ]
    },
    {
        id: 7,
        name: "Салат Цезарь",
        category: "Обед",
        emoji: "🥗",
        time: "20 минут",
        difficulty: "Средне",
        description: "Салат с курицей и хрустящими сухариками.",
        ingredients: ["Куриное филе — 200 г", "Салат", "Сухарики", "Сыр", "Соус"],
        steps: [
            "Приготовь куриное филе.",
            "Промой листья салата.",
            "Добавь курицу, сухарики и сыр.",
            "Заправь соусом."
        ]
    },
    {
        id: 8,
        name: "Курица с картофелем",
        category: "Ужин",
        emoji: "🍗",
        time: "50 минут",
        difficulty: "Средне",
        description: "Сытное блюдо для домашнего ужина.",
        ingredients: ["Курица — 400 г", "Картофель — 4 шт.", "Масло", "Соль", "Специи"],
        steps: [
            "Разогрей духовку до 200 °C.",
            "Нарежь картофель и добавь специи.",
            "Выложи курицу и картофель в форму.",
            "Запекай до полной готовности."
        ]
    },
    {
        id: 9,
        name: "Овощной салат",
        category: "Ужин",
        emoji: "🥗",
        time: "10 минут",
        difficulty: "Легко",
        description: "Свежий салат из овощей.",
        ingredients: ["Помидоры — 2 шт.", "Огурец — 1 шт.", "Зелень", "Масло", "Соль"],
        steps: [
            "Вымой овощи.",
            "Нарежь помидоры и огурец.",
            "Добавь зелень, масло и соль.",
            "Перемешай салат."
        ]
    },
    {
        id: 10,
        name: "Домашняя пицца",
        category: "Ужин",
        emoji: "🍕",
        time: "35 минут",
        difficulty: "Средне",
        description: "Пицца с сыром и любимой начинкой.",
        ingredients: ["Основа для пиццы", "Томатный соус", "Сыр", "Начинка"],
        steps: [
            "Намажь основу томатным соусом.",
            "Добавь сыр и начинку.",
            "Поставь в разогретую духовку.",
            "Выпекай до готовности."
        ]
    },
    {
        id: 11,
        name: "Шоколадный маффин",
        category: "Десерт",
        emoji: "🧁",
        time: "30 минут",
        difficulty: "Средне",
        description: "Шоколадный десерт к чаю.",
        ingredients: ["Мука — 120 г", "Какао — 2 ст. л.", "Сахар — 80 г", "Яйцо — 1 шт.", "Молоко — 100 мл"],
        steps: [
            "Смешай муку, какао и сахар.",
            "Добавь яйцо и молоко.",
            "Разложи тесто по формочкам.",
            "Выпекай при 180 °C около 20 минут."
        ]
    },
    {
        id: 12,
        name: "Клубничный десерт",
        category: "Десерт",
        emoji: "🍓",
        time: "15 минут",
        difficulty: "Легко",
        description: "Клубника с нежным йогуртом.",
        ingredients: ["Клубника — 200 г", "Йогурт — 150 г", "Мёд по вкусу"],
        steps: [
            "Вымой и нарежь клубнику.",
            "Выложи клубнику и йогурт слоями.",
            "Добавь мёд по желанию."
        ]
    },
    {
        id: 13,
        name: "Банановый смузи",
        category: "Напиток",
        emoji: "🥤",
        time: "5 минут",
        difficulty: "Легко",
        description: "Нежный смузи с бананом.",
        ingredients: ["Банан — 1 шт.", "Молоко — 200 мл"],
        steps: [
            "Очисти банан.",
            "Положи банан и молоко в блендер.",
            "Взбей до однородности."
        ]
    }
];

const recipesGrid = document.querySelector("#recipesGrid");
const searchInput = document.querySelector("#searchInput");
const categoryButtons = document.querySelectorAll("[data-category]");
const favoritesOnly = document.querySelector("#favoritesOnly");
const excludeIngredient = document.querySelector("#excludeIngredient");
const recipeModal = document.querySelector("#recipeModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

let activeCategory = "Все";
let searchText = "";
let showFavoritesOnly = false;
let excludedIngredient = "";

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem("cookAtHomeFavorites")) || [];
    } catch {
        return [];
    }
}

function saveFavorites(favorites) {
    localStorage.setItem("cookAtHomeFavorites", JSON.stringify(favorites));
}

function renderRecipes() {
    if (!recipesGrid) return;

    const favorites = getFavorites();

    const filteredRecipes = recipes.filter(recipe => {
        const matchesCategory =
            activeCategory === "Все" || recipe.category === activeCategory;

        const matchesSearch =
            recipe.name.toLowerCase().includes(searchText.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchText.toLowerCase()) ||
            recipe.ingredients.some(item =>
                item.toLowerCase().includes(searchText.toLowerCase())
            );

        const matchesFavorites =
            !showFavoritesOnly || favorites.includes(recipe.id);

        const matchesExcludedIngredient =
            !excludedIngredient ||
            !recipe.ingredients.some(item =>
                item.toLowerCase().includes(excludedIngredient.toLowerCase())
            );

        return matchesCategory &&
            matchesSearch &&
            matchesFavorites &&
            matchesExcludedIngredient;
    });

    if (filteredRecipes.length === 0) {
        recipesGrid.innerHTML = "<p>Рецепты не найдены.</p>";
        return;
    }

    recipesGrid.innerHTML = filteredRecipes.map(recipe => {
        const isFavorite = favorites.includes(recipe.id);

        const imageHTML = recipe.image
            ? `<img src="${recipe.image}" alt="${recipe.name}" class="recipe-photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : "";

        return `
            <article class="recipe-card">
                <div class="recipe-visual">
                    ${imageHTML}
                    <span class="recipe-emoji" ${recipe.image ? 'style="display:none"' : ""}>
                        ${recipe.emoji}
                    </span>
                </div>
                <div class="recipe-info">
                    <span class="recipe-category">${recipe.category}</span>
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <div class="recipe-meta">
                        <span>⏱ ${recipe.time}</span>
                        <span>👩‍🍳 ${recipe.difficulty}</span>
                    </div>
                    <div class="recipe-actions">
                        <button class="view-recipe" data-recipe-id="${recipe.id}">
                            Смотреть рецепт
                        </button>
                        <button class="favorite-button ${isFavorite ? "is-favorite" : ""}"
                            data-favorite-id="${recipe.id}">
                            ${isFavorite ? "♥" : "♡"}
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function openRecipe(recipeId) {
    const recipe = recipes.find(item => item.id === Number(recipeId));

    if (!recipe || !modalContent || !recipeModal) return;

    modalContent.innerHTML = `
        <div class="modal-recipe">
            ${recipe.image
                ? `<img src="${recipe.image}" alt="${recipe.name}" class="modal-recipe-photo">`
                : `<div class="modal-recipe-emoji">${recipe.emoji}</div>`}
            <span class="recipe-category">${recipe.category}</span>
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
            <p><strong>Время:</strong> ${recipe.time}</p>
            <p><strong>Сложность:</strong> ${recipe.difficulty}</p>
            <h3>Ингредиенты</h3>
            <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
            <h3>Приготовление</h3>
            <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>
        </div>
    `;

    recipeModal.classList.add("is-open");
    recipeModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeRecipeModal() {
    if (!recipeModal) return;

    recipeModal.classList.remove("is-open");
    recipeModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

if (searchInput) {
    searchInput.addEventListener("input", event => {
        searchText = event.target.value.trim();
        renderRecipes();
    });
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category || "Все";

        categoryButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        renderRecipes();
    });
});

if (favoritesOnly) {
    favoritesOnly.addEventListener("change", event => {
        showFavoritesOnly = event.target.checked;
        renderRecipes();
    });
}

if (excludeIngredient) {
    excludeIngredient.addEventListener("change", event => {
        excludedIngredient = event.target.value;
        renderRecipes();
    });
}

if (recipesGrid) {
    recipesGrid.addEventListener("click", event => {
        const recipeButton = event.target.closest("[data-recipe-id]");
        const favoriteButton = event.target.closest("[data-favorite-id]");

        if (recipeButton) {
            openRecipe(recipeButton.dataset.recipeId);
        }

        if (favoriteButton) {
            const recipeId = Number(favoriteButton.dataset.favoriteId);
            let favorites = getFavorites();

            favorites = favorites.includes(recipeId)
                ? favorites.filter(id => id !== recipeId)
                : [...favorites, recipeId];

            saveFavorites(favorites);
            renderRecipes();
        }
    });
}

if (closeModal) {
    closeModal.addEventListener("click", closeRecipeModal);
}

if (recipeModal) {
    recipeModal.addEventListener("click", event => {
        if (event.target === recipeModal) {
            closeRecipeModal();
        }
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeRecipeModal();
    }
});

renderRecipes();
