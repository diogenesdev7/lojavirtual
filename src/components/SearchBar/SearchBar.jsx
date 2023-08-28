import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import fetchProducts from '../../Api/fetchProducts'
import { useContext } from 'react'
import appContext from '../../Context/AppContext'

const SearchBar = () => {

    const { setProducts } = useContext(appContext)

    const [searchValue, setSearchValue] = useState('')

    const handleSearch = async (e) => {
      e.preventDefault()
      const products = await fetchProducts(searchValue)
      setProducts(products)
      setSearchValue('')
    } 

  return (
        <form className='searchBar' onSubmit={handleSearch}>
                <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Buscar produtos' className='search_input' required />
                <button type="submit" className='search_button'><BsSearch /></button>
            </form>
  )
}

export default SearchBar