function calcularSaldoRankeadas(vitorias, derrotas) {
    // Declara as variáveis
    let saldoVitorias = vitorias - derrotas;
    let nivel = "Imortal";
  
    // Calcula o nível
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias < 21) {
      nivel = "Bronze";
    } else if (vitorias < 51) {
      nivel = "Prata";
    } else if (vitorias < 81) {
      nivel = "Ouro";
    } else if (vitorias < 91) {
      nivel = "Diamante";
    } else if (vitorias < 101) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    // Retorna o saldo de vitórias e o nível
    return {
      saldoVitorias,
      nivel,
    };
}

let vitorias = 200;
let derrotas = 5;

let resultados = calcularSaldoRankeadas(vitorias, derrotas);

console.log(resultados);