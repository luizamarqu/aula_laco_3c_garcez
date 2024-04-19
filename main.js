function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o melhor time?");

    
    if (respostaTime.toLowerCase() === "Palmeiras") {
      alert("Isso mesmo! O Palmeiras é o melhor time!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}