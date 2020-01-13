function submit() {
    var broj1 = parseInt(document.getElementsById("broj1").value);
    var broj2 = parseInt(document.getElementsById("broj2").value);

    var operacija = document.getElementById('operacije').value;

    if (operacija === "sabiranje") {
        document.getElementById("rezultat").value = broj1 + broj2;
    }
    if (operacija === "oduzimanje") {
        document.getElementById("rezultat").value = broj1 - broj2;
    }
    if (operacija === "mnozenje") {
        document.getElementById("rezultat").value = broj1 * broj2;
    }
    if (operacija === "deljenje") {
        document.getElementById("rezultat").value = broj1 / broj2;
    }
}