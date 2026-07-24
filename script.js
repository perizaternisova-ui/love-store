function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.classList.add("love-heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (12 + Math.random() * 18) + "px";

    heart.style.animationDuration = (8 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 15000);

}

setInterval(createHeart, 700);