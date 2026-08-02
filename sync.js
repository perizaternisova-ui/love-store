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