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

document.getElementById("checkoutBtn").addEventListener("click", function () {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("🛒 Корзина пуста!");
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += Number(item.price) || 0;
    });

    let balance = Number(localStorage.getItem("loveBalance")) || 0;

    if (balance < total) {
        alert("💔 Недостаточно сердечек!");
        return;
    }

    balance -= total;

localStorage.setItem("loveBalance", balance);

fetch("https://script.google.com/macros/library/d/1aX_HZMf5LwAB4njjmXGPSGI3NohougZyEUlYhMLZBdOYgnqPQO2JdcPu/2", {
    method: "POST",
    mode: "no-cors",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: cart.map(item => item.title).join(", "),
        price: total
    })
}).catch(error => console.log(error));

localStorage.removeItem("cart");

loadCart();

document.getElementById("orderMessage").innerHTML = `
    <div class="success-box">
        <h2>🎉 Заказ оформлен!</h2>
        <p>❤️ Списано: <b>${total}</b></p>
        <p>❤️ Осталось: <b>${balance}</b></p>
        <p>Спасибо за заказ 💖</p>
    </div>
`;
});
