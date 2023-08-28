import { BsCartDashFill } from 'react-icons/bs'
import './CartItem.css'
import formatCurrency from '../../utils/formatCurrency'
import { useContext } from 'react'
import appContext from '../../Context/AppContext'

const CartItem = ({ data }) => {

    const { cartItems, setCartItems } = useContext(appContext)
    const { id, price, title, thumbnail } = data

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id != id)
        setCartItems(updatedItems)
    }

  return (
    <section className='cart-item'>
        <img src={thumbnail} alt="imagem do produto" className='cart-item-image' />

        <div className="cart-item-content">
            <h3 className='cart-item-title'>{title}</h3>
            <h3 className='cart-item-price'>{formatCurrency(price, 'brl')}</h3>

            <button onClick={ handleRemoveItem } className="button_remove_item">
                <BsCartDashFill />
            </button>
        </div>
    </section>
  )
}

export default CartItem