import './ProductCard.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'
import appContext from '../../Context/AppContext'
import { useContext } from 'react'

const ProductCard = ({ data }) => {

  const { thumbnail, title, price } = data

  const { cartItems, setCartItems } = useContext(appContext)

  const handleAddCart = () => {
    setCartItems([ ...cartItems, data ])
  }

  return (
    <section className='product-card'>
        <img className='card_image' src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={data.title} />
        <div className="card_infos">
            <h2 className="card_price">{formatCurrency(price, 'brl')}</h2>
            <h2 className="card_title">{title}</h2>
            <button onClick={ handleAddCart } type="button" className='button_addcart'>
              <BsFillCartPlusFill />
            </button>
        </div>
    </section>
  )
}

export default ProductCard