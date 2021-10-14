
document.getElementById("submitbtn").onclick = function(e) {
    let area = document.getElementById("area").value;
    let room = document.getElementById("room").value;
    let materials = document.getElementById("materials").value;
    e.preventDefault();
    
    return document.getElementById("estimate").innerText = (area*1000+room*10000)* materials + (area*1000+room*10000) + "€";  
};