const startDate = new Date("2023-07-27");

const today = new Date();

const diff = today - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").textContent =
`❤️ Вместе уже ${days} дней`;