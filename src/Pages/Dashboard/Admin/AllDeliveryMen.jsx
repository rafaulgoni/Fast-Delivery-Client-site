import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

const AllDeliveryMen = () => {
    
    const [delivery, setDelivery] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/userDeliveryMen?Role=deliveryMen")
            .then(res => res.json())
            .then(data => {
                setDelivery(data)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Fast Delivery | All Delivery Men</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Number of parcel
                                </label>
                            </th>
                            <th>Delivery Man`s Name</th>
                            <th>Number/Email</th>
                            <th>Average review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            delivery.map((men,index)=><tr key={men._id}>
                            <th>
                                <label>
                                    {index + 9120001}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={men.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{men.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm">{men.email}</span>
                            </td>
                            <th>
                                <Link to ={`/dashboard/DeliveryMenReview/${men._id}`} className="btn bg-[#FF3811] btn-sm">Review</Link>
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

export default AllDeliveryMen;