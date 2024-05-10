import './Signin.scss'
import ebaylogo from '../../assets/ebaylogo.png'
import Categoryfooter from '../../components/Categoryfooter'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    axios.post("https://api.escuelajs.co/api/v1/auth/login", {email, password})
    .then(response => {
      console.log(response)
      if(response.data.access_token){
        navigate("/")
        localStorage.setItem("token", response.data.access_token)
      }
    })
    .catch(error => {
      console.log(error)
      navigate("/register")
    })
  }

  return (
    <>
      <div className='container'>
        <div className='signin'>
          <div className='signin__top'>
            <img src={ebaylogo} alt="" />
            <p>Already a member? <Link to='/signin'>Sign in</Link></p>
          </div>
          <div className='signin__bottom'>
            <h3>Create an account</h3>
            <form className='signin__form' onSubmit={(e) => handleRegister(e)}>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' />
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' />
              <p>By Creating an account, you agree to our <span>User Agreement</span>  and acknowledge reading our <span> User Privacy Notice</span> .</p>
              <button className='signin__btn' type='submit'>Create account</button>
            </form>
          </div>
        </div>
      </div>
      <div className='container container--sm'>
        <Categoryfooter />
      </div>
    </>
  )
}

export default Signin