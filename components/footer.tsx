import React from "react";
import Image from "next/image";
import Button from "./button";
import { footerlinks } from "@/constants/constantData";

const Footer = () => {
	return (
		<section className="paddingX flex border-t border-t-whites-95 flex-col  mt-[80px] xl:gap-[100px] pt-[80px]">
			<div className="flex justify-start w-full gap-[80px]">
				<div className="lg:pl-[80px]">
					<Image
						src="/Logo.svg"
						alt="Logo"
						width={40}
						height={40}
						className="h-[80px] w-[80px]"
					/>

					<div className="flex items-center lg:gap-6 w-full gap-4 justify-between mt-[40px]">
						<div className="px-5 py-[0.63rem] rounded-full border  bg-whites-97 border-whites-95">
							<input
								type="email"
								placeholder="Enter your email"
								className="bg-transparent border placeholder:text-gray-60 border-none font-medium text-sm lg:text-lg"
							/>
						</div>
						<Button fill={true}>Subscribe</Button>
					</div>
				</div>

				<div className="hidden lg:flex justify-between ml-[80px] w-full">
					{footerlinks.map((link, index) => (
						<div key={index} className="flex flex-col gap-6">
							<span className="font-medium text-[20px]">{link.link}</span>
							<div className={``}>
								{link.links.map((link, index) => (
									<div key={index} className="flex flex-col gap-4">
										<span className="text-lg text-gray-40">{link.link1}</span>
										<span className="text-lg text-gray-40">{link.link2}</span>
										<span className="text-lg text-gray-40">{link.link3}</span>
										<span className="text-lg text-gray-40">{link.link4}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="flex items-center lg:flex-row flex-col justify-between py-[40px] mt-6 border-t border-whites-95">
				<div className="flex lg:flex-row flex-col items-center gap-3 text-gray-60 text-lg">
					<span>Terms & Conditions</span>
					<span>Privacy Policy</span>
				</div>
				<div className="lg:flex hidden items-center gap-3">
					<Image
						src={"/Button.svg"}
						alt="social"
						width={20}
						height={20}
						className="h-8 w-8"
					/>
					<Image
						src={"/Button.svg"}
						alt="social"
						width={20}
						height={20}
						className="h-8 w-8"
					/>
					<Image
						src={"/Button.svg"}
						alt="social"
						width={20}
						height={20}
						className="h-8 w-8"
					/>
				</div>
				<span className="text-lg text-gray-60">
					© 2024 Klothink. All rights reserved.
				</span>
			</div>
		</section>
	);
};

export default Footer;
