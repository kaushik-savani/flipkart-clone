import React from 'react'
import '../style/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tippy from '@tippyjs/react';
import LoginTooltip from './LoginTooltip';
import 'tippy.js/dist/tippy.css';
import MoreTooltip from './MoreTooltip';
import 'tippy.js/themes/light.css';

const Header = () => {
  return (
    <div className="nav-container">
        <div className="logo">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" />
            <div className="logo__1">
                <span>Explore</span>
                <span style={{color:'#ffe500',fontWeight:'600'}}>{" Plus"}</span>
                <span>
                    <img width='10px'src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
                </span>
            </div>
        </div>
        <div className="search">
            <div className="search-box">
                <input type="text" placeholder='Search for products,brands ande more'/>
            </div>
            <SearchIcon/>
        </div>
        <div className="login">
            <Tippy 
                content={<LoginTooltip/>}
                interactive={true}
                animation='scale'
                theme='light'
                offset={[0,13]}
            >
                <button>Login</button>
            </Tippy>
        </div>
        <div className="become-seller">
            <span>Become a Seller</span>
        </div>
        <div className="more">
            <Tippy 
            content={<MoreTooltip/>} 
            theme='light'
            interactive={true}
            animation='perspective' offset={[0,16]}
            >
                <span>More <ExpandMoreIcon/></span>
            </Tippy>
        </div>
        <div className="cart">
            <ShoppingCartIcon/>
            <span>Cart</span>
        </div>
    </div>
  )
}

export default Header