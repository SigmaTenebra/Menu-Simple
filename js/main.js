let opcion=99;
let option=99;
let total=0;

alert("Bienvenido a Lorem");
do{
    opcion= parseInt(prompt("Lorem \n\nMenu: \n1:Comprar \n2:Lista de Productos \n3:Carrito \n0:Finalizar Compra \n\nIngresar el numero de la opcion deseada:"));
    switch(opcion){
        case 1:
            do{
                option= parseInt(prompt("Lorem \n\nProductos: \n1:God of War 2 \n2:Resident Evil 4 \n3:Gran Turismo 4 \n4:Mortal Kombat: Shaolin Monks \n5:UFC3 \n6:Tekken 5 \n7:Black \n0:Menu Anterior \n\nIngresar el numero del juego deseado:"));
                switch (option){
                    case 1:
                        total+=1000;
                        break;
                    case 2:
                        total+=800;
                        break;
                    case 3:
                        total+=600;
                        break;
                    case 4:
                        total+=700;
                        break;
                    case 5:
                        total+=900;
                        break;
                    case 6:
                        total+=500;
                        break;
                    case 7:
                        total+=700;
                        break;
                    case 0:
                        break;                    
                    default:
                        alert("Opcion ingresada no valida!!");
                        break;
                }
            }while(option!=0);
            break;
        case 2:
            alert("Lorem \n\nGod of War 2 - Valor $1000\nResident Evil 4 - Valor $800 \nGran Turismo 4 - Valor $600 \nMortal Kombat: SM - Valor $700 \nSmack vs Raw - Valor $900 \nTekken 5 - Valor $500 \nBlack - Valor $700");
            break;
        case 3:
            alert("Lorem \n\nEl coste total de su compra es de: "+total);
            break;
        case 0:
            break;
        default:
            alert("Opcion ingresada no valida!!");
            break;
    }
}while(opcion!=0);
alert("Lorem \n\nEl coste total de su compra es de: "+total+"\n\nGracias por utilizar nuestro sistema de compra!!\nVuelva pronto!!");