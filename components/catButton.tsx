import React from "react";

interface Props {
	children: React.ReactNode;
	isActive: boolean;
}
const CatButton = ({ children, isActive }: Props) => {
	// const [isActive, setIsActive] = useState(Active);
	return (
		<div
			className={`flex items-center gap-3 py-3 px-5 rounded-full ${
				isActive
					? "bg-yellow-50 border-none"
					: "border bg-whites-97 border-whites-95"
			} `}
		>
			{children}
		</div>
	);
};

export default CatButton;
