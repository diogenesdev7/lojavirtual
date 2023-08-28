import { useContext } from 'react'
import appContext from '../../Context/AppContext'
import CartItem from '../CartItem/CartItem'
import './Carrinho.css'
import formatCurrency from '../../utils/formatCurrency'
 
const Carrinho = () => {

    const { cartItems, isCartVisible } = useContext(appContext)

    const totalPrice = cartItems.reduce((acc, item) => {
        return item.price + acc
    }, 0)

  return (
    <section className={`cart ${isCartVisible ? 'cart-active' : ''}`}>
        <div className="cart-items">
            {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.id} data={cartItem} />
            })}

        </div>

        <div className="cart-resumo">
            {formatCurrency(totalPrice, 'brl')}
        </div>

    </section>
  )
}

export default Carrinho