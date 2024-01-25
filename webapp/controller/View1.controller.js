sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                this.getView().setModel(oModel,"loginModel");

            },

            onLoginPress: function (){
                var oModel = this.getView().getModel("loginModel");
            var username = oModel.getProperty("/username");
            var password = oModel.getProperty("/password");

            // Verificando os dados de login (exemplo simples)
            if (username === "admin" && password === "admin") {
                MessageToast.show("Login bem-sucedido!");
            } else {
                MessageToast.show("Usuário ou senha incorretos.");
            }
            }
        });
    });
