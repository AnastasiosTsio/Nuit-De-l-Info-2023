// Meme Exemple basique en TypeScript
var counter = document.getElementById("counter");
function changePage(url) {
    window.location.href = url;
}
document.getElementById("myButton").addEventListener("click", function () {
    if (!counter)
        return;
    var count = parseInt(counter.innerHTML);
    count += 1;
    counter.innerHTML = count.toString();
});
