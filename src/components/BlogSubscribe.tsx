import { SubscribeButton } from './SubscribeButton'

const BlogSubscribe = () => {
    return (
        <div className='flex text-white justify-center my-7 flex-col'>
            <div className="">

                <h1 className='text-3xl text-bold font-normal  flex justify-center mx-3'>
                    Hey,

                    For Blogs on Javascript, Development, and interview preparation

                </h1>
            </div>
            <SubscribeButton />
            {/* <h1 className='text-2xl flex justify-center mx-3'>ok, if you don't want to , Let be friends, you can say Hi to me in the chat box</h1> */}
        </div>
    )
}

export default BlogSubscribe