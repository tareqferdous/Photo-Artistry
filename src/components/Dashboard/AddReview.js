import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "./Sidebar";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [serviceList, SetServiceList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/serviceList")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetServiceList(data);
      });
  }, []);

  console.log(serviceList);
  return (
    <div>
      <div className="flex min-h-screen">
        <div>
          <Sidebar />
        </div>

        <div className="p-10 pt-20 w-full">
          <h2 className="text-2xl font-bold text-dark-purple">Add Review</h2>
          <form class="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-2/5">
              <label class="leading-7 text-sm text-gray-600">Name</label>
              <input
                {...register("serviceName", { required: true })}
                type="text"
                class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
              />
              {errors.serviceName && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <div className="w-2/5">
              <label class="leading-7 text-sm text-gray-600">Price</label>
              <input
                {...register("price", { required: true })}
                type="text"
                class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
              />
              {errors.price && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <div className="w-2/5">
              <label class="leading-7 text-sm text-gray-600">Image</label>
              <input
                {...register("image", { required: true })}
                type="file"
                class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
              />
              {errors.image && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <div className="w-2/5">
              <label class="leading-7 text-sm text-gray-600">Description</label>
              <textarea
                {...register("desc", { required: true })}
                type="text"
                class="h-24 w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
              ></textarea>
              {errors.desc && (
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

export default AddReview;
