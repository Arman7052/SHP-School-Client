

const Courses = () => {
    return (
        <div>
            <section className="bg-white py-16 text-center">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-8">Our Courses</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* {courses.map((course) => ( */}
                            <li  className="bg-gray-200 p-4 rounded-md">
                                <h3 className="text-lg font-bold mb-2">math</h3>
                                <p className="text-sm">AA</p>
                            </li>
                            <li  className="bg-gray-200 p-4 rounded-md">
                                <h3 className="text-lg font-bold mb-2">math</h3>
                                <p className="text-sm">AA</p>
                            </li>
                            <li  className="bg-gray-200 p-4 rounded-md">
                                <h3 className="text-lg font-bold mb-2">math</h3>
                                <p className="text-sm">AA</p>
                            </li>
                            <li  className="bg-gray-200 p-4 rounded-md">
                                <h3 className="text-lg font-bold mb-2">math</h3>
                                <p className="text-sm">AA</p>
                            </li>
                            <li  className="bg-gray-200 p-4 rounded-md">
                                <h3 className="text-lg font-bold mb-2">math</h3>
                                <p className="text-sm">AA</p>
                            </li>
                            <li  className="bg-gray-200 p-4 rounded-md">
                                <h3 className="text-lg font-bold mb-2">math</h3>
                                <p className="text-sm">AA</p>
                            </li>
                        {/* ))} */}
                    </ul>
                </div>
            </section>

        </div>
    );
};

export default Courses;