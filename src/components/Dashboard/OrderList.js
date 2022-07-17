import React from "react";
import Sidebar from "./Sidebar";

const OrderList = () => {
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>

      <div className="p-10 bg-gray-100 pt-20">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad
          perspiciatis rem omnis provident, atque maxime ullam possimus dolor
          inventore in unde beatae quod magnam cum, iure aliquid ducimus
          maiores!
        </div>
      </div>
    </div>
  );
};

export default OrderList;
