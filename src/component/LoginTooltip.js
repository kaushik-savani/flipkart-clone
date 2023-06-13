import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import '../style/LoginTooltip.css';

const LoginTooltip = () => {
    
  return (
    <div className="login_tooltip" >
      <div className="list__1">
        <p>New Customer?</p>
        <div className="signup-link">Sign Up</div>
      </div>
      <hr />
      <div>
        <AccountCircleIcon />
        <p>My Profile</p>
      </div>
      <hr />
      <div>
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
        <p>Flipkart Plus Zone</p>
      </div>
      <hr />
      <div>
        <ShoppingBasketIcon />
        <p>Orders</p>
      </div>
      <hr />
      <div>
        <FavoriteIcon />
        <p>Wishlist</p>
      </div>
      <hr />
      <div>
        <CardGiftcardIcon />
        <p>Rewards</p>
      </div>
      <hr />
      <div>
        <AccountBalanceWalletIcon />
        <p>Gift Cards</p>
      </div>
    </div>
  );
};

export default LoginTooltip;
