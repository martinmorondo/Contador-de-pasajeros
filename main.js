// document.getElementById("count").innerText = 5;

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let contador = 0

function iniciarPrograma() {
    let button = document.getElementById("increment-btn");
    button.addEventListener('click', incremento);

    let buttonSave = document.getElementById("save-btn")
    buttonSave.addEventListener('click', save)

    let buttonReload = document.getElementById("reload-btn")
    buttonReload.addEventListener('click', reiniciar)
}

function incremento() {
    let countEl = document.getElementById("count-el")
    contador++;
    countEl.textContent = contador
}

function save() {
    let saveEl = document.getElementById('save-el')
    let countEl = document.getElementById("count-el")

    let countStr =  ` ${contador} - `
    saveEl.textContent += countStr
    countEl.textContent = 0
    contador = 0
}

function reiniciar() {
    location.reload();
}

window.addEventListener('load', iniciarPrograma);



