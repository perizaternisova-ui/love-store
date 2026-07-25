function loadCart() {

    const container = document.getElementById("cartItems");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        container.innerHTML = "<p>Корзина пока пустая.</p>";
        document.getElementById("totalPrice").textContent = "Итого: ❤️ 0";
        return;
    }

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += Number(item.price) || 0;

        container.innerHTML += `
            <div class="cart-item">

                <div style="font-size:40px">${item.emoji}</div>

                <div class="cart-title">${item.title}</div>

                <div>${item.description}</div>

                <div class="cart-price">❤️ ${item.price}</div>

                <button class="remove-btn" onclick="removeItem(${index})">
                    🗑️ Удалить
                </button>

            </div>
        `;

    });

    document.getElementById("totalPrice").textContent =
        `Итого: ❤️ ${total}`;

}

loadCart();

function removeItem(index){

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}