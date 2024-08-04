import React from "react";
import { headerDescription } from "@/types";

const SectionDesc = ({ title, subtitle, paragraph }: headerDescription) => {
	return (
		<div className="flex flex-col gap-4 w-full lg:w-max">
			<div className="flex flex-col w-full lg:flex-row gap-[4px]">
				<h1 className="heading1 order-last sm:order-first uppercase">
					{title}
				</h1>
				<span className="font-semibold lg:text-lg text-sm text-nowrap uppercase text-gray-60">
					{subtitle}
				</span>
			</div>
			<p className="paragraph1 xl:max-w-[59.35rem]">{paragraph}</p>
		</div>
	);
};

export default SectionDesc;