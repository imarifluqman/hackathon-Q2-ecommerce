import React from "react";




const Checkbox = ({
    uncheckedBgColor = "#eae6fa", // Default light purple
    checkedBgColor = "#6c4aed",   // Default dark purple
    title = "",           // Default title
}) => {
    const uniqueId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={``}>
            <div className="checkbox-wrapper-46 ">
                <input type="checkbox" id={uniqueId} className="inp-cbx hidden invisible " />
                <label htmlFor={uniqueId} className="cbx cursor-pointer m-auto select-none ">
                    <span className={`inline-block align-middle bg-[#eae6fa] `} style={{ transform: "translate3d(0, 0, 0)", }}>
                        <svg viewBox="0 0 12 10" height="10px" width="12px" className="w-[18px] h-[18px] scale-100 ease-in-out duration-300 align-middle relative border-none">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                        </svg>
                    </span>
                    <span className="flex-wrap">{title}</span>
                </label>
            </div>
        </div>
    );
};



export default Checkbox;