function Box(props) {
  return (
    <div className="border-[2px] border-[rgba(239,239,239,1)] bg-white w-[16.5vw] h-[65vh] flex flex-col items-center p-[30px] pt-[30px]">
      <img src={props.image} className="rounded-[5%] w-[80%] h-[50%] mb-[20px] object-contain" />
      <div className="items-start flex flex-col">
      <p className="text-[33px] text-left w-full mb-[50px] mt-[0px]">{props.text}</p>
      
      <div className="mt-[0px] flex pl-0 gap-[20px] items-center">
        <img src={props.rating} alt="Rating" className="w-[200px] h-[40px]"/>
        <p className="text-[rgba(0,86,16,1)] text-[30px]">{props.aside}</p>
      </div>
      
      <p className="my-[20px] text-[30px] font-bold">{props.cost}</p>
      
      <select className="w-[25%] h-[60px] border-[2px] border-black rounded-[5px] text-3xl p-[10px] mb-[50px]">
        <option value="default">1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      </div>
      <button className="w-[90%] h-[75px] flex justify-center items-center text-white text-3xl rounded-[10px] bg-[rgb(25,135,84)]">
        Add to Cart
      </button>
    </div>
  );
}

export default Box;
