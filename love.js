const startDate = new Date("2026-07-01");

const today = new Date();

const diff = today - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").textContent =
`❤️ Вместе уже ${days} дней`;