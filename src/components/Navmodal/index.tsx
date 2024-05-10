import { Link } from 'react-router-dom'
import './Navmodal.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

const ModalCategory = (
  {
    setisModalActive2,
  }: {
    setisModalActive2: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {

  const [modalCategories, setModalCategories] = useState<string[]>([]);

  useEffect(() => {
    axios("https://dummyjson.com/products/categories")
      .then(res => setModalCategories(res.data))
  }, [])

  return (
    <div>
      <div className='nav__modal' onClick={() => setisModalActive2(false)}>
        <ul className='modal__list'>
          {
            modalCategories.map((category) => (
              <li key={category}><Link to={`/${category}`}>{category}</Link></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default ModalCategory