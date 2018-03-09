import {Create} from "./main";
import {Read} from "./main";
import {Delete} from "./main";

let obj1 = new Create();
let obj2 = new Read();
let obj3 = new Delete();

let fecha = new Date("1995,15,10");
obj1.addStudent("13400436","daniel","jimenez",89,"masculino",fecha,true);
obj1.addStudent("13400440","jose","ortiz",90,"masculino",fecha,true);
obj1.addStudent("13400441","pedro","rodriguez",77,"masculino",fecha,false);
obj2.readStudent();

console.log("------Despues de borrar el registro con 13400440---------");
obj3.deleteStudent("13400440");
obj2.readStudent();