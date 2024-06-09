import usePublic from "../../../Hooks/usePublic";
import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

const MyDeliveryList = () => {


    const publicAPT = usePublic()

    const { data: myDelivery = [], refetch } = useQuery({
        queryKey: ['/booking'],
        queryFn: async () => {
            const res = await publicAPT.get("/booking?BookingStatus=On The Way");
            return res.data;

        }
    })

    const handleBookingCancel = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/book/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ BookingStatus: 'cancel' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Cancel!',
                                'Cancel successfully.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleBookingDeliver = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delivery done!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/book/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ BookingStatus: 'Deliver' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deliver!',
                                'Delivery successfully.',
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
                <title>Fast Delivery | My Delivery List</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Booked Name/Number
                            </th>
                            <th>Receivers Name/Number</th>
                            <th>Requested Delivery Date</th>
                            <th>Approximate Delivery Date</th>
                            <th>Receivers Address</th>
                            <th>View Location Button</th>
                            <th>Cancel Button</th>
                            <th>Deliver Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myDelivery.map(delivery => <tr key={delivery._id}>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{delivery.displayName}</div>
                                            <div className="text-sm">{delivery.number}</div>
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{delivery.ReceiverName}</div>
                                            <div className="text-sm">{delivery.ReceiverPhoneNumber}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{delivery.RequestedDeliveryDate}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{delivery.ApproximateDeliveryDate}</span>
                                </td>
                                <th>
                                    {delivery.ParcelDeliveryAddress}
                                </th>
                                <th>
                                    <Link to={`/dashboard/mapBox/${delivery._id}`} className="btn btn-sm bg-green-100">View Location</Link>
                                </th>
                                <th>
                                    <button onClick={() => handleBookingCancel(delivery._id)} className="btn btn-sm bg-[#FF3811]">Cancel</button>
                                </th>
                                <th>
                                    <button onClick={() => handleBookingDeliver(delivery._id)} className="btn btn-sm bg-[#FF3811]">Deliver</button>
                                </th>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDeliveryList;