import React from "react";
import {stats} from "@/types";
import { supstats } from "@/constants/constantData";

const Supstats = () => {
    return (
        <div className="border flex-1 border-whites-95 p-[20px] sm:p-[30px] flex-wrap lg:flex-nowrap gap-3 rounded-xl flex justify-between">
            {supstats.map((stats, index) => (
                <div
                    key={index}
                    className={` ${
                        index != supstats.length - 1
                            ? "sm:border-r border-r-white-95 sm:pr-4"
                            : "border-none"
                    }`}
                >
                    <Stat heading={stats.heading} description={stats.description} />
                </div>
            ))}
        </div>
    );
};

export default Supstats;

export const Stat = ({ heading, description }: stats) => {
    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="supstatis">{heading}</h3>
            <p className="text-base font-semibold">{description}</p>
        </div>
    );
};


