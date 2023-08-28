import { useState, useEffect, useContext } from 'react'
import './Products.css'
import fetchProducts from '../../Api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import appContext from '../../Context/AppContext'


const Products = () => {

    const { products, setProducts } = useContext(appContext)

    useEffect(() => {
        fetchProducts('computador')
            .then(res => {
                setProducts(res)
            })
    }, [])

    console.log(products)

  return (
    <section className="products container">

        {products.length ? products.map(data => {
            return <ProductCard key={data.id} data={data} />
        }) : <Loading />}


        
    </section>
  )
}

export default Products