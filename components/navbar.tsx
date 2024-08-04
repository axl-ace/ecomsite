"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { navLinks } from "@/constants/constantData";
import { usePathname } from "next/navigation";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
	const path = usePathname();
	const support = "/support";
	return (
		<nav className="py-[18px] border-b-[1px] bg-white border-b-whites-95 paddingX">
			<div className="flex items-center sm:hidden justify-between">
				<Image
					alt="Logo"
					src={"/Logo.svg"}
					width={40}
					height={40}
					className="w-[35px] h-[35px] object-contain"
				/>
				<div className="flex gap-[10px] items-center">
					<div className="bg-yellow-50 p-2 rounded-full w-max">
						<ShoppingCartIcon className="h-5 text-gray-15" />
					</div>
					<div className="  rounded-full w-max">
						<Bars3BottomLeftIcon className="h-[34px] text-gray-15" />
					</div>
				</div>
			</div>
			<div className="lg:flex items-center justify-between w-full hidden">
				<div className="flex gap-3">
					{navLinks.map((link, i) => (
						<div
							key={i}
							className={` ${
								path == link.path ? "Nofill" : "yesfill"
							} transition-all cursor-pointer`}
						>
							<Link href={link.path}>{link.link}</Link>
						</div>
					))}
				</div>
				<div>
					<Image
						alt="Logo"
						src={"/Logo.svg"}
						width={40}
						height={40}
						className="w-[40px] h-[40px] object-contain"
					/>
				</div>

				<div className="flex gap-3 items-center">
					<div className="bg-yellow-50 p-3 rounded-full w-max">
						<ShoppingCartIcon className="h-5 text-gray-15" />
					</div>
					<div
						className={` cursor-pointer Nofill transition-all ${
							path == support ? "bg-black text-white" : " bg-transparent"
						}`}
					>
						<Link href={"/support"}>Contact Support</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
