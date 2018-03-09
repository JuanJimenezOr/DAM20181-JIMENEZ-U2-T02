"use strict";
exports.__esModule = true;
var student = Array();
var Create = /** @class */ (function () {
    function Create() {
    }
    Create.prototype.addStudent = function (control, name, longName, prom, gen, date, activo) {
        var newStudent = {
            no_control: control,
            nombre: name,
            apellidos: longName,
            promedio: prom,
            genero: gen,
            fecha_nacimiento: date,
            activo: activo
        };
        student.push(newStudent);
    };
    return Create;
}());
exports.Create = Create;
var Read = /** @class */ (function () {
    function Read() {
    }
    Read.prototype.readStudent = function () {
        student.forEach(function (elemento, indice, array) {
            console.log(elemento);
        });
    };
    return Read;
}());
exports.Read = Read;
var Delete = /** @class */ (function () {
    function Delete() {
    }
    Delete.prototype.deleteStudent = function (params) {
        student.forEach(function (elemento, indice, array) {
            if (elemento.no_control == params) {
                delete student[indice];
            }
        });
    };
    return Delete;
}());
exports.Delete = Delete;
function updateStudent(params, value) {
    student.forEach(function (elemento, indice, array) {
        if (elemento.no_control == params) {
            student[elemento.nombre] = value;
        }
    });
}
