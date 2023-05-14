import React from 'react'

const TechStackIntro = () => {
    return (
        <div className="w-full bg-white py-16 px-4" style={{height:'100%'}}>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2'>Tech Stack that powers <span className='text-[#00df9a]'> sathithyayogi.me</span></h1>
                    <div className="ml-10">
                        <ul className="list-disc">
                            <li>React</li>
                            <li>React Query</li>
                            <li>Google Analytics</li>
                            <li>Crisp Chat</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStackIntro