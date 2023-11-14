
const Gallary = () => {
    return (
        <div>
            <section className="bg-gray-100 py-16 text-center">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-8">School Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* {events.map((event) => ( */}
                        <div className="mb-4">
                            <img alt="School" className="w-full h-40 object-cover rounded-md" />
                            <p className="text-sm mt-2">School</p>
                        </div>
                        <div className="mb-4">
                            <img alt="School" className="w-full h-40 object-cover rounded-md" />
                            <p className="text-sm mt-2">School</p>
                        </div>
                        <div className="mb-4">
                            <img alt="School" className="w-full h-40 object-cover rounded-md" />
                            <p className="text-sm mt-2">School</p>
                        </div>
                        <div className="mb-4">
                            <img alt="School" className="w-full h-40 object-cover rounded-md" />
                            <p className="text-sm mt-2">School</p>
                        </div>
                        <div className="mb-4">
                            <img alt="School" className="w-full h-40 object-cover rounded-md" />
                            <p className="text-sm mt-2">School</p>
                        </div>
                        {/* ))} */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallary;