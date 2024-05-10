import './Register.scss'
import Categoryfooter from '../../components/Categoryfooter'
import ebaylogo from '../../assets/ebaylogo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [name, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('https://picsum.photos/800')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()


    axios.post("https://api.escuelajs.co/api/v1/users/", {name, email, password, avatar})
    .then(response => {
      if(response.data.id){
        navigate('/signin')
      }
    })
    .catch(error => {
      console.log(error)
      alert("Something went wrong")
    })
  }

  return (
    <>
      <div className='container'>
        <div className='register'>
          <div className='register__top'>
            <img src={ebaylogo} alt="" />
            <p>Already a member? <Link to='/signin'>Sign in</Link></p>
          </div>
          <div className='register__bottom'>
            <h3>Create an account</h3>
            <form className='register__form' onSubmit={(e) => handleRegister(e)}>
              <input onChange={(e) => setUserName(e.target.value)} value={name} type="text" placeholder='Username' />
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' />
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' />
              <input onChange={(e) => setAvatar(e.target.value)} value={avatar} type="url" placeholder='Avatar URL' />
              <p>By Creating an account, you agree to our <span>User Agreement</span>  and acknowledge reading our <span> User Privacy Notice</span> .</p>
              <button className='register__btn' type='submit'>Create account</button>
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

export default Register