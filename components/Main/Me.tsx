import React from "react";
import ReactTypingEffect from "react-typing-effect";
const Me = () => {
	return (
		<div className="relative flex h-screen w-screen flex-col items-center justify-center">
			<img
				className="flex h-[300px] w-[300x] rounded-full border-8 shadow-xl"
				src="/static/img/meBW.jpg"
				alt="Mycelium logo"
			/>
			<ReactTypingEffect
				className="pt-4 text-[32px]  leading-tight text-white"
				text={[
					"Web3 Full-Stack Developer",
					"Smart Contract Engineer",
					"Decentralised Finance Excites Me",
					"SpaceX Enthusiast",
				]}
			/>
			<div></div>
		</div>
	);
};

export default Me;
