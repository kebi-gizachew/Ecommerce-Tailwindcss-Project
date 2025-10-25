function TrackBox(props){
    return(
        <div className="flex flex-col w-[56%] justify-start items-start m-auto ">
            <h1 className="text-5xl font-bold mb-[30px]">Arriving on {props.date}</h1>
            <p className="text-4xl mb-[10px]">{props.name}</p>
            <p className="text-4xl">Quantity: {props.quantity}</p>
            <img className="w-[300px] h-[300px] my-[60px]" src={props.image}/>
        </div>

    )
}
export default TrackBox;