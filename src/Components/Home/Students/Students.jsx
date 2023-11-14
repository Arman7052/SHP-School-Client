

const Students = () => {
    return (
        <div>
             <section className="bg-white py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Our Students</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {students.map((student) => ( */}
            <li className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">NAbil</h3>
              <p className="text-sm">5th</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">NAbil</h3>
              <p className="text-sm">6th</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">NAbil</h3>
              <p className="text-sm">7th</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">NAbil</h3>
              <p className="text-sm">8th</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">NAbil</h3>
              <p className="text-sm">9th</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">NAbil</h3>
              <p className="text-sm">10th</p>
            </li>
          {/* ))} */}
        </ul>
      </div>
    </section>
        </div>
    );
};

export default Students;