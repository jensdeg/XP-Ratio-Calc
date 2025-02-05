let xplevel = parseInt(localStorage.getItem('xplevel'))         || 0 
let magnetratio = parseInt(localStorage.getItem('magnet'))     || parseInt(document.getElementById("magnet-input").value)
let gsratio = parseInt(localStorage.getItem('gs'))         || parseInt(document.getElementById("gs-input").value)
let fragmentratio = parseInt(localStorage.getItem('fragment'))   || parseInt(document.getElementById("fragment-input").value)
let wrenchratio = parseInt(localStorage.getItem('wrench'))     || parseInt(document.getElementById("wrench-input").value)
let scrapratio = parseInt(localStorage.getItem('scrap'))      || parseInt(document.getElementById("scrap-input").value)
updateCalculations()
document.getElementById("XPLEVEL").value = xplevel || 0
document.getElementById("magnet-input").value = magnetratio || 0
document.getElementById("gs-input").value = gsratio || 0
document.getElementById("fragment-input").value = fragmentratio || 0
document.getElementById("wrench-input").value = wrenchratio || 0
document.getElementById("scrap-input").value = scrapratio || 0

document.getElementById("XPLEVEL").addEventListener("input",function(){
    xplevel = parseInt(document.getElementById("XPLEVEL").value);
    localStorage.setItem('xplevel', xplevel)
    updateCalculations()
})
document.getElementById("magnet-input").addEventListener("input",function(){
    magnetratio = parseInt(document.getElementById("magnet-input").value);
    localStorage.setItem('magnet', magnetratio)
    updateCalculations()
})
document.getElementById("gs-input").addEventListener("input",function(){
    gsratio = parseInt(document.getElementById("gs-input").value);
    localStorage.setItem('gs', gsratio)
    updateCalculations()
})
document.getElementById("fragment-input").addEventListener("input",function(){
    fragmentratio = parseInt(document.getElementById("fragment-input").value);
    localStorage.setItem('fragment', fragmentratio)
    updateCalculations()
})
document.getElementById("wrench-input").addEventListener("input",function(){
    wrenchratio = parseInt(document.getElementById("wrench-input").value);
    localStorage.setItem('wrench', wrenchratio)
    updateCalculations()
})
document.getElementById("scrap-input").addEventListener("input",function(){
    scrapratio = parseInt(document.getElementById("scrap-input").value);
    localStorage.setItem('scrap', scrapratio)
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

function Reset(){
    document.getElementById("magnet-input").value = 35
    document.getElementById("gs-input").value = 45
    document.getElementById("fragment-input").value = 25
    document.getElementById("wrench-input").value = 25
    document.getElementById("scrap-input").value = 5
    localStorage.setItem('magnet', 35)
    localStorage.setItem('gs', 45)
    localStorage.setItem('fragment', 25)
    localStorage.setItem('wrench', 25)
    localStorage.setItem('scrap', 5)
}