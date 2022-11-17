import React from "react";

type ButtonProps = {
	children: string;
	color: "yellow" | "red";
};

const Button = ({ children, color }: ButtonProps) => {
	const buttonColor =
		color === "red"
			? "bg-red-400 hover:bg-red-500"
			: "bg-blue-400 hover:bg-blue-500";
	return (
		<button
			className={`${buttonColor} py-2 rounded-lg w-full h-full font-semibold text-white transition duration-300`}
		>
			{children}
		</button>
	);
};

export default Button;
