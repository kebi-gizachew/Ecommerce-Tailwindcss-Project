function Boxing(props){
    return(
        <div className="mt-[30px] border-[1px] border-[rgb(222,222,222)] w-[73%] h-[38vh] flex flex-col py-[50px] px-[30px] ml-[430px] rounded-[5px] pr-[50px]">
            <h1 className="text-[rgb(25,135,84)] text-4xl font-bold w-full flex justify-start items-center mb-[40px]">Delivery date: {props.date}</h1>
            <div className="flex justify-between items-center flex-wrap w-full p-[0px]">
                <div className="w-[230px] h-full flex justify-center items-start p-[0px]">
                <img className="h-50% m-[0px]" src={props.image}/>
                </div>
                <div className="flex flex-col text-left text-3xl justify-start items-start h-full gap-[10px] w-[45%] mb-[30px] ml-[10px]">
                    <p className="text-4xl font-bold mb-[20px] mr-[40px]">{props.desc}</p>
                    <p className="text-4xl font-bold">{props.currency}</p>
                    <div className="flex gap-[20px]">
                    <p className="text-[35px]">Quantity: {props.quantity}</p>
                    <p className="text-[rgb(25,135,84)] text-[35px]">Update</p>
                    <p className="text-[rgb(25,135,84)] text-[35px]">Delete</p>
                    </div>
                </div>
                <div className="w-[36%] h-full">
                    <p className="text-4xl font-bold mb-[10px]">Choose a deliery option:</p>
                    <label className="flex w-[300px] h-auto justify-center items-center gap-[15px] text-[32px]">
                        <input className="w-[30px] h-[30px]" name="one" type="radio"/>
                        <div className="flex flex-col">
                        <p>Tuesday, June 21</p>
                        <p className="text-[rgb(222,222,222)]">FREE Shipping</p>
                        </div>
                    </label>
                    <label className="flex w-[350px] h-auto justify-center items-center gap-[15px] text-[32px]">
                        <input className="w-[30px] h-[30px]" name="one" type="radio"/>
                        <div className="flex flex-col">
                        <p>Wednesday, June 15</p>
                        <p className="text-[rgb(222,222,222)]">$4.99 - Shipping</p>
                        </div>
                    </label>
                    <label className="flex w-[300px] h-auto justify-center items-center gap-[15px] text-[32px]">
                        <input className="w-[30px] h-[30px]" name="one" type="radio"/>
                        <div className="flex flex-col">
                        <p>Monday, June 13</p>
                        <p className="text-[rgb(222,222,222)]">$9.99 - Shipping</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Boxing;