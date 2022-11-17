import React from "react";

type ButtonProps = {
	children: string;
	color: "yellow" | "red";
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ children, color, ...rest }: ButtonProps) => {
	const buttonColor =
		color === "red"
			? "bg-red-400 hover:bg-red-500"
			: "bg-blue-400 hover:bg-blue-500";
	return (
		<button
			className={`${buttonColor} py-2 rounded-lg w-full h-full font-semibold text-white transition duration-300`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
