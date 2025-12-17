import React from "react";
import { toast } from "react-toastify";

const Home = () => {
  const notify = () => {
    toast("Here is your toast!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-5xl font-bold text-blue-400 underline">HOME</h1>

      <button
        onClick={notify}
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-lg"
      >
        Make me a toast
      </button>
    </div>
  );
};

export default Home;
