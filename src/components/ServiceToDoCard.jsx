const ServiceToDoCard = () => {
  return (
    <div>
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

            <div className="flex flex-wrap items-center justify-between gap-4 mt-3">
              <div>
                <label className="label">
                  <span className="label-text font-bold">
                    Service Booked By
                  </span>
                </label>
                <div className="flex items-center gap-x-2">
                  <img
                    className="object-cover w-16 h-16 rounded-lg"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                    alt=""
                  />

                  <div>
                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                      Mia John
                    </h1>

                    <p className="text-base text-gray-500 dark:text-gray-400">
                      miajohn@merakiui.com
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <form action="">
                  <label className="label">
                    <span className="label-text font-bold">
                      Update Your Service Status
                    </span>
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option value={"pending"}>Pending</option>
                    <option value={"working"}>Working</option>
                    <option value={"completed"}>Completed</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceToDoCard;
