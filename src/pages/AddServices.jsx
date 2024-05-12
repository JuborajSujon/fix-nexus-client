const AddServices = () => {
  return (
    <div className="min-h-[calc(100vh-170px)] flex items-center justify-center py-24 md:pt-28 md:pb-20 dark:bg-gray-900 px-4">
      <section className="max-w-4xl  w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white">
          Add New Service
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 font-bold text-lg dark:text-gray-200"
                htmlFor="serviceName">
                Service Name
              </label>
              <input
                id="serviceName"
                type="text"
                name="serviceName"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 font-bold text-lg dark:text-gray-200"
                htmlFor="imgURL">
                Image URL of the service
              </label>
              <input
                id="imgURL"
                type="text"
                name="imgURL"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 font-bold text-lg dark:text-gray-200"
                htmlFor="price">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 font-bold text-lg dark:text-gray-200"
                htmlFor="serviceArea">
                Service Area
              </label>
              <input
                id="serviceArea"
                name="serviceArea"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="text-gray-700 font-bold text-lg dark:text-gray-200"
              htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              required></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Add Service
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddServices;
