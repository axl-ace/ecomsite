"use client";
import { useState } from "react";
import SectionDesc from "./sectionDesc";
import CustomerExp from "./customerExp";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

const Experience = () => {
	const [toggle, settoggleActive] = useState(false);

	function onclick() {
		settoggleActive((prev) => !prev);
		console.log(toggle);
	}
	return (
		<div className="py-16 flex flex-col gap-[80px]">
			<div>
				<SectionDesc
					title="The Klothink Experience."
					subtitle="About us"
					paragraph="At Klothink, we breathe life into fashion, blending creativity with commitment. Our journey is fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and embracing a community where every purchase tells a story."
				/>
			</div>
			<div
				// style={{ height: toggle ? "auto" : 460 }}
				className={`border relative border-whites-95 overflow-hidden  xl:w-auto rounded-[32px]  bg-whites-99 ${ toggle ? "h-auto": "h-[460px] xl:h-auto"}`}
			>
				<div 
					onClick={onclick}
					className="xl:hidden bg-whites-99 p-6 cursor-pointer absolute flex w-full gap-3 justify-center h-max items-center bottom-0"
				>
					<span className="">{toggle ? "View Less" : "View All"}</span>
					{toggle ? (
						<ArrowUpIcon className="h-5 text-gray-10" />
					) : (
						<ArrowDownIcon className="text-gray-10 h-5" />
					)}
				</div>
				<CustomerExp />
			</div>
		</div>
	);
};

export default Experience;
