
document.getElementById("submitbtn").onclick = function(e) {
    let area = document.getElementById("area").value;
    let room = document.getElementById("room").value;
    let materials = document.getElementById("materials").value;
    e.preventDefault();

    if (area < 1 || area === "" || room < 1 || room === "" || materials === "") {
        document.getElementById("estimate").classList.add("text-danger");
        return document.getElementById("estimate").innerText = "Veuillez remplir tous les champs correctement"
    } else {
         let price = (area*1000+room*10000)* materials + (area*1000+room*10000);
         document.getElementById("estimate").classList.remove("text-danger");
        return document.getElementById("estimate").innerText = new Intl.NumberFormat().format(price) + "€";
    }
};

document.getElementById("reset").onclick = function() {
    document.getElementById("estimate").innerText = "";
};