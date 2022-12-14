namespace L09_Vogelhaus{

    export function drawStatic(): void {
        let horizon: number = crc2.canvas.height * golden;

        let sunPos: Vector = new Vector(100, 125);
        let mountainPos: Vector = new Vector(0, horizon);
        let cloudPos: Vector = new Vector(550, 125);
        let cloudSize: Vector = new Vector(250, 75);
        let treePos: Vector = new Vector(600, 350);
        let treeMaxScale: Vector = new Vector(0.5, 0.5);
        let snowmanPos: Vector = new Vector(randomNumber(400, 750), 500);
        let birdhousePos: Vector = new Vector(randomNumber(50, 350), 450);

        drawBackground();
        drawSun(sunPos);
        drawCloud(cloudPos, cloudSize);
        drawMountains(mountainPos, 75, 200, "lightgrey" , "white");
        drawMountains(mountainPos, 50, 150, "white" , "lightgrey");
        drawTrees(1, treePos, treeMaxScale);
        drawTree();
        drawBirdhouse(birdhousePos);
        drawSnowman(snowmanPos);
    }


    function drawBackground(): void  {
        console.log("Background");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "lightblue");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void  {
        console.log("Sun");
        let r1: number = 30;
        let r2: number = 150; 
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        
        gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSL(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void  {
        console.log("Clouds");
        let nParticles: number = 60; 
        let radiusParticle: number = 40;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle); 
            crc2.restore(); 
        }
        crc2.restore();
    }
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");

        let stepMin: number = 30;
        let stepMax: number = 50;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);
       
        crc2.beginPath();
        crc2.moveTo(0, 0); 
        crc2.lineTo(0, - _max);
        
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = - _min - Math.random() * (_max - _min);

            crc2.lineTo( x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, - _max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTrees(_nTrees: number, _position: Vector, _maxScale: Vector): void {
        let transform: DOMMatrix = crc2.getTransform();

        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.fillStyle = "saddlebrown";
        crc2.fillRect(0, 0, 20, 50);
        crc2.fill();


        for (let drawn: number = 0; drawn < _nTrees; drawn++) {
            let x: number = randomNumber(0, 750);
            let y: number = randomNumber(10, 30);
            let scale: Vector = new Vector(y / 50, y / 50);

            crc2.save();
            crc2.scale(scale.x, scale.y);
            crc2.translate(x, y);

            crc2.restore();
        }
        crc2.setTransform(transform);
    }
    function drawTree(): void {
        console.log("Trees");

        let nBranches: number = 60;
        let maxRadius: number = 30;
        let branch: Path2D = new Path2D();

        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);

        for (let drawn: number = 0; drawn < nBranches; drawn++) {
            let y: number = Math.random() * 350;
            let size: number = 1 - y / 700;
            let x: number = (Math.random() - 0.5) * 2 * maxRadius;

            crc2.save();
            crc2.translate(600, 0);
            crc2.scale(size, size);
            crc2.translate(x, 350);

            let colorAngle: number = randomNumber(10, 50);
            let color: string = "HSLA(122, 50%," + colorAngle + "%, 0.5)";

            crc2.fillStyle = color;
            crc2.fill(branch);

            crc2.restore();
        }
    }
    function drawSnowman(_position: Vector): void {
        console.log("Snowman");

        let radius: number = 50;
        let snowball1: Path2D = new Path2D();
        let snowball2: Path2D = new Path2D();
        let snowball3: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 30, 0, 0, 100);
        let pupils: Path2D = new Path2D(); 

        //draw snowball1
        snowball1.arc(0, 0, radius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightgrey");
        crc2.fillStyle = gradient; 

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.arc(0, 0, radius, 0, 2 * Math.PI);
        crc2.fill(snowball1);
        crc2.restore();
        crc2.closePath();

        //draw snowball2
        snowball2.arc(0, 0, radius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightgrey");
        crc2.fillStyle = gradient; 

        crc2.save();
        crc2.translate(_position.x, _position.y - 50);
        crc2.arc(0, 0, radius, 0, 2 * Math.PI);
        crc2.fill(snowball2);
        crc2.restore();
        crc2.closePath();

        //draw snowball3 
        snowball3.arc(0, 0, radius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightgrey");
        crc2.fillStyle = gradient; 

        crc2.save();
        crc2.translate(_position.x, _position.y - 100);
        crc2.arc(0, 0, radius, 0, 2 * Math.PI);
        crc2.fill(snowball3);
        crc2.restore();
        crc2.closePath();

        //draw hat
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(_position.x - 50, _position.y - 140, 100, 10);
        crc2.fill();
        crc2.restore();

        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(_position.x - 30, _position.y - 180, 60, 50);
        crc2.fill();
        crc2.restore();

        //draw eyes
        crc2.beginPath();
        crc2.fillStyle = "black"; 
        pupils.arc(_position.x - 20, _position.y - 110, 5, 0, 2 * Math.PI);
        crc2.fill(pupils);
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.fillStyle = "black"; 
        pupils.arc(_position.x + 20, _position.y - 110, 5, 0, 2 * Math.PI);
        crc2.fill(pupils);
        crc2.restore();
        crc2.closePath();

        //draw nose 
        crc2.beginPath();
        crc2.strokeStyle = "orange";
        crc2.moveTo(_position.x, _position.y - 100);
        crc2.lineTo(_position.x, 430);
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();
        crc2.closePath();

        //draw arm left
        crc2.beginPath();
        crc2.strokeStyle = "saddlebrown";
        crc2.moveTo(_position.x - 40, _position.y - 50);
        crc2.lineTo(_position.x  - 80, _position.y - 90);
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();
        crc2.closePath();

        //draw arm right
        crc2.beginPath();
        crc2.strokeStyle = "saddlebrown";
        crc2.moveTo(_position.x + 40, _position.y - 50);
        crc2.lineTo(_position.x  + 80, _position.y - 90);
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.restore();
        crc2.closePath();

    }
    function drawBirdhouse(_position: Vector): void {
        console.log("Birdhouse");
        
        let circle: Path2D = new Path2D;

        crc2.beginPath();
        crc2.fillStyle = "saddlebrown";
        crc2.fillRect(_position.x, _position.y, 20, 100);
        crc2.fill();
        crc2.closePath();

        crc2.save();
        crc2.beginPath();
        crc2.fillStyle = "burlywood";
        crc2.fillRect(_position.x - 20, _position.y - 60, 60, 60);
        crc2.closePath();

        crc2.beginPath();
        crc2.fillStyle = "saddlebrown";
        crc2.fillRect(_position.x - 30, _position.y - 60, 80, 20);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.beginPath();
        circle.arc(_position.x + 10, _position.y - 20, 15, 0, 2 * Math.PI);
        crc2.fill(circle);
        crc2.closePath();
        
    }
}
