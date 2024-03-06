const listContainer = document.querySelector('.list-container ul');
const input = document.querySelector('#input-box');
const btn = document.querySelector('button');

btn.addEventListener('click',() => {
    addTask();
})

function addTask() {
    if(input.value === '') {
        alert("Write Something!!!");
    } else {
        const listItem = document.createElement('li');
        listItem.innerHTML = input.value;
        let cross = document.createElement('span');
        cross.innerHTML = "\u00d7";
        listItem.append(cross);
        listContainer.append(listItem);
        input.value = "";  
    }
    saveData();
}

listContainer.addEventListener("click",(e) => {
    if(e.target.nodeName === "LI") {
        e.target.classList.toggle('checked');
    } else {
        e.target.parentElement.remove();
    }
    saveData();
},false)


function saveData() {
    localStorage.setItem("data",listContainer.innerHTML)
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();