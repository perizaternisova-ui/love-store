// ==============================
// Love Store
// Мои подарки
// ==============================

function loadGifts() {

    const giftsList = document.getElementById("giftsList");

    if (!giftsList) return;

    const gifts = getGifts();

    if (gifts.length === 0) {

        giftsList.innerHTML = `
            <p class="empty-gifts">
                Пока здесь пусто ❤️<br>
                Выиграй подарок в колесе фортуны.
            </p>
        `;

        return;

    }

    giftsList.innerHTML = "";

    gifts.forEach((gift, index) => {

        giftsList.innerHTML += `

<div class="gift-item">

    <div class="gift-left">

        <div class="gift-emoji">
            ${gift.emoji}
        </div>

        <div class="gift-info">

            <h4>${gift.title}</h4>

            <p>${gift.text || "Выиграно в Колесе удачи 🎲"}</p>

        </div>

    </div>

    <div class="gift-right">

        <div class="gift-count">
            ×${gift.count || 1}
        </div>

        <button
            class="useGiftBtn"
            onclick="useGift(${index})">

            Использовать

        </button>

    </div>

</div>

`;

    });

}

async function useGift(index) {

    const gifts = getGifts();

    const gift = gifts[index];

    if (!gift) return;

    if (!confirm(`Использовать подарок "${gift.title}"?`)) {
        return;
    }

    if (gift.count > 1) {

        gift.count--;

    } else {

        gifts.splice(index, 1);

    }

    await saveGifts(gifts);

    loadGifts();

    alert(`🎁 "${gift.title}" использован!`);

}