import React from 'react';
import YogaImg from '../assets/yoga.png';

const About = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <p className='text-[#00df9a] font-bold'>Hi, I am Sathithya</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Full Stack JS Developer</h1>
                    <p></p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Say Hi</button>
                </div>
                <img src={YogaImg} className='w-[500px] mx-auto my-4' alt="/" />
            </div>
        </div>
    )
}

export default About