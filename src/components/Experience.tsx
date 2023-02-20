import React from 'react'

const Experience = () => {
    return (
        <>
            <div className="w-full bg-white pb-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
                    <h1 className='md:text-4xl sm:text-3xl text-2xl pb-8 font-bold'>Experiences and Projects</h1>
                    <hr />

                    <div className="pt-10 bg-gray-300 p-5 rounded-2xl shadow-xl mt-10">
                        <p className='text-[#00df9a] font-bold text-3xl cursor-pointer' onClick={() => {
                            window.open('https://www.zorp.one')
                        }}>Zorp</p>
                        <p className='text-black-900 font-medium'>No Code App Building Platform - SASS Platform</p>
                        <p className='text-black-900 font-medium'>Sep 2022 - Preset</p>
                        <p>Working as a SDE ll

                            <br />
                            <br />

                            Working in React JS, Node JS along with Mongo DB.
                        </p>

                        <p></p>
                    </div>


                </div>




            </div>
        </>
    )
}

export default Experience