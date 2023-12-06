// Exemple basique de JavaScript pour ceux qui en ont jamais fait

counter = document.getElementById("counter");
function changePage(url) {
    window.location.href = url;
}
document.getElementById("myButton").addEventListener("click", function () {
    var count = parseInt(counter.innerHTML);
    count += 1;
    counter.innerHTML = count;
});
