"use strict";
var L10_Vogelhaus;
(function (L10_Vogelhaus) {
    class Moveable {
        position;
        velocity;
        update;
        constructor(_position, _velocity) {
            this.position = _position.copy();
            if (_velocity)
                this.velocity = _velocity.copy();
            else
                this.velocity = new L10_Vogelhaus.Vector(0, 0);
            this.update = true;
        }
    }
    L10_Vogelhaus.Moveable = Moveable;
})(L10_Vogelhaus || (L10_Vogelhaus = {}));
//# sourceMappingURL=moveable.js.map