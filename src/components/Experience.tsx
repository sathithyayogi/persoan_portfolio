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
                                                <h5 className='font-bold my-1 text-xl'>Products Worked</h5>

                                                <ul className='ml-3'>
                                                    {
                                                        companyData?.projects?.map((projectData) => {
                                                            return (
                                                                <>
                                                                    <h5 className='text-lg my-3'>{projectData?.name} :</h5>

                                                                    <div className="mx-5">
                                                                        <p className='text-base'>{projectData?.description}</p>

                                                                        {
                                                                            projectData.url && projectData.url.map((projectUrl) => {
                                                                                return (
                                                                                    <>
                                                                                        <p>{projectUrl?.name}</p>
                                                                                    </>
                                                                                )
                                                                            })
                                                                        }

                                                                        <div className="flex">
                                                                            {
                                                                                projectData?.stack?.map((data) => {
                                                                                    return (
                                                                                        <>
                                                                                            <p className='px-3 mx-5 bg-gray-200 rounded-md'>{data}</p>
                                                                                        </>
                                                                                    )

                                                                                })
                                                                            }
                                                                        </div>


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