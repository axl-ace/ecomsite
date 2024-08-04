import React from "react";
import CatButton from "./catButton";
import Image from "next/image";
const Store = () => {
	return (
		<div className="mt-[80px]">
			<div className="flex items-center justify-center w-full">
				<div className="flex items-center gap-4 border border-whites-95 rounded-full p-2 w-max ">
					<CatButton isActive={false}>
						<span className="font-medium text-lg uppercase">All</span>
					</CatButton>
					<CatButton isActive={true}>
						<Image
							src={"/icon.svg"}
							alt="me"
							width={40}
							height={40}
							className="h-max w-max"
						/>

						<span className="font-medium text-lg uppercase">Menswear</span>
					</CatButton>
					<CatButton isActive={false}>
						<Image
							src={"/io.svg"}
							alt="me"
							width={40}
							height={40}
							className="h-max w-max"
						/>
						<span className="font-medium text-lg uppercase">Womenswear</span>
					</CatButton>
					<CatButton isActive={false}>
						<Image
							src={"/child.svg"}
							alt="me"
							width={40}
							height={40}
							className="h-max w-max"
						/>
						<span className="font-medium text-lg uppercase">Kidswear</span>
					</CatButton>
				</div>
			</div>
		</div>
	);
};

export default Store;
