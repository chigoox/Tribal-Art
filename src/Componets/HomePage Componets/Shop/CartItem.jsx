import React, { useEffect, useState } from 'react'
import { commerce } from '../../../config/Commerce'

function CartItem(props) {
    const [currentItemQty, setCurrentItemQty] = useState(props.QTY)


    
    

 
   // console.log(props.QTY)
    //console.log(props.id)
    const handleChange = (event) =>{
        commerce.cart.update(props.id, { quantity: event.target.value }).then(response => {
            setCurrentItemQty(event.target.value)
            console.log(response)
            
        });
    }

  return (
    <div className='relative mb-24 md:mb-16'>
        <div className='relative bg-opacity-90 text-white rounded-sm m-auto h-10'>
            <div className='flex justify-center'>
                <div className={'relative   h-20 w-60 rounded-lg m-auto mx-2 bg-cover'} style={{backgroundImage: `url(${props.img})`}}>
                    <input defaultValue={currentItemQty} onChange={handleChange} id={'input'} type="number" className=' stroke-red-800 stroke text-white text-center text-7xl h-full w-full bg-transparent'/>
                </div>
            </div>
            <div className=''>
                    <h1 className=" font-bold text-center">{props.artName}</h1>
                    <p className="-mt-2  text-center">{props.price}</p>
                </div>
        </div>
    </div>
  )
}

export default CartItem
/* useEffect(()=>{
    const changeCartQty = async ()=>{
    
        setCurrentItemQty(currentItemQty < 0 ? 0 :  currentItemQty + itemQty)
        console.log(props.id)
        console.log(itemQty)
     // try{ await commerce.cart.add(props.id, 1)}catch (e){console.log(e)}
      // setItemQty(0)
    } 
    changeCartQty()
},[itemQty])

const [itemQty, setItemQty] = useState(0)
const handleItemQty = (event)=>{event.target.name == "+" ? setItemQty(itemQty + 1):setItemQty(itemQty - 1)}
const updateCart = (prodID,amount) => { ;setItemQty(0)})}
//<button onClick={handleItemQty} name={'-'}className='w-10 h-10 bg-[#D10355] rounded-l-full text-bold text-2xl text-center shadow-white top-5 relative'>{'<'}</button>
//<button onClick={handleItemQty} name={'+'} className='w-10 h-10 bg-[#D10355] rounded-r-full  text-bold text-2xl text-center  shadow-white top-5 relative'>{'>'}</button> */