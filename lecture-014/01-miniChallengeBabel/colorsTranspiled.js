"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
    function Color() {
        _classCallCheck(this, Color);

        this.red = 0, this.green = 0, this.blue = 0;
    }

    _createClass(Color, [{
        key: "random",
        value: function random() {
            this.red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            this.green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            this.blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            return "RGB " + this.red + "," + this.green + this.blue;
        }
    }]);

    return Color;
}();

module.exports = new Color();
