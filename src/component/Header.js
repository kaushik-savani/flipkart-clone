import React from 'react'
import '../style/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Header = () => {
  return (
    <div className="header">
        <div className="header__first">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" />
            <div className="header__first1">
                <span>Explore</span>
                <span style={{color:'#ffe500',fontWeight:'600'}}>{" Plus"}</span>
                <span>
                    <img width='10px'src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
                </span>
            </div>
        </div>
        <div className="header__second">
            <input type="text" placeholder='Search for products,brands ande more'/>
            <SearchIcon/>
        </div>
        <div className="header__third">
            <button>Login</button>
        </div>
        <div className="header__fourth">
            <span>Become a Seller</span>
        </div>
        <div className="header__fifth">
            <span>More</span>
            <ExpandMoreIcon/>
        </div>
        <div className="header__six">
            <ShoppingCartIcon/>
            <span>Cart</span>
        </div>
    </div>
  )
}

export default Header