import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';


const AdminUpdate = () => {
    const navigate = useNavigate()
    const booking = useLoaderData()
    const {BookingStatus, DeliveryMenID, _id} = booking;


    const handleBookingUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const BookingStatus = form.BookingStatus.value;
        const DeliveryMenID = form.DeliveryMenID.value;


        const update = { DeliveryMenID, BookingStatus }

        fetch(`http://localhost:5000/book/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Successfully update booking in Admin!')
                    navigate('/dashboard/allParcel')
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleBookingUpdate}>
                <div className="md:flex mb-4 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Booking status</span>
                        </label>
                        <label className="input-group">
                            <select
                                defaultValue={BookingStatus}
                                name='BookingStatus'
                                id='BookingStatus'
                                className='border p-3 rounded-md w-full'
                            >
                                <option value='pending'>pending</option>
                                <option value='On The Way'>On The Way</option>
                                <option value='Cancel'>Cancel</option>

                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Delivery Men ID</span>
                        </label>
                        <label className="input-group">
                            <select
                                defaultValue={DeliveryMenID}
                                name='DeliveryMenID'
                                id='DeliveryMenID'
                                className='border p-3 rounded-md w-full'
                            >
                                <option value='Admin Assigns a Delivery Men'>Admin Assigns a Delivery Men</option>
                                <option value='9120001'>9120001</option>
                                <option value='9120002'>9120002</option>
                                <option value='9120003'>9120003</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="">
                    <button className="btn w-full bg-[#FF3811] btn-sm">Update</button>
                </div>
            </form>
        </div>
    );
};

export default AdminUpdate;