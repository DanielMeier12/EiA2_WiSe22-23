"use strict";
/*
 Aufgabe:<L09.2_Vogelhaus>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <17.12.2022>
 Quellen: <Natan Haider>
*/
var L09_Vogelhaus;
(function (L09_Vogelhaus) {
    window.addEventListener("load", handleLoad);
    L09_Vogelhaus.golden = 0.62;
    let snowflakesPos = new L09_Vogelhaus.Vector(400, 200);
    let snowflakes = [];
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Vogelhaus.crc2 = canvas.getContext("2d");
        L09_Vogelhaus.drawStatic();
        L09_Vogelhaus.imgData = L09_Vogelhaus.crc2.getImageData(0, 0, L09_Vogelhaus.crc2.canvas.width, L09_Vogelhaus.crc2.canvas.height);
        drawSnowflakes(50, snowflakesPos);
        drawBirds();
        drawFlyingBirds();
        window.setInterval(update, 20);
    }
    function drawSnowflakes(_nFlakes, _position) {
        let transform = L09_Vogelhaus.crc2.getTransform();
        L09_Vogelhaus.crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < _nFlakes; drawn++) {
            L09_Vogelhaus.crc2.save();
            let pos = new L09_Vogelhaus.Vector(randomNumber(0, 325), randomNumber(0, 250));
            let size = new L09_Vogelhaus.Vector(10, 10);
            let snowflake = new L09_Vogelhaus.Snowflake(pos, size);
            snowflake.draw();
            snowflakes.push(snowflake);
            L09_Vogelhaus.crc2.restore();
        }
        L09_Vogelhaus.crc2.setTransform(transform);
    }
    function updateSnowflakes(_position) {
        let transform = L09_Vogelhaus.crc2.getTransform();
        L09_Vogelhaus.crc2.translate(_position.x, _position.y);
        for (let snow of snowflakes) {
            snow.letItSnow(1 / 100);
            snow.draw();
        }
        L09_Vogelhaus.crc2.setTransform(transform);
    }
    function drawBirds() {
        console.log("Bird");
    }
    function updateBirds() {
        console.log();
    }
    function drawFlyingBirds() {
        console.log("FlyingBirds");
    }
    function updateFlyingBirds() {
        console.log();
    }
    function update() {
        L09_Vogelhaus.crc2.putImageData(L09_Vogelhaus.imgData, 0, 0);
        updateSnowflakes(snowflakesPos);
        updateBirds();
        updateFlyingBirds();
    }
    function randomNumber(_min, _max) {
        let returnNumber = Math.floor(Math.random() * (_max - _min)) + _min;
        return returnNumber;
    }
    L09_Vogelhaus.randomNumber = randomNumber;
})(L09_Vogelhaus || (L09_Vogelhaus = {}));
//# sourceMappingURL=main.js.map