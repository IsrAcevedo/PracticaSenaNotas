var n1=0,n2=0,n3=0,n4=0,prom;
const aprendiz = [
    { nombre:"Israel Acevedo Gama", usu: "israel", password: "pollo", numdoc:"11151"},
    { nombre:"James Yamit Zapata Guerrero ", usu: "james", password: "pollo",numdoc:"11152"},
    { nombre:"Juan Mateo Sabogal", usu: "mateo", password: "pollo",numdoc:"11153"},
    { nombre:"Miguel Angel España", usu: "miguel", password: "pollo",numdoc:"11154"},
    { nombre:"Daniel Santiago Quintero", usu: "daniel", password: "pollo",numdoc:"11155"},
    { nombre:"Oscar Manuel Murillo", usu: "oscar", password: "pollo",numdoc:"11156"},
    { nombre:"Juan Carlos Rodruguez", usu: "carlos", password: "pollo",numdoc:"11157"},
    { nombre:"Damaris Yurleidy Lozano", usu: "damaris", password: "pollo",numdoc:"11158"},
    { nombre:"Tatiana Contreras", usu: "tatiana", password: "pollo",numdoc:"11159"},
    { nombre:"Danel Angarita Jerez", usu: "danel", password: "pollo",numdoc:"111510"},
    { nombre:"Santiago Alexander Pabon", usu: "santiago", password: "pollo",numdoc:"111511"},
    { nombre:"Samuel Osman Castrillon", usu: "samuel", password: "pollo",numdoc:"111512"}
]

var usuario = document.getElementById('nombre');
var contra = document.getElementById('passw');


function validar(){
    var usupas= false;
    while (usupas==false) {
        for (let index = 0; index < aprendiz.length; index++) {

            if (aprendiz[index].usu==usuario.value && aprendiz[index].password==contra.value) {
                
                alert(" BIENVENIDO APRENDIZ :  "+aprendiz[index].nombre);
               
                usupas=true;
                window.open(href="./notas.html");

                break;
                
            } 
           
        }
        if (usupas==false) {
            alert(" usuario o contraseña incorrecta");
        } 
        break;
       
        
    }


    
}

function calPromedio(){
    n1=document.querySelector('#n1');
    n2=document.querySelector('#n2');
    n3=document.querySelector('#n3');
    n4=document.querySelector('#n4');
    
    prom=(parseFloat(n1.value)+parseFloat(n2.value)+parseFloat(n3.value)+parseFloat(n4.value))/4;
   if (prom>1) {
    document.querySelector('#prom').value=prom;
   }else{
    alert('corrijas el valor de las notas')
   }
    
    
}

function buscarAprendiz(){
    
    var doc=document.querySelector('#numdoc');

    for (let index = 0; index < aprendiz.length; index++) {
        if (aprendiz[index].numdoc==doc.value) {

            document.querySelector('#nAprendiz').value=aprendiz[index].nombre;
        }
        
    }

    
}


