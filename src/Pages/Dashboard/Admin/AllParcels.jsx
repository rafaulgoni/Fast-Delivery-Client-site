import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllParcels = () => {
    const [book, setBook] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/book')
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
    }, [])

    return (
        <div>
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
                            <th>Status</th>
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
                                <td><button className="bg-green-100 rounded-3xl btn-sm btn">{booked.BookingStatus}</button></td>
                                <th>
                                    <Link to={`/dashboard/adminUpdate/${booked._id}`} className="bg-[#FF3811] rounded-3xl btn-sm btn">Manege</Link>
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