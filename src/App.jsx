import Carrinho from "./components/Carrinho/Carrinho"
import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import Provider from "./Context/Provider"


const App = () => {
  return (
    <div>
      <Provider>
        <Header />
        <Products />
        <Carrinho />
      </Provider>
    </div>
  )
}

export default App