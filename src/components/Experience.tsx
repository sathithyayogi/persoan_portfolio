import { useQuery, useMutation } from '@tanstack/react-query';
import experienceData from '../data/experience.json'

const Experience = () => {

    const experienceQuery = useQuery({
        queryKey: ['experience'],
        queryFn: () => experienceData
    })

    return (
        <>
            <div className="w-full bg-white pb-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
                    <h1 className='md:text-4xl sm:text-3xl text-2xl pb-8 font-bold'>Experiences and Projects</h1>
                    <hr />
                    {experienceQuery.data && experienceQuery.data.map((companyData) => {
                        return (
                            <>
                                <div className="pt-10 bg-gray-300 p-5 rounded-2xl shadow-xl mt-10">
                                    <p className='text-[#00df9a] font-bold text-3xl cursor-pointer' onClick={() => {
                                        window.open(companyData.companyURL)
                                    }}>{companyData.companyName}</p>
                                    <p className='text-black-900 font-medium'>{companyData.companyDescription}</p>
                                    <p className='text-black-900 font-medium'>{companyData.tenure}</p>
                                    <p>{companyData.role}
                                        <br />
                                        <br />
                                        {companyData.roleDescription}
                                    </p>

                                    {
                                        companyData?.projects.length > 0 &&
                                        (
                                            <>
                                                <h5 className='font-bold mt-1'>Projects</h5>

                                                <ul className='ml-3'>
                                                    {
                                                        companyData?.projects.map((projectData) => {
                                                            return (
                                                                <>
                                                                    <p>{projectData?.name}</p>
                                                                    <p className='ml-3'>{projectData?.description}</p>

                                                                    <div className="flex my-3">
                                                                        {
                                                                            projectData?.stack?.map((data) => {
                                                                                return (
                                                                                    <>
                                                                                        <p className='px-3 mx-3 bg-red-500 rounded-md'>{data}</p>
                                                                                    </>
                                                                                )

                                                                            })
                                                                        }
                                                                    </div>

                                                                </>
                                                            )

                                                        })
                                                    }
                                                </ul>


                                            </>
                                        )
                                    }

                                </div>
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Experience