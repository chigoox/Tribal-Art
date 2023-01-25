import React from 'react'
import chima from '../../assets/chima.jpg'

function ArtistInfo(props) {
  return (
    <div className='fixed border-black border-2 bg-gray-200 bg-opacity-40 w-full h-full top-0 right-0 z-10'>
       <div className='relative m-auto h-full w-full pt-[10%] lg:pt-[5%]'>
      <div className='border-2 m-auto rounded-full w-32 h-32 bg-white overflow-hidden'>
        <img className='object-contain'  src={chima} alt="IMG" />
      </div>
      <div className='relative m-auto flex shadow-sm shadow-black h-[600px] w-full lg:w-1/2  p-4 lg:p-8 text-white  rounded-md bg-slate-900'>
          <button onClick={props.toggle} className='absolute font-bold text-2xl hover:text-[#D10355] top-3 right-6'>X</button>
     

          <div className='w-full '>
            <h1 className='mt-0 text-3xl mb-2 font-bold'>Dennis Dike</h1>
            <p className='mt-1'>
              A self-taught painter based in New
              Jersey, born in 1984. He developed an interest in
              painting at a young age of 10. His paintings are
              narrative scenes of domestic interactions between
              people, family and childhood memories using
              storytelling that incorporate the elements that taps
              into human identity while capturing the spirit of
              ordinary everyday life in a way that invites the
              viewers to their interpretations.
              Dennis draws inspiration from various sources like
              politics, African art, history and culture, photography
              and inspiration from every day people to
              Contemporary art.
              Dennis works mainly with acrylic paints on canvas.
              He paints a wild variety of bold figurative paintings,
              and his paintings technique involve primitive style
              painting techniques. Dennis likes to paint a series of
              work by using vivid colors and expressive brush
              strokes. His works feature iconographies such as
              books and flowers abstraction background that
              involves so many movements.
              Each piece tells a story with texture and layers.
            </p>
          </div>
      </div>
    </div >
    </div>
   
  )
}

export default ArtistInfo