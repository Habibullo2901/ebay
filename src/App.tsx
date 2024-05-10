import './App.scss'
import Navbar from './components/Navbar'
import RouterControl from './routes'
import { useLocation } from 'react-router-dom'

function App() {
  const {pathname}: {pathname:string} = useLocation();

  return (
    <>
      {
        !pathname.includes("register") && !pathname.includes("signin") && <Navbar/>
      }
      <RouterControl/>
    </>
  )
}

export default App
