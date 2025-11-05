import Header from '../components/Header';
import TrackBox from '../components/TrackBox'
import {useContext} from 'react'
import PropContext from '../Hooks/PropContext'
import {NavLink} from 'react-router-dom'
import Bottom from '../components/TrackingBottom'
function Tracking(){
    const {products}=useContext(PropContext)
    return(
        <>
        <Header/>
        <div className="w-[50%] flex justify-evenly mt-[50px]">
        <NavLink to='/order' className="text-[rgb(25,135,84)] text-3xl underline w-[20%] flex justify-center items-center mb-[50px] max-[700px]:text-[20px] max-[700px]:w-[100%]">View all orders</NavLink>
        </div>
        <TrackBox name={products[0].name} date="Monday, June 13" quantity={1} image={products[0].image}/>
        <Bottom/>
        </>
    )
}
export default Tracking;