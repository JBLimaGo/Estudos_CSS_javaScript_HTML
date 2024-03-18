
/*

Variáveis
   - let / const / var( descontinuado, não usamos mais)
   
   const -> Toda vez que eu crio uma variável com const, eu não posso 
            atribuir um novo valor depois
    
   let -> Posso alterar o valor quantas vezes eu quiser

   IF / ELSE
     - Nos Ajuda a nosso código a tomar decisões

   function 
      e um trecho de codigo que e chamada só quando e chamado 
      
   Laços
     - ForEch acessar 1 por 1 do array   

*/

/* Variaveis

let numero = "Testes"
let numero = 10

console.log(numero);
*/

/*   IF & Else
if (numero == 10) {
    
    console.log("Impressão do numero " + numero);
    
} else {
    
    console.log("Impressão do numero e diferente de dez " + numero);
    
}
*/


/*    Funções
function teste(){

    console.log("Impressão do numero " + numero);

}

teste()
*/

let produtos = ['blusa', 'tenis nike', 'camiseta', 'shorts'] // array ou matriz

produtos.forEach( produto => {
    if (produto === 'shorts'){
        console.log(produto)
    }else{
        console.log("NÂO é a BLUSA")
    }
    

})

