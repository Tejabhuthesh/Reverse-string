sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idrst.revsersestring.controller.View1", {
            onInit: function () {

            },
            submit: function(){
               // var str = this.getView().byId("num").getValue();
                var str ="bhu";
                var len =  str.length;
                var newString = "";
                for (var i = len - 1; i >= 0; i--) {
                    newString += str[i];
                }
                alert(newString); 
            
                // var key = this.getView().byId("num").getValue();
                // var text = " ";
                // for (let i = 1; i < key; i++) {
                //     text += " " + i + ",";
                // }
               

               
               
            }

        });
    });
