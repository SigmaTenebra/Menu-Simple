let opcionA;
let opcionB;
let total=0;

function menuPrincipal(){
    let option= parseInt(prompt("Lorem \n\nMenu: \n1:Comprar \n2:Carrito \n0:Finalizar Compra \n\nIngresar el numero de la opcion deseada:"));
    return option;
}
function menuCompra(){
    let option = parseInt(prompt("Lorem \n\nProductos: \n1:God of War 2 - Valor $1000 \n2:Resident Evil 4 - Valor $800\n3:Gran Turismo 4 - Valor $600 \n4:Mortal Kombat: Shaolin Monks - Valor $700\n5:UFC3 - Valor $900 \n6:Tekken 5 - Valor $500 \n7:Black - Valor $700 \n0:Menu Anterior \n\nIngresar el numero del juego deseado:"));
    switch (option){
        case 1:
            pushCarrito(1000,"God of War 2");
            break;
        case 2:
            pushCarrito(800,"Resident Evil 4");
            break;
        case 3:
            pushCarrito(600,"Gran Turismo 4");
            break;
        case 4:
            pushCarrito(700,"Mortal Kombat: SM");
            break;
        case 5:
            pushCarrito(900,"UFC 3");
            break;
        case 6:
            pushCarrito(500,"Tekken 5");
            break;
        case 7:
            pushCarrito(700,"Black");
            break;
        case 0:
            break;                    
        default:
            alert("Opcion ingresada no valida!!");
            break;
    }
    return option;
}
function pushCarrito(num,name){
    total+=num;
    alert("Lorem\n\nSe agrego "+ name +" a su carrito, por un valor de "+num+"\nEl coste total de su compra es de: "+total);
}
function carrito(){
    alert("Lorem \n\nEl coste total de su compra es de: "+total);
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

