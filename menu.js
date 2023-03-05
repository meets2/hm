// ---------------- SCRIPT OF NAVBAR -----------
var menu = document.getElementById("menu");
var bars = document.getElementById("bars");
var bars2 = document.getElementById("bars2");
function showMenu(){
    bars.style.display="none";
    bars2.style.display="block";
    bars2.style.top = "40px";
    bars2.style.right = "40px";
    bars2.style.zIndex = "1";
    menu.style.transition = "0.5s";
    menu.style.top = "5px";
}
function hidemenu(){
    bars.style.display="block";
    bars2.style.display="none";
    menu.style.top = "-500px";
    menu.style.transition = "0.5s";
}

// ---------------- SCRIPT FOR BOOKING DATE ------------
document.getElementById('checkInDate').valueAsDate = new Date();

function hello(){
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    if(p1.value != p2.value && p1.value != '' && p1.value != ''){
        alert("Wrong Password");
    }
    else if(p1.value == p2.value && p1.value != '' && p1.value != ''){
        alert("Success");
    }
    else{
        alert("Aah, Please enter Password");
    }
}


// ----------------------------- SORRY FUNCTION ---------------------
function sorryFunction(){
    // alert("Our project is being ready... Please try later");
    alert("Currrently unavialable, project is being ready !");
}
