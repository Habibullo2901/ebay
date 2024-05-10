import './Watchlist.scss'
import Categoryfooter from '../../components/Categoryfooter'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { IoHeartDislike } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import { setUnlikedProducts } from '../../redux/productSlice'
import { Product, State } from '../../types';

const Watchlist = () => {
  const data = useSelector((state: State) => state.products.likedproducts)
  console.log(data)

  const state = useSelector((state: State) => state)
  console.log(state)

  const dispatch = useDispatch()
  const addToWatchlist = (product: Product) => {
    dispatch(setUnlikedProducts(product.id))
  }

  return (
    <div className='container'>
      <div className='cart'>
        <h3 className='watchlist__title'>Shopping cart</h3>
        <div className='categoryproducts'>
          {
            data.length === 0 ?
              <div className='watchlist__empty--cont'>
                <div className='watchlist__empty'>
                  <p>You don't have any items in your watchlist.</p>
                  <button onClick={() => window.location.href = '/'} className='watchlist__btn'>Start shopping</button>
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
                    <IoHeartDislike onClick={() => addToWatchlist(product)} className='categoryproducts__icon' />
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

export default Watchlist