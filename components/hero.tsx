import React from "react";
import Stats from "./stats";

const Hero = () => {
	return (
		<div className="flex justify-between items-center ">
			<div className="">
				<div className="flex flex-col lg:flex-row gap-[4px]">
					<h1 className="heading1 order-last sm:order-first">DISCOVER NOW</h1>
					<span className="font-semibold lg:text-lg text-sm text-gray-60">
						PRODUCTS
					</span>
				</div>

				<div className="flex justify-between flex-col sm:flex-row items-center gap-6">
					<p className="paragraph1 flex-1">
						Dive into the world of fashion excellence at Klothink. Our curated
						selection brings together the latest trends and timeless classics,
						offering you a diverse array of clothing items that resonate with
						your unique style.
					</p>
					<div className="flex-1">
						<Stats />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
