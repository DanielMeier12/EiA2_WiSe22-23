"use strict";
/*
 Aufgabe:<L05_Einkaufsliste_Client>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <12.11.2022>
 Quellen: <Natan Haider>
*/
var L05;
(function (L05) {
    let inputs;
    window.addEventListener("load", handleLoad);
    let itemButton = document.querySelector("#add");
    let listItem = document.querySelector("#list");
    async function handleLoad() {
        itemButton.addEventListener("click", addNewItem);
        await getList();
    }
    async function getList() {
        let response = await fetch("data.json");
        let list = await response.text();
        inputs = JSON.parse(list);
        writeItems();
    }
    async function sendList() {
        let sendInputs = JSON.stringify(inputs);
        let query = new URLSearchParams(sendInputs);
        await fetch("L05_Einkaufsliste.html?" + query.toString());
        alert("WOW! Eine Liste wurde gesendet");
        getList();
    }
    function writeItems() {
        let list = document.querySelector("#list");
        list.innerHTML = "";
        for (let index = 0; index < inputs.length; index++) {
            let productDiv = document.createElement("div");
            productDiv.setAttribute("class", "buy");
            productDiv.setAttribute("id", index.toString());
            listItem.appendChild(productDiv);
            let checkButton = document.createElement("input");
            checkButton.setAttribute("type", "checkbox");
            checkButton.setAttribute("id", "checkbox" + index);
            let item = document.createElement("p");
            item.setAttribute("id", "item" + index);
            let trashButton = document.createElement("button");
            trashButton.setAttribute("class", "fas fa-trash");
            trashButton.setAttribute("id", "trash" + index);
            let editButton = document.createElement("button");
            editButton.setAttribute("class", "fas fa-pen");
            editButton.setAttribute("id", "edit" + index);
            productDiv.appendChild(checkButton);
            productDiv.appendChild(item);
            productDiv.appendChild(trashButton);
            productDiv.appendChild(editButton);
        }
        for (let index = 0; index < inputs.length; index++) {
            let item = document.querySelector("#item" + index);
            item.innerHTML = inputs[index].inputProduct + " " + inputs[index].inputAmount.toString() + " " + inputs[index].inputComment + " " + inputs[index].lastPurchase;
            let checkButton = document.querySelector("#checkbox" + index);
            checkButton.addEventListener("click", checkClick);
            let trashButton = document.querySelector("#trash" + index);
            trashButton.addEventListener("click", trashClick);
            let editButton = document.querySelector("#edit" + index);
            editButton.addEventListener("click", editClick);
        }
    }
    function addNewItem() {
        let inputProduct = document.querySelector("#inputProduct").value;
        let inputAmount = document.querySelector("#inputAmount").value;
        let inputComment = document.querySelector("#inputComment").value;
        let buy = false;
        let done = false;
        let lastPurchase = "";
        inputs.push({ inputProduct, inputAmount: Number(inputAmount), buy, done, inputComment, lastPurchase });
        sendList();
    }
    function checkClick(_event) {
        let id = _event.target.id;
        let newId = cutID(id, 8);
        let date = new Date();
        let day = date.getDate();
        let month = (new Date().getMonth() + 1);
        let year = date.getFullYear();
        inputs[newId].lastPurchase = day.toString() + "." + month.toString() + "." + year.toString();
        sendList();
    }
    function trashClick(_event) {
        let id = _event.target.id;
        let newId = cutID(id, 5);
        inputs.splice(newId, 1);
        sendList();
    }
    function cutID(_id, _length) {
        let newId = _id.slice(_length);
        return parseInt(newId);
    }
    function editClick() {
        console.log("edit klick");
    }
})(L05 || (L05 = {}));
//# sourceMappingURL=script.js.map