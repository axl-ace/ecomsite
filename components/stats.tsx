import React from "react";
import { stats } from "@/types";
import { statis } from "@/constants/constantData";

export const Stats = () => {
	return (
		<div className="border border-whites-95 p-[20px] sm:p-[30px] flex-wrap gap-3 rounded-xl flex justify-between">
			{statis.map((stats, index) => (
				<div
					key={index}
					className={` ${
						index != statis.length - 1
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

export default Stats;

export const Stat = ({ heading, description }: stats) => {
	return (
		<div className="flex flex-col gap-2">
			<h3 className="heading4">{heading}</h3>
			<p className="paragraph2">{description}</p>
		</div>
	);
};
