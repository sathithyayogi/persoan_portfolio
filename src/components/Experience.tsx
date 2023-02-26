import { useQuery } from '@tanstack/react-query';
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
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold my-5'>Experience</h1>
                    <hr />
                    {experienceQuery.data && experienceQuery.data.map((companyData) => {
                        return (
                            <>
                                <div className="pt-10  p-5 rounded-2xl">
                                    <p className='font-bold text-3xl cursor-pointer' onClick={() => {
                                        window.open(companyData.companyURL)
                                    }}>{companyData.companyName}</p>
                                    <p className='text-black-900 text-base mb-2'>{companyData.companyDescription} - {companyData.role} |  [ {companyData.tenure} ]</p>

                                    <p className='mb-2 text-gray-500'>{companyData.roleDescription}</p>

                                    {
                                        companyData?.projects.length > 0 &&
                                        (
                                            <>
                                                <h5 className='font-bold my-5 text-xl'>Products Worked</h5>

                                                <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                                    {
                                                        companyData?.projects?.map((projectData) => {
                                                            return (
                                                                <>
                                                                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:shadow-inner">
                                                                        <a target='_blank' href={projectData?.url[0]?.url}>
                                                                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{projectData?.name}</h5>
                                                                        </a>
                                                                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{projectData?.description}</p>

                                                                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                                            {
                                                                                projectData?.stack?.map((data) => {
                                                                                    return (
                                                                                        <>
                                                                                            <p className='bg-gray-200 rounded-md flex justify-center px-2 text-xs'>{data}</p>
                                                                                        </>
                                                                                    )

                                                                                })
                                                                            }
                                                                        </div>

                                                                        {
                                                                            projectData?.url.length > 0 &&
                                                                            <p className='text-white mt-3 text-lg'>Projects</p>

                                                                        }
                                                                        <ul className='list-disc ml-4'>
                                                                            {
                                                                                projectData?.url.map((data) => {
                                                                                    return (
                                                                                        <>
                                                                                            <a target="_blank" href={data.url} data-te-toggle="tooltip"
                                                                                                className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                                                                                title="Hi! I'm tooltip">
                                                                                                <li className='text-white text-xs mt-2 cursor-pointer underline'>{data.name}</li>
                                                                                            </a>
                                                                                            <p className='text-white text-xs ml-2 mt-2'> - {data.description}</p>

                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </>
                                                            )

                                                        })
                                                    }
                                                </div>
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