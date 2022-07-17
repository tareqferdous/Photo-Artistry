import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editService, setEditService] = useState({});

  const SkeletonComponent = () => (
    <SkeletonTheme color="#FFEBEE" highlightColor="#FAFAFA">
      <section className="mt-2">
        <Skeleton height={450} width={950} />
      </section>
    </SkeletonTheme>
  );

  useEffect(() => {
    fetch("http://localhost:4000/serviceList")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
        setLoading(false);
      });
  }, []);

  const handleDeleteService = (id) => {
    const url = `http://localhost:4000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("service deleted");
        const remaining = services.filter((service) => service._id !== id);
        setServices(remaining);
      });
  };

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
              {loading ? (
                <SkeletonComponent />
              ) : (
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
                          className="px-5 pb-3 pt-4 bg-red-50 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    {/* get all service data */}
                    {services.map((service) => {
                      return (
                        <tbody key={service._id}>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white font-body font-medium text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <a href="/" className="block relative">
                                    <img
                                      alt="User Avatar"
                                      src={service.image}
                                      className="mx-auto object-cover rounded h-12 w-28 sm:w-32"
                                    />
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {service.name}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-72">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {service.desc.substr(0, 40)}
                                {"..."}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                              <p className="text-gray-900 whitespace-no-wrap">
                                ৳ {service.price}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                              <button
                                className="flex align-center ml-5 justify-center font-body font-semibold text-red-600 hover:text-red-900"
                                onClick={() => handleDeleteService(service._id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>{" "}
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>

                  {/* Pagination */}
                  <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                      >
                        <svg
                          width="9"
                          fill="currentColor"
                          height="8"
                          className=""
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border-t border-b text-base text-red-500 bg-white hover:bg-red-50 "
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-red-50"
                      >
                        2
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-red-50"
                      >
                        3
                      </button>
                      <button
                        type="button"
                        className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-red-50"
                      >
                        <svg
                          width="9"
                          fill="currentColor"
                          height="8"
                          className=""
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageServices;
