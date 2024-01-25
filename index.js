import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const appSettings = {
    databaseURL: "https://shoppinglist-e7b69-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")
  
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

onValue(shoppingListInDB, function(snapshot) {

    let itemsArray = Object.entries(snapshot.val())
    clearShoppingListEl()

    for (let i=0; i<itemsArray.length; i++) {

        let currentItem = itemsArray[i]
        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]
        appendItemToShoppingListEl(currentItem)
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearinputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    shoppingListEl.append(newEl)
}
  
addButtonEl.addEventListener("click", function() {
      let inputValue = inputFieldEl.value;
      push(shoppingListInDB, inputValue);
      clearinputFieldEl()
  });
