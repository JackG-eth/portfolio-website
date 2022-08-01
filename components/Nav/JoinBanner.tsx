import React from "react";
import Container from "../General/Container/Container";
import ReadMore from "./ReadMore";

const JoinBanner = () => {
	return (
		<section className="relative z-10 transform-gpu bg-mycelium-black py-12 md:py-24 2xl:pt-24 2xl:pb-48">
			<Container className="flex flex-col items-start justify-between 2xl:flex-row 2xl:items-end">
				<div className="w-full xl:max-w-[1100px] 2xl:max-w-[1300px]">
					<h1 className="text-4xl leading-tight text-white transition-all duration-300 lg:text-6xl lg:leading-tight 2xl:text-7xl 2xl:leading-tight">
						Discover how you can make an impact by joining our team.
					</h1>
				</div>
				<div className="w-full pr-4 text-right">
					<ReadMore
						className="mt-7 2xl:mt-0"
						route="/careers"
						label="View Careers"
					/>
				</div>
			</Container>
		</section>
	);
};
export default JoinBanner;
