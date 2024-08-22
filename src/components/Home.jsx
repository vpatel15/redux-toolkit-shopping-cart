import { useDispatch, useSelector } from 'react-redux'
import cartSlice from '../data/cartSlice'
import productList from '../data/productList.json'
import '../styles/home.scss'
import { useEffect } from 'react'
import { fetchAllProducts } from '../data/productSlice'

const Home = () => {
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { cart, products } = state;

  useEffect(() => {
    dispatch(fetchAllProducts('http://localhost:5001/products'));
  }, [dispatch])

  console.log(cart.cartProductIds);
  return (
    <div className="container product-catalogue">
      <div className="row">
        {products.data?.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img className="card-img-top center-block" src={product.imageUrl} alt="Card cap" />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>

                  {!cart.cartProductIds.includes(product.id) && (
                    <button onClick={() => dispatch(addToCart(product.id))} className="btn btn-primary">Add to cart</button>
                  )}
                  {cart.cartProductIds.includes(product.id) && (
                    <button onClick={() => dispatch(removeFromCart(product.id))} className="btn btn-primary">Remove from cart</button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
