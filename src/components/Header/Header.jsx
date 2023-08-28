import SearchBar from "../SearchBar/SearchBar"
import './Header.css'
import Cart from "../Cart/Cart"

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <SearchBar />
            <Cart />
        </div>
    </header>
  )
}

export default Header