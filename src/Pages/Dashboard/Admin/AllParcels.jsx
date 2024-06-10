import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';


const AllParcels = () => {
    const [book, setBook] = useState([])

    useEffect(() => {
        fetch('https://b9a12-server-side-rafaulgoni.vercel.app/book')
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>Fast Delivery | All Parcel</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>User’s Name</th>
                            <th>User’s Phone</th>
                            <th>Booking Date</th>
                            <th>Requested Delivery Date</th>
                            <th>Cost</th>
                            <th>Booking Status</th>
                            <th>Manage Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            book.map((booked, index) => <tr key={booked._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div>
                                        <div className="font-bold">{booked.displayName}</div>
                                    </div>
                                </td>
                                <td>
                                    {booked.number}
                                </td>
                                <td>{booked.bookingDate}</td>
                                <td>{booked.RequestedDeliveryDate}</td>
                                <td>{booked.price}</td>
                                <td><button className="bg-green-500 rounded-3xl btn-sm btn">{booked.BookingStatus}</button></td>
                                <th>
                                    {
                                        booked.BookingStatus === "Deliver" ? <button className="rounded-3xl btn-sm btn">Manege</button> : <Link to={`/dashboard/adminUpdate/${booked._id}`} className="bg-[#FF3811] rounded-3xl btn-sm btn">Manege</Link>
                                    }
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

export default AllParcels;