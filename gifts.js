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
    giftsList.innerHTML = `
        <p>Подарков: ${gifts.length}</p>
    `;

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