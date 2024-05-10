import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types";

const initialState = {
    products : JSON.parse(localStorage.getItem("products")  || "[]" ) || [],
    likedproducts : JSON.parse(localStorage.getItem("likedproducts")  || "[]" ) || [],
}

const numSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = (state.products).concat(action.payload)
            localStorage.setItem("products", JSON.stringify(state.products))
        },

        unsetProducts: (state, action) => {
            state.products = (state.products).filter((product: Product) => product.id !== action.payload)
            localStorage.setItem("products", JSON.stringify(state.products))
        },

        setLikedProducts: (state, action) => {
            state.likedproducts = (state.likedproducts).concat(action.payload)
            localStorage.setItem("likedproducts", JSON.stringify(state.likedproducts))
        },

        setUnlikedProducts: (state, action) => {
            state.likedproducts = (state.likedproducts).filter((product: Product) => product.id !== action.payload)
            localStorage.setItem("likedproducts", JSON.stringify(state.likedproducts))
        }
    }
})

export const { setProducts, setLikedProducts, setUnlikedProducts, unsetProducts } = numSlice.actions
const productReducer = numSlice.reducer

export default productReducer