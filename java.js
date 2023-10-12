function soma(vitorias, derrotas) {
    return vitorias + derrotas;
  }
  
  function resultado(soma) {
    if (soma < 10) {
      return "ferro";
    } else if (soma >= 10 && soma < 20) {
      return "bronze";
    } else if (soma >= 20 && soma < 50) {
      return "prata";
    } else if (soma >= 50 && soma < 80) {
      return "ouro";
    } else if (soma >= 80 && soma < 90) {
      return "diamante";
    } else if (soma >= 90 && soma < 100) {
      return "lendário";
    } else {
      return "imortal";
    }
  }
  
  var somaResult = soma(2, 40);
  var result = resultado(somaResult);
  
  console.log(result);