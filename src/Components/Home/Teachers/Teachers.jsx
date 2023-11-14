
const Teachers = () => {
    return (
        <div>
            <section className="bg-gray-100 py-16 text-center">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-8">Meet Our Teachers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* {teachers.map((teacher) => ( */}
                        <div className="bg-white p-4 rounded-md">
                            <h3 className="text-lg font-bold mb-2">Rabin</h3>
                            <p className="text-sm">Math</p>
                        </div>
                        <div className="bg-white p-4 rounded-md">
                            <h3 className="text-lg font-bold mb-2">Rabin</h3>
                            <p className="text-sm">Math</p>
                        </div>
                        <div className="bg-white p-4 rounded-md">
                            <h3 className="text-lg font-bold mb-2">Rabin</h3>
                            <p className="text-sm">Math</p>
                        </div>
                        <div className="bg-white p-4 rounded-md">
                            <h3 className="text-lg font-bold mb-2">Rabin</h3>
                            <p className="text-sm">Math</p>
                        </div>
                        <div className="bg-white p-4 rounded-md">
                            <h3 className="text-lg font-bold mb-2">Rabin</h3>
                            <p className="text-sm">Math</p>
                        </div>
                        {/* ))} */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teachers;