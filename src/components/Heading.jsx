import logo from '/images/logo.png'
import checkout from '/images/icons/checkout-lock-icon.png'
import {NavLink} from 'react-router-dom'
function Heading(props){
    return(
        <header className="flex justify-evenly gap-[300px] items-center w-full h-[8vh] bg-white">
            <NavLink to="/" className="w-[11%] pointer-cursor"><img className="w-full h-[50px] " src={logo}/></NavLink>
            <h1 className="text-5xl font-bold ">Checkout (<span className="text-[rgb(25,135,84)]">{props.quant} items</span>)</h1>
            <img className="w-[70px] h-[70px]" src={checkout}/>
        </header>
    )

}
export default Heading