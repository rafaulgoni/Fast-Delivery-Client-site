import { useQuery } from "@tanstack/react-query";
import usePublic from '../../Hooks/usePublic';
import useAuth from '../../Hooks/useAuth';
import { Link } from "react-router-dom";

const MyParcels = () => {
    const { user } = useAuth()
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
                            <th>Parcel Details</th>
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
                        book.map((booked, index) => <tbody key={booked._id}>
                            <tr>
                                <th>
                                    <p>{index + 1}</p>
                                </th>
                                <td>
                                    {booked.ParcelType}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Price: {booked.price}</span>
                                </td>
                                <td>{booked.RequestedDeliveryDate}</td>
                                <td>{booked.ApproximateDeliveryDate}</td>
                                <td>{booked.bookingDate}</td>
                                <td>{booked.DeliveryMenID}</td>
                                <td><button className="bg-green-100 rounded-3xl btn-sm btn">{booked.BookingStatus}</button></td>
                                <td><Link to={`/dashboard/userUpdate/${booked._id}`} className="bg-green-500 rounded-3xl btn-sm btn">Update</Link></td>
                                <td><button className="bg-[#FF3811] rounded-3xl btn-sm btn">Cancel</button></td>
                                <td><button className="bg-green-500 rounded-3xl btn-sm btn">Review</button></td>
                                <td><button className="bg-green-800 rounded-3xl btn-sm btn font-bold">Pay</button></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyParcels;