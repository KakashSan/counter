let add = document.getElementById('plus');
let remove = document.getElementById('minus');

let int = document.getElementById('number');
let vysledok = 0;

add.addEventListener('click', function(){
    vysledok += 1;
    int.innerHTML = vysledok;
});

remove.addEventListener('click', function(){
    vysledok -= 1;
    int.innerHTML = vysledok;
});
