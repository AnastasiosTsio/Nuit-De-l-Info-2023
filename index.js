// Exemple basique de JavaScript pour ceux qui en ont jamais fait

button = document.getElementById("myButton") ;
counter = document.getElementById("counter") ;

function changePage(url) {
    window.location.href = url;
}

button.addEventListener("click", function() {
    let count = parseInt(counter.innerHTML) ;
    count++ ;
    counter.innerHTML = count ;
    });
