import React from "react";
import Image from "next/image";
import Button from "./button";

import {ShoppingBagIcon} from "@heroicons/react/24/solid";
import Brandstat from "./brandstat";

const HeroHome = () => {
    return (
        <div className="flex xl:flex-row flex-col justify-between gap-14">
            <div className="flex flex-col justify-between gap-20 w-full xl:w-[57%] h-full">
                <div className="flex flex-col gap-[60px]">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col w-full lg:flex-row gap-[4px]">
                            <h1 className="heading1 order-last sm:order-first uppercase">
                                Elevate Your Style with <br className="hidden xl:block"/>
                                Klothink
                            </h1>
                            <span className="font-semibold lg:text-lg text-sm text-nowrap uppercase text-gray-60">
								Style Redefined.
							</span>
                        </div>
                        <p className="paragraph1">
                            Explore a world of fashion at Klothink, where trends meet
                            affordability. Immerse yourself in the latest styles and seize
                            exclusive promotions.
                        </p>
                    </div>
                    <div className="flex items-center justify-between xl:justify-normal gap-6">
                        <Button fill={true}>
                            <ShoppingBagIcon className="h-5 text-gray-10"/>
                            Shop now
                        </Button>
                        <Button fill={false}>Contact Us</Button>
                    </div>
                </div>

                <div className="h-full">
                    <Brandstat/>
                </div>
            </div>

            <div className=" w-full xl:w-[45%]">
                <Image
                    src={"/Sub Container.svg"}
                    width={1000}
                    height={1000}
                    alt="Image"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default HeroHome;
