import React from "react";
import SectionDesc from "./sectionDesc";
import {headerDescription} from "@/types";
import {processData} from "@/constants/constantData";

const Process = () => {
    return (
        <div className="flex flex-col gap-[60px]">
            <div>
                <SectionDesc
                    title="Seamless Experience."
                    subtitle="How it Works ?"
                    paragraph="At Klothink, we've designed a straightforward shopping experience to make fashion accessible. Explore the journey from discovering the latest trends to receiving your handpicked styles with ease."
                />
            </div>
            <div className="flex lg:flex-row flex-col justify-between p-[20px] gap-[20px] rounded-[20px] bg-whites-97">
                {processData.map((process, idx) => (
                    <Proces
                        key={idx}
                        title={process.title}
                        subtitle={process.subtitle}
                        paragraph={process.paragraph}
                    />
                ))}
            </div>
        </div>
    );
};

export default Process;

const Proces = ({title, subtitle, paragraph}: headerDescription) => {
    return (
        <div
            className="flex flex-1 lg:flex-col items-center lg:items-start flex-row bg-white gap-[30px] rounded-[8px] p-[30px] border border-whites-95">
            <div>
				<span className="font-semibold text-whites-90 text-[3.125rem] lg:text-[80px]">
					{title}
				</span>
            </div>
            <div>
                <span className="font-semibold mt-3 text-base lg:text-[20px]">{subtitle}</span>
                <p className="lg:text-lg text-sm text-gray-40">{paragraph}</p>
            </div>
        </div>
    );
};
