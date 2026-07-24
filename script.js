alert("Love Store работает ❤️");
function createHeart() {

const heart = document.createElement("div");

heart.className = "floating-heart";

const hearts = ["❤️","🩷","💖","💕","💗"];

heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left = Math.random()*100 + "vw";

heart.style.fontSize = (16 + Math.random()*26) + "px";

heart.style.animationDuration = (8 + Math.random()*8) + "s";

heart.style.opacity = 0.15 + Math.random()*0.25;

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},16000);

}

setInterval(createHeart,900);
