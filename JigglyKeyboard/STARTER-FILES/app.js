let jigglingKey = document.querySelector(".key.jiggle");
const rows = document.querySelectorAll(".row");

document.addEventListener("keydown", function (e) {
  const keyPressed = e?.key?.toUpperCase();
  keyPressed === jigglingKey.dataset.key && nextJigglingLetter();
});

function nextJigglingLetter() {
  jigglingKey.classList.remove("jiggle");
  const row = Math.floor(Math.random() * 4);
  const col = Math.floor(Math.random() * rows[row].childElementCount);
  jigglingKey = rows[row].children[col];
  jigglingKey.classList.add("jiggle");
}
