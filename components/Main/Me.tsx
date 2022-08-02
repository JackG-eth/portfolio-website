import React from "react";
import ReactTypingEffect from "react-typing-effect";
const Me = () => {
	return (
		<div
			id="home"
			className="relative flex h-screen w-screen flex-col items-center justify-center"
		>
			<img
				className="flex h-[300px] w-[300x] rounded-full border-8 shadow-xl "
				src="/static/img/me.png"
				alt="portfolio logo"
			/>
			<ReactTypingEffect
				speed={200}
				eraseDelay={2500}
				className="pt-4 text-[32px]  leading-tight text-white"
				text={[
					"Web3 Full-Stack Developer",
					"Smart Contract Engineer",
					"Decentralised Finance Excites Me",
					"SpaceX Enthusiast",
				]}
			/>
		</div>
	);
};

export default Me;
