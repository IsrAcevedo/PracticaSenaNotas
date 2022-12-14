let tidoc, numdoc,pnom,snom,pape,sape,ema,tel,btn,optipodoc;
const formula=document.querySelector(".formulario");
formula.addEventListener('submit', validar)

function capturar(){
    tidoc=formula.tipodoc;
    optipodoc=tidoc.options[tidoc.selectedIndex].text
    numdoc=formula.numdoc;
    pnom=formula.pnombre;
    snom=formula.snombre; 
    pape=formula.papellido;
    sape=formula.sapellido;
    ema=formula.email;
    tel=formula.tel;
   
}
var error=false;

function validar(e){
    capturar();
   if (optipodoc =='Seleccione' ) {
    alert('seleccione tipo de documento ')
    error=true;
   }
   if (!(/^\d{10}$/.test(tel.value))){
    alert(tel.value +' no es un numero valido');
    error=true;
   }
   if(!(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/).test(ema.value))  {
    alert(ema.value +' no es un correo valido');
    error=true;
   }
    for (let index = 1; index < formula.length-2; index++) {
        const element = formula[index].value;
        if (element.length <=3 || element.length >=20 || /^\s+$/.test(element)) {
            alert('error con el dato '+element);
            e.preventDefault();
            error=true
        }

    } 
    if (error==true) {
        alert('corrija los datos ingresados')
        error=false;
        e.preventDefault();
    } else {
        enviar();
    }
    
}    

function enviar(){
  
    alert('enviando datos a la base de datos \n'
    +'tipo de documento: '+optipodoc+'\nnumero de documento: '+numdoc.value+
    '\nnombre completo: '+pnom.value+' '+snom.value+' '+pape.value+' '+sape.value+'\nemail: '+ema.value+
    '\ntelefono: '+tel.value)
}


