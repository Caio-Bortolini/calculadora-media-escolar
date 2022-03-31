function calcular() {
  let primeiro = document.getElementById("primeiro").value;
  let segundo = document.getElementById("segundo").value;
  let terceiro = document.getElementById("terceiro").value;
  let quarto = document.getElementById("quarto").value;
  let nome = document.getElementById("nome").value;

  let resultado = document.getElementById("resultado");

  if (primeiro !== "" && segundo !== "" && terceiro !== "" && quarto !== "") {
    let classificacao = "";

    let somaNota = primeiro * 1 + segundo * 1 + terceiro * 1 + quarto * 1;

    let notaFinal = somaNota / 4;

    if (notaFinal < 5) {
      classificacao = "Sinto muito! \n" + " Você foi reprovado :(";
      resultado.classList.add("error");
    } else if (notaFinal >= 5) {
      classificacao = "Parabéns!\n" + "Você foi aprovado :)";

      resultado.classList.add("success");
    }

    resultado.innerHTML = `${nome}, sua nota é: ${notaFinal}.  ${classificacao}`;
  } else {
    resultado.innerHTML = "Por favor, preencha todos os campos.";
  }

  if (primeiro > 10) {
    resultado.innerHTML = "Válidos apenas numeros entre 0 e 10";
    resultado.style.backgroundColor = "black";
  } else if (segundo > 10) {
    resultado.innerHTML = "Válidos apenas numeros entre 0 e 10";
    resultado.style.backgroundColor = "white";
  } else if (terceiro > 10) {
    resultado.innerHTML = "Válidos apenas numeros entre 0 e 10";
    resultado.style.backgroundColor = "white";
  } else if (quarto > 10) {
    resultado.innerHTML = "Válidos apenas numeros entre 0 e 10";
    resultado.style.backgroundColor = "white";
  }
}
