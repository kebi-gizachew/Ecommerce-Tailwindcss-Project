import buyAgain from '/images/icons/buy-again.png'
import {NavLink} from 'react-router-dom'
function Addto(props){
    return(
        <div className="w-[57vw] border-x-[2px] border-[rgba(210,210,210,1)] flex gap-[40px] p-[20px] justify-evenly items-center h-[350px] pl-[0px]">
            <div className="w-[18%] h-[280px] object-cover rounded-[10px] over-flow-hidden">
            <img src={props.img} className="w-full h-full p-[20px] mt-[20px] rounded-[10px] hover:scale-[1.1]"/></div>
            <div className="flex flex-col justify-start items-center w-[50%] text-left text-3xl mt-[15px]">
                <h3 className="w-[100%] pt-[20px] font-bold text-[34px] text-left flex justify-start pb-[10px]">{props.desc}</h3>
                <p className="text-left flex w-full justify-start items-center pb-[10px]">Arriving on: {props.date}</p>
                <p className="w-full pb-[20px]">Quantity: {props.quan}</p>
                <div className="w-full h-auto text-white">
                <button className="w-[35%] h-[70px] p-[20px] bg-[rgb(25,135,84)] rounded-[10px] flex justify-center items-center gap-[15px]"><img className="w-[15%]" src={buyAgain}/><p>Add to Cart</p></button>
                </div>
            </div>
            <div className="w-[40%] h-full flex justify-center items-start pt-[50px]">
            <NavLink to="/tracking" className="w-auto h-[70px]"><button className="border-[1px] shadow-[0px_2px_5px_rgba(220,220,220,0.2)] flex justify-center items-center rounded-[10px] text-3xl w-[500px] pointer-cursor h-full border-[rgb(200,200,200)]">Track package</button></NavLink>
        </div>
        </div>
        
    )
}
export default Addto;