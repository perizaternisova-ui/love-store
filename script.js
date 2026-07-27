const heartsContainer = document.getElementById("hearts");

// Создаём баланс при первом запуске
if (localStorage.getItem("loveBalance") === null) {
    localStorage.setItem("loveBalance", "1000");
}

// Показываем баланс
const balanceElement = document.getElementById("balance");

if (balanceElement) {
    balanceElement.textContent = localStorage.getItem("loveBalance");
}

let cart = [];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "love-heart";

    const hearts = ["❤️","💖","💕","💗","🩷"];

    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (14 + Math.random() * 20) + "px";

    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });

}

setInterval(createHeart, 700);

// ===============================
// LOVE STORE
// ===============================

const shop = {

romance: [

{
emoji:"💋",
title:"100 поцелуев",
description:"Сто поцелуев только для тебя ❤️",
price:80,
rarity:"common"
},

{
emoji:"🤗",
title:"30 минут объятий",
description:"Без телефона. Только мы.",
price:90,
rarity:"common"
},

{
emoji:"💌",
title:"Любовное письмо",
description:"Написанное вручную.",
price:120,
rarity:"rare"
},

{
emoji:"🌙",
title:"Романтический вечер",
description:"Свечи, музыка и только мы.",
price:250,
rarity:"epic"
},

{
emoji:"🛁",
title:"Романтическая ванна",
description:"Пена, свечи и атмосфера.",
price:350,
rarity:"legendary"
},

{
emoji:"💞",
title:"Сладость или страсть?",
description:"Сюрприз 😏",
price:300,
rarity:"legendary"
}

],

food:[

{
emoji:"☕",
title:"Кофе с любовью",
description:"Твой любимый кофе.",
price:70,
rarity:"common"
},

{
emoji:"🍰",
title:"Любимая сладость",
description:"Выбирай любую ❤️",
price:100,
rarity:"common"
},

{
emoji:"🍕",
title:"Вкусный ужин",
description:"Приготовлю специально для тебя.",
price:220,
rarity:"rare"
}

],

care:[

{
emoji:"💆",
title:"Массаж",
description:"30 минут расслабления.",
price:180,
rarity:"epic"
}

],

creative:[

{
emoji:"🎨",
title:"Смешной портрет",
description:"Нарисую тебя 😄",
price:150,
rarity:"rare"
},

{
emoji:"🎤",
title:"Музыкальное выступление",
description:"Мини-концерт только для тебя.",
price:300,
rarity:"legendary"
}

],

together:[

{
emoji:"🎬",
title:"Ты выбираешь фильм",
description:"Сегодня выбор полностью за тобой.",
price:100,
rarity:"common"
}

],

exclusive:[

{
emoji:"🎁",
title:"Секретный подарок",
description:"Что внутри — узнаешь позже.",
price:"500",
rarity:"legendary"
}

]

};

const rarityNames = {
    common: "⚪ Обычный",
    rare: "🔵 Редкий",
    epic: "🟣 Эпический",
    legendary: "👑 Легендарный"
};

// ===============================
// СОЗДАНИЕ КАРТОЧЕК
// ===============================

function createCards(category, containerId){

    const container = document.getElementById(containerId);

    if(!container) return;

    category.forEach(item=>{

        const card = document.createElement("div");

        card.className = `card ${item.rarity}`;

        card.innerHTML = `
    <div class="emoji">${item.emoji}</div>

    <h3>${item.title}</h3>

    <p>${item.description}</p>

    <div class="price">❤️ ${item.price}</div>

    <div class="rarity">
        ${rarityNames[item.rarity]}
    </div>

    <button class="buy-btn">
        Получить ✨
    </button>
`;

const button = card.querySelector(".buy-btn");

button.addEventListener("click", () => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`💖 "${item.title}" добавлен в корзину!`);

});

        container.appendChild(card);

    });

}

createCards(shop.romance,"romance");
createCards(shop.food,"food");
createCards(shop.care,"care");
createCards(shop.creative,"creative");
createCards(shop.together,"together");
createCards(shop.exclusive,"exclusive");

const modal = document.getElementById("purchaseModal");

const modalEmoji = document.getElementById("modalEmoji");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalPrice = document.getElementById("modalPrice");

const cancelBtn = document.getElementById("cancelBtn");

const confirmBtn = document.getElementById("confirmBtn");

let currentItem = null;

function openPurchaseModal(item){

    currentItem = item;

    modalEmoji.textContent = item.emoji;

    modalTitle.textContent = item.title;

    modalDescription.textContent = item.description;

    modalPrice.textContent = `❤️ ${item.price}`;

    modal.classList.add("show");

}

cancelBtn.addEventListener("click",()=>{

    modal.classList.remove("show");

});
