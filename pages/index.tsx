import React from "react";
import Main from "../components/Main/Main";
import SEO from "../components/General/SEO/SEO";
import Timeline from "../components/Main/Timeline/Timeline";
import Navbar from "../components/Nav/Nav";

const Home = () => {
	return (
		<>
			<SEO
				title="Home"
				description="Mycelium is an ever-growing collection of engineers, economists and creatives operating on the cutting edge of decentralised blockchain-based technology, whose ventures seek to solve the problems of today's restrictive and opaque financial infrastructure, systems and reality."
			/>
			<Navbar />
			<Main />
			<Timeline />
		</>
	);
};

export default Home;
