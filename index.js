import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

appSettings = {
    databaseURL: "https://shoppinglist-e7b69-default-rtdb.europe-west1.firebasedatabase.app/"
}

const firebaseConfig = {
    apiKey: "AIzaSyAsCudbRmuRnNzlbBZbUAFUef06K0R3sY8",
    authDomain: "shoppinglist-e7b69.firebaseapp.com",
    databaseURL: "https://shoppinglist-e7b69-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shoppinglist-e7b69",
    storageBucket: "shoppinglist-e7b69.appspot.com",
    messagingSenderId: "574732154234",
    appId: "1:574732154234:web:37e12d7a5a755de26d12c3"
  };

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)
    
    console.log(inputValue)
})
