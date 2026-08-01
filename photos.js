const gallery = document.getElementById("gallery");

const addPhotoBtn = document.getElementById("addPhotoBtn");

const photoInput = document.getElementById("photoInput");

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