function Submit() {
    var broj1 = parseInt(document.getElementById("broj1").value);
    var broj2 = parseInt(document.getElementById("broj2").value);

    var operacija = document.getElementById('operacije').value;

    var rezultat;

    if (operacija === "sabiranje") {
        rezultat = broj1 + broj2;
        document.getElementById("rezultat").value = broj1 + broj2;
    }
    if (operacija === "oduzimanje") {
        rezultat = broj1 - broj2;
        document.getElementById("rezultat").value = broj1 - broj2;
    }
    if (operacija === "mnozenje") {
        rezultat = broj1 * broj2;
        document.getElementById("rezultat").value = broj1 * broj2;
    }
    if (operacija === "deljenje") {
        rezultat = broj1 / broj2;
        document.getElementById("rezultat").value = broj1 / broj2;
    }

    console.log(rezultat)
}