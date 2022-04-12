function positions(firstPlace, secondPlace, lastPlace){
    podio.splice(lastPlace,0, podio.splice(firstPlace,1)[0]);
    return podio
}
let podio =["firstPlace", "secondPlace", "lastPlace"]
podio.push("Daniel")
console.log(podio)
positions(podio, 0,0)
podio.splice(podio.indexOf("lastPlace"), 1);
console.log(podio)
console.log("1ª - Colocado: " + podio[0] );
console.log("2ª - Colocado: " + podio[1] );
console.log("3ª - Colocado: " + podio[2] );