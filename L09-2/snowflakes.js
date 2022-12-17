"use strict";
var L09_Vogelhaus;
(function (L09_Vogelhaus) {
    class Snowflake {
        position;
        size;
        velocity;
        radiusParticle;
        constructor(_position, _size) {
            this.position = _position;
            this.size = _size;
            this.radiusParticle = 15;
            this.velocity = new L09_Vogelhaus.Vector(0, 0);
            this.velocity.random(50, 100, "y");
        }
        letItSnow(_timeslice) {
            let offset = new L09_Vogelhaus.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y > 400)
                this.position.y -= 400;
        }
        draw() {
            let radiusParticle = 40;
            let particle = new Path2D();
            let gradient = L09_Vogelhaus.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_Vogelhaus.crc2.save();
            L09_Vogelhaus.crc2.translate(this.position.x, this.position.y);
            L09_Vogelhaus.crc2.fillStyle = gradient;
            let x = (Math.random() - 0.5) * this.size.x;
            let y = -(Math.random() * this.size.y);
            L09_Vogelhaus.crc2.save();
            L09_Vogelhaus.crc2.translate(x, y);
            L09_Vogelhaus.crc2.fill(particle);
            L09_Vogelhaus.crc2.restore();
            L09_Vogelhaus.crc2.restore();
        }
    }
    L09_Vogelhaus.Snowflake = Snowflake;
})(L09_Vogelhaus || (L09_Vogelhaus = {}));
//# sourceMappingURL=snowflakes.js.map