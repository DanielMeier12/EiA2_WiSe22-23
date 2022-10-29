/*
 Aufgabe:<L03_Einkaufsliste_Formular>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <29.10.2022>
 Quellen: <Natan Haider, Aanya Khetarpal, Henning Reck>
*/
namespace L03 {

window.addEventListener("load", handleLoad);

let itemButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");

let check0Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#check0");
let check1Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#check1");

let trash0Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#trash0");
let edit0Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#edit0");

let trash1Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#trash1");
let edit1Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#edit1");

function handleLoad(): void {

    itemButton.addEventListener("click", addNewItem);

    check0Button.addEventListener("click", itemCheck);
    check1Button.addEventListener("click", itemCheck);

    trash0Button.addEventListener("click", itemDelete);
    edit0Button.addEventListener("click", itemEdit);
    
    trash1Button.addEventListener("click", itemDelete);
    edit1Button.addEventListener("click", itemEdit);
}
function addNewItem(): void {
    console.log("Neues Produkt wurde hinzugefügt");
}
function itemCheck(): void {
    console.log("Produkt wurde abgehackt");
}
function itemDelete(): void {
    console.log("Produkt wurde gelöscht");
}
function itemEdit(): void {
    console.log("Produkt wird bearbeitet");
}
}