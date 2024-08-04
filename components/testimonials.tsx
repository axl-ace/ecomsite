import React from "react";
import SectionDesc from "./sectionDesc";
import Button from "./button";
import Testimonial from "./Testimonial";
const Testimonials = () => {
	return (
		<div className="flex flex-col gap-[80px]">
			<div className="flex justify-between gap-5 flex-col xl:flex-row xl:items-center">
				<SectionDesc
					title="Customers Love."
					subtitle="Testimonials"
					paragraph="At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion."
				/>
				<div className="w-max">
					<Button fill={true}>View All Testimonials</Button>
				</div>
            </div>
            
            <Testimonial />
		</div>
	);
};

export default Testimonials;
