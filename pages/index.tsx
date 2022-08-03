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
				title="My Journey"
				description="This website contains my the main aspects of my journey through tech so far."
			/>
			<Navbar />
			<Main />
			<Timeline />
			<div className="overflow: hidden">
				<MySkills />
			</div>
			<div>
				<Projects />
			</div>
			<ContactForm />
		</>
	);
};

export default Home;
