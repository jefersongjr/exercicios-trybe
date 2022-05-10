const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


function click(event) {
    event.preventDefault();
}

function keypress(event){
    const character = event.key;
    if(character !== 'a'){
        event.preventDefault();
    }
}
INPUT_CHECKBOX.addEventListener('click', click)
HREF_LINK.addEventListener("click", click);

    