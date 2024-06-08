import { useEffect, useState } from "react";

const AllDeliveryMen = () => {
    
    const [delivery, setDelivery] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/users?Role=deliveryMen")
            .then(res => res.json())
            .then(data => {
                setDelivery(data)
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
                                <button className="btn bg-[#FF3811] btn-sm">Review</button>
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