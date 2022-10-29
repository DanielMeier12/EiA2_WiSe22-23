"use strict";
/*
 Aufgabe:<L03_Einkaufsliste_Formular>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <29.10.2022>
 Quellen: <Natan Haider, Aanya Khetarpal, Henning Reck>
*/
var L03;
(function (L03) {
    window.addEventListener("load", handleLoad);
    let itemButton = document.querySelector("#add");
    let check0Button = document.querySelector("#check0");
    let check1Button = document.querySelector("#check1");
    let trash0Button = document.querySelector("#trash0");
    let edit0Button = document.querySelector("#edit0");
    let trash1Button = document.querySelector("#trash1");
    let edit1Button = document.querySelector("#edit1");
    function handleLoad() {
        itemButton.addEventListener("click", addNewItem);
        check0Button.addEventListener("click", itemCheck);
        check1Button.addEventListener("click", itemCheck);
        trash0Button.addEventListener("click", itemDelete);
        edit0Button.addEventListener("click", itemEdit);
        trash1Button.addEventListener("click", itemDelete);
        edit1Button.addEventListener("click", itemEdit);
    }
    function addNewItem() {
        console.log("Neues Produkt wurde hinzugefügt");
    }
    function itemCheck() {
        console.log("Produkt wurde abgehackt");
    }
    function itemDelete() {
        console.log("Produkt wurde gelöscht");
    }
    function itemEdit() {
        console.log("Produkt wird bearbeitet");
    }
})(L03 || (L03 = {}));
//# sourceMappingURL=script.js.map