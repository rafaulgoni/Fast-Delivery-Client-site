
import { Helmet } from 'react-helmet-async';

const MapBox = () => {

    return (
        <div>
            <Helmet>
                <title>Fast Delivery | Google Map</title>
            </Helmet>
            <address>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747160.1251429403!2d87.70380692293791!3d23.48440204354597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1717956800474!5m2!1sen!2sbd" loading="lazy" className="min-h-screen min-w-full" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </address>
        </div>
    );
};

export default MapBox;