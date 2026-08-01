console.log("1");

window.onerror = function(message, source, line) {
    alert("Ошибка:\n" + message + "\nСтрока: " + line);
};

const heartsContainer = document.getElementById("hearts");

// Создаём баланс при первом запуске
const balanceElement = document.getElementById("balance");

(async () => {

    await syncFromFirebase();

    if (balanceElement) {
        balanceElement.textContent = getLoveBalance();
    }

})();


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
    
    communication: [

{
emoji:"🌞",
title:"Доброе утро голосовым",
description:"Запишу доброе утро специально для тебя ❤️",
price:10,
rarity:"common"
},

{
emoji:"🌙",
title:"Спокойной ночи голосовым",
description:"Пожелаю сладких снов.",
price:10,
rarity:"common"
},

{
emoji:"💌",
title:"Длинное любовное сообщение",
description:"Большое сообщение только для тебя.",
price:20,
rarity:"common"
},

{
emoji:"🎙️",
title:"Голосовое 5 минут",
description:"Длинное голосовое обо всём.",
price:25,
rarity:"rare"
},

{
emoji:"📞",
title:"Звонок 30 минут",
description:"Полчаса разговора только для нас.",
price:30,
rarity:"rare"
},

{
emoji:"🎥",
title:"Видеосвидание",
description:"Час вместе по видеосвязи.",
price:50,
rarity:"epic"
},

{
emoji:"❤️",
title:"20 причин, почему люблю тебя",
description:"Честный список только для тебя.",
price:60,
rarity:"epic"
},

{
emoji:"☕",
title:"Виртуальное свидание",
description:"Пьем чай или кофе вместе.",
price:80,
rarity:"legendary"
}

],

