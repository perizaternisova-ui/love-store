const heartsContainer = document.getElementById("hearts");

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