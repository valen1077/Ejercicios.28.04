"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function contarNumeros() {
    var cantN = rls.questionInt('Ingrese la cantidad de números a ingresar: ');
    var nums = [];
    for (var i = 0; i < cantN; i++) {
        var numero = rls.questionInt("Ingrese el n\u00FAmero ".concat(i + 1, ": "));
        nums.push(numero);
    }
    var positivos = 0;
    var negativos = 0;
    var ceros = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positivos++;
        }
        else if (nums[i] < 0) {
            negativos++;
        }
        else {
            ceros++;
        }
    }
    console.log("En el conjunto ingresado hay ".concat(positivos, " n\u00FAmeros positivos, ").concat(negativos, " n\u00FAmeros negativos y ").concat(ceros, " ceros."));
}
contarNumeros();
