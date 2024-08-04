import React from "react";
import { experiences } from "@/constants/constantData";
import { stats } from "@/types";
import {
	StarIcon,
	SparklesIcon,
	SunIcon,
	LightBulbIcon,
	SpeakerWaveIcon,
	CameraIcon,


} from "@heroicons/react/24/solid";

const icons = [
	StarIcon,
	SparklesIcon,
	SunIcon,
	LightBulbIcon,
	SpeakerWaveIcon,
	CameraIcon,
];

interface myStats extends stats {
	children: React.ReactNode;
}

const CustomerExp = () => {
	return (
		<div className="p-6 z-0 border flex flex-wrap gap-6 rounded-[32px]">
			{experiences.map((experience, idx) => {
				const Icon = icons[idx];
				return (
					<Indiv
						key={idx}
						heading={experience.heading}
						description={experience.description}
					>
						<Icon className="text-gray-10 h-6 " />
					</Indiv>
				);
			})}
		</div>
	);
};

export default CustomerExp;

const Indiv = ({ heading, description, children }: myStats) => {
	return (
		<div className="flex flex-col gap-4 rounded-xl p-6 bg-white w-full xl:w-[49%] border border-whites-95">
			<div className="flex gap-3 items-center">
				<div className="p-3 bg-yellow-50 rounded-full w-max">{children}</div>
				<span className="heading4">{heading}</span>
			</div>
			<p className="paragraph1">{description}</p>
		</div>
	);
};
