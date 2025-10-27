import Boxing from '../components/Boxing'
import Heading from '../components/Heading' 
import Summary from '../components/Summary'
import products from '../data/products'
function Check(){
    const checking=[
        {
            id:products[0].id,
            date:"Tuesday,June 21",
            desc:products[0].name,
            money:"$"+products[0].priceCents*0.01,
            quantity:2,
            image:products[0].image
        },
        {
            id:products[1].id,
            date:"Wednesday, June 15",
            desc:products[1].name,
            money:"$"+products[1].priceCents*0.01,
            quantity:1,
            image:products[1].image
        }
    ]
    return(
        <div>
            <Heading quant="3"/>
            <h1 className="text-5xl font-bold w-[42%] mt-[140px] flex justify-center items-center mb-[50px]">Review your order</h1>
            <div className="flex justify-start items-start">
                <div>
            {checking.map((item)=>{
                return(
                <Boxing key={item.id} date={item.date} desc={item.desc} currency={item.money} quantity={item.quantity} image={item.image} val={item.id}/>
           )})}
           </div>
           <Summary quant="3" items="$42.75" sh="$4.99" tt="$47.74" et="$4.77" ot="$52.51" />
        </div>
    </div>)
}
export default Check;