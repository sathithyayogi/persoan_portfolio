import React from 'react'

export const SubscribeButton = () => {
  return (
    <button onClick={()=>{
        window.open('https://medium.com/@sathithyayogi/subscribe')
    }} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Subscribe on Medium</button>

  )
}
