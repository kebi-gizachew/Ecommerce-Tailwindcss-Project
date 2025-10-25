function Place(props){
    return(
    <div className="w-full flex justify-between items-center border-[rgba(210,210,210,1)] border-[1px] rounded-[5px] h-[13vh] bg-transparent text-black">
        <div className="w-[50%] flex justify-start gap-[100px] h-full p-[30px] items-center">
        <div className="w-[250px] flex flex-col text-left ml-[60px]">
           <h3 className="font-bold text-4xl text-black">Order Placed:</h3>
           <h3 className="text-4xl mt-[5px]">{props.date}</h3>
        </div>
<div>
           <h3 className="font-bold text-4xl text-black">Total:</h3>
           <h3 className="text-4xl mt-[5px]">{props.currency}</h3>
        </div>
        </div>
        <div className="w-[42%] h-full text-left flex flex-col justify-center items-start">
            <h3 className="font-bold text-4xl text-black text-left">Order ID:</h3>
            <h3 className="text-4xl text-black text-left">{props.code}</h3>

        </div>
    </div>
    )
}
export default Place;