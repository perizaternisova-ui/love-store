const pages = [
    "comic/phonto.jpeg",

    "comic/IMG_8593.jpeg",
    "comic/IMG_8594.jpeg",
    "comic/IMG_8595.jpeg",
    "comic/IMG_8597.jpeg",
    "comic/IMG_8598.jpeg",
    "comic/IMG_8599.jpeg",
    "comic/IMG_8600.jpeg",
    "comic/IMG_8603.jpeg",
    "comic/IMG_8604.jpeg",
    "comic/IMG_8605.jpeg",
    "comic/IMG_8607.jpeg",
    "comic/IMG_8610.jpeg",
    "comic/IMG_8611.jpeg",
    "comic/IMG_8612.jpeg"
];

let currentPage = Number(localStorage.getItem("comicPage")) || 0;

const comicImage = document.getElementById("comicImage");
const pageCounter = document.getElementById("pageCounter");

function showPage() {

    comicImage.src = pages[currentPage];

    pageCounter.textContent =
        `${currentPage + 1} / ${pages.length}`;

    localStorage.setItem("comicPage", currentPage);

}

function nextPage() {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage();

    }

}

function prevPage() {

    if (currentPage > 0) {

        currentPage--;

        showPage();

    }

}

showPage();