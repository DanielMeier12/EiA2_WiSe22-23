"use strict";
/*
Aufgabe: <L01 RandomPoem>
Name: <Daniel Meier>
Matrikel: <271129>
Datum: <15.10.2022>
Quellen: <Natan Haider, Aanya Khetarpal>
*/
var L01;
(function (L01) {
    let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (let index = 6; index >= 1; index--) {
        let versOutput = getVerse(subject, predicate, object);
        console.log(versOutput);
    }
    function getVerse(_subject, _predicate, _object) {
        let randomSubject = Math.floor(Math.random() * _subject.length);
        let randomPredicate = Math.floor(Math.random() * _predicate.length);
        let randomObjekt = Math.floor(Math.random() * _object.length);
        let verse = _subject[randomSubject] + " " + _predicate[randomPredicate] + " " + _object[randomObjekt];
        _subject.splice(randomSubject, 1);
        _predicate.splice(randomPredicate, 1);
        _object.splice(randomObjekt, 1);
        return verse;
    }
})(L01 || (L01 = {}));
//# sourceMappingURL=RandomScript.js.map