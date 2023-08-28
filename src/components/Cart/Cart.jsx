import { AiOutlineShoppingCart } from "react-icons/ai"
import './cart.css'
import { useContext } from "react"
import appContext from "../../Context/AppContext"

const Cart = () => {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(appContext)



  return (
    <button type='button' className='cart_button' onClick={() => setIsCartVisible(!isCartVisible)}>
        <AiOutlineShoppingCart />
        { cartItems.length > 0 && <span className="cart_status">{cartItems.length}</span>}
    </button>
  )
}

export default Cart