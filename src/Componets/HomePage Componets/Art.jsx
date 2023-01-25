import React from 'react'

function Art(props) {
  return (
            <div className="bg-slate-900 hover:border-2 hover:border-[#D10355] flex-grow  border-white w-96 h-72 lg:h-[500px] text-white text-center overflow-hidden">
                <button onClick={props.toggle}>
                    <img className={'object-fit'}src={props.img} alt="IMG" />
                </button>
            </div>
  )
}

export default Art