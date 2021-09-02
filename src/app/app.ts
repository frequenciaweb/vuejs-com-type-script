/// <reference path="../types/index.d.ts" />

var vm = new Vue({
    el:"#App",
     data(){
         return {
             message: "teste"
         }
     }
  })

  new Vue(new OutroController());



