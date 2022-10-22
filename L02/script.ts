/*
 Aufgabe:<L02_EventInspector>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <22.10.2022>
 Quellen: <Natan Haider, Aanya Khetarpal, Henning Reck>
*/
window.addEventListener("load", handleLoad);

function handleLoad(): void {
    let body: HTMLElement = <HTMLElement>document.querySelector("body");
    let div0: HTMLElement = <HTMLElement>document.querySelector(".div0");
    let div1: HTMLElement = <HTMLElement>document.querySelector(".div1");
    let button: HTMLElement = <HTMLElement>document.querySelector("button");

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
function setInfoBox(_event: MouseEvent): void {
    let box: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
    let x: number = _event.clientX;
    let y: number = _event.clientY;
    let target: EventTarget = <EventTarget>_event.target;

    box.style.left = (_event.clientX + 5 ) + "px";
    box.style.top = (_event.clientY + 10 ) + "px";
    box.innerHTML = "x: " + x + "<br>" + "y: " + y + "<br>" + "target: " + target;
}

function logInfo(_event: Event): void {
    console.log(_event.currentTarget);
    console.log(_event.target);
    console.log(_event.eventPhase);
    console.log(_event.type);
    console.log(_event);
}
function customEvent(_event: Event): void {
    let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");

    let event: CustomEvent = new CustomEvent("Go!", { bubbles: true });

    button.dispatchEvent(event);
}