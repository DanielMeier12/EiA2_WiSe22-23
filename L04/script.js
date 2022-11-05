"use strict";
/*
 Aufgabe:<L04_Einkaufsliste_Datenstruktur>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <05.11.2022>
 Quellen: <Natan Haider>
*/
var L04;
(function (L04) {
    window.addEventListener("load", handleLoad);
    let itemButton = document.querySelector("#add");
    let listItem = document.querySelector("#list");
    function handleLoad() {
        itemButton.addEventListener("click", addNewItem);
        writeItems();
    }
    function writeItems() {
        let list = document.querySelector("#list");
        list.innerHTML = "";
        for (let index = 0; index < L04.inputs.length; index++) {
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
        for (let index = 0; index < L04.inputs.length; index++) {
            let item = document.querySelector("#item" + index);
            item.innerHTML = L04.inputs[index].inputProduct + " " + L04.inputs[index].inputAmount.toString() + " " + L04.inputs[index].inputComment + " " + L04.inputs[index].lastPurchase;
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
        L04.inputs.push({ inputProduct, inputAmount: Number(inputAmount), buy, done, inputComment, lastPurchase });
        writeItems();
    }
    function checkClick(_event) {
        let id = _event.target.id;
        let newId = cutID(id, 8);
        let date = new Date();
        let day = date.getDate();
        let month = (new Date().getMonth() + 1);
        let year = date.getFullYear();
        L04.inputs[newId].lastPurchase = day.toString() + "." + month.toString() + "." + year.toString();
        writeItems();
    }
    function trashClick(_event) {
        let id = _event.target.id;
        let newId = cutID(id, 5);
        L04.inputs.splice(newId, 1);
        writeItems();
    }
    function cutID(_id, _length) {
        let newId = _id.slice(_length);
        return parseInt(newId);
    }
    function editClick() {
        console.log("edit klick");
    }
})(L04 || (L04 = {}));
//# sourceMappingURL=script.js.map