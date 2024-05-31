import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            {/* <span className="sr-only">Error</span>404 */}
                            <img src={"https://i.ibb.co/hDZw6x3/error-removebg-preview.png"} alt="" />
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry boss, Page not found.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But do not worry, you can find plenty of other things on our homepage. Feel free to browse through our latest updates, explore various categories, and discover new content tailored just for you.</p>
                        <Link to="/" className="px-8 py-3 btn bg-[#FF3811] font-bold rounded">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;