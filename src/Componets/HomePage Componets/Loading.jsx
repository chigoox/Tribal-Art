import React from 'react'

function Loading(props) {
  return (
    <div className='fixed  z-30 bg-opacity-40 w-full h-32 top-0 right-0'>
        <div className='relative m-auto bg-opacity-50 top-[5%] bg-slate-900 p-2 h-14 w-64'>
            <h1 className='font-bold text-white text-center text-3xl'>{props.msg}</h1>
        </div>
    </div>
    
  )
}

export default Loading