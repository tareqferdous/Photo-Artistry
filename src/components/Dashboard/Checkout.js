import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../contexts/ServiceProvider/ServiceProvider";
import Sidebar from "./Sidebar";

const Checkout = () => {
  const { selectedService } = useContext(ServiceContext);
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>

      <div className="p-10 bg-gray-100 pt-20">
        <section>
          <div className="container mx-auto px-4 sm:px-8 max-w-full sm:max-w-5xl">
            <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
              <h2 className="font-display text-red-accent-700 text-2xl leading-tight">
                Manage Services
              </h2>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-3xl rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal font-body">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 pb-3 pt-4 bg-red-50 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        Package Thumbnail
                      </th>
                      <th
                        scope="col"
                        className="px-5 pb-3 pt-4 bg-red-50 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        Package Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 pb-3 pt-4 bg-red-50 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        Package Description
                      </th>
                      <th
                        scope="col"
                        className="px-5 pb-3 pt-4 bg-red-50 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        Package price
                      </th>

                      <th
                        scope="col"
                        className="px-5 pb-3 pt-4 bg-red-50 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        Description
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white font-body font-medium text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="/" className="block relative">
                              <img
                                alt="User Avatar"
                                src={selectedService.image}
                                className="mx-auto object-cover rounded h-12 w-28 sm:w-32"
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {selectedService.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-72">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {selectedService.desc.substr(0, 40)}
                          {"..."}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                        <p className="text-gray-900 whitespace-no-wrap">
                          ৳ {selectedService.price}
                        </p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-72">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {selectedService.desc.substr(0, 40)}
                          {"..."}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <button className=" px-5 py-3 text-white rounded-sm bg-red-500 mt-5 flex align-center ml-5 justify-center font-body font-semibold">
                  <Link to="/shipment">Book Now</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
