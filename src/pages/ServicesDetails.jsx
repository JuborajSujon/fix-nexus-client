import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ServicesDetails = () => {
  return (
    <div className="">
      <Helmet>
        <title>FixNexus | Service Details</title>
      </Helmet>
      <div className="py-20 md:pt-28 md:pb-20">
        <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className="bg-gray-800 px-4 py-10 rounded-xl">
                <img
                  src="https://i.ibb.co/SRq3S0Y/Slider2.jpg"
                  alt="Product"
                  className="w-4/5 rounded object-cover mx-auto"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold">
                Espresso Elegante | Coffee
              </h2>
              <p className=" text-4xl font-semibold mt-4">Price: $12</p>

              <div className="flex space-x-2 mt-4">
                <svg
                  className="w-5 fill-orange-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-orange-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-orange-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-orange-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <h4 className="text-base">500 Reviews</h4>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/purchase"
                  className="min-w-[200px] px-4 py-3 bg-orange-300 hover:bg-orange-400 text-black text-center text-sm font-semibold rounded">
                  Book Now
                </Link>

                <button
                  type="button"
                  className="min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent dark:text-yellow-300 text-sm font-semibold rounded">
                  Add to cart
                </button>
              </div>

              <div className="mt-8">
                <p className="text-lg font-semibold mt-4 mb-3">
                  Service Provider Information
                </p>
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
                      Service location
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-4">
                  Service Description
                </h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm">
                  <li>
                    A cup of coffee is a beverage essential because of its
                    timeless appeal
                  </li>
                  <li>
                    Easy to prepare. It can be brewed using various methods,
                    from drip machines to manual pour-overs.
                  </li>
                  <li>
                    Available in various sizes, from a standard espresso shot to
                    a large Americano, catering to different preferences.
                  </li>
                  <li>
                    You can customize your coffee by adding cream, sugar, or
                    flavorings to suit your taste preferences.
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <ul className="flex">
                  <li className="font-semibold text-sm bg-gray-800 text-white py-3 px-8 border-b-2 border-yellow-300 cursor-pointer transition-all">
                    Reviews
                  </li>
                  <li className="font-semibold text-sm py-3 px-8 cursor-pointer">
                    Sellter
                  </li>
                </ul>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold">Reviews(10)</h3>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-center">
                      <p className="text-sm font-semibold">5.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-2/3 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm font-semibold ml-3">66%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm font-semibold">4.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/3 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm font-semibold ml-3">33%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm font-semibold">3.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/6 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm font-semibold ml-3">16%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm font-semibold">2.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/12 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm font-semibold ml-3">8%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm font-semibold">1.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-[6%] h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm font-semibold ml-3">6%</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start mt-8">
                  <img
                    src="https://readymadeui.com/team-2.webp"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />

                  <div className="ml-3">
                    <h4 className="text-sm font-semibold ">John Doe</h4>
                    <div className="flex space-x-1 mt-1">
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <p className="text-xs !ml-2 font-semibold">2 mins ago</p>
                    </div>
                    <p className="text-xs mt-4">
                      The service was amazing. I never had to wait that long for
                      my food. The staff was friendly and attentive, and the
                      delivery was impressively prompt.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full mt-8 px-4 py-2.5 bg-transparent border border-yellow-300 text-yellow-300 font-semibold rounded">
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
