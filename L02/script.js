"use strict";
/*
 Aufgabe:<L02_EventInspector>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <22.10.2022>
 Quellen: <Natan Haider, Aanya Khetarpal, Henning Reck>
*/
window.addEventListener("load", handleLoad);
function handleLoad() {
    let body = document.querySelector("body");
    let div0 = document.querySelector(".div0");
    let div1 = document.querySelector(".div1");
    let button = document.querySelector("button");
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    body.addEventListener("click", logInfo);
    body.addEventListener("keyup", logInfo);
    div0.addEventListener("click", logInfo);
    div0.addEventListener("keyup", logInfo);
    div1.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
    button.addEventListener("click", customEvent);
    document.addEventListener("Go!", logInfo);
}
function setInfoBox(_event) {
    let box = document.querySelector("span");
    let x = _event.clientX;
    let y = _event.clientY;
    let target = _event.target;
    box.style.left = (_event.clientX + 5) + "px";
    box.style.top = (_event.clientY + 10) + "px";
    box.innerHTML = "x: " + x + "<br>" + "y: " + y + "<br>" + "target: " + target;
}
function logInfo(_event) {
    console.log(_event.currentTarget);
    console.log(_event.target);
    console.log(_event.eventPhase);
    console.log(_event.type);
    console.log(_event);
}
function customEvent(_event) {
    let button = document.querySelector("button");
    let event = new CustomEvent("Go!", { bubbles: true });
    button.dispatchEvent(event);
}
//# sourceMappingURL=script.js.map