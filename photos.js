const gallery = document.getElementById("gallery");

const addPhotoBtn = document.getElementById("addPhotoBtn");

const photoInput = document.getElementById("photoInput");

const photoModal = document.getElementById("photoModal");

const fullPhoto = document.getElementById("fullPhoto");

const photoCaption = document.getElementById("photoCaption");

const photoDate = document.getElementById("photoDate");

const saveCaption = document.getElementById("saveCaption");

const closePhoto = document.getElementById("closePhoto");

let currentPhoto = null;

let photos = JSON.parse(localStorage.getItem("lovePhotos")) || [];

function savePhotos(){

    localStorage.setItem(
        "lovePhotos",
        JSON.stringify(photos)
    );

}

function renderGallery(){

    gallery.innerHTML = "";

    photos.forEach((photo,index)=>{

        const card = document.createElement("div");

        card.className = "photo-card";

        card.innerHTML = `

            <img src="${photo.image}">

            <div class="photo-text">

                ${photo.caption || "Без подписи ❤️"}

            </div>

        `;

card.onclick = function(){

    currentPhoto = index;

    fullPhoto.src = photo.image;

    photoCaption.value = photo.caption || "";

    photoDate.value = photo.date || "";

    photoModal.style.display = "flex";

}

        gallery.appendChild(card);

    });

}

addPhotoBtn.onclick = function(){

    photoInput.click();

}

photoInput.onchange = function(e){

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

        photos.unshift({

            image:event.target.result,

            caption:""

        });

        savePhotos();

        renderGallery();

    }

    reader.readAsDataURL(file);

}

renderGallery();