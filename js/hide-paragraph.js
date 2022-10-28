document.getElementById("leer-mas").onclick = function() {
     if(document.getElementById("hide-p").style.display === 'none'){
        document.getElementById("hide-p").style.display = "block"
        document.getElementById("leer-mas").innerHTML = "leer menos"
     } else {
        document.getElementById("hide-p").style.display = "none";
        document.getElementById("leer-mas").innerHTML = "leer más"
     }        
   

}
document.getElementById("leer-mas2").onclick = function() {
    if(document.getElementById("hide-p2").style.display === 'none'){
       document.getElementById("hide-p2").style.display = "block"
       document.getElementById("leer-mas2").innerHTML = "leer menos"
    } else {
       document.getElementById("hide-p2").style.display = "none";
       document.getElementById("leer-mas2").innerHTML = "leer más"
    }  
}