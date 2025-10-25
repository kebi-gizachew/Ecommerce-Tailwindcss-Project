import logowhite from '/images/logo-white.png';
import buyagain from '/images/icons/buy-again.png';
import searchicon from '/images/icons/search-icon.png';
import {NavLink} from 'react-router-dom';
import products from '../data/products'
function Header() {
  return (
    <header className="w-full overflow-x-hidden h-[8vh] bg-[rgb(8,79,45)] text-white flex justify-between items-center">
      <NavLink to="/" className="pointer-cursor"><img src={logowhite} alt="A white logo" className="ml-[50px] w-[340px] h-[43%]"/></NavLink>
      
      <div className="bg-white flex justify-between w-[55%] h-[65%] items-center rounded-[5px]">
        <p className="text-[rgba(112,112,112,1)] text-4xl m-[35px]">Search</p>
        <div className="w-[5%] h-full flex justify-center items-center text-[rgb(0, 0, 0)] bg-[rgb(186,255,190)] rounded-[0_5px_5px_0]">
          <img src={searchicon} alt="Search Icon" className="w-[50%]" />
        </div>
      </div>
      
      <div className="w-[13%] flex justify-end items-center bg-transparent gap-[40px] mr-[40px]">
        <NavLink to="/order" className="text-3xl font-bold">Orders</NavLink>
        <div className="w-[40%] h-full flex justify-center items-center gap-[10px] ">
          <NavLink className="flex justify-center items-center gap-[10px]" to='/checkout'><img src={buyagain} alt="Buy Again Icon" className="w-[50%]" />
          <p className="text-3xl font-bold">Cart</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;



