import './Cart.scss'
import Categoryfooter from '../../components/Categoryfooter'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux'
import { setLikedProducts, unsetProducts } from '../../redux/productSlice'
import { IoBagRemove } from "react-icons/io5";
import { Product, State } from '../../types';

const Cart = () => {
  const data = useSelector((state: State) => state.products.products)
  console.log(data)

  const dispatch = useDispatch()
  const addToWatchlist = (product: Product) => {
    dispatch(setLikedProducts(product))
  }

  const removeFromCart = (product: Product) => {
    dispatch(unsetProducts(product.id))
  }

  return (
    <div className='container'>
      <div className='cart'>
        <h3 className='cart__title'>Shopping cart</h3>
        <div className='categoryproducts'>
          {
            data.length === 0 ?
              <div className='cart__empty--cont'>
                <div className='cart__empty'>
                  <p>You don't have any items in your cart.</p>
                    <button onClick={() => window.location.href = '/'} className='cart__btn'>Start shopping</button>
                </div>
              </div>
              :
              data.map((product: Product) => (
                <div key={product.id}>
                  <Link to={`${product.id}`}>
                    <div className='categoryproduct' key={product.id}>
                      <img src={product.images[0]} alt="" />
                      <p>{product.description}</p>
                      <div className='categoryproducts__rating'><FaStar className='categoryproducts__icon--star' /><FaStar className='categoryproducts__icon--star' /><FaStar className='categoryproducts__icon--star' /><FaStar className='categoryproducts__icon--star' /><FaStar className='categoryproducts__icon--star' /> <p>{product.rating}</p></div>
                      <div className='categoryproducts__list'>
                        <p>${product.price}</p>
                        <p>Was: $<span>{product.price * 2}</span></p>
                      </div>
                      <div className='categoryproducts__sponsored'>
                        <p>sponsored</p>
                      </div>
                    </div>
                  </Link>
                  <div className='categoryproducts__sponsored'>
                    <p></p>
                    <p></p>
                    <FaHeart onClick={() => addToWatchlist(product)} className='categoryproducts__icon' />
                    <IoBagRemove onClick={() => removeFromCart(product)} className='categoryproducts__icon--cart' />
                  </div>
                </div>
              ))
          }
        </div>
      </div>
      <Categoryfooter />
    </div>
  )
}

export default Cart