import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrdersContext from './Hooks/OrdersContext'
import Order from './Pages/Orders';
import Home from './Pages/Home';
import Check from './Pages/Checkout'
import Tracking from './Pages/Tracking'
import {useState,useEffect} from 'react'
import PropContext from './Hooks/PropContext'
import axios from 'axios'
function App(){
  const [products,setProducts]=useState([])
  const [orderItems,setOrderItems]=useState([])
  useEffect(()=>{
    async function fetcher(url){
      try{
      const temp= await fetch(url)
      const data=await temp.json()
      setProducts(data)
      }catch(error){
        console.error(error)
      }

    }
    fetcher('http://localhost:3000/api/products/')

  }
    ,[])
    useEffect(()=>{
      axios.get('http://localhost:3000/api/orders/').then((response)=>{
        setOrderItems(response.data)
      }
    ).catch((error)=>console.error(error))
  }
  ,[])

  return (
    <PropContext.Provider value={{products}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/order' element={
        <OrdersContext.Provider value={{orderItems}}>
        <Order/>
      </OrdersContext.Provider>
      }/>
      <Route path='/checkout' element={<Check/>}/>
      <Route path='/tracking' element={<Tracking/>}/>
    </Routes>
    </BrowserRouter>
    </PropContext.Provider>
  )
}
export default App;





