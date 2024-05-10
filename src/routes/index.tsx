import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Category from "./category/Category"
import Singleproducts from "./singleproduct/Singleproduct"
import Cart from "./cart/Cart"
import Watchlist from "./watchlist/Watchlist"
import Signin from "./signin/Signin"
import Register from "./register/Register"

const RouterControl = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path=":category" element={<Category/>}/>
            <Route path=":category/:id" element={<Singleproducts/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/watchlist" element={<Watchlist/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </>
  )
}

export default RouterControl