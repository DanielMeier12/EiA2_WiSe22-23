/*
 Aufgabe:<L10.2_Vogelhaus>
 Name: <Daniel Meier>
 Matrikel: <271129>
 Datum: <14.01.2023>
 Quellen: <Natan Haider>
*/
namespace L10_Vogelhaus {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    export let imgData: ImageData;

    let snowflakesPos: Vector = new Vector(400, 200);


    let snowflakes: Snowflake[] = [];


    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) 
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawStatic();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        

        drawSnowflakes(50, snowflakesPos);
        drawBirds();
        drawFlyingBirds();

        window.setInterval(update, 20);

    }
    function drawSnowflakes(_nFlakes: number, _position: Vector): void  {
        let transform: DOMMatrix = crc2.getTransform();

        crc2.translate(_position.x, _position.y);

        for (let drawn: number = 0; drawn < _nFlakes; drawn++) {
            crc2.save();
            let pos: Vector = new Vector(randomNumber(0, 325), randomNumber(0, 250));
            let size: Vector = new Vector(10, 10);

            let snowflake: Snowflake = new Snowflake(pos, size);
            snowflake.draw();
            snowflakes.push(snowflake);

            crc2.restore();

        }

        crc2.setTransform(transform);
    }
    function updateSnowflakes(_position: Vector): void {
        let transform: DOMMatrix = crc2.getTransform();
        crc2.translate(_position.x, _position.y);

        for (let snow of snowflakes) {
            snow.letItSnow(1 / 100);
            snow.draw();

        }
        crc2.setTransform(transform);
    }    
    function drawBirds(): void {
        console.log("Bird");
    }
    function updateBirds(): void {
        console.log();
    }
    function drawFlyingBirds(): void {
        console.log("FlyingBirds");
    }
    function updateFlyingBirds(): void {
        console.log();
    }
    function update(): void {
        crc2.putImageData(imgData, 0, 0);

        updateSnowflakes(snowflakesPos);
        updateBirds();
        updateFlyingBirds();
    }
    export function randomNumber(_min: number, _max: number): number {
        let returnNumber: number = Math.floor(Math.random() * (_max - _min)) + _min;
        return returnNumber;
    }
}