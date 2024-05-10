import './Navbar.scss'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';
import { FaRegBell } from 'react-icons/fa';
import { BsCart2 } from "react-icons/bs";
import ebaylogo from '../../assets/ebaylogo.png'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import ModalCategory from '../Navmodal';
const Navbar = () => {

    const [selectedCategory2, setSelectedCategory2] = useState<string>('all');
    const handleChange2 = (event: SelectChangeEvent) => {
        setSelectedCategory2(event.target.value as string);
    };

    const [categories, setCategories] = useState<string[]>([])
    useEffect(() => {
        axios("https://dummyjson.com/products/categories")
            .then(res => setCategories(res.data))
    }, [])

    
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState<string>('');

    const searchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(inputValue === '' || inputValue === '*'){
            navigate('/')
        }
        else if (categories.includes(inputValue)){
            navigate(`/${inputValue}`)
        }
        else {
            alert('please enter true category name')
        }
    }

  const [isModalActive2, setisModalActive2] = useState<boolean>(false);
    return (
        <div className="container">
            <nav className='navbar'>
                <div className='nav__top'>
                    <div>
                        <p>Hi! <Link className='nav__top--link' to="/signin">Sign in</Link> or <Link  className='nav__top--link' to="/register">register</Link></p>
                        <p><Link className='nav__top--link' to="/">Home</Link></p>
                        <p>Brand Outlet</p>
                        <p>Help & Contact</p>
                    </div>
                    <div>
                        <p>Sell</p>
                        <Link to="/watchlist"><p>Watchlist</p></Link>
                        <p>My eBay</p>
                        <div><FaRegBell className='nav__top--icon' /></div>
                        <div><Link to="/cart"><BsCart2 className='nav__top--icon' /></Link></div>
                    </div>
                </div>
                <div className='line'></div>
                <div className='nav__bottom'>
                    <img className='nav__bottom--logo' width={120} src={ebaylogo} alt="" />
                    <div style={{ maxWidth: '100px' }}>
                        <div className='shop_by' onClick={() => setisModalActive2(!isModalActive2)}>Shop by category  <FaChevronDown className='nav__bottom--icon' /> {isModalActive2 && <ModalCategory setisModalActive2={setisModalActive2} />}</div>
                    </div>
                    <div>
                        <form onSubmit={searchSubmit}  className='nav__bottom--form'>
                            <div className='nav__bottom--input'>
                                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder={` Search for anything`} />
                                <Box sx={{ maxWidth: 160, maxHeight: 40, border: 'white', padding: 'none' }}>
                                    <FormControl fullWidth>
                                        <Select className='nav__bottom--select'
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={selectedCategory2}
                                            label="Age"
                                            onChange={handleChange2}
                                            sx={{ border: 'none', padding: 'none', maxHeight: 40 }}
                                        >
                                            <MenuItem selected value={'all'}>All categories</MenuItem>
                                            {
                                                categories.map((category) => <MenuItem key={category} value={category}>{category}</MenuItem>)
                                            }
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <button className='nav__bottom--btn' type="submit">Search</button>
                        </form>
                        <p className='nav__bottom--advanced'>Advanced</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar