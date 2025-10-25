import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './Pages/Orders';
import Home from './Pages/Home';
import Check from './Pages/Checkout'
import Tracking from './Pages/Tracking'
function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/checkout' element={<Check/>}/>
      <Route path='/tracking' element={<Tracking/>}/>
    </Routes>
   
    </BrowserRouter>
  )
}
export default App;





