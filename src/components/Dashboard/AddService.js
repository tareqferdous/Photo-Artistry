import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "./Sidebar";

const AddService = () => {
  const [details, setDetails] = useState({});

  const handleChange = (e) => {
    const newData = { ...details };
    newData[e.target.name] = e.target.value;
    setDetails(newData);
  };

  console.log(details);

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "2fcb3e4a487e3faff20e9074db8dbc9e");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const imageData = { ...details };
        imageData.image = response.data.data.display_url;
        setDetails(imageData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("New Service Created");
        console.log(data);
      });
  };

  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>

      <div className="p-10 pt-20 w-full">
        <h2 className="text-2xl font-bold text-dark-purple">Add Service</h2>
        <form class="mt-8 space-y-4">
          <div className="w-2/5">
            <label class="leading-7 text-sm text-gray-600">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="w-2/5">
            <label class="leading-7 text-sm text-gray-600">Price</label>
            <input
              onChange={handleChange}
              type="text"
              name="price"
              class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="w-2/5">
            <label class="leading-7 text-sm text-gray-600">Image</label>
            <input
              onChange={handleImageUpload}
              type="file"
              name="image"
              class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="w-2/5">
            <label class="leading-7 text-sm text-gray-600">Description</label>
            <textarea
              onChange={handleChange}
              type="text"
              name="desc"
              class="h-24 w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
            ></textarea>
          </div>

          <input
            onClick={handleSubmitData}
            className="bg-indigo-500 px-4 py-2 text-white rounded cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
