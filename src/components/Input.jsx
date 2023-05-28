import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useRef } from "react";

function Input(props) {
  const inputBox = useRef();
  return (
    <div className="p-3 flex justify-around">
      <input
        type="text"
        placeholder="Enter data here!!"
        className="p-3 focus:outline-none border w-[90%] border-slate-400"
        ref={inputBox}
      />
      <div
        className="cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] rounded-full text-white text-3xl flex justify-center items-center"
        onClick={() =>{
          props.handler(inputBox.current.value)
          inputBox.current.value = " ";
        } }
      >
        <AiOutlinePlus />
      </div>
    </div>
  );
}

export default Input;
