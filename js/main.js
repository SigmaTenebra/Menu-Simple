let opcionA;
let opcionB;
let total=0;
const juegos = ["God of War 2", "Resident Evil 4", "Gran Turismo 4", "Mortal Kombat: SM", "UFC3", "Tekken 5", "Black"];
const precios = ["$1000", "$800", "$600", "$700", "$900", "$500", "$700"];
const valor = [1000,800,600,700,900,500,700];
const carritoLi = [];
const carritoValor = [];

function menuPrincipal(){
    let option= parseInt(prompt("Lorem \n\nMenu: \n1:Comprar \n2:Carrito \n0:Finalizar Compra \n\nIngresar el numero de la opcion deseada:"));
    return option;
}
function menuCompra(){
    let option = parseInt(prompt("Lorem \n\nProductos: \n1:" + juegos[0] + " - Valor "+ precios[0] +" \n2:" + juegos[1] + " - Valor "+ precios[1] +"\n3:" + juegos[2] + " - Valor "+ precios[2] +" \n4:" + juegos[3] + " - Valor "+ precios[3] +"\n5:" + juegos[4] + " - Valor "+ precios[4] +" \n6:" + juegos[5] + " - Valor "+ precios[5] +" \n7:" + juegos[6] + " - Valor "+ precios[6] +" \n0:Menu Anterior \n\nIngresar el numero del juego deseado:"));
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
    total+=valor[indice];
    alert("Lorem\n\nSe agrego "+ juegos[indice] +" a su carrito, por un valor de "+precios[indice]+"\nEl coste total de su compra es de: "+total);
    if(carritoLi.includes(juegos[indice])){
        carritoValor[carritoLi.indexOf(juegos[indice])]+=1;
    }else{
        carritoLi.push(juegos[indice]);
        carritoValor.push(1);
    }
}
function carrito(){
    if(carritoLi.length !=0){
        for(let i=0; i<carritoLi.length ;i++){
            let name = carritoLi[i];
            let indice = juegos.indexOf(name);
            alert("Lorem \n\n     "+carritoLi[i]+"   *"+ carritoValor[i] +"   Valor:"+ carritoValor[i]*valor[indice]);
        }
        alert("Lorem \n\nEl coste total de su compra es de: "+total);
    }else{
        alert("Lorem \n\nSu carrito de compra esta vacia");
    }
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
alert("Lorem \n\nEl coste total de su compra es de: "+total+"\n\nGracias por utilizar nuestro sistema de compra!!\nVuelva pronto!!");

