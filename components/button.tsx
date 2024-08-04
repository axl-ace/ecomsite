"use client";

import React from "react";

interface Props {
	children: React.ReactNode;
	fill: boolean;
}
const Button = ({ fill, children }: Props) => {
	// const [isYellow, setIsYellow] = useState(fill);
	return (
		<button className={`${fill ? "yellowButton" : "nofillButton"}`}>
			{children}
		</button>
	);
};

export default Button;
