import React from "react";
import {brandProps} from "@/types";
import {brandStats} from "@/constants/constantData";

const Brandstat = () => {
    return (
        <div className="bg-whites-97 p-3 flex flex-wrap  rounded-[20px] gap-3">
            {brandStats.map((stats, id) => (
                <Stat key={id} number={stats.number} desc={stats.desc}/>
            ))}
        </div>
    );
};

export default Brandstat;

const Stat = ({number, desc}: brandProps) => {
    return (
        <div className="flex p-4 border border-whites-95 flex-col rounded-lg w-[48%] sm:w-[49%] bg-white">
			<span className="font-semibold text-[20px] text-wrap sm:text-[26px] 2xl:text-[34px] uppercase">
				{number}
			</span>
            <span className=" font-normal text-sm sm:text-base 2xl:text-lg text-gray-40">
				{desc}
			</span>
        </div>
    );
};
