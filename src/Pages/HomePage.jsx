import React, {useState} from 'react'
import ArtistInfo from '../Componets/HomePage Componets/ArtistInfo'
import SideBar from '../Componets/SideBar'
import Cart from '../Componets/HomePage Componets/Shop/Cart'
import Art from '../Componets/HomePage Componets/Art'
import ArtInfo from '../Componets/HomePage Componets/ArtInfo'
import { commerce } from '../config/Commerce'
import { ImCart } from "react-icons/im";
import Loading from '../Componets/HomePage Componets/Loading'
import chima from '../assets/chima.jpg'

function HomePage() {

  const [showArtstInfo, setShowArtistInfo] = useState(false)
  const [showArtInfo, setShowArtInfo] = useState([false,{}])
  const [showCart, setShowCart] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [cart, setCart] = useState({})
  const [addToCartMSG, setAddToCartMSG] = useState("Adding to cart")
  
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const addToCart =  (prodID) => {
    setShowLoading(true)
    setAddToCartMSG("Adding to cart")
    commerce.cart.add(prodID, 1).then(async(response) => {
        setAddToCartMSG("Added to cart")
        await delay(1000)
        setShowLoading(false)
        console.log(response)
    })
  }



  const toggleArtInfo = (prdInfo) => {setShowArtInfo([!showArtInfo[0],prdInfo])}
  const toggleArtistInfo = () => {setShowArtistInfo(!showArtstInfo)}
  const toggleCart = () => {setShowCart(!showCart)}
  const [products, setProducts] = useState([])

  commerce.products.list().then((product) => {setProducts(product.data)}).catch((e) =>{})
  commerce.cart.retrieve().then((cart) => {setCart(cart)}).catch((e) =>{})
  
  
  const productMap = products?.map((item) =>{
    return(
        <Art toggle={()=>{toggleArtInfo(item)}}  img={item?.image? item.image.url : "https://static.wikia.nocookie.net/two-piecerp/images/5/52/Noimg.png/revision/latest/scale-to-width-down/350?cb=20210705071141"} key={item.id}/>)
    }) 


  return (
    <div className='flex w-full bg-slate-300 border-4 border-black'>
        <SideBar toggle={toggleArtistInfo}/>
        {showLoading && <Loading msg={addToCartMSG}/>}
        <div className='bg-black overflow-hidden flex-grow'>
            {showCart && <Cart cart={cart}  toggle={toggleCart} id={cart?.id} total={cart?.subtotal?.formatted_with_symbol} checkoutURL={cart?.hosted_checkout_url}/>}
            {showArtInfo[0] && <ArtInfo toggle={toggleArtInfo} addToCart={()=>{addToCart(showArtInfo[1].id)}} artName={showArtInfo[1]?.name} price={showArtInfo[1]?.price?.formatted_with_symbol} img={showArtInfo[1]?.image?.url} desc={showArtInfo[1]?.description}/>}
            {showArtstInfo && <ArtistInfo toggle={toggleArtistInfo}/>}
        <div className='fixed h-14 w-14 px-2 border-2 border-white  right-6 bottom-10 bg-slate-900 rounded-full'>
            <button onClick={toggleCart} className='text-[#D10355] h-14 w-12 font-bold text-3xl text-center '><ImCart /></button>
        </div>
        <div className='border-2 shadow shadow-black rounded-full overflow-hidden lg:invisible fixed h-14 w-14 left-6 lg:scale:0 bottom-10 bg-white'>
            <button onClick={toggleArtistInfo} className='bg-black h-14 w-14'>
                <img className={'object-cover h-28 relative bottom-4 right-2'} src={chima} alt="IMG" />
            </button>
        </div>
        <div className='flex flex-wrap '>
           {productMap}
   
        </div>
        <div className='h-fit z-10 bg-black w-full '>
            
        </div>

        

    </div>
    </div>
    
  )
}

export default HomePage