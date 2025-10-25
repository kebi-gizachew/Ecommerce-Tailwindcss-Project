function Summary(props){
    return(
    <div className="flex flex-col py-[30px] px-[30px] border-[1px] border-[rgb(222,222,222)] w-[700px] h-auto mt-[30px] gap-[20px] rounded-[5px]">
        <h1 className="w-full flex justify-start items-center text-5xl font-bold">Payment Summary</h1>
        <div className="w-full flex justify-between items-center text-3xl">
            <p>Items ({props.quant}):</p>
            <p>{props.items}</p>
        </div>
        <div className="w-full flex justify-between items-center text-3xl">
            <p>Shipping & handling:</p>
            <p>{props.sh}</p>
        </div>
        <div>
            <div></div>
        </div>
        <div className="flex justify-between items-center w-full text-3xl">
            <p>Total before tax:</p>
            <p>{props.tt}</p>
        </div>

            <div className="flex justify-between items-center w-full text-3xl">
            <p>Estimated tax (10%):</p>
            <p>{props.et}</p>
        </div>
        <hr className="w-[100%] flex justify-center items-center border-[rgb(222,222,222)]"/>
        <div className="flex justify-between items-center w-full text-2xl">
            <h1 className="text-4xl text-[rgb(25,135,84)] font-bold">Order total:</h1>
            <h1 className="text-4xl text-[rgb(25,135,84)] font-bold ">{props.ot}</h1>
        </div>
        <div className="flex justify-center items-center">
        <button className="w-[95%] h-[80px] bg-[rgb(25,135,84)] text-white flex justify-center items-center text-3xl rounded-[5px] mt-[40px]">Place your order</button>
        </div>
    </div>
    )

}
export default Summary