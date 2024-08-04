import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { testimony } from "@/types";
import { testimonies } from "@/constants/constantData";

const Testimonial = () => {
	return (
		<div className="bg-whites-99 border rounded-3xl border-whites-95 p-[30px] flex justify-between xl:flex-row flex-col gap-[30px]">
			{testimonies.map((testimonial, i) => (
				<CustomerSaid
					key={i}
					description={testimonial.description}
					heading={testimonial.heading}
					image={testimonial.image}
				/>
			))}
		</div>
	);
};

export default Testimonial;

const CustomerSaid = ({ description, heading, image }: testimony) => {
	const anyT = [1, 2, 3, 4, 5];
	return (
		<div className="flex flex-1 flex-col gap-[40px] p-[30px] xl:p-[50px] rounded-2xl bg-white border border-whites-95">
			<div className=" flex justify-between items-center w-full">
				<div className="flex gap-4 items-center">
					<div className="h-[70px] w-[70px] overflow-hidden rounded-full">
						<Image
							src={`/${image}`}
							alt="profile Image"
							width={500}
							height={500}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<span className="font-medium xl:text-[20px] text-base">
							{heading}
						</span>
						<div className="flex items-center gap-1">
							{anyT.map((t, k) => (
								<StarIcon key={k} className="h-5 text-yellow-50" />
							))}
						</div>
					</div>
				</div>
				<div className=" ">
					<Image
						src={"/Text.svg"}
						alt="Icon"
						width={40}
						height={40}
						className="h-[50px] w-[50px]"
					/>
				</div>
			</div>
			<p className="paragraph1">{description}</p>
		</div>
	);
};
