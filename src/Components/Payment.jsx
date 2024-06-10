import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <div className='text-center space-y-2 mb-8'>
                <h3 className='text-[#FF3811] font-bold'>~~~ Please payment to cat ~~~</h3>
                <hr className='border-b-4 border-dashed w-1/6 mx-auto' />
                <h1 className='lg:text-5xl text-3xl font-bold'>Payment</h1>
                <hr className='border-b-4 border-dashed w-2/6 mx-auto' />
            </div>
            <div className="rounded-lg shadow-xl">
                <div className="p-4">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;