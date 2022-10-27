/*MENU*/

function menuOpen() {
    document.getElementById('menuOpen').classList.toggle('apri');
}

/*BOTTONI*/

function grande() {
    document.getElementById('scritta').style.fontSize = "500%";
}

function colore() {
    document.getElementById('scritta').style.color = "red";
}

function maiuscolo() {
    document.getElementById('scritta').style.textTransform = "uppercase";
}

function nascondi() {
    document.getElementById('scritta').style.visibility = "hidden";
}

function mostra() {
    document.getElementById('scritta').style.visibility = "visible";
}

/*LISTA*/

document.getElementsByClassName("item").onclick = function barra() {
    document.getElementsByClassName("item").style.color = "gray";
};

var listItem = document.querySelectorAll('li');

for(let i = 0; i < listItem.length; i++) {
    
    listItem[i].addEventListener('mouseover', function() {
        this.classList.add('rosso');
    });

    listItem[i].addEventListener('mouseout', function() {
        this.classList.remove('rosso');
    });

    listItem[i].addEventListener('click', function() {
        this.classList.toggle('barra');
    });

}