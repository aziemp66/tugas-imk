import { useState } from "react";

import Card from "./Components/Card/Card";
import Mock from "./Mock/MockData.json";

function App() {
	const [MockData, setMockData] = useState(Mock);
	return (
		<div className="my-10 mx-10">
			<h1 className="text-blue-400 text-center text-4xl font-bold">
				My Kelontong
			</h1>
			<div className="grid grid-cols-3 gap-6">
				{MockData.map((value, index) => {
					return (
						<Card
							key={index}
							id={index}
							title={value.title}
							price={value.price}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
