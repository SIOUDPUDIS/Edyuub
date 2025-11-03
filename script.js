function basla() {
    document.getElementById("basla").style.display = "none";

    let anasayfa = document.getElementById("anasayfa");
    anasayfa.style.display = "block";
    setTimeout(() => {
        anasayfa.style.opacity = 1;
    }, 100);

    document.getElementById("amet").style.display = "block";
}

function hakkinda() {
    document.getElementById("amet").style.display = "none";
    document.getElementById("imet").style.display = "none";
    document.getElementById("hmet").style.display = "block";
}

function iletisim() {
    document.getElementById("imet").style.display = "block";
    document.getElementById("amet").style.display = "none";
    document.getElementById("hmet").style.display = "none";
}

function anaSayfa() {
    document.getElementById("amet").style.display = "block";
    document.getElementById("hmet").style.display = "none";
    document.getElementById("imet").style.display = "none";
}
