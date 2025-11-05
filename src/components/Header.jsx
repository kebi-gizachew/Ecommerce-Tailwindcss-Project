import logowhite from '/images/logo-white.png';
import buyagain from '/images/icons/buy-again.png';
import searchicon from '/images/icons/search-icon.png';
import {NavLink} from 'react-router-dom';
import mobile from '/images/mobile-logo-white.png'
import {useContext} from 'react'
import PropContext from '../Hooks/PropContext'
function Header({setOutputs}) {
  const {products}=useContext(PropContext)
  const Filtering=(e)=>{
      const value=e.target.value.toLowerCase().trim()
      const filtered=products.filter(product=>{
        const word= product.name.toLowerCase().split(' ')
        return word.some(wor=>wor.includes(value))

      }
      )
      setOutputs(filtered)
  }
  return (
    <header className="w-full overflow-x-hidden h-[8vh] bg-[rgb(8,79,45)] text-white flex justify-between items-center max-[700px]:justify-around">
      <NavLink to="/" className="pointer-cursor"><img src={mobile} className="hidden max-[700px]:flex max-[700px]:h-[40px]"/><div><img src={logowhite} alt="A white logo" className="ml-[50px] w-[340px] h-[43%] max-[700px]:w-[60%] max-[700px]:hidden"/></div></NavLink>
      
      <div className="bg-white flex justify-between w-[55%] h-[65%] items-center rounded-[5px] max-[700px]:w-[40%] max-[700px]:ml-[-40px]">
         <input className="w-[100%] h-full text-[rgba(112,112,112,1)] text-4xl p-[20px] max-[700px]:text-2xl" placeholder="Search" onChange={Filtering}/>
        <div className="w-[5%] h-full flex justify-center items-center text-[rgb(0, 0, 0)] bg-[rgb(186,255,190)] max-[700px]:w-[10%] rounded-[0_5px_5px_0]">
          <img src={searchicon} alt="Search Icon" className="w-[50%]" />
        </div>
      </div>
      
      <div className="w-[13%] flex justify-end items-center bg-transparent gap-[40px] mr-[40px] max-[700px]:w-[10%] max-[700px]:mr-[10px]">
        <NavLink to="/order" className="text-3xl font-bold max-[700px]:text-[20px]">Orders</NavLink>
        <div className="w-[40%] h-full flex justify-center items-center gap-[10px] ">
          <NavLink className="flex justify-center items-center gap-[10px]" to='/checkout'><img src={buyagain} alt="Buy Again Icon" className="w-[50%]" />
          <p className="text-3xl font-bold max-[700px]:text-[20px]">Cart</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;