romance: [

{
emoji:"💋",
title:"100 поцелуев",
description:"Сто поцелуев только для тебя ❤️",
price:80,
rarity:"common"
},


{
emoji:"😘",
title:"10 поцелуев",
description:"Десять поцелуев в любое время.",
price:20,
rarity:"common"
},

{
emoji:"🫂",
title:"10 объятий",
description:"Самые тёплые объятия только для тебя.",
price:20,
rarity:"common"
},

{
emoji:"🌹",
title:"Поцелуй по желанию",
description:"Один особенный поцелуй, когда захочешь.",
price:35,
rarity:"rare"
},

{
emoji:"💖",
title:"Романтический сюрприз",
description:"Небольшой сюрприз, который останется в секрете.",
price:80,
rarity:"epic"
},

{
emoji:"✨",
title:"Исполнение романтического желания",
description:"Одно романтическое желание исполнится.",
price:150,
rarity:"legendary"
},

{
emoji:"🕯️",
title:"Ужин при свечах",
description:"Особенный вечер только для нас.",
price:120,
rarity:"epic"
},

{
emoji:"📸",
title:"Совместная фотосессия",
description:"Сделаем красивые фотографии вместе.",
price:90,
rarity:"rare"
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
price:300,
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

time:[

{
emoji:"🎬",
title:"Совместный фильм",
description:"Смотрим любой фильм вместе.",
price:20,
rarity:"common"
},

{
emoji:"🍿",
title:"Фильм + обсуждение",
description:"После фильма поговорим о впечатлениях.",
price:30,
rarity:"common"
},

{
emoji:"🎮",
title:"Игра вместе",
description:"Любая игра на твой выбор.",
price:35,
rarity:"rare"
},

{
emoji:"🎵",
title:"Послушать музыку вместе",
description:"Включим любимые песни и побудем рядом.",
price:25,
rarity:"common"
},

{
emoji:"💻",
title:"Онлайн-свидание",
description:"Полноценный вечер вдвоём.",
price:50,
rarity:"epic"
},

{
emoji:"🌆",
title:"Вечер только для нас",
description:"Без отвлечений. Всё внимание тебе.",
price:70,
rarity:"legendary"
},

{
emoji:"🚶",
title:"Совместная прогулка",
description:"Гуляем там, где захочешь.",
price:40,
rarity:"rare"
},

{
emoji:"🧩",
title:"Настольная или онлайн игра",
description:"Проводим время весело вместе.",
price:45,
rarity:"rare"
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
emoji:"🍔",
title:"Любимый фастфуд",
description:"Закажу то, что ты больше всего любишь.",
price:120,
rarity:"common"
},

{
emoji:"🍟",
title:"Картошка фри",
description:"Хрустящая и горячая.",
price:60,
rarity:"common"
},

{
emoji:"🍦",
title:"Мороженое",
description:"Любой вкус на выбор.",
price:70,
rarity:"common"
},

{
emoji:"🍫",
title:"Шоколад",
description:"Сладкий подарок для тебя.",
price:60,
rarity:"common"
},

{
emoji:"🥤",
title:"Любимый напиток",
description:"Кофе, чай или лимонад — выбирай.",
price:50,
rarity:"common"
},

{
emoji:"🍣",
title:"Суши",
description:"Закажем твой любимый сет.",
price:220,
rarity:"rare"
},

{
emoji:"🥩",
title:"Стейк или мясной ужин",
description:"Сытный вечер только для тебя.",
price:260,
rarity:"epic"
},

{
emoji:"🍰",
title:"Домашний десерт",
description:"Приготовлю специально для тебя.",
price:180,
rarity:"rare"
},

{
emoji:"🎂",
title:"Праздничный торт",
description:"Красивый торт для особенного дня.",
price:350,
rarity:"legendary"
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
},

{
emoji:"😊",
title:"Комплимент дня",
description:"Искренний комплимент специально для тебя.",
price:10,
rarity:"common"
},

{
emoji:"💬",
title:"Мотивирующее сообщение",
description:"Поддержу тебя в трудный день.",
price:15,
rarity:"common"
},

{
emoji:"🫶",
title:"Разговор по душам",
description:"Без спешки, только мы и наши мысли.",
price:40,
rarity:"rare"
},

{
emoji:"🎧",
title:"Выслушаю тебя",
description:"Буду внимательно слушать столько, сколько нужно.",
price:30,
rarity:"common"
},

{
emoji:"💖",
title:"Час полного внимания",
description:"Без телефона и отвлечений.",
price:60,
rarity:"epic"
},

{
emoji:"📅",
title:"Напоминание о важном",
description:"Помогу не забыть важное событие.",
price:15,
rarity:"common"
},

{
emoji:"🤝",
title:"Помогу принять решение",
description:"Обсудим все варианты вместе.",
price:40,
rarity:"rare"
},

{
emoji:"🌸",
title:"День заботы",
description:"Весь день буду особенно внимателен(а) к тебе.",
price:120,
rarity:"legendary"
},

{
emoji:"☕",
title:"Чай и разговор",
description:"Спокойный вечер с любимым напитком.",
price:35,
rarity:"rare"
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
},

{
emoji:"🎵",
title:"Плейлист для тебя",
description:"Соберу плейлист из песен, которые напоминают о нас.",
price:30,
rarity:"common"
},

{
emoji:"🤳",
title:"Милое селфи",
description:"Новое фото специально для тебя.",
price:20,
rarity:"common"
},

{
emoji:"📹",
title:"Короткое видео",
description:"Запишу для тебя милое видео.",
price:40,
rarity:"rare"
},

{
emoji:"💌",
title:"Любовное письмо",
description:"Красивое письмо от всего сердца.",
price:50,
rarity:"rare"
},

{
emoji:"🎤",
title:"Спеть песню",
description:"Исполню песню специально для тебя.",
price:70,
rarity:"epic"
},

{
emoji:"💃",
title:"Танец",
description:"Небольшой танец только для тебя.",
price:80,
rarity:"epic"
},

{
emoji:"🖌️",
title:"Нарисовать тебя",
description:"Создам рисунок специально для тебя.",
price:90,
rarity:"epic"
},

{
emoji:"📖",
title:"Комикс про нас",
description:"Нарисую небольшую историю о нас.",
price:120,
rarity:"legendary"
},

{
emoji:"🎬",
title:"Видео про нас",
description:"Смонтирую памятное видео с музыкой.",
price:150,
rarity:"legendary"
}

],

challenge:[

{
emoji:"😂",
title:"Смешной челлендж",
description:"Выполню случайный смешной челлендж.",
price:20,
rarity:"common"
},

{
emoji:"🕺",
title:"Танцевальный челлендж",
description:"Станцую то, что выберешь.",
price:40,
rarity:"rare"
},

{
emoji:"📸",
title:"Смешное фото",
description:"Сделаю забавную фотографию специально для тебя.",
price:25,
rarity:"common"
},

{
emoji:"🎥",
title:"Снять Reels",
description:"Запишу короткое весёлое видео.",
price:50,
rarity:"rare"
},

{
emoji:"🎭",
title:"Изобразить персонажа",
description:"Попробую максимально похоже сыграть любого героя.",
price:70,
rarity:"epic"
},

{
emoji:"🎤",
title:"Повторить мем",
description:"Повторю любой мем по твоему выбору.",
price:35,
rarity:"common"
},

{
emoji:"🎲",
title:"Случайное задание",
description:"Выполню случайное испытание.",
price:80,
rarity:"epic"
},

{
emoji:"🤪",
title:"День без слова «нет»",
description:"Постараюсь соглашаться на все разумные просьбы.",
price:150,
rarity:"legendary"
}

],

exclusive:[

{
emoji:"🎁",
title:"Секретный подарок",
description:"Что внутри — узнаешь позже.",
price:500,
rarity:"legendary"
},

{
emoji:"📦",
title:"Посылка-сюрприз",
description:"Неожиданная посылка специально для тебя.",
price:600,
rarity:"legendary"
},

{
emoji:"👑",
title:"VIP-день",
description:"Весь день всё внимание только тебе.",
price:800,
rarity:"legendary"
},

{
emoji:"💎",
title:"Одно желание",
description:"Исполню одно желание.",
price:1000,
rarity:"mythic"
},

{
emoji:"✈️",
title:"Мини-путешествие",
description:"Небольшая поездка или прогулка в новое место.",
price:500,
rarity:"mythic"
}

],

wish:[

{
emoji:"💖",
title:"Твое любимое желание",
description:"Исполню твое любимое желание.",
price:1800,
rarity:"mythic"
},

{
emoji:"🥰",
title:"День без отказов",
description:"Буду говорить только «да» на все.",
price:1800,
rarity:"mythic"
},

{
emoji:"🎬",
title:"Свидание по твоему сценарию",
description:"Ты полностью придумываешь наше свидание.",
price:1500,
rarity:"mythic"
},

{
emoji:"🎟️",
title:"Сертификат на желание",
description:"Используй его тогда, когда захочешь.",
price:1500,
rarity:"mythic"
}

]

};

const rarityNames = {
    common: "⚪ Обычный",
    uncommon: "🟢 Необычный",
    rare: "🔵 Редкий",
    epic: "🟣 Эпический",
    legendary: "🟡 Легендарный",
    mythic: "👑 Мифический"
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

createCards(shop.communication,"communication");
createCards(shop.time,"time");
createCards(shop.romance,"romance");
createCards(shop.food,"food");
createCards(shop.care,"care");
createCards(shop.creative,"creative");
createCards(shop.challenge,"challenge");
createCards(shop.exclusive,"exclusive");
createCards(shop.wish,"wish");


const accessBtn = document.getElementById("accessBtn");

if (accessBtn) {
    accessBtn.addEventListener("click", function () {

        const welcomeCard = document.getElementById("welcomeCard");
        const homeContent = document.getElementById("homeContent");
        const bottomNav = document.getElementById("bottomNav");

        if (welcomeCard) welcomeCard.style.display = "none";
        if (homeContent) homeContent.style.display = "block";
        if (bottomNav) bottomNav.style.display = "flex";

    });
}

async function addBalance(amount) {

    await addLoveBalance(amount);

    const balanceElement = document.getElementById("balance");

    if (balanceElement) {
        balanceElement.textContent = getLoveBalance();
    }

}

const fortuneRewards = [

{
title:"❤️ +100 сердечек",
text:"На баланс начислено 100 ❤️",
type:"hearts",
value:100
},

{
title:"❤️ +250 сердечек",
text:"На баланс начислено 250 ❤️",
type:"hearts",
value:250
},

{
title:"❤️ +500 сердечек",
text:"Сегодня тебе повезло!",
type:"hearts",
value:500
},

{
emoji:"☕",
title:"Бесплатный кофе",
text:"Получи кофе совершенно бесплатно ☕",
type:"gift"
},

{
emoji:"🍫",
title:"Любимая шоколадка",
text:"Этот подарок теперь твой ❤️",
type:"gift"
},

{
emoji:"🍕",
title:"Романтический ужин",
text:"Бесплатно сегодня 💖",
type:"gift"
},

{
emoji:"🎬",
title:"Совместный фильм",
text:"Кино сегодня за счет Love Store",
type:"gift"
}

];

const fortuneBtn=document.getElementById("fortuneBtn");
const wheel=document.querySelector(".fortune-wheel");

const fortuneModal = document.getElementById("fortuneModal");
const rewardTitle = document.getElementById("rewardTitle");
const rewardText = document.getElementById("rewardText");
const claimReward = document.getElementById("claimReward");


if (fortuneBtn) {
    fortuneBtn.addEventListener("click", spinWheel);
}
function spinWheel(){
    
    // Проверяем дату последнего вращения

const today = new Date().toDateString();

const lastSpin = localStorage.getItem("lastFortuneSpin");

if (lastSpin === today) {

    alert("❤️ Сегодня ты уже крутил колесо!\n\nПопробуй снова завтра.");

    return;

}

fortuneBtn.disabled=true;

wheel.classList.add("spinning");

if(navigator.vibrate){

navigator.vibrate([120,80,120]);

}

setTimeout(showReward,3000);

}
function showReward(){

wheel.classList.remove("spinning");

const reward=fortuneRewards[
Math.floor(Math.random()*fortuneRewards.length)
];

rewardTitle.textContent=reward.title;

rewardText.textContent=reward.text;

if (reward.type === "hearts") {

    addBalance(reward.value);

}

if (reward.type === "gift") {

    addGift(reward);

}

fortuneModal.style.display="flex";

localStorage.setItem("lastFortuneSpin", new Date().toDateString());

fortuneBtn.disabled=false;

}

if (claimReward) {

    claimReward.addEventListener("click", function () {

        fortuneModal.style.display = "none";

    });

}

if (typeof loadGifts === "function") {
    loadGifts();
}