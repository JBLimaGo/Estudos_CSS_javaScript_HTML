// ------------------------Nullish coylescing Operator--------------------

// Quando for usar tratamento com numero usar ?? pois tudo que tiver a esquerda será maior ou igual a zero e com isso
// será apresentado o valor na tela. 
// Se for null será apresentado a direito da condição

// Exemplo
//const idade = 0;

//document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não e informada');

// ------------------------Objetos--------------------
/*
const user = {
  name : 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
};  */

// Utilizando o in vc pode verificar se exite informação dentro de um objeto
//document.body.innerText = ('name' in user);

//Metodos para obter informações especificas de um objeto
//Metodo keys retorno um vetor com todas as chaves do objeto

//document.body.innerText = Object.keys(user);

// Values retorna todos valores do objeto

//document.body.innerText = Object.values(user);

// Com o JSON.stringify() ele retorna todas as informações do objetos 

//document.body.innerText = JSON.stringify(Object.values(user));

//Retorna um VETOR com varios VETORES dentro

//document.body.innerText = JSON.stringify(Object.entries(user));

// ------------------------------ Desestruturação ---------------
                  // Renomeia a variavel usando : na frente dela 
//const { address : teste, idade : age} = user

//document.body.innerText = JSON.stringify({ teste, age });

function mostraIdade(user){
  return user.idade;
}

//document.body.innerText = mostraIdade(user);

// ----------------------- Rest operator  -----------
//Quando se usa o ...rest intendisse que quero as informações do objeto menos os campos informados antes do ...rest
//const { name, idade, ...rest } = user;

//document.body.innerText = JSON.stringify(rest);

//Desestruturação em array
//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const [first, second, ...rest] = array;

//document.body.innerText = JSON.stringify({first, second, rest});

// Pular informações do array
//const [first, , third, ...rest] = array;

//document.body.innerText = JSON.stringify({first, third, rest});

// -------------------- Short Syntax -----------------
// Sintax curta

/*const name = 'Diego';
const age = 27;

const teste = {
  name,
  age,
};*/

//---------- Optional Chaining
/*
const user = {
  name : 'Diego',
  age: 27,
  address: {
    street: 'Rua teste',
    number: 176,
    zip:{
      code: '74463280',
      city: 'Goiania',
    },
    showFullAddress(){
      return 'ok';
    },
  },
};   */

// usando o ponto de interogação ? depois do nome que quero acessar no ojeto e não tiver no objeto o campo ele não percorre o objeto mais. 
// É se tiver esse campo no objeto percorre o objeto até chegar no campo que desejei. 
//document.body.innerText = user.address?.zip?.code ?? 'Não informado';

//document.body.innerText = user.address?.showFullAddress?.() ?? 'Não informado';


// ---------------------Métodos de Array --------------------

const array = [ 1, 2, 3, 4, 5];

/*
for (const i of array){
  document.body.innerText += i;
}   */

/*
array.forEach(item => {
  document.body.innerText += item;
});  */


// só uso o Map quando eu quiser mudar alguma coisa dentro do array, não consigo excluir registro
/*const novoArray = array.map(item => {
 // return item * 2;
 if (item % 2 == 0 ){
  return item * 10;
 }
 return item;

});      */

// map, filter, every, some, find, findIndex, reduce

// filtro o array com "filter" buscando os campos desejados 
// e depois manipulo os dados com o "map"
/*const novoArray = array
          .filter(item => item % 2 == 0)
          .map(item => item * 10)  */


          // every retorno true ou false se a condição que passei para validar estiver correta. 
 /* 
 const todosItensSaoNumeros = array.every(item => typeof item == 'number')         
 */
         // some metodos que verifica se verdadeiro ou não (true ou false)
 /*        
const peloMenosUmItemNaoEUmNumero = array.some(item => {
  return typeof item != 'number';
})
*/

  // Find serve para encontrar o 1 item do array que satisfaça a condição

  /*
  const par = array.find( item => item % 2 == 0)
*/
 
// findIndex retorna o indice do primeiro valor par que esta no array
/*
const par = array.findIndex( item => item % 2 == 0)
*/

 // Reduce quando quero pegar um array e criar outra estrutura de dados um novo array
 /*
 const soma = array.reduce((acc, item) => {

  return acc + item;

 }, 0);
*/

     // Template Literais 
     /*
     const name = null//'Jefferson';
     const message = `Bem-Vindo, ${name ?? 'visitante'}`;

     */

     // Promisses - .then/ .catch
          // -- resolve: deu tudo certo, --reject: Deu tudo errado
     
/*
    const somaDoisNumeros = (a, b) => {
      return new Promise((resolve, reject) => {

        setTimeout(() => {
          reject(a + b);
        }, 2000);
      });
     }; 
   

     somaDoisNumeros(1,3)
     .then(soma => {   // Deu tudo certo 
      document.body.innerText = soma
     })
     .catch(err => {  // Algo deu errado
      console.log(err)
     });
       */

     async function buscaDadosNoGithub(){
      try {
          const response = await fetch('https://api.github.com/users/diego3g');
          const body = await response.json();

         // console.log(body);   // Retorna o jscon completo
          return body.name; // Consigo capturar informações dentro do Json
      } catch (err) {
        console.log(err + ' Deu erro');        
      }
      finally{
        console.log('Deu')
      }
     };

     buscaDadosNoGithub().then(name =>{
      console.log(name);    // Consigo capturar informações dentro do Json
     });

     //buscaDadosNoGithub();







