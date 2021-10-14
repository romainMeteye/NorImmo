document.getElementById("submitbtn").onclick = function() {
    let area = document.getElementById("area").value;
    let room = document.getElementById("room").value;
    let materials = document.getElementById("materials").value;
    let estimate = document.getElementById("estimate");
 
    return estimate.innerText = (area*1000+room*10000)*materials+(area*1000+room*10000);
}