import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

appSettings = {
    databaseURL: "https://shoppinglist-fbbd6-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemsInDB = ref(database, 'items')

let addButtonEl = document.getElementById('add-button')
let inputFieldEl = document.getElementById('input-field')

addButtonEl.addEventListener('click', function () {
    let inputFieldValue = inputFieldEl.value
    push(itemsInDB, {
        name: inputFieldValue
    })
})
