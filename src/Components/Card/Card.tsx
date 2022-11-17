import React from "react";
import Button from "../Button/Button";

type EditProps = {
	title: string;
	price: number;
};

type CardProps = {
	title: string;
	price: number;
	deleteHandler: () => void;
	editHandler: () => void;
};

const Card = ({ title, price, editHandler, deleteHandler }: CardProps) => {
	return (
		<div className="flex flex-col my-6 border-2 gap-8 pb-4 border-blue-300 rounded-xl overflow-hidden">
			<h2 className="text-center text-2xl font-bold text-white bg-blue-400 py-2 ">
				{title}
			</h2>
			<div>
				<p className="text-center py-2 bg-blue-400 text-white font-semibold">
					Rp.{price}
				</p>
			</div>
			<div className="flex justify-center items-center gap-4 px-4">
				<Button onClick={() => editHandler()} color="yellow">
					Edit
				</Button>
				<Button onClick={() => deleteHandler()} color="red">
					Delete
				</Button>
			</div>
		</div>
	);
};

export default Card;
