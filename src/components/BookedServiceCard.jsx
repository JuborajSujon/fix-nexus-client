import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
const BookedServiceCard = ({ bookedService }) => {
  const {
    serviceId,
    serviceName,
    serviceImage,
    price,
    instructions,
    serviceDate,
    status,
    providerName,
    providerImage,
  } = bookedService || {};

  return (
    <div>
      <div className="flex flex-col lg:justify-between mx-auto overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800 max-w-5xl">
        <div className="">
          <img className="object-cover w-full h-64" src={serviceImage} alt="" />
        </div>

        <div className="flex flex-col md:flex-row dark:bg-gray-800 px-4 py-6 gap-4">
          <div className="w-full flex flex-col justify-between gap-4 sm:w-2/3">
            <div className="space-y-3">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                {serviceName}
              </h1>

              <h4 className="font-bold text-gray-700 dark:text-gray-200">
                Price : ${price}
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <strong>Service Taking Date: </strong>{" "}
                {new Date(serviceDate).toLocaleDateString()}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <strong>Instruction: </strong> {instructions}
              </p>
            </div>

            <div className="flex">
              <Link
                to={`/services-details/${serviceId}`}
                className="rounded-md px-3.5 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  View Details
                </span>
              </Link>
            </div>
          </div>
          <div className="sm:w-1/3">
            <h2 className="text-base font-medium text-gray-800 dark:text-white mb-3">
              Service Provider
            </h2>
            <div className="flex items-center gap-x-2">
              <img
                className="object-cover w-16 h-16 rounded-lg"
                src={providerImage}
                alt={providerName}
              />

              <div>
                <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                  {providerName}
                </h1>

                <div className="text-center flex items-center mt-3">
                  <p className="text-xs text-gray-400">Status:</p>
                  <p
                    className={`px-2 ml-1 rounded-md ${
                      status === "Pending" && "text-blue-500 bg-blue-100/60"
                    } ${
                      status === "Working" &&
                      "text-emerald-500 bg-emerald-100/60"
                    } ${
                      status === "Completed" && "text-pink-500 bg-pink-100/60"
                    } text-sm`}>
                    {status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookedServiceCard.propTypes = {
  bookedService: PropsTypes.object,
};

export default BookedServiceCard;
