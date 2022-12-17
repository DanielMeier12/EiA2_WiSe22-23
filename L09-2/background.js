"use strict";
var L09_Vogelhaus;
(function (L09_Vogelhaus) {
    function drawStatic() {
        let horizon = L09_Vogelhaus.crc2.canvas.height * L09_Vogelhaus.golden;
        let sunPos = new L09_Vogelhaus.Vector(100, 125);
        let mountainPos = new L09_Vogelhaus.Vector(0, horizon);
        let cloudPos = new L09_Vogelhaus.Vector(550, 125);
        let cloudSize = new L09_Vogelhaus.Vector(250, 75);
        let treePos = new L09_Vogelhaus.Vector(600, 350);
        let treeMaxScale = new L09_Vogelhaus.Vector(0.5, 0.5);
        let snowmanPos = new L09_Vogelhaus.Vector(L09_Vogelhaus.randomNumber(400, 750), 500);
        let birdhousePos = new L09_Vogelhaus.Vector(L09_Vogelhaus.randomNumber(50, 350), 450);
        drawBackground();
        drawSun(sunPos);
        drawCloud(cloudPos, cloudSize);
        drawMountains(mountainPos, 75, 200, "lightgrey", "white");
        drawMountains(mountainPos, 50, 150, "white", "lightgrey");
        drawTrees(1, treePos, treeMaxScale);
        drawTree();
        drawBirdhouse(birdhousePos);
        drawSnowman(snowmanPos);
    }
    L09_Vogelhaus.drawStatic = drawStatic;
    function drawBackground() {
        console.log("Background");
        let gradient = L09_Vogelhaus.crc2.createLinearGradient(0, 0, 0, L09_Vogelhaus.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L09_Vogelhaus.golden, "white");
        gradient.addColorStop(1, "lightblue");
        L09_Vogelhaus.crc2.fillStyle = gradient;
        L09_Vogelhaus.crc2.fillRect(0, 0, L09_Vogelhaus.crc2.canvas.width, L09_Vogelhaus.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun");
        let r1 = 30;
        let r2 = 150;
        let gradient = L09_Vogelhaus.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSL(60, 100%, 50%, 0)");
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(_position.x, _position.y);
        L09_Vogelhaus.crc2.fillStyle = gradient;
        L09_Vogelhaus.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Clouds");
        let nParticles = 60;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = L09_Vogelhaus.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(_position.x, _position.y);
        L09_Vogelhaus.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09_Vogelhaus.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_Vogelhaus.crc2.translate(x, y);
            L09_Vogelhaus.crc2.fill(particle);
            L09_Vogelhaus.crc2.restore();
        }
        L09_Vogelhaus.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 30;
        let stepMax = 50;
        let x = 0;
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(_position.x, _position.y);
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.moveTo(0, 0);
        L09_Vogelhaus.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_Vogelhaus.crc2.lineTo(x, y);
        } while (x < L09_Vogelhaus.crc2.canvas.width);
        L09_Vogelhaus.crc2.lineTo(x, 0);
        L09_Vogelhaus.crc2.closePath();
        let gradient = L09_Vogelhaus.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_Vogelhaus.crc2.fillStyle = gradient;
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.restore();
    }
    function drawTrees(_nTrees, _position, _maxScale) {
        let transform = L09_Vogelhaus.crc2.getTransform();
        L09_Vogelhaus.crc2.translate(_position.x, _position.y);
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.fillStyle = "saddlebrown";
        L09_Vogelhaus.crc2.fillRect(0, 0, 20, 50);
        L09_Vogelhaus.crc2.fill();
        for (let drawn = 0; drawn < _nTrees; drawn++) {
            let x = L09_Vogelhaus.randomNumber(0, 750);
            let y = L09_Vogelhaus.randomNumber(10, 30);
            let scale = new L09_Vogelhaus.Vector(y / 50, y / 50);
            L09_Vogelhaus.crc2.save();
            L09_Vogelhaus.crc2.scale(scale.x, scale.y);
            L09_Vogelhaus.crc2.translate(x, y);
            L09_Vogelhaus.crc2.restore();
        }
        L09_Vogelhaus.crc2.setTransform(transform);
    }
    function drawTree() {
        console.log("Trees");
        let nBranches = 60;
        let maxRadius = 30;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        for (let drawn = 0; drawn < nBranches; drawn++) {
            let y = Math.random() * 350;
            let size = 1 - y / 700;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            L09_Vogelhaus.crc2.save();
            L09_Vogelhaus.crc2.translate(600, 0);
            L09_Vogelhaus.crc2.scale(size, size);
            L09_Vogelhaus.crc2.translate(x, 350);
            let colorAngle = L09_Vogelhaus.randomNumber(10, 50);
            let color = "HSLA(122, 50%," + colorAngle + "%, 0.5)";
            L09_Vogelhaus.crc2.fillStyle = color;
            L09_Vogelhaus.crc2.fill(branch);
            L09_Vogelhaus.crc2.restore();
        }
    }
    function drawSnowman(_position) {
        console.log("Snowman");
        let radius = 50;
        let snowball1 = new Path2D();
        let snowball2 = new Path2D();
        let snowball3 = new Path2D();
        let gradient = L09_Vogelhaus.crc2.createRadialGradient(0, 0, 30, 0, 0, 100);
        let pupils = new Path2D();
        //draw snowball1
        snowball1.arc(0, 0, radius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightgrey");
        L09_Vogelhaus.crc2.fillStyle = gradient;
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(_position.x, _position.y);
        L09_Vogelhaus.crc2.arc(0, 0, radius, 0, 2 * Math.PI);
        L09_Vogelhaus.crc2.fill(snowball1);
        L09_Vogelhaus.crc2.restore();
        L09_Vogelhaus.crc2.closePath();
        //draw snowball2
        snowball2.arc(0, 0, radius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightgrey");
        L09_Vogelhaus.crc2.fillStyle = gradient;
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(_position.x, _position.y - 50);
        L09_Vogelhaus.crc2.arc(0, 0, radius, 0, 2 * Math.PI);
        L09_Vogelhaus.crc2.fill(snowball2);
        L09_Vogelhaus.crc2.restore();
        L09_Vogelhaus.crc2.closePath();
        //draw snowball3 
        snowball3.arc(0, 0, radius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightgrey");
        L09_Vogelhaus.crc2.fillStyle = gradient;
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(_position.x, _position.y - 100);
        L09_Vogelhaus.crc2.arc(0, 0, radius, 0, 2 * Math.PI);
        L09_Vogelhaus.crc2.fill(snowball3);
        L09_Vogelhaus.crc2.restore();
        L09_Vogelhaus.crc2.closePath();
        //draw hat
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.fillStyle = "black";
        L09_Vogelhaus.crc2.fillRect(_position.x - 50, _position.y - 140, 100, 10);
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.restore();
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.fillStyle = "black";
        L09_Vogelhaus.crc2.fillRect(_position.x - 30, _position.y - 180, 60, 50);
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.restore();
        //draw eyes
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.fillStyle = "black";
        pupils.arc(_position.x - 20, _position.y - 110, 5, 0, 2 * Math.PI);
        L09_Vogelhaus.crc2.fill(pupils);
        L09_Vogelhaus.crc2.restore();
        L09_Vogelhaus.crc2.closePath();
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.fillStyle = "black";
        pupils.arc(_position.x + 20, _position.y - 110, 5, 0, 2 * Math.PI);
        L09_Vogelhaus.crc2.fill(pupils);
        L09_Vogelhaus.crc2.restore();
        L09_Vogelhaus.crc2.closePath();
        //draw nose 
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.strokeStyle = "orange";
        L09_Vogelhaus.crc2.moveTo(_position.x, _position.y - 100);
        L09_Vogelhaus.crc2.lineTo(_position.x, 430);
        L09_Vogelhaus.crc2.lineWidth = 5;
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.restore();
        L09_Vogelhaus.crc2.closePath();
        //draw arm left
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.strokeStyle = "saddlebrown";
        L09_Vogelhaus.crc2.moveTo(_position.x - 40, _position.y - 50);
        L09_Vogelhaus.crc2.lineTo(_position.x - 80, _position.y - 90);
        L09_Vogelhaus.crc2.lineWidth = 5;
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.restore();
        L09_Vogelhaus.crc2.closePath();
        //draw arm right
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.strokeStyle = "saddlebrown";
        L09_Vogelhaus.crc2.moveTo(_position.x + 40, _position.y - 50);
        L09_Vogelhaus.crc2.lineTo(_position.x + 80, _position.y - 90);
        L09_Vogelhaus.crc2.lineWidth = 5;
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.restore();
        L09_Vogelhaus.crc2.closePath();
    }
    function drawBirdhouse(_position) {
        console.log("Birdhouse");
        let circle = new Path2D;
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.fillStyle = "saddlebrown";
        L09_Vogelhaus.crc2.fillRect(_position.x, _position.y, 20, 100);
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.closePath();
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.fillStyle = "burlywood";
        L09_Vogelhaus.crc2.fillRect(_position.x - 20, _position.y - 60, 60, 60);
        L09_Vogelhaus.crc2.closePath();
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.fillStyle = "saddlebrown";
        L09_Vogelhaus.crc2.fillRect(_position.x - 30, _position.y - 60, 80, 20);
        L09_Vogelhaus.crc2.closePath();
        L09_Vogelhaus.crc2.fillStyle = "black";
        L09_Vogelhaus.crc2.beginPath();
        circle.arc(_position.x + 10, _position.y - 20, 15, 0, 2 * Math.PI);
        L09_Vogelhaus.crc2.fill(circle);
        L09_Vogelhaus.crc2.closePath();
    }
})(L09_Vogelhaus || (L09_Vogelhaus = {}));
//# sourceMappingURL=background.js.map