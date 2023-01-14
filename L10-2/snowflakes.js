"use strict";
var L10_Vogelhaus;
(function (L10_Vogelhaus) {
    class Snowflake {
        position;
        size;
        velocity;
        radiusParticle;
        constructor(_position, _size) {
            this.position = _position;
            this.size = _size;
            this.radiusParticle = 15;
            this.velocity = new L10_Vogelhaus.Vector(0, 0);
            this.velocity.random(50, 100, "y");
        }
        letItSnow(_timeslice) {
            let offset = new L10_Vogelhaus.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y > 400)
                this.position.y -= 400;
        }
        draw() {
            let radiusParticle = 40;
            let particle = new Path2D();
            let gradient = L10_Vogelhaus.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_Vogelhaus.crc2.save();
            L10_Vogelhaus.crc2.translate(this.position.x, this.position.y);
            L10_Vogelhaus.crc2.fillStyle = gradient;
            let x = (Math.random() - 0.5) * this.size.x;
            let y = -(Math.random() * this.size.y);
            L10_Vogelhaus.crc2.save();
            L10_Vogelhaus.crc2.translate(x, y);
            L10_Vogelhaus.crc2.fill(particle);
            L10_Vogelhaus.crc2.restore();
            L10_Vogelhaus.crc2.restore();
        }
    }
    L10_Vogelhaus.Snowflake = Snowflake;
})(L10_Vogelhaus || (L10_Vogelhaus = {}));
//# sourceMappingURL=snowflakes.js.map