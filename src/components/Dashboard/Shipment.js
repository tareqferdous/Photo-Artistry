import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ServiceContext } from "../../contexts/ServiceProvider/ServiceProvider";
import { ShipmentContext } from "../../contexts/ShipmentProvider/ShipmentProvider";
import Sidebar from "./Sidebar";

const Shipment = () => {
  const { selectedService } = useContext(ServiceContext);
  const { setUserInfo, userInfo } = useContext(ShipmentContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newData = { ...selectedService };
    newData.shipmentInfo = data;
    setUserInfo(newData);

    if (userInfo.shipmentInfo) {
      fetch("https://secure-crag-36110.herokuapp.com/placeOrder", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Order Placed Successfully");
          console.log(data);
        });
    }
  };

  console.log(userInfo);
  return (
    <div>
      <div className="flex min-h-screen">
        <div>
          <Sidebar />
        </div>

        <div className="p-10 pt-20 w-full">
          <h2 className="text-2xl font-bold text-dark-purple">Shipment</h2>
          <form class="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-2/5">
              <label class="leading-7 text-sm text-gray-600">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
              />
              {errors.name && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <div className="w-2/5">
              <label class="leading-7 text-sm text-gray-600">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
              />
              {errors.email && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <div className="w-2/5">
              <label class="leading-7 text-sm text-gray-600">Price</label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
              />
              {errors.price && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <input
              className="bg-indigo-500 px-4 py-2 text-white rounded"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
