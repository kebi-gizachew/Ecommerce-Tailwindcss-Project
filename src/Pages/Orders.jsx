import Header from '../components/Header'
import Place from '../components/OrderPlace'
import Addto from '../components/AddTo'
import OrdersContext from '../Hooks/OrdersContext'
import PropContext from '../Hooks/PropContext'
import {useContext} from 'react'
function Orders() {
  const {products}=useContext(PropContext)
  const {orderItems}=useContext(OrdersContext)
  function calcDate(ms){
    const date=new Date(ms)
    const options={month:'long',day:'numeric'}
    const formattedDate=date.toLocaleDateString('en-US',options)
    return formattedDate
  }
  return (
    <>
      <Header />
      <p className="text-5xl flex justify-center pt-[60px] font-bold w-[52vw] max-[700px]:text-[30px]">
        Your Orders
      </p>

      <div className="flex flex-col w-[57vw] m-[40px] mx-auto mt-[40px] pr-[2px] max-[700px]:w-[90%] max-[700px]:mx-auto">
        {orderItems.map((item)=>{
          return(<div className="flex flex-col gap-[20px] mb-[40px]" key={item.id}>
            <Place key={item.id} currency={`$ ${item.totalCostCents/100}`} date={calcDate(item.orderTimeMs)} code={item.id} />
            {item.products.map((temp)=>{
              let prod=products.find((p)=>p.id===temp.productId)
              return(<Addto key={temp.productId} img={prod.image} desc={prod.name} date={calcDate(temp.estimatedDeliveryTimeMs)} quan={temp.quantity}/>)
            })}
          </div>
          )
        })}
      </div>
    </>
  )
}

export default Orders
