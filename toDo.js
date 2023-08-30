let removeItemButtons = document.getElementsByClassName('remove-button');
console.log(removeItemButtons);

for(let i = 0; i < removeItemButtons.length; i++){
    let btn = removeItemButtons[i];
    btn.addEventListener('click', (event) => {
        let btnClicked = event.target;
        btnClicked.parentElement.parentElement.remove(); 
    })
}

let addItemsButton = document.getElementsByClassName('add-button');
let toDoTyper = document.getElementsByClassName('typer');

console.log(addItemsButton)

for(let i = 0; i < addItemsButton.length; i++){
    let btn = addItemsButton[i];
    btn.addEventListener('click', event => {
        addNewItem();
    })
}

function addNewItem(typer) {
    let newItem = document.createElement('div');
    let listOfItems = document.getElementsByClassName('list-container')[0];
    let newItemContent = `
    <div class="item">
        <p id="added-todo" class="added-todo">${toDoTyper[0].value}</p>
        <div class="rmv-btn-container">
            <button type="button" class="remove-button">Remove</button>
        </div>
    </div>`
    if(toDoTyper[0].value.length === 0 || toDoTyper[0].value.length > 100){
        alert('I cannot add it tou your list')
    } else {
        newItem.innerHTML = newItemContent;
        listOfItems.append(newItem);
        toDoTyper[0].value = '';
        newItem.getElementsByClassName('remove-button')[0].addEventListener('click', (event) => {
            let btnClicked = event.target;
            btnClicked.parentElement.parentElement.remove(); 
        })
    }
   
}