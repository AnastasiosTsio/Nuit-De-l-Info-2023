// Meme Exemple basique en TypeScript

let counter: HTMLElement | null = document.getElementById("counter");

function changePage(url: string) {
  window.location.href = url;
}

document.getElementById("myButton").addEventListener("click", function () {
  if (!counter) return;
  let count = parseInt(counter.innerHTML);
  count += 1;
  counter.innerHTML = count.toString();
});
