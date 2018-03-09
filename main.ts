
interface Alumno{
    no_control: string;
    nombre: string;
    apellidos: string;
    promedio: number;
    genero: string;
    fecha_nacimiento: Date;
    activo: boolean;
}

var student = Array<Alumno>();


export class Create{
   addStudent(control:string,name:string,longName:string,prom:number,
    gen:string,date:Date,activo:boolean):void {
    
    let newStudent:any = {
        no_control: control,
        nombre: name,
        apellidos: longName,
        promedio: prom,
        genero: gen,
        fecha_nacimiento: date,
        activo: activo
    }
    student.push(newStudent);    
}

}

export class Read{
readStudent():void{
    student.forEach(function(elemento, indice, array){
       console.log(elemento) 
    });
}
}

export class Delete{
deleteStudent(params:any) {
    student.forEach(function(elemento, indice, array){
        if(elemento.no_control == params){
            delete student [indice];
        }
     });
}
}

function updateStudent(params:any, value:any) {
    student.forEach(function(elemento, indice, array){
        if(elemento.no_control == params){
             student [elemento.nombre] = value;
        }
     });
}


