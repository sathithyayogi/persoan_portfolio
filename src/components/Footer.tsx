import { FaLinkedinIn, FaSpotify, FaYoutube, FaMediumM, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
                    <p className=''>Weekly blogs on Javascript, Frameworks and Interview</p>
                    <button onClick={()=>{
                        window.open('https://medium.com/@sathithyayogi/subscribe')
                    }} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Subscribe on Medium</button>

                    <div className='flex justify-between md:w-[75%] my-6'>
                        <a target='_blank' href="https://www.linkedin.com/in/sathithyayogi/" rel='noreferrer'>
                            <FaLinkedinIn className='hover:text-[#00df9a] cursor-pointer' size={30} />
                        </a>
                        <a target='_blank' href="https://open.spotify.com/show/192VKMHm0FW5Bp25j8yJA6?si=b33c0df532e94ce3" rel='noreferrer'>
                            <FaSpotify className='hover:text-[#00df9a] cursor-pointer' size={30} />
                        </a>
                        <a target='_blank' href="https://www.youtube.com/channel/UCVGsU7jQW0xQV4EACQfa3oA" rel='noreferrer'>
                            <FaYoutube className='hover:text-[#00df9a] cursor-pointer' size={30} />
                        </a>
                        <a target='_blank' href="https://medium.com/@sathithyayogi" rel='noreferrer'>
                            <FaMediumM className='hover:text-[#00df9a] cursor-pointer' size={30} />
                        </a>
                        <a target='_blank' href="https://github.com/sathithyayogi" rel='noreferrer'>
                            <FaGithub className='hover:text-[#00df9a] cursor-pointer' size={30} />
                        </a>

                    </div>
                </div>
                {/* <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-gray-400'>Solutions</h6>
                        <ul>
                            <li className='py-2 text-sm'>Analytics</li>
                            <li className='py-2 text-sm'>Marketing</li>
                            <li className='py-2 text-sm'>Commerce</li>
                            <li className='py-2 text-sm'>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Support</h6>
                        <ul>
                            <li className='py-2 text-sm'>Pricing</li>
                            <li className='py-2 text-sm'>Documentation</li>
                            <li className='py-2 text-sm'>Guides</li>
                            <li className='py-2 text-sm'>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Company</h6>
                        <ul>
                            <li className='py-2 text-sm'>About</li>
                            <li className='py-2 text-sm'>Blog</li>
                            <li className='py-2 text-sm'>Jobs</li>
                            <li className='py-2 text-sm'>Press</li>
                            <li className='py-2 text-sm'>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Legal</h6>
                        <ul>
                            <li className='py-2 text-sm'>Claim</li>
                            <li className='py-2 text-sm'>Policy</li>
                            <li className='py-2 text-sm'>Terms</li>
                        </ul>
                    </div>
                </div> */}
            </div>
            <div className="max-w-[1240px] mx-auto grid grid-flow-col auto-cols-max m-2">
                <p className='text-white'>Powered By </p> <br />
                <Link className='text-[#00df9a] uppercase font-bold cursor-pointer' to={"/tech-stack"}>&nbsp; Tech Stack</Link>
            </div>

        </>
    )
}

export default Footer