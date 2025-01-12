import './index.css';
import { GoArrowLeft } from 'react-icons/go';
import { IoLocation } from 'react-icons/io5';
import { CiWallet } from 'react-icons/ci';
import { BsCart2 } from 'react-icons/bs';

const Header = () => (
  <div className='header-container'>
    <div className='header-left'>
      <GoArrowLeft className='header-left-icon' />
      <h1 className='header-left-title'>Bilekahalli</h1>
      <span className='header-left-location-subtext'>
        Sarvabhoumanagar Bilekahalli...
      </span>
      <IoLocation className='header-left-location-icon' />
    </div>

    <div className='header-right'>
      <div className='header-right-wallet-icon'>
        <CiWallet className='wallet-icon-svg' />
        <span className='wallet-icon-balance'>4529</span>
      </div>
      <div className='header-right-cart-icon'>
        <BsCart2 className='cart-icon-svg' />
      </div>
    </div>
  </div>
);

export default Header;
