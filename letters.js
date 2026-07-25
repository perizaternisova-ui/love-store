const lettersList = document.getElementById("lettersList");

const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

const category = document.getElementById("letterCategory");
const title = document.getElementById("letterTitle");
const text = document.getElementById("letterText");

let letters = JSON.parse(localStorage.getItem("letters")) || [];

renderLetters();

saveBtn.addEventListener("click", () => {

    if(title.value.trim()==="" || text.value.trim()===""){
        alert("Заполни название и письмо ❤️");
        return;
    }

    letters.push({
        id:Date.now(),
        category:category.value,
        title:title.value,
        text:text.value,
        date:new Date().toLocaleDateString("ru-RU")
    });

    localStorage.setItem("letters",JSON.stringify(letters));

    title.value="";
    text.value="";

    renderLetters();

});

function renderLetters(){

    lettersList.innerHTML="";

    letters.forEach(letter=>{

        const card=document.createElement("div");

        card.className="letter-card";

        card.innerHTML=`

            <div class="letter-title">
                ${letter.title}
            </div>

            <div class="letter-date">
                ${letter.date}
            </div>

            <div class="letter-text">
                ${letter.text}
            </div>

            <br>

            <button onclick="deleteLetter(${letter.id})">
                🗑️ Удалить
            </button>

        `;

        lettersList.appendChild(card);

    });

}

function deleteLetter(id){

    letters=letters.filter(letter=>letter.id!==id);

    localStorage.setItem("letters",JSON.stringify(letters));

    renderLetters();

}