export function tablaKrealas() {
  const TAROLO_ELEM = document.querySelector(".tarolo");
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      if (i % 2 == 1) {
        if (j % 2 === 1) {
          TAROLO_ELEM.innerHTML += "<div class='vilagos'></div>";
        } else {
          TAROLO_ELEM.innerHTML += "<div class='sotet'></div>";
        }
      } else {
        if (j % 2 === 0) {
          TAROLO_ELEM.innerHTML += "<div class='vilagos'></div>";
        } else {
          TAROLO_ELEM.innerHTML += "<div class='sotet'></div>";
        }
      }
    }
  }
}

export function parasztLerakas() {
  const NEGYZETEK = document.querySelectorAll(".tarolo > div");
  for (let index = 0; index < NEGYZETEK.length; index++) {
    NEGYZETEK[index].addEventListener("click", function () {
      NEGYZETEK[index].innerHTML = `<img src="./paraszt.png" alt="paraszt" />`;
    });
  }
}
