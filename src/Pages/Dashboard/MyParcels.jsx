import { useQuery } from "@tanstack/react-query";
import usePublic from '../../Hooks/usePublic';
import useAuth from '../../Hooks/useAuth';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';

const MyParcels = () => {
    const { user } = useAuth()
    const publicAPT = usePublic()

    const { data: book = [], refetch } = useQuery({
        queryKey: ['/book'],
        queryFn: async () => {
            const res = await publicAPT.get(`/book/${user.email}`);
            return res.data;

        }
    })

    const handleCancel = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/book/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Canceled!',
                                'Your booking has been Canceled.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    

    return (
        <div>
            <Helmet>
                <title>Fast Delivery | My Parcels</title>
            </Helmet>
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
                                    <span className="badge badge-ghost badge-sm">Cost: {booked.price}</span>
                                </td>
                                <td>{booked.RequestedDeliveryDate}</td>
                                <td>{booked.ApproximateDeliveryDate}</td>
                                <td>{booked.bookingDate}</td>
                                <td>{booked.DeliveryMenID}</td>
                                <td><button className="bg-green-100 rounded-3xl btn-sm btn">{booked.BookingStatus}</button></td>
                                <td>
                                    {
                                        booked.BookingStatus === "On The Way" ? <button className=" rounded-3xl btn-sm btn">Update</button> : <Link to={`/dashboard/userUpdate/${booked._id}`} className="bg-green-500 rounded-3xl btn-sm btn">Update</Link>
                                    }
                                </td>
                                <td>
                                    {
                                        booked.BookingStatus === "On The Way" ? <button className=" rounded-3xl btn-sm btn">Cancel</button> : <button onClick={() => handleCancel(booked._id)} className="bg-[#FF3811] rounded-3xl btn-sm btn">Cancel</button>
                                    }
                                </td>
                                <td>
                                    {
                                       booked.BookingStatus === "On The Way" ? <button className="rounded-3xl btn-sm btn">Review</button> : <Link to={`/dashboard/reviewUpdate/${booked._id}`} className="bg-green-500 rounded-3xl btn-sm btn">Review</Link>
                                    }
                                </td>
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