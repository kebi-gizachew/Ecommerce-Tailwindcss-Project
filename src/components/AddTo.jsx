import buyAgain from '/images/icons/buy-again.png'
import {NavLink} from 'react-router-dom'
function Addto(props){
    return(
        <div className="w-[57vw] border-x-[2px] border-[rgba(210,210,210,1)] flex gap-[40px] p-[20px] h-[350px] pl-[0px] max-[700px]:w-[700px] max-[700px]:gap-[10px] max-[700px]:flex-col max-[700px]:h-[500px] max-[700px]:border-none">
            <div className="w-[18%] h-[280px] rounded-[20px] overflow-hidden pl-[20px] max-[700px]:w-[100%] max-[700px]:flex-col max-[700px]:h-[1000px]">
            <img src={props.img} className="w-full h-full hover:scale-[1.1] object-cover max-[700px]:w-[150px] max-[700px]:h-[150px]"/></div>
            <div className="flex flex-col justify-start items-center w-[50%] text-left text-3xl mt-[15px] max-[700px]:text-[20px]">
                <h3 className="w-[100%] pt-[20px] font-bold text-[34px] text-left flex justify-start pb-[10px] max-[700px]:text-[20px]">{props.desc}</h3>
                <p className="text-left flex w-full justify-start items-center pb-[10px]">Arriving on: {props.date}</p>
                <p className="w-full pb-[20px]">Quantity: {props.quan}</p>
                <div className="w-full h-auto text-white">
                <button className="w-[35%] h-[70px] p-[20px] bg-[rgb(25,135,84)] rounded-[10px] flex justify-center items-center gap-[15px] max-[700px]:text-[20px] max-[700px]:w-[60%]  max-[700px]:m-auto  max-[700px]:h-[50px] cursor-pointer"><img className="w-[15%]" src={buyAgain}/><p>Add to Cart</p></button>
                </div>
            </div>
            <div className="w-[40%] h-full flex justify-center items-start pt-[50px] max-[700px]:pt-[10px]">
            <NavLink to="/tracking" className="w-auto h-[70px]"><button className="border-[1px] shadow-[0px_2px_5px_rgba(220,220,220,0.2)] flex justify-center items-center rounded-[10px] cursor-pointer text-3xl w-[500px] h-full border-[rgb(200,200,200)] max-[700px]:text-[20px] max-[700px]:w-[100%] max-[700px]:text-[20px] max-[700px]:p-[10px] hover:bg-[rgba(234,234,234,1)] hover:cursor-pointer">Track package</button></NavLink>
        </div>
        </div>
        
    )
}
export default Addto;