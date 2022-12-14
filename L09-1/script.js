"use strict";
/*
 Aufgabe:<L09.1_OldMacDonaldsFarm>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <13.12.2022>
 Quellen: <Natan Haider>
*/
var L09_OldMacDonaldFarm;
(function (L09_OldMacDonaldFarm) {
    window.addEventListener("load", handleLoad);
    let dateDiv = document.getElementById("dateDiv");
    let foodDiv = document.getElementById("foodDiv");
    let song = document.getElementById("song");
    let daycount = 1;
    let hayAmount = 200;
    let cornAmount = 150;
    let dogfoodAmount = 30;
    let catfoodAmount = 30;
    let strawAmount = 50;
    class Animal {
        name;
        species;
        food;
        foodAmount;
        sound;
        constructor(_name, _species, _food, _amount, _sound) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.foodAmount = _amount;
            this.sound = _sound;
        }
        animalsSing() {
            let newDiv = document.createElement("div");
            newDiv.id = "div";
            if (this.species == "donkey") {
                newDiv.innerHTML = "<br> <br> <i>" + this.name + "</i>" + "<br>" + "<br>" + "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some " + this.species + "s" + "<br>" +
                    "With a " + this.sound + " here" + "<br>" + "And a " + this.sound + " there" + "<br>" + "Here a " + this.sound + " there a " + this.sound + "<br>"
                    + "Everywhere a " + this.sound + "<br>" + "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "<br>";
                song.appendChild(newDiv);
            }
            else {
                newDiv.innerHTML = "<br> <br> <i>" + this.name + "</i>" + "<br>" + "<br>" + "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some " + this.species + "s" + "<br>" +
                    "With a " + this.sound + " here" + "<br>" + "And a " + this.sound + " there" + "<br>" + "Here a " + this.sound + " there a " + this.sound + "<br>"
                    + "Everywhere a " + this.sound + "<br>" + "<br>";
                song.appendChild(newDiv);
            }
        }
        animalsEat() {
            if (this.species == "cow") {
                hayAmount = hayAmount - this.foodAmount;
                let newDiv = document.createElement("div");
                newDiv.id = "cowEat";
                newDiv.innerHTML = "übriges Weizen: " + hayAmount.toString() + "<br>";
                song.appendChild(newDiv);
            }
            if (this.species == "chicken") {
                cornAmount = cornAmount - this.foodAmount;
                let newDiv = document.createElement("div");
                newDiv.id = "chickenEat";
                newDiv.innerHTML = "übriges Mais: " + cornAmount.toString();
                song.appendChild(newDiv);
            }
            if (this.species == "dog") {
                dogfoodAmount = dogfoodAmount - this.foodAmount;
                let newDiv = document.createElement("div");
                newDiv.id = "dogEat";
                newDiv.innerHTML = "übriges Hundefutter: " + dogfoodAmount.toString();
                song.appendChild(newDiv);
            }
            if (this.species == "cat") {
                catfoodAmount = catfoodAmount - this.foodAmount;
                let newDiv = document.createElement("div");
                newDiv.id = "catEat";
                newDiv.innerHTML = "übriges Katzenfutter: " + catfoodAmount.toString();
                song.appendChild(newDiv);
            }
            if (this.species == "donkey") {
                strawAmount = strawAmount - this.foodAmount;
                let newDiv = document.createElement("div");
                newDiv.id = "donkeyEat";
                newDiv.innerHTML = "übriges Stroh: " + strawAmount.toString() + "<br>";
                song.appendChild(newDiv);
            }
        }
    }
    function handleLoad() {
        dateDiv.innerHTML = "Tag: " + daycount;
        let cow = new Animal("Milka - die Kuh", "cow", "hay", 20, "muuh");
        let chicken = new Animal("Kentucky - das Huhn", "chicken", "corn", 15, "bwoak");
        let dog = new Animal("Scooby-Doo - der Hund", "dog", "dogfood", 2, "wuff");
        let cat = new Animal("Kiara - die Katze", "cat", "catfood", 2, "miau");
        let donkey = new Animal("I-Ah - der Esel", "donkey", "straw", 5, "iah");
        cow.animalsSing();
        cow.animalsEat();
        chicken.animalsSing();
        chicken.animalsEat();
        dog.animalsSing();
        dog.animalsEat();
        cat.animalsSing();
        cat.animalsEat();
        donkey.animalsSing();
        donkey.animalsEat();
        displayFoodAmount();
    }
    function displayFoodAmount() {
        foodDiv.innerHTML = "Weizen: " + hayAmount.toString() + "<br>"
            + "Mais: " + cornAmount.toString() + "<br>"
            + "Hundefutter: " + dogfoodAmount.toString() + "<br>"
            + "Katzenfutter: " + catfoodAmount.toString() + "<br>"
            + "Stroh: " + strawAmount.toString();
    }
})(L09_OldMacDonaldFarm || (L09_OldMacDonaldFarm = {}));
//# sourceMappingURL=script.js.map