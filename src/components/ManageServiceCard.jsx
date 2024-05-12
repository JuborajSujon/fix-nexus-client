const ManageServiceCard = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row max-w-5xl mx-auto overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800">
        <div className="sm:w-1/3">
          <img
            className="object-cover w-full h-64"
            src="https://i.ibb.co/sRtRZmV/Slider3.jpg"
            alt=""
          />
        </div>

        <div className="w-full flex flex-col justify-between sm:w-2/3 p-4">
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

          <div className="flex flex-wrap items-center justify-between mt-3 item-center">
            <div className="flex">
              <a
                href="#_"
                className="rounded-md px-3.5 py-1 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  View Details
                </span>
              </a>
              <a
                href="#_"
                className="rounded-md px-3.5 py-1 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 ">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  Edit
                </span>
              </a>
            </div>
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-1.5 overflow-hidden font-medium transition-all bg-red-500 rounded-md group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 ">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Delete
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCard;
