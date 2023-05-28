import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Item(props) {
  const [done, setDone] = useState(false);

  return (
    <div
      onClick={() => setDone(!done)}
      className={`items-center select-none cursor-pointer w-full border-b p-3 flex justify-between`}
    >
      <div>
        <span className="pr-2 text-[14px] text-slate-400">{props.time}</span>

        <span className={`${done === true ? "line-through" : ""} text-[18px]`}>
        {props.item}
        </span>
      </div>
      <div className="text-[#e74c3c]" onClick={ () => props.removeHandler (props.id)}>
        <FaTrashAlt/>
      </div>
    </div>
  );
}

export default Item;
