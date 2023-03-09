
let count = 0;

document.getElementById("incrementBtn").onclick = function() {
    count +=1;
    document.getElementById("entry").innerHTML = count; 
}

document.getElementById("saveBtn").onclick = function() {
    
    document.getElementById("entry").innerHTML = 0; 
    document.getElementById("history").innerHTML += count + " - ";
    count = 0;
     
}