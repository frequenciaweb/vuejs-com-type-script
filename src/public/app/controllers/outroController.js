"use strict";
var OutroController = /** @class */ (function () {
    function OutroController() {
        this.el = "#OutroController";
        this.methods = {
            clique: function () {
                alert('teste');
            }
        };
    }
    OutroController.prototype.data = function () {
        return {
            message: "outro controller",
        };
    };
    return OutroController;
}());
