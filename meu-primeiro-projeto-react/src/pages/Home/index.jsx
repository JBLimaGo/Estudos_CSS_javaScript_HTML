import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TransButton } from './styles'

// React Hooks - ferramentas do react
// useRef - Captura o que foi digitado no input
// useState - Estado -> É uma variável, que toda vez que troca de valor
//                      a tela irá "recarregar os valores"

function Home() {

  /* Variavel em java script
  const -> Toda vez que eu crio uma variável com const, eu não posso 
           atribuir um novo valor depois
   
  let -> Posso alterar o valor quantas vezes eu quiser
 */

  const titulo = "Lista de Compras"
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  //let produtos = []
 
  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  function uparcase(name){
    return name.toUpperCase()
  }

  function cliqueiNoBotao() {

    setProdutos([
      {
        id: v4(),
        nome: inputRef.current.value
      }, ...produtos])

      inputRef.current.value = ''

    //produtos.push.inputRef.current.value
    //console.log(inputRef.current.value)
  }

  // Toda vez que eu quiser colocar 
  // codigo JAVASCRIPT na tela eu uso as chaves {}

  return (
    <Container>
      <h1>
        {titulo}
      </h1>

      <input placeholder="produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

      {
        produtos.map(produto => (
          <Product key={produto.id}>
            <p>{produto.nome}</p>
            <TransButton onClick={() => deletarProduto(produto.id)}>🗑️</TransButton>
          </Product>
        ))
      }

    </Container>
  )
}

export default Home
