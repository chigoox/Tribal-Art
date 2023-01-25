import React from 'react'

function ArtInfo(props) {
  return (
        <div className='fixed border-black border-2 bg-gray-200 bg-opacity-40 w-full h-full top-0 right-0 z-10'>
            <div className='relative m-auto h-full w-full pt-[20%] lg:pt-[5%]'>
                    <div className='relative m-auto flex shadow-sm shadow-black h-[700px] w-full lg:w-1/2  p-4 lg:p-8 text-white  rounded-md bg-slate-900'>
                        <button onClick={props.toggle} className='absolute font-bold text-2xl hover:text-[#D10355] top-1 right-6'>X</button>
                        <div className='flex w-full flex-col md:flex-row'>
                            <div className='top-6 relative overflow-hidden flex-grow lg:mr-2 lg:w-1/2'>
                                <img className='object-cover object-top h-full w-full top-0 relative' src={props.img} alt="" />
                            </div>
                            <div className='relative flex-grow h-[40%] lg:ml-2 lg:w-1/2'>
                                <div className='p-2'>
                                    <h1 className="my-4 mb-0  font-bold  text-4xl">{props.artName}</h1>
                                    <p className='mb-2'>{props.price}</p>
                                    <p>{props.desc.replace( /(<([^>]+)>)/ig, '')}</p>
                                </div>
                                
                                <div className='absolute bottom-[5%] w-full'>
                                    <button onClick={props.addToCart} className='font-bold lg:text-xl flex justify-center p-4 m-auto w-3/4 h-12 shadow-slate-700 shadow bg-[#D10355]'>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default ArtInfo