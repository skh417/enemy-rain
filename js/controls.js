"use strict";
const buttonTag = document.getElementsByTagName("button")[0];

function restart() {
  window.location.reload();
  buttonTag.style.display = "none";
}

buttonTag.addEventListener("click", () => restart());
