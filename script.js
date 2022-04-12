window.addEventListener("load", init);


const osszesKep = ["hatter.jpg", "kep1.jpg", "kep2.jpg", "kep3.jpg", "kep4.jpg", "kep5.jpg", "kep6.jpg",
    "kep7.jpg", "kep8.jpg", "kep9.jpg", "kep10.jpg", "kep11.jpg", "kep12.jpg", "kep13.jpg", "kep14.jpg",
    "kep15.jpg", "kep16.jpg", "kep17.jpg", "kep18.jpg", "kep19.jpg", "kep20.jpg"];

const hatter = "kepek/" + osszesKep[0];
var sorHossz = 4;
const kivalasztottKepek = [];
let n = 0;
//let db = 0;
const hol = [];
for (let index = 0; index < sorHossz * 2; index++) {
    n = 0;
    let benneVan = true;
    while (benneVan) {
        var rndSzam = Math.floor((Math.random() * 21) + 1);
        benneVan = benneVanE(index, rndSzam);
    }

    //console.log(rndSzam);

    kivalasztottKepek.push(osszesKep[rndSzam]);
    kivalasztottKepek.push(osszesKep[rndSzam]);
}



function benneVanE(index, rndSzam) {
    let n = 0

    while (n < index * 2 && !(kivalasztottKepek[n] === osszesKep[rndSzam])) {
        //console.log(rndSzam);
        n++;
    }
    return n < index;
}


function init() {
    //kivalasztottKepek = kepKivalasztasok;
    //console.log(kivalasztottKepek.join());
    kiir("container", VALAMI);
    for (let index = 0; index < sorHossz * sorHossz; index++) {
        ID(index).addEventListener("click", megfordit);

    }
}

function kiir(hova, fv) {
    ID(hova).innerHTML = fv();
}

function ID(elem) {
    return document.getElementById(elem);
}
function VALAMI() {
    let szoveg = "";
    for (let index = 0; index < sorHossz * sorHossz; index++) { //Át kell majd írni
        szoveg += "<div>" + "<img id=" + index + " src='" + hatter + "'>" + "</div>";
    }
    return szoveg;
}
function megfordit() {
    let id = event.target.id;
    //alert(id);
    event.target.src = "kepek/" + kivalasztottKepek[Number(id)];
    //setTimeout(mutat(id), 21000);
    hol.push(id);
    //console.log("db: "+db);
    if (hol.length === 2) {
        if (kivalasztottKepek[Number(hol[0])] === kivalasztottKepek[Number(hol[1])]) {
            ID(hol[0]).removeEventListener("click", megfordit);
            ID(hol[1]).removeEventListener("click", megfordit);
            hol.splice(0);
        } else {
            setTimeout(function () {
                ID(hol[0]).src = hatter;
                ID(hol[1]).src = hatter;
                //console.log(hol[0]);
                //console.log(hol[1]);
                hol.splice(0);

            }, 1000);
        }
    }

}


/*function mutat(id) {

    ID(id).innerHTML.src = hatter;
}*/