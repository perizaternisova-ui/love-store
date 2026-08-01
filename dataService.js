import { db } from "./firebase.js";

export async function getBalance(){

    console.log("Получаем баланс...");

}

export async function saveBalance(balance){

    console.log("Сохраняем баланс", balance);

}

export async function getPhotos(){

    console.log("Получаем фото");

}

export async function savePhotos(photos){

    console.log("Сохраняем фото");

}

export async function getThought(){

    console.log("Получаем мысль дня");

}

export async function saveThought(thought){

    console.log("Сохраняем мысль");

}