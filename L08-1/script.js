"use strict";
/*
 Aufgabe:<L08_GenerativeKunst>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <26.11.2022>
 Quellen: <Natan Haider>
*/
var L08;
(function (L08) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    let colors = ["red", "blue", "green", "darkgreen", "lightgreen", "orange", "lightblue", "darkblue", "crimson", "cyan"];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        generateArt();
    }
    function generateArt() {
        canvas.height = 600;
        canvas.width = 1200;
        generateBackground();
        for (let index = 0; index < 1 + randomNumber(100); index++) {
            generateBackground();
            generateCircle(index);
            generateTriangle(index);
            generateBezier(index);
            generarteRectangle(index);
        }
    }
    function generateBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 1000, 300);
        gradient.addColorStop(0, colors[randomNumber(colors.length)]);
        gradient.addColorStop(.5, colors[randomNumber(colors.length)]);
        gradient.addColorStop(1, colors[randomNumber(colors.length)]);
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 60;
        pattern.canvas.height = 120;
        pattern.fillStyle = gradient;
        pattern.moveTo(0, 120);
        pattern.lineTo(60, 120);
        pattern.lineTo(0, 60);
        pattern.lineTo(0, 0);
        pattern.stroke();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    function generateCircle(_index) {
        for (_index = 0; _index < 150; _index++) {
            let x = Math.floor(Math.random() * 1200);
            var y = Math.floor(Math.random() * 600);
            crc2.beginPath();
            crc2.arc(x, y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = colors[randomNumber(colors.length)];
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
    }
    function generateTriangle(_index) {
        for (_index = 0; _index < 5; _index++) {
            let x = Math.floor(Math.random() * 1200);
            var y = Math.floor(Math.random() * 600);
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x, 50);
            crc2.lineTo(10, y);
            crc2.fillStyle = colors[randomNumber(colors.length)];
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
    function generateBezier(_index) {
        for (_index = 0; _index < 5; _index++) {
            let x = Math.floor(Math.random() * 1200);
            var y = Math.floor(Math.random() * 600);
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(x, y, 100, 1000, 0, 0);
            crc2.closePath();
            crc2.stroke();
            crc2.lineWidth = 5;
        }
    }
    function generarteRectangle(_index) {
        for (_index = 0; _index < 5; _index++) {
            let x = Math.floor(Math.random() * 1200);
            var y = Math.floor(Math.random() * 600);
            crc2.beginPath();
            crc2.rect(x, y, 150, 100);
            crc2.fillStyle = colors[randomNumber(colors.length)];
            crc2.fill();
            crc2.stroke();
        }
    }
    function randomNumber(_multiplicator) {
        return Math.floor(Math.random() * _multiplicator);
    }
})(L08 || (L08 = {}));
//# sourceMappingURL=script.js.map