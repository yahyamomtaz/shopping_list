import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const appSettings = {
    databaseURL: "https://shoppinglist-e7b69-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")
  
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

function clearinputFieldEl () {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}
  
addButtonEl.addEventListener("click", function() {

      let inputValue = inputFieldEl.value;
      
      push(shoppingListInDB, inputValue);

      appendItemToShoppingListEl(inputValue);
      clearinputFieldEl()
  });
