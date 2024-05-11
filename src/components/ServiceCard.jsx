const ServiceCard = () => {
  return (
    <div>
      <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src="https://i.ibb.co/kMQ6NSw/Slider1.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <h2 className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">
              I Built A Successful Blog In One Year
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </p>
            <h4 className="mt-2 text-xl font-bold text-gray-600 dark:text-gray-400">
              Price: $50
            </h4>
          </div>

          <div className="mt-4 flex items-start justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover w-12 h-12 rounded-full"
                  src="https://i.ibb.co/sRtRZmV/Slider3.jpg"
                  alt="Avatar"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Post By
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  John Doe
                </p>
              </div>
            </div>

            <div className="flex">
              <button
                type="submit"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Add Service
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
