import React, { useState } from "react";

//create your first component
export function Home() { 
	const [ selectedColor, setSeletedColor ] = useState("red");
	return (

			<div className="container">
				<div className="stand"></div>
				<div className="TrafficLight">
					<div
						onClick={() => setSeletedColor("red")}
						className={
						"light red"+((selectedColor === "red") ? " glow" : "")}>
					</div>
					<div
						onClick={() => setSeletedColor("yellow")} 
						className={"light yellow"+((selectedColor === "yellow") ? " glow" : "")}>
					</div>
					<div 
						onClick={() => setSeletedColor("green")}
						className={"light green"+((selectedColor === "green") ? " glow" : "")}>
					</div>
				</div>
				
			</div>
	);
};

export default Home;
