let dates = JSON.parse(localStorage.getItem("loveDates"));

if (!dates) {
    dates = [
        {
            title: "💕 Начало отношений",
            date: "2023-07-27"
        },
        {
            title: "💋 Первый поцелуй",
            date: ""
        },
        {
            title: "✈️ Первая поездка",
            date: ""
        },
        {
            title: "📸 Первое совместное фото",
            date: ""
        }
    ];

    save();
}

const list = document.getElementById("datesList");
const modal = document.getElementById("dateModal");
const titleInput = document.getElementById("titleInput");
const dateInput = document.getElementById("dateInput");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const addBtn = document.getElementById("addDate");
const modalTitle = document.getElementById("modalTitle");

let editIndex = null;

function save() {
    localStorage.setItem("loveDates", JSON.stringify(dates));
}

function formatDate(date) {

    if (!date) return "Дата не выбрана";

    return new Date(date).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

}

function render() {

    list.innerHTML = "";

    dates.forEach((item, index) => {

        list.innerHTML += `
        <div class="date-card">

            <h2>${item.title}</h2>

            <p>📅 ${formatDate(item.date)}</p>

            <div class="actions">

                <button onclick="editDate(${index})">✏️</button>

                <button onclick="deleteDate(${index})">🗑️</button>

            </div>

        </div>
        `;

    });

}

function openModal() {
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}

addBtn.onclick = () => {

    editIndex = null;

    modalTitle.textContent = "Новая дата ❤️";

    titleInput.value = "";
    dateInput.value = "";

    openModal();

};

saveBtn.onclick = () => {

    if (titleInput.value.trim() === "") return;

    const item = {
        title: titleInput.value,
        date: dateInput.value
    };

    if (editIndex === null) {
        dates.push(item);
    } else {
        dates[editIndex] = item;
    }

    save();
    render();
    closeModal();

};

cancelBtn.onclick = closeModal;

function editDate(index) {

    editIndex = index;

    modalTitle.textContent = "Редактировать ❤️";

    titleInput.value = dates[index].title;
    dateInput.value = dates[index].date;

    openModal();

}

function deleteDate(index) {

    if (confirm("Удалить эту дату?")) {

        dates.splice(index, 1);

        save();

        render();

    }

}

render();