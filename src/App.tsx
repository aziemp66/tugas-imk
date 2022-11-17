import { useState, useRef } from "react";

import Card from "./Components/Card/Card";
import Mock from "./Mock/MockData.json";

type EditProps = {
	id: number;
	title: string;
	price: number;
};

function App() {
	const titleRef = useRef<HTMLInputElement>(null);
	const priceRef = useRef<HTMLInputElement>(null);
	const [MockData, setMockData] = useState(Mock);
	const [DisplayEdit, setDisplayEdit] = useState<EditProps | null>(null);
	return (
		<>
			{DisplayEdit && (
				<div className="w-screen h-screen bg-slate-800 fixed bg-opacity-80 flex justify-center items-center">
					<form
						onSubmit={(e) => {
							e.preventDefault();

							const newMockData = MockData.map((item) => {
								if (item.id === DisplayEdit?.id) {
									return {
										...item,
										title: titleRef.current ? titleRef.current.value : "",
										price: priceRef.current
											? parseInt(priceRef.current.value)
											: 0,
									};
								}
								return item;
							});

							setMockData(newMockData);

							setDisplayEdit(null);
						}}
						className="flex flex-col justify-center items-center gap-8 bg-white opacity-100 py-12 px-20 "
					>
						<h2 className="text-2xl font-bold text-blue-400">Edit Products</h2>
						<div className="flex flex-col gap-4">
							<div className="flex flex-col gap-2">
								<label className="font-bold text-center" htmlFor="title">
									Title
								</label>
								<input
									className="border-2 rounded text-lg"
									type="text"
									id="title"
									ref={titleRef}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="font-bold text-center" htmlFor="price">
									Price
								</label>
								<input
									className="border-2 rounded text-lg"
									type="text"
									id="price"
									ref={priceRef}
								/>
							</div>
						</div>
						<div className="w-2/5">
							<button
								className="bg-blue-400 hover:bg-blue-500 py-2 rounded-lg w-full h-full font-semibold text-white transition duration-300"
								type="submit"
							>
								Save
							</button>
						</div>
					</form>
				</div>
			)}
			<div className="p-10">
				<h1 className="text-blue-400 text-center text-4xl font-bold">
					My Kelontong
				</h1>
				<div className="grid grid-cols-3 gap-6">
					{MockData.map((value) => {
						return (
							<Card
								key={value.id}
								title={value.title}
								price={value.price}
								deleteHandler={() => {
									const newMockData = MockData.filter(
										(item) => item.id !== value.id
									);
									setMockData(newMockData);
								}}
								editHandler={() => {
									setDisplayEdit({
										id: value.id,
										title: value.title,
										price: value.price,
									});
								}}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
