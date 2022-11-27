let list = document.querySelectorAll(".list");
let fun = document.querySelectorAll(".fun");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    removeAllActive();
    fun[i].classList.add("active");
  });
}

function removeAllActive() {
  for (let i = 0; i < fun.length; i++) {
    fun[i].classList.remove("active");
  }
}
