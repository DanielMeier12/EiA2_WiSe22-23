/*
Aufgabe: <L01 RandomPoem>
Name: <Daniel Meier>
Matrikel: <271129>
Datum: <15.10.2022>
Quellen: <Natan Haider, Aanya Khetarpal>
*/
namespace L01{
let subject: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let predicate: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let object: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

for (let index: number = 6; index >= 1; index--) {
    let versOutput: string = getVerse(subject, predicate, object);
    console.log(versOutput);
}

function getVerse (_subject: string[], _predicate: string[], _object: string[]): string { 
    let randomSubject: number = Math.floor(Math.random() * _subject.length);
    let randomPredicate: number = Math.floor(Math.random() * _predicate.length);
    let randomObjekt: number = Math.floor(Math.random() * _object.length); 

    let verse: string = _subject[randomSubject] + " " + _predicate[randomPredicate] + " " + _object[randomObjekt];  

    _subject.splice(randomSubject, 1 );
    _predicate.splice(randomPredicate, 1 );
    _object.splice(randomObjekt, 1 );

    return verse;
}}