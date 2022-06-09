class Juego {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = "$"+ precio;
        this.valor = Number(precio);
    }
    agregandoIVA(){
        this.valor=this.valor*1.21;
    }
}
const listaJuegos = [];
listaJuegos.push(new Juego("God of War 2",1000));
listaJuegos.push(new Juego("Resident Evil 4",800));
listaJuegos.push(new Juego("Gran Turismo 4",600));
listaJuegos.push(new Juego("Mortal Kombat: SM",700));
listaJuegos.push(new Juego("UFC3",900));
listaJuegos.push(new Juego("Tekken 5",500));
listaJuegos.push(new Juego("Black",700));
for(const juego of listaJuegos){
    juego.agregandoIVA();
}


const carritoLi = [];
const carritoValor = [];
const carritoIndex = [];

let opcionA;
let opcionB;
let total=0;

function menuPrincipal(){
    let option= parseInt(prompt("Lorem \n\nMenu: \n1:Comprar \n2:Carrito \n0:Finalizar Compra \n\nIngresar el numero de la opcion deseada:"));
    return option;
}
function menuCompra(){
    let option = parseInt(prompt("Lorem \n\nProductos: \n1:" + listaJuegos[0].nombre + " - Valor "+ listaJuegos[0].precio +"+IVA \n2:" + listaJuegos[1].nombre + " - Valor "+ listaJuegos[1].precio +"+IVA\n3:" + listaJuegos[2].nombre + " - Valor "+ listaJuegos[2].precio +"+IVA \n4:" + listaJuegos[3].nombre + " - Valor "+ listaJuegos[3].precio +"+IVA\n5:" + listaJuegos[4].nombre + " - Valor "+ listaJuegos[4].precio +"+IVA \n6:" + listaJuegos[5].nombre + " - Valor "+ listaJuegos[5].precio +"+IVA \n7:" + listaJuegos[6].nombre + " - Valor "+ listaJuegos[6].precio +"+IVA \n0:Menu Anterior \n\nIngresar el numero del juego deseado:"));
    switch (option){
        case 1:
            pushCarrito(0);
            break;
        case 2:
            pushCarrito(1);
            break;
        case 3:
            pushCarrito(2);
            break;
        case 4:
            pushCarrito(3);
            break;
        case 5:
            pushCarrito(4);
            break;
        case 6:
            pushCarrito(5);
            break;
        case 7:
            pushCarrito(6);
            break;
        case 0:
            break;                    
        default:
            alert("Opcion ingresada no valida!!");
            break;
    }
    return option;
}
function pushCarrito(indice){
    total+=listaJuegos[indice].valor;
    alert("Lorem\n\nSe agrego "+ listaJuegos[indice].nombre +" a su carrito, por un valor de "+listaJuegos[indice].precio+"+IVA\nEl coste total de su compra es de: "+total);
    if(carritoLi.includes(listaJuegos[indice].nombre)){
        carritoValor[carritoLi.indexOf(listaJuegos[indice].nombre)]+=1;
    }else{
        carritoLi.push(listaJuegos[indice].nombre);
        carritoValor.push(1);
        carritoIndex.push(indice);
    }
}
function carrito(){
    if(carritoLi.length !=0){
        let mensajeCarrito=armadoMensaje();
        
        mensajeCarrito+="\nEl coste total de su compra es de: "+total;
        alert(mensajeCarrito);
    }else{
        alert("Lorem \n\nSu carrito de compra esta vacia");
    }
}
function armadoMensaje(){
    let mensaje = "Lorem\n\n";
    for(let i=0; i<carritoLi.length ;i++){
        mensaje+="     "+carritoLi[i]+"   *"+ carritoValor[i] +"   Valor:"+ carritoValor[i]*listaJuegos[carritoIndex[i]].valor+"\n";
    }
    return mensaje;
}
function mensajeSalida(){
    let mensajeFinal = armadoMensaje();
    mensajeFinal+="\nEl coste total de su compra es de: "+total+"\n\nGracias por utilizar nuestro sistema de compra!!\nVuelva pronto!!";
    alert(mensajeFinal);
}

alert("Bienvenido a Lorem");
do{
    opcionA=menuPrincipal();
    switch(opcionA){
        case 1:
            do{
                opcionB= menuCompra();
            }while(opcionB!=0);
            carrito();
            break;
        case 2:
            carrito();
            break;
        case 0:
            break;
        default:
            alert("Opcion ingresada no valida!!");
            break;
    }
}while(opcionA!=0);
mensajeSalida();
