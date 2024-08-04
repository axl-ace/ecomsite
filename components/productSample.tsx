import React from "react";
import SectionDesc from "@/components/sectionDesc";
import Button from "@/components/button";

const ProductSample = () => {
    return (
        <div className=" flex justify-between lg:items-center items-start flex-col lg:flex-row gap-5">
            <SectionDesc title={`Discover Fashion.`} subtitle={`Products`}
                         paragraph={`Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion.`}/>
            <div>
                <Button fill={true}>
                    View All Products.
                </Button>
            </div>
        </div>

    );
};

export default ProductSample;
