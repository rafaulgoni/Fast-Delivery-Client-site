import { useQuery } from "@tanstack/react-query";
import usePublic from '../../Hooks/usePublic';
import useAuth from '../../Hooks/useAuth';

const MyParcels = () => {
    const {user} = useAuth()
    const publicAPT = usePublic()

    const { data: book = [] } = useQuery({
        queryKey: ['/book'],
        queryFn: async () => {
            const res = await publicAPT.get(`/book/${user.email}`);
            return res.data;
            
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <p>#</p>
                            </th>
                            <th>ParcelType</th>
                            <th>Requested Delivery Date</th>
                            <th>Approximate Delivery Date</th>
                            <th>Booking Date</th>
                            <th>Delivery Men ID</th>
                            <th>Booking Status</th>
                            <th>Action</th>
                            <th>Action</th>  
                            <th>Review</th>
                            <th>Pay Button</th>
                        </tr>
                    </thead>
                    {
                        book.map((booked,index)=><tbody key={booked._id}>
                        <th>
                            <p>{index+1}</p>
                        </th>
                        <th>{booked.ParcelType}</th>
                        <th>{booked.RequestedDeliveryDate}</th>
                        <th>{booked.ApproximateDeliveryDate}</th>
                        <th>{booked.bookingDate}</th>
                        <th>{booked.DeliveryMenID}</th>
                        <th><button className="bg-green-100 rounded-3xl btn-sm btn">{booked.BookingStatus}</button></th>
                        <th><button className="bg-green-500 rounded-3xl btn-sm btn">Update</button></th>
                        <th><button className="bg-[#FF3811] rounded-3xl btn-sm btn">Cancel</button></th>
                        <th><button className="bg-green-500 rounded-3xl btn-sm btn">Review</button></th>
                        <th><button className="bg-green-800 rounded-3xl btn-sm btn font-bold">Pay</button></th>
                    </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyParcels;