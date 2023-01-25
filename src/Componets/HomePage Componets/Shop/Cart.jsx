import React from 'react'
import CartItem from './CartItem'

function Cart(props) {
const cartItems = props.cart?.line_items

const cartItemsMap = cartItems?.map((item) => {
  return(
    <CartItem id={item.id} QTY={item.quantity} artName={item.name} price={item.price?.formatted_with_symbol} img={item.image?.url}/>
  )
})

  return (
    <div className='fixed border-black border-2 bg-gray-200 bg-opacity-40 w-full h-full top-0 right-0 z-10'>
        <div className='lg:top-[10%] relative m-auto w-full h-full lg:w-[80%] lg:h-[70%] bg-slate-900'>
        <button onClick={props.toggle} className='text-white absolute font-bold text-2xl hover:text-[#D10355] top-2 right-6'>X</button>
            
            <h1 className="font-bold text-white text-center text-5xl">Cart</h1>
            <div className='border-2 w-[90%] m-auto mt-20 border-[#D10355]'></div>
            
            <div className='overflow-y-scroll h-[50%] mt-0 p-4  lg:gap-10 md:grid md:grid-cols-2 lg:grid-cols-3'>
              {cartItems && cartItemsMap}

            </div>
            <div className='border-2 w-[90%] m-auto border-[#D10355]'></div>
            <div className='text-center font-bold text-white'>
              <h1 className='text-xl'>Total</h1>
              <h4 className='text-5xl'>{props.total}</h4>
            </div>

            <a href={props.checkoutURL}>
              <div className="flex justify-center">
                  <button className='mt-6 bg-[#D10355] hover:bg-[#fd1e78] h-24 w-[90%] md:w-[65%] font-bold'>
                    Checkout
                  </button>
              </div>
            </a>
        </div>
    </div>
  )
}

export default Cart