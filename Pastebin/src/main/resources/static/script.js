const texts = document.getElementById("textsButton");
const card = document.querySelector(".card");
const input = document.getElementById("input");
const displayText = document.getElementById("displayText");
const buttonBack = document.getElementById("buttonBack");
const buttonSave = document.getElementById("buttonSave");

async function dataRetrieval() {
    const requestURL = "http://localhost:8080/api/v1/pastebin";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const dataJson = await response.json();
    return dataJson;
}

function textDisplay(obj, i) {
    texts.style.display = "none";
    card.style.display = "none";
    input.style.display = "none";
    buttonSave.style.display = "none";
    displayText.style.display = "block";
    buttonBack.style.display = "block";
    let p = document.createElement("p");
    p.textContent = `${obj[i].text}`;
    displayText.appendChild(p);
}

function back() {
    texts.style.display = "block";
    card.style.display = "block";
    input.style.display = "block";
    buttonSave.style.display = "block";
    displayText.style.display = "none";
    buttonBack.style.display = "none";
    displayText.innerHTML = "";
}

function save() {
    let newText = input.value;
    fetch("http://localhost:8080/api/v1/pastebin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newText)
    });
    input.value = "";
    location.reload();
}

function createText(obj, i) {
    let heightButton = 2;
    let widthButton = 4;
    let button = document.createElement("button");
    button.textContent = `${obj[i].text}`;
    button.style.height = heightButton + "rem";
    button.style.width = widthButton + "rem";
    button.style.overflow = "hidden";
    button.addEventListener("click", function() {
        textDisplay(obj, i);
    });
    texts.appendChild(button);
}

async function start() {
    let obj = await dataRetrieval();
    for (let i = 0; i < obj.length; ++i) {
        createText(obj, i);
    }
}

start();
