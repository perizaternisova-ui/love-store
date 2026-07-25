function loadCart() {

    const container = document.getElementById("cartItems");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        container.innerHTML = "<p>Корзина пока пустая.</p>";
        return;
    }

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

}

loadCart();

function removeItem(index){

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}