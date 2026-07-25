const defaultDates = [
{
title:"💕 Начало отношений",
date:"2023-07-27"
},
{
title:"💋 Первый поцелуй",
date:""
},
{
title:"✈️ Первая поездка",
date:""
},
{
title:"📸 Первое совместное фото",
date:""
}
];

let dates =
JSON.parse(localStorage.getItem("loveDates")) || defaultDates;

save();
render();

function save(){
localStorage.setItem("loveDates", JSON.stringify(dates));
}

function render(){

const list=document.getElementById("datesList");

list.innerHTML="";

dates.forEach((item,index)=>{

list.innerHTML+=`

<div class="date-card">

<h2>${item.title}</h2>

<p>${item.date || "Дата не указана"}</p>

<div class="actions">

<button onclick="editDate(${index})">✏️</button>

<button onclick="deleteDate(${index})">🗑️</button>

</div>

</div>

`;

});

}

document.getElementById("addDate").onclick=function(){

const title=prompt("Название даты");

if(!title)return;

const date=prompt("Дата (например 2023-07-27)");

dates.push({
title:title,
date:date
});

save();
render();

}

function editDate(index){

const newTitle=prompt("Название",dates[index].title);

if(newTitle===null)return;

const newDate=prompt("Дата",dates[index].date);

if(newDate===null)return;

dates[index].title=newTitle;
dates[index].date=newDate;

save();
render();

}

function deleteDate(index){

if(confirm("Удалить дату?")){

dates.splice(index,1);

save();

render();

}

}