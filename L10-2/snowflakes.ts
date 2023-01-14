namespace L10_Vogelhaus {

    export class Snowflake {
        position: Vector;
        size: Vector;
        velocity: Vector;
        radiusParticle: number;

        constructor(_position: Vector, _size: Vector) {
            this.position = _position;
            this.size = _size;
            this.radiusParticle = 15;
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100, "y");
        }

        letItSnow(_timeslice: number) {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.y > 400)
                this.position.y -= 400;
        }

        draw() {
            let radiusParticle: number = 40;

            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, this.radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = gradient;

            let x: number = (Math.random() - 0.5) * this.size.x;
            let y: number = - (Math.random() * this.size.y);
            crc2.save();
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();


            crc2.restore();
        }
    }
}