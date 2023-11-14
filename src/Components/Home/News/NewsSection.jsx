const NewsSection = () => {
    return (
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Latest News</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {news.map((article) => ( */}
              <li className="bg-white p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Annual Sports</h3>
                <p className="text-sm">Annual Sports</p>
              </li>
              <li className="bg-white p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Annual Sports</h3>
                <p className="text-sm">Annual Sports</p>
              </li>
              <li className="bg-white p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Annual Sports</h3>
                <p className="text-sm">Annual Sports</p>
              </li>
              <li className="bg-white p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Annual Sports</h3>
                <p className="text-sm">Annual Sports</p>
              </li>
              <li className="bg-white p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Annual Sports</h3>
                <p className="text-sm">Annual Sports</p>
              </li>
            {/* ))} */}
          </ul>
        </div>
      </section>
    );
  };
  
  export default NewsSection;