import usePublic from '../../../Hooks/usePublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUser = () => {
    const publicAPT = usePublic()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['/users'],
        queryFn: async () => {
            const res = await publicAPT.get("/users");
            return res.data;

        }
    })

    const handleBookingDelivery = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, create delivery Men!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ Role: 'deliveryMen' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Delivery!',
                                'Your delivery men has been success.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    const handleBookingAdmin = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, create Admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ Role: 'admin' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Delivery!',
                                'Your admin men has been success.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            user: {users.length}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Number of parcel
                                </label>
                            </th>
                            <th>User’s Name</th>
                            <th>Phone Number/Email</th>
                            <th>Role</th>
                            <th>Make Delivery Men</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    <label>
                                        {index + 9120005}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{user.email}</span>
                                </td>
                                <td>
                                    <span className="btn btn-sm bg-green-500">{user.Role}</span>
                                </td>
                                <th>
                                    {
                                        user.Role === "deliveryMen" ? <button className="btn bg-green-500 btn-sm">Delivery Men</button> : <button onClick={() => handleBookingDelivery(user._id)} className="btn bg-[#FF3811] btn-sm">Create Delivery Men</button>
                                    }
                                </th>
                                <th>
                                    {
                                        user.Role ==="admin" ? <button className="btn bg-green-500 btn-sm">Admin</button> :
                                        <button onClick={() => handleBookingAdmin(user._id)} className="btn bg-[#FF3811] btn-sm">Create Admin</button>
                                    }
                                    
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;