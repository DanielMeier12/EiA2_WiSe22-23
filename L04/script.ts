/*
 Aufgabe:<L04_Einkaufsliste_Datenstruktur>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <05.11.2022>
 Quellen: <Natan Haider>
*/
namespace L04 {

    window.addEventListener("load", handleLoad);

    let itemButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");
    let listItem: HTMLDivElement = <HTMLDivElement>document.querySelector("#list");

    function handleLoad(): void {

        itemButton.addEventListener("click", addNewItem);      
        writeItems();

    }   
    function writeItems(): void {
        let list: HTMLDivElement = <HTMLDivElement>document.querySelector("#list");
        list.innerHTML = "";
        for (let index: number = 0; index < inputs.length; index++) {

            let productDiv: HTMLDivElement = document.createElement("div");
            productDiv.setAttribute("class", "buy");
            productDiv.setAttribute("id", index.toString());
            listItem.appendChild(productDiv);
    
            let checkButton: HTMLInputElement = document.createElement("input");
            checkButton.setAttribute("type", "checkbox");
            checkButton.setAttribute("id", "checkbox" + index);

            let item: HTMLParagraphElement = document.createElement("p");
            item.setAttribute("id", "item" + index);


            let trashButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
            trashButton.setAttribute("class", "fas fa-trash");
            trashButton.setAttribute("id", "trash" + index);

            let editButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
            editButton.setAttribute("class", "fas fa-pen");
            editButton.setAttribute("id", "edit" + index);

            productDiv.appendChild(checkButton);
            productDiv.appendChild(item);
            productDiv.appendChild(trashButton);
            productDiv.appendChild(editButton);
        }
        for (let index: number = 0; index < inputs.length; index++) {

            let item: HTMLParagraphElement = <HTMLParagraphElement>document.querySelector("#item" + index);
            item.innerHTML = inputs[index].inputProduct + " " + inputs[index].inputAmount.toString() + " " + inputs[index].inputComment + " " + inputs[index].lastPurchase;

            let checkButton: HTMLInputElement = <HTMLInputElement>document.querySelector("#checkbox" + index);
            checkButton.addEventListener("click", checkClick);

            let trashButton: HTMLInputElement = <HTMLInputElement>document.querySelector("#trash" + index);
            trashButton.addEventListener("click", trashClick);

            let editButton: HTMLInputElement = <HTMLInputElement>document.querySelector("#edit" + index);
            editButton.addEventListener("click", editClick);
        }
    }

    function addNewItem(): void {

        let inputProduct: string = (<HTMLInputElement>document.querySelector("#inputProduct")).value;
        let inputAmount: string = (<HTMLInputElement>document.querySelector("#inputAmount")).value;
        let inputComment: string = (<HTMLInputElement>document.querySelector("#inputComment")).value;
        let buy: boolean = false; 
        let done: boolean = false;
        let lastPurchase: string = "";

        inputs.push({inputProduct, inputAmount: Number (inputAmount), buy, done, inputComment, lastPurchase});

        writeItems();
    }
    function checkClick(_event: MouseEvent): void {
        let id: string = (_event.target as Element).id;
        let newId: number = cutID(id, 8);
        let date: Date = new Date();
        let day: number = date.getDate();
        let month: number = (new Date().getMonth() + 1);
        let year: number = date.getFullYear();

        inputs[newId].lastPurchase = day.toString() + "." + month.toString() + "." + year.toString();
        writeItems();
    }

    function trashClick(_event: MouseEvent): void {
        let id: string = (_event.target as Element).id;
        let newId: number = cutID(id, 5);
        inputs.splice(newId, 1);
        writeItems();
    }
    function cutID (_id: string, _length: number): number {
        let newId: string = _id.slice(_length);
        return parseInt(newId);
    }

    function editClick(): void {
        console.log("edit klick");
    }
}
