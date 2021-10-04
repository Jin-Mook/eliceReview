const webMenus = [
    { id: 0, name: "HTML", body: "html is ..."},
    { id: 1, name: "CSS", body: "css is ..."},
    { id: 2, name: "JavaScript", body: "javascript is ..."},
]
const ul = document.querySelector("#web-list");
const divManual = document.querySelector("#manual");
const appendNewWebForm = document.querySelector("#appendNewWeb");
const webList = document.querySelector("#web-list");
const createBtn = document.querySelector("#createBtn")
const removeBtn = document.querySelector("#removeBtn");
const appendForm = document.querySelector("#appendNewList");
let numOfId = 3

function opneWeb() {
    for (let webMenu of webMenus) {
        const li = document.createElement("li");
        li.setAttribute("id", webMenu.id);
        li.innerHTML = webMenu.name;
        ul.append(li);

        li.addEventListener('click', openManual)
    }
}

function openManual(event) {
    const targetId = event.target.id;
    divManual.innerHTML = `<p>${webMenus[targetId].name}</p>${webMenus[targetId].body}`
}

function appendList(event) {
    const name = event.target[0].value;
    const body = event.target[1].value;
    //여기서부터 시작
    event.preventDefault()
    const newWeb = { id: numOfId, name: name, body: body}
    webMenus.push(newWeb)
    ul.innerHTML = ''
    opneWeb()
    numOfId ++
}

window.addEventListener("load", opneWeb);

createBtn.addEventListener("click", () => {
    appendForm.classList.remove("hide");
});

removeBtn.addEventListener("click", () => {
    appendForm.classList.add("hide");
})

appendForm.addEventListener("submit", appendList)