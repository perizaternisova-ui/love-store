// ===== Загрузка данных из Firebase =====
async function syncFromFirebase() {

    try {

        const doc = await db.collection("loveStore")
            .doc("main")
            .get();

        if (!doc.exists) return;

        const data = doc.data();

        if (data.loveBalance !== undefined) {
            localStorage.setItem("loveBalance", data.loveBalance);
        }

if (data.fortune?.lastSpin) {
    localStorage.setItem("lastSpin", data.fortune.lastSpin);
}

if (data.fortune?.lastReward) {
    localStorage.setItem("lastReward", data.fortune.lastReward);
}

if (data.gifts) {
    localStorage.setItem("gifts", JSON.stringify(data.gifts));
}

    } catch (e) {
        console.error("Ошибка загрузки:", e);
    }

}

// ===== Сохранение данных в Firebase =====
async function syncToFirebase() {

    try {

        await db.collection("loveStore")
            .doc("main")
            .set({
                loveBalance: Number(localStorage.getItem("loveBalance")) || 0
            }, { merge: true });
            
            console.log("Баланс сохранен в Firebase");

    } catch (e) {
        console.error("Ошибка сохранения:", e);
    }

}

// ===== Получить баланс =====
function getLoveBalance() {
    return Number(localStorage.getItem("loveBalance")) || 0;
}

// ===== Установить баланс =====
async function setLoveBalance(value) {

    localStorage.setItem("loveBalance", value);

    const balance = document.getElementById("balance");

    if (balance) {
        balance.textContent = value;
    }

    await syncToFirebase();

}

// ===== Добавить баланс =====
async function addLoveBalance(value) {

    const balance = getLoveBalance() + value;

    await setLoveBalance(balance);

}

// ===== Снять баланс =====
async function removeLoveBalance(value) {

    const balance = Math.max(0, getLoveBalance() - value);

    await setLoveBalance(balance);

}

// ======================================
// Автоматическая загрузка данных
// ======================================

window.addEventListener("load", async () => {

    await syncFromFirebase();

    const balance = document.getElementById("balance");

    if (balance) {
        balance.textContent = getLoveBalance();
    }

});

// ================================
// Фортуна
// ================================

function getLastSpin() {
    return localStorage.getItem("lastSpin") || "";
}

async function setLastSpin(date) {

    localStorage.setItem("lastSpin", date);

    await db.collection("loveStore")
        .doc("main")
        .set({
            fortune: {
                lastSpin: date
            }
        }, { merge: true });

}

function getLastReward() {
    return localStorage.getItem("lastReward") || "";
}

async function setLastReward(reward) {

    localStorage.setItem("lastReward", reward);

    await db.collection("loveStore")
        .doc("main")
        .set({
            fortune: {
                lastReward: reward
            }
        }, { merge: true });


// ======================================
// Подарки
// ======================================

function getGifts() {

    return JSON.parse(localStorage.getItem("gifts")) || [];

}

async function saveGifts(gifts) {

    localStorage.setItem("gifts", JSON.stringify(gifts));

    await db.collection("loveStore")
        .doc("main")
        .set({
            gifts: gifts
        }, { merge: true });

}

async function addGift(gift) {

    const gifts = getGifts();

    gifts.unshift({

        emoji: gift.emoji || "🎁",
        title: gift.title,
        text: gift.text,
        date: new Date().toLocaleDateString()

    });

    await saveGifts(gifts);

}
}