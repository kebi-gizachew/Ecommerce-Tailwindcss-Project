import Header from '../components/Header'
import Box from '../components/Box'
import {useState} from 'react'
import PropContext from '../Hooks/PropContext'
import {useContext,useEffect} from 'react'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home(){
    const {products}=useContext(PropContext)
    const [outputs,setOutputs]=useState(products)
    useEffect(()=>{
        setOutputs(products)
    },[products])
    const sets=(products!=outputs?outputs:products).map((items)=>({
        id:items.id,
            img:items.image,
            para:items.name,
            rating:`/images/ratings/rating-${items.rating.stars*10}.png`,
            money:"$"+items.priceCents*0.01,
            aside:items.rating.count
        }
    ))     
    return(
        <div className="font-robot">
    <Header setOutputs={setOutputs}/>
    <ToastContainer position="top-center" theme="light"/>
    <div className="flex flex-wrap gap-[0px]">
    {sets.map((item)=>{
        return(
        <Box image={item.img} rating={item.rating} aside={item.aside} text={item.para} cost={item.money}/>
        )
    })}
    </div>
    </div>
    )
}
export default Home;