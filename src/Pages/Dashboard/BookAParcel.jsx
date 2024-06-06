import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';

const BookAParcel = () => {
    const [parcelWeight, setParcelWeight] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleAddCraft = event => {
        event.preventDefault();
        const form = event.target;
        const number = form.number.value;
        const ParcelType = form.ParcelType.value;
        const ParcelWeight = form.ParcelWeight.value;
        const price = form.price.value;
        const ReceiverName = form.ReceiverName.value;
        const ReceiverPhoneNumber = form.ReceiverPhoneNumber.value;
        const ParcelDeliveryAddress = form.ParcelDeliveryAddress.value;
        const RequestedDeliveryDate = form.RequestedDeliveryDate.value;
        const DeliveryAddressLatitude = form.DeliveryAddressLatitude.value;
        const DeliveryAddressLongitude = form.DeliveryAddressLongitude.value;
        const email = user.email;
        const displayName = user.displayName;
        const bookingDate = new Date();
        const DeliveryMenID = "Admin Assigns a Delivery Men.";
        const BookingStatus = "pending"
        const ApproximateDeliveryDate = "2024-05-02"

        const Booking = {
            number, ParcelType, ParcelWeight, price, ReceiverName, ReceiverPhoneNumber, ParcelDeliveryAddress, RequestedDeliveryDate,
            DeliveryAddressLatitude, DeliveryAddressLongitude, email, displayName, bookingDate, DeliveryMenID, BookingStatus, ApproximateDeliveryDate
        }

        fetch('http://localhost:5000/book', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Booking Successfully!')
                    event.target.reset()
                    navigate('/dashboard/myParcel')
                }
            })
    }


    const calculatePrice = () => {
        const weight = parseFloat(parcelWeight);
        let price = 0;

        if (weight <= 1) {
            price = 50;
        } else if (weight <= 2) {
            price = 100;
        } else {
            price = 150;
        }

        setTotalPrice(price);
    };
    return (
        <div>
            <div className="bg-base-200 p-6 md:10 lg:p-24 container mx-auto">
                <Helmet>
                    <title>Fast Delivery | Book A parcel</title>
                </Helmet>
                <h2 className="text-3xl font-extrabold">Book A parcel</h2>
                <form onSubmit={handleAddCraft}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Number</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="number" placeholder="Inter your number" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">ParcelType</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="ParcelType" placeholder="Parcel Type" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Parcel Weight</span>
                            </label>
                            <label className="input-group">
                                <input value={parcelWeight}
                                    onChange={(e) => setParcelWeight(e.target.value)}
                                    type="number" name="ParcelWeight"
                                    placeholder="Parcel Weight" className="input input-bordered w-full"
                                    required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Receiver’s Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="ReceiverName" placeholder="Receiver’s Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Receiver’s Phone Number</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="ReceiverPhoneNumber" placeholder="Receiver's Phone Number" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">ParcelDelivery Address</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="ParcelDeliveryAddress" placeholder="ParcelDelivery Address" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Requested Delivery Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="RequestedDeliveryDate" placeholder="Requested Delivery Date" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" value={totalPrice} placeholder="price" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Delivery Address Latitude</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="DeliveryAddressLatitude" placeholder="Delivery Address Latitude" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Delivery Address longitude</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="DeliveryAddressLongitude" placeholder="Delivery Address longitude" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <input onClick={calculatePrice} type="submit" value="Add Book" className="btn btn-block bg-[#FF3811]" />
                </form>
            </div>
        </div>
    );
};

export default BookAParcel;