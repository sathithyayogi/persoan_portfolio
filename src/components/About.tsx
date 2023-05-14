import React from 'react';
import YogaImg from '../assets/yoga.png';

const About = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <p className='text-[#00df9a] font-bold'>Hi, I am Sathithya</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Full Stack Developer</h1>
                    <p className='text-gray'>I am a Software developer passionate about building systems that impacts user's life.
                        <br />
                        <br />
                        Currently working in <a target='_blank' className='text-[#00df9a]' href="https://www.zorp.one" rel='noreferrer'> Zorp</a> as a Full stack developer, working mostly in MERN Stack.
                        Like to write and produce content around programming and software development. you can read my blogs and watch videos in medium and youtube.
                        <br />
                        <br />
                        {/* Like to work in Growth Stage startups, because <br /> <span className='font-bold'> I Don't Want Peace ✌🏼, I Want Problems  Always 💥</span> <span className='text-xs text-gray-20'>(pun intended 😉)</span>  */}
                    </p>
                    {/* <button  className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Say Hi</button> */}
                </div>
                <img src={YogaImg} className='w-[500px] mx-auto my-4' alt="/" />
            </div>
        </div>
    )
}

<br />
export default About