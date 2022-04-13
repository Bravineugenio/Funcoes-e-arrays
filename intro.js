function positions(firstPlace, secondPlace, lastPlace){

    let podio = [firstPlace, secondPlace, lastPlace]
    
    if(lastPlace == "Daniel"){
        podio.reverse();
        console.log("Primeiro Colocado: ", podio[0])
        console.log("Segundo Colocado: ", podio[1])
        console.log("Terceiro Colocado: ", podio[2])
}   if (secondPlace =="Daniel"){
        console.log("Primeiro Colocado: ", podio[1])
        console.log("Segundo Colocado: ", podio[0])
        console.log("Terceiro Colocado: ", podio[2])
}

}

positions ("Alfredo", "Daniel","Godofredo" )
