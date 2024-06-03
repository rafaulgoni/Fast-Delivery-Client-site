

const AllBook = () => {
    return (
        <div className="container mx-auto">
            <div className="w-full dark:bg-gray-500 mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/p3tJ0T3/bookstore1.jpg)', backgroundPosition: 'center center;', backgroundBlendMode: "multiply", backgroundSize: "cover" }}>
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-30">
                    <h1 className="text-5xl antialiased font-semibold leading-none text-center text-black">Search your book name</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center ">Find out about events and other book</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="please search your book name" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="Search" className="w-2/5 p-3 font-semibold btn rounded-none rounded-r-lg sm:w-1/3 bg-[#FF3811] border-none">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBook;