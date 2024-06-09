import { Helmet } from 'react-helmet-async';
import usePublic from '../../../Hooks/usePublic';
import { useQuery } from '@tanstack/react-query';
import { Rating } from '@smastrom/react-rating'


const MyReview = () => {

    const publicAPT = usePublic()
    const { data: myReviews = [] } = useQuery({
        queryKey: ['/deliveryMen'],
        queryFn: async () => {
            const res = await publicAPT.get("/deliveryMen");
            return res.data;
        }
    })

    return (
        <div>
            <Helmet>
                <title>Fast Delivery | My Reviews</title>
            </Helmet>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    myReviews.map(review => <div key={review._id} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-base-200">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src={review.photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.name}</h4>
                                    <span className="text-xs dark:text-gray-600">{review.email}</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.number}
                                    readOnly
                                />
                                <span className="text-xl font-bold">{review.number}</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>{review.text}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyReview;