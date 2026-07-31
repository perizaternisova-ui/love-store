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
function loadGifts() {

}

// Добавить подарок
function addGift(gift) {

}

// Использовать подарок
function useGift(id) {

}