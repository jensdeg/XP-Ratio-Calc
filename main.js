let xplevel = parseInt(localStorage.getItem('xplevel')) || 0 
let magnetratio = parseInt(document.getElementById("magnet-input").value)
let gsratio = parseInt(document.getElementById("gs-input").value)
let fragmentratio = parseInt(document.getElementById("fragment-input").value)
let wrenchratio = parseInt(document.getElementById("wrench-input").value)
let scrapratio = parseInt(document.getElementById("scrap-input").value)
updateCalculations()
document.getElementById("XPLEVEL").value = xplevel || 0

document.getElementById("XPLEVEL").addEventListener("input",function(){
    xplevel = parseInt(document.getElementById("XPLEVEL").value);
    localStorage.setItem('xplevel', xplevel)
    updateCalculations()
})
document.getElementById("magnet-input").addEventListener("input",function(){
    magnetratio = parseInt(document.getElementById("magnet-input").value);
    updateCalculations()
})
document.getElementById("gs-input").addEventListener("input",function(){
    gsratio = parseInt(document.getElementById("gs-input").value);
    updateCalculations()
})
document.getElementById("fragment-input").addEventListener("input",function(){
    fragmentratio = parseInt(document.getElementById("fragment-input").value);
    updateCalculations()
})
document.getElementById("wrench-input").addEventListener("input",function(){
    wrenchratio = parseInt(document.getElementById("wrench-input").value);
    updateCalculations()
})
document.getElementById("scrap-input").addEventListener("input",function(){
    scrapratio = parseInt(document.getElementById("scrap-input").value);
    updateCalculations()
})

function updateCalculations(){
    document.getElementById("xp-output").value = xplevel || 0
    document.getElementById("magnet-output").value = calculatelevel(xplevel, magnetratio) || 0
    document.getElementById("gs-output").value = calculatelevel(xplevel, gsratio) || 0
    document.getElementById("fragment-output").value = calculatelevel(xplevel, fragmentratio) || 0
    document.getElementById("wrench-output").value = calculatelevel(xplevel, wrenchratio) || 0
    document.getElementById("scrap-output").value = calculatelevel(xplevel, scrapratio) || 0
}

function calculatelevel(xplevel, ratio){
    return Math.round(xplevel*(ratio/100))
}