import React from "react";

export default function Jumbotron({children}) {
  return (
    <div className="bg-gray-900 flex items-center py-10">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-2xl font-bold mb-5">
          Find Images
        </h1>
        {children}
      </div>
    </div>
  );
}
