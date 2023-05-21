import produtos from './components/ProductsComponents'
import ItemComponent from './components/ItemComponents'

import './App.css'

function App() {
  return (
    <>
    <h1>Produtos</h1>
    {
      produtos.map((item, index) => {
        return (
          <ItemComponent
            key={index}
            nome = {item.nome}
            image = {item.image}
            preco = {item.preco}
          />
        )
      })
    }
  </> 
  )
}

export default App
