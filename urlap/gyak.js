"use strict";

function feldolgoz() {
    let veznev = document.forms["urlap"]["veznev"].value;
    let kernev = document.forms["urlap"]["kernev"].value;
    let kereszt = document.forms["urlap"]["kereszt"];
    let sokszoveg = document.forms["urlap"]["sokszoveg"].value;
    let kiir = "";

    /*for (let i = 0; i < kereszt.length; i++) {
        kiir += `A(z) ${i + 1}. név: ${kereszt[i]} <br />`;        
    }*/

    /*switch (kereszt) {
        case "david":
            kiir = "Dávid";
            break;
        case "kinga":
            kiir = "Kinga";
            break;
        case "laci":
            kiir = "Laci";
            break;
        case "balazs":
            kiir = "Balázs";
            break;
    
        default:
            kiir = "Nincs ilyen név!";
            break;
    }*/

    document.getElementById("rejto").style.visibility = "visible";

    document.getElementById("nev").innerHTML = sokszoveg;
}