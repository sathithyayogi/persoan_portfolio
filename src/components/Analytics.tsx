import React from 'react';
import YogaImg from '../assets/yoga.png';

const Analytics = () => {
  return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={YogaImg} className='w-[500px] mx-auto my-4' alt="/" />
                <div className="flex flex-col justify-center">
                    <p className='text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quas consequuntur fuga, est facilis unde modi quasi ducimus necessitatibus impedit error. Culpa tenetur vel fuga doloremque est, omnis amet error.</p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                </div>
            </div>
        </div>
  )
}

export default Analytics