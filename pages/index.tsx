import React from "react";
import Main from "../components/Main/Main";
import SEO from "../components/General/SEO/SEO";
import Timeline from "../components/Main/Timeline/Timeline";
import Navbar from "../components/Nav/Nav";
import MySkills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import ContactForm from "../components/Contact/ContactForm";

const Home = () => {
	return (
		<>
			<SEO
				title="Home"
				description="portfolio is an ever-growing collection of engineers, economists and creatives operating on the cutting edge of decentralised blockchain-based technology, whose ventures seek to solve the problems of today's restrictive and opaque financial infrastructure, systems and reality."
			/>
			<Navbar />
			<Main />
			<Timeline />
			<MySkills />
			<Projects />
			<ContactForm />
		</>
	);
};

export default Home;
