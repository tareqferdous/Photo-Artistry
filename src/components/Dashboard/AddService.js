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
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Service Name"
              class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900  px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="w-2/5">
            <input
              onChange={handleChange}
              type="text"
              name="price"
              placeholder="Price"
              class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900  px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="w-2/5">
            <input
              onChange={handleImageUpload}
              type="file"
              name="image"
              placeholder="Image"
              class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="w-2/5">
            <input
              onChange={handleChange}
              type="number"
              name="seniorPhotographer"
              placeholder="Senior Photographer"
              class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900  px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="w-2/5">
            <input
              onChange={handleChange}
              type="number"
              name="seniorCinematographers"
              placeholder="Senior Cinematographers"
              class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900  px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="w-2/5">
            <input
              onChange={handleChange}
              type="text"
              name="assistantPhotographer"
              placeholder="Assistant Photographer"
              class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900  px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="w-2/5">
            <input
              onChange={handleChange}
              type="text"
              name="outdoorPhotoshoot"
              placeholder="Outdoor Photo shoot"
              class="w-full bg-blue-50 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900  px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <div className="w-2/5">
            <textarea
              onChange={handleChange}
              type="text"
              name="desc"
              placeholder="Description"
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
