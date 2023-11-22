"use client";
import SubmitButton from "./submit_button";
import { useState } from "react";
const InputForm = () => {
  const [id, setId] = useState<number>(0);
  return (
    <div className="flex flex-col items-center justify-center h-96 mt-32">
      <form className="my-12 ">
        <label className="required text-2xl md:text-4xl text-slate-200 mx-4 ">
          Enter your Id :
        </label>
        <input
          type="number"
          onChange={(e) => setId(Number(e.target.value))}
          placeholder="Enter your user Id..."
          className=" required text-white text-2xl md:text-4xl focus:outline-none w-64 md:w-96 py-3 border border-purple-600 rounded-xl text-center mx-4 mt-4 bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          required
          min="1"
          max="10"
        ></input>
        <br></br>
        <SubmitButton idProps={id} />
      </form>
    </div>
  );
};

export default InputForm;
