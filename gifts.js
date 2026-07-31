// ==============================
// Love Store
// Мои подарки
// ==============================

// Ключ localStorage
const GIFTS_STORAGE_KEY = "loveGifts";

// Получить все подарки
function getGifts() {
    const gifts = localStorage.getItem(GIFTS_STORAGE_KEY);

    return gifts ? JSON.parse(gifts) : [];
}

// Сохранить подарки
function saveGifts(gifts) {
    localStorage.setItem(GIFTS_STORAGE_KEY, JSON.stringify(gifts));
}

// Загрузить раздел "Мои подарки"
// Загрузить раздел "Мои подарки"
function loadGifts() {

    const giftsList = document.getElementById("giftsList");

    if (!giftsList) return;

    const gifts = getGifts();

    // Если подарков нет
    if (gifts.length === 0) {

        giftsList.innerHTML = `
            <p class="empty-gifts">
                Пока здесь пусто ❤️<br>
                Выиграй подарок в колесе фортуны.
            </p>
        `;

        return;
    }

    // Пока просто проверяем,
    // что подарки существуют
    giftsList.innerHTML = "";

gifts.forEach((gift, index) => {

    giftsList.innerHTML += `

<div class="gift-item">

    <div class="gift-left">

        <div class="gift-emoji">
            ${gift.emoji}
        </div>

        <div>

            <h4>${gift.title}</h4>

            <p>Получено в Колесе удачи 🎲</p>

        </div>

    </div>

    <button
        class="useGiftBtn"
        onclick="useGift(${index})">

        Использовать

    </button>

</div>

`;

});

}

// Добавить подарок
function addGift(gift) {

    const gifts = getGifts();

    // Ищем, есть ли уже такой подарок
    const existingGift = gifts.find(item => item.title === gift.title);

    if (existingGift) {

        existingGift.count++;

    } else {

        gifts.push({
            id: Date.now(),
            emoji: gift.emoji,
            title: gift.title,
            text: gift.text,
            count: 1
        });

    }

    saveGifts(gifts);

    // Сразу обновляем карточку
    loadGifts();

}

// Использовать подарок
function useGift(id) {

}

function useGift(index) {

    let gifts = JSON.parse(localStorage.getItem("loveGifts")) || [];

    const gift = gifts[index];

    if (!gift) return;

    const confirmUse = confirm(
        `Использовать подарок "${gift.title}"?`
    );

    if (!confirmUse) return;

   // Уменьшаем количество
gifts[index].count--;

// Если подарков больше нет — удаляем карточку
if (gifts[index].count <= 0) {

    gifts.splice(index, 1);

}

    // Сохраняем
    localStorage.setItem("loveGifts", JSON.stringify(gifts));

    // Обновляем экран
    loadGifts();

    alert(
        `🎁 Подарок "${gift.title}" успешно использован!`
    );

}