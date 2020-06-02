

function GetSelectedValue(){
    var e = document.getElementById("job");
    var result = e.options[e.selectedIndex].value;

    if (result === "F001") {
        window.location = 'adminForecastPO.html'; 
    }
    if (result === "F002") {
        window.location = 'adminForecastProject.html'; 
    }

    if (result === "F003") {
        window.location = 'adminActualPO.html'; 
    }
    if (result === "F004") {
        window.location = 'adminActualProject.html'; 
    }
}

