// function calculate estimate price

document.getElementById("submitbtn").onclick = function(e) {
// get value of each input
    let area = document.getElementById("area").value;
    let room = document.getElementById("room").value;
    let materials = document.getElementById("materials").value;
    e.preventDefault();

// valid input variables
    let validArea = 1;
    let validRoom = 1;
    let validMaterials = 1;

// check each input, if wrong add red border
    
    // check area
    if (area < 1 || area === "") {
        document.getElementById("area").classList.add("red");
        validArea = 1;
    } else {
        document.getElementById("area").classList.remove("red");
        validArea = 0;
    }
    // check room
    if (room < 1 || room === "") {
        document.getElementById("room").classList.add("red");
        validRoom = 1;
    } else {
        document.getElementById("room").classList.remove("red");
        validRoom = 0;
    }
    // check materials
    if (materials === "") {
        document.getElementById("materials").classList.add("red");
        validMaterials = 1;
    } else {
        document.getElementById("materials").classList.remove("red");
        validMaterials = 0;
    }

// calculate price if input valid, send back error if wrong
    if (validArea === 1 || validRoom === 1 || validMaterials === 1) {
        document.getElementById("estimate").classList.add("text-danger");
        return document.getElementById("estimate").innerText = "Merci de remplir tous les champs correctement"
    } else {
        let price = (area*1000+room*10000)* materials + (area*1000+room*10000);
        document.getElementById("estimate").classList.remove("text-danger");
    // add space between thousand and hundred
        return document.getElementById("estimate").innerText = new Intl.NumberFormat().format(price) + "€";
    }
};


// function reset estimate price

document.getElementById("reset").onclick = function() {
    document.getElementById("area").classList.remove("red");
    document.getElementById("room").classList.remove("red");
    document.getElementById("materials").classList.remove("red");
    document.getElementById("estimate").innerText = "";
};