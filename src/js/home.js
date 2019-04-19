window.onload = function() {
  document.getElementById("calcular").addEventListener("click", function() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (verifyNumbers(n1, n2)) {
      let resposta = n1 + n2;

      document.getElementById("resultado").innerHTML = resposta;
    } else {
      document.getElementById("resultado").innerHTML =
        "Está faltando número aí, espertinho!";
    }
  });
};

function verifyNumbers(n1, n2) {
  if (n1 >= 0 && n2 >= 0) {
    return true;
  } else return false;
}
