const BookedServiceCard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-between mx-auto overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800">
        <div className="lg:order-2 lg:w-1/3 xl:w-1/2">
          <img
            className="object-cover w-full h-64"
            src="https://i.ibb.co/sRtRZmV/Slider3.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-col md:flex-row dark:bg-gray-800 px-4 py-6 gap-4">
          <div className="w-full flex flex-col justify-between gap-4 sm:w-2/3">
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Service Name
              </h1>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Service Area: Dhaka
              </p>
              <h4 className="font-bold text-gray-700 dark:text-gray-200">
                Price :$220
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              </p>
            </div>

            <div className="flex">
              <a
                href="#_"
                className="rounded-md px-3.5 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  View Details
                </span>
              </a>
            </div>
          </div>
          <div className="sm:w-1/3">
            <h2 className="text-base font-medium text-gray-800 dark:text-white mb-3">
              Service Provider
            </h2>
            <div className="flex items-center gap-x-2">
              <img
                className="object-cover w-16 h-16 rounded-lg"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                alt=""
              />

              <div>
                <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                  Mia John
                </h1>

                <p className="text-base text-gray-500 dark:text-gray-400">
                  service location
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedServiceCard;
