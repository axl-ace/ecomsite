"use client";
import { motion } from "framer-motion";
import { stats } from "@/types";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { accordionData } from "@/constants/constantData";
const Acordions = () => {
	return (
		<div className="flex lg:flex-wrap flex-col lg:flex-row gap-5">
			{accordionData.map((accordion, i) => (
				<Acordion
					heading={accordion.heading}
					description={accordion.description}
					key={i}
				/>
			))}
		</div>
	);
};

export default Acordions;

const Acordion = ({ heading, description }: stats) => {
	const [toggle, setToggle] = useState(false);
	const handleClick = () => {
		setToggle((prev) => !prev);
	};
	return (
		<motion.div
			onMouseLeave={() => setToggle(false)}
			onClick={handleClick}
			className="border-whites-95 border transition-all rounded-[16px] overflow-hidden w-full lg:w-[32%] hover:bg-whites-97 flex flex-col gap-[30px] p-[40px]"
		>
			<motion.div className="flex items-center justify-between transition-all  hover:cursor-pointer">
				<span className="font-medium text-lg text-gray-10">{heading}</span>
				<motion.div>
					<PlusIcon className="h-6 text-gray-10" />
				</motion.div>
			</motion.div>

			<motion.div>
				<p className="paragraph1">{description}</p>
			</motion.div>
		</motion.div>
	);
};
