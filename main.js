// Foi Ultilizado
/*
- Variáveis
- Operadores
- Estruturas de decisões
- Funções 
*/

let wins = 150;
let defeats = 5;
let balanceWins = wins - defeats;



    function calculo(){ 
    if (balanceWins < 10) {
      console.log(`O herói tem saldo de ${balanceWins} e está no nível Ferro`);
    } else if (balanceWins >= 11 && balanceWins < 20) {
      console.log(`O herói tem saldo de ${balanceWins} e está no nível Bronze`);
    } else if (balanceWins >= 21 && balanceWins < 50) {
      console.log(`O herói tem saldo de ${balanceWins} e está no nível Prata`);
    } else if (balanceWins >= 51 && balanceWins < 80) {
      console.log(`O herói tem saldo de ${balanceWins} e está no nível Ouro`);
    } else if (balanceWins >= 81 && balanceWins < 90) {
      console.log(`O herói tem saldo de ${balanceWins} e está no nível Diamante`);
    } else if (balanceWins >= 91 && balanceWins < 100) {
      console.log(`O herói tem saldo de ${balanceWins} e está no nível Lendário`);
    } else {
      console.log(`O herói tem saldo de ${balanceWins} e está no nível Imortal`);
    }
    }
    calculo()
  
