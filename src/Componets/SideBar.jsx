import React from 'react'

function SideBar(props) {
  return (
    <div className='h-screen lg:w-[145px] text-white font-bold text-2xl w-0 invisible md:visible'>
      <div className='artist-button fixed h-[102.3%] w-[148px] bg-slate-900 flex flex-col justify-center border-r-8 border-[#D10355]'>
            <div className='hover:bg-[#D10355] w-[100%] h-12 mt-16'>
            <button onClick={props.toggle} className='w-[60%] h-12'>Artist</button>
            </div>
      </div>
    </div>
  )
}

export default SideBar