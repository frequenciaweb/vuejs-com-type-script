"use strict";
/// <reference path="../types/index.d.ts" />
var vm = new Vue({
    el: "#App",
    data: function () {
        return {
            message: "teste"
        };
    }
});
new Vue(OutroController);
