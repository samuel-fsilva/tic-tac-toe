var swap = 0;
var clicked_blue = "";
var clicked_red = "";
function clic(bt) {
  swap = swap + 1;
  if (swap > 1) {
    swap = 0;
    bt.classList.add("x");
    bt.classList.remove("padrao");
    document.body.className = "";
    document.body.classList.add("vezazul");
    bt.disabled = true;
    clicked_red = clicked_red + bt.value;
    if (
      clicked_red.includes("a") == true &&
      clicked_red.includes("b") == true &&
      clicked_red.includes("c") == true
    ) {
      redwins();
    } else if (
      clicked_red.includes("d") == true &&
      clicked_red.includes("e") == true &&
      clicked_red.includes("f") == true
    ) {
      redwins();
    } else if (
      clicked_red.includes("g") == true &&
      clicked_red.includes("h") == true &&
      clicked_red.includes("i") == true
    ) {
      redwins();
    } else if (
      clicked_red.includes("a") == true &&
      clicked_red.includes("e") == true &&
      clicked_red.includes("i") == true
    ) {
      redwins();
    } else if (
      clicked_red.includes("c") == true &&
      clicked_red.includes("e") == true &&
      clicked_red.includes("g") == true
    ) {
      redwins();
    } else if (
      clicked_red.includes("a") == true &&
      clicked_red.includes("d") == true &&
      clicked_red.includes("g") == true
    ) {
      redwins();
    } else if (
      clicked_red.includes("b") == true &&
      clicked_red.includes("e") == true &&
      clicked_red.includes("h") == true
    ) {
      redwins();
    } else if (
      clicked_red.includes("c") == true &&
      clicked_red.includes("f") == true &&
      clicked_red.includes("i") == true
    ) {
      redwins();
    } else if (
      clicked_red.includes("a") == true &&
      clicked_red.includes("e") == true &&
      clicked_red.includes("i") == true
    ) {
      bluewins();
    } else {
      velha();
    }
  } else {
    bt.classList.add("circle");
    bt.classList.remove("padrao");
    document.body.className = "";
    document.body.classList.add("vezvermelho");
    bt.disabled = true;
    clicked_blue = clicked_blue + bt.value;

    if (
      clicked_blue.includes("a") == true &&
      clicked_blue.includes("b") == true &&
      clicked_blue.includes("c") == true
    ) {
      bluewins();
    } else if (
      clicked_blue.includes("d") == true &&
      clicked_blue.includes("e") == true &&
      clicked_blue.includes("f") == true
    ) {
      bluewins();
    } else if (
      clicked_blue.includes("g") == true &&
      clicked_blue.includes("h") == true &&
      clicked_blue.includes("i") == true
    ) {
      bluewins();
    } else if (
      clicked_blue.includes("a") == true &&
      clicked_blue.includes("e") == true &&
      clicked_blue.includes("i") == true
    ) {
      bluewins();
    } else if (
      clicked_blue.includes("c") == true &&
      clicked_blue.includes("e") == true &&
      clicked_blue.includes("g") == true
    ) {
      bluewins();
    } else if (
      clicked_blue.includes("a") == true &&
      clicked_blue.includes("d") == true &&
      clicked_blue.includes("g") == true
    ) {
      bluewins();
    } else if (
      clicked_blue.includes("b") == true &&
      clicked_blue.includes("e") == true &&
      clicked_blue.includes("h") == true
    ) {
      bluewins();
    } else if (
      clicked_blue.includes("c") == true &&
      clicked_blue.includes("f") == true &&
      clicked_blue.includes("i") == true
    ) {
      bluewins();
    } else if (
      clicked_blue.includes("a") == true &&
      clicked_blue.includes("e") == true &&
      clicked_blue.includes("i") == true
    ) {
      bluewins();
    } else {
      velha();
    }
  }
}
function bluewins() {
  var grade = document.getElementById("tic_tac_toe_game");
  grade.innerHTML =
    '<p id="bluewin" class="wins">O azul ganhou!🏆</p> <button id="reload" onclick="rload()"><img src="img/refresh.svg"></button>';
  document.body.className = "";
  document.body.style.backgroundColor = "#0050dd";
}
function redwins() {
  var grade = document.getElementById("tic_tac_toe_game");
  grade.innerHTML =
    '<p id="redwin" class="wins">O vermelho ganhou!🏆</p> <button id="reload" onclick="rload()"><img src="img/refresh.svg"></button>';
  document.body.className = "";
  document.body.style.backgroundColor = "#bd0000";
}
function rload() {
  window.location.reload(true);
}
function velha() {
  var clicked = clicked_blue + clicked_red;

  if (
    clicked.includes("a") &&
    clicked.includes("b") &&
    clicked.includes("c") &&
    clicked.includes("d") &&
    clicked.includes("e") &&
    clicked.includes("f") &&
    clicked.includes("g") &&
    clicked.includes("h") &&
    clicked.includes("i")
  ) {
    var grade = document.getElementById("tic_tac_toe_game");
    grade.innerHTML =
      '<p class="wins">Deu Velha!</p><button id="reload" onclick="rload()"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ic_refresh_48px.svg/1200px-Ic_refresh_48px.svg.png"></button>';
  }
}
