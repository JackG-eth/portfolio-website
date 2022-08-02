// import the Skill component as Skill for use in this component
import Skill from "./Skill";

function Skills() {
	return (
		<div className="grid grid-cols-4 gap-4">
			<h2>I have experience with these technologies</h2>
			<div className="grid grid-cols-4 gap-4">

				<div>
					<Skill
						source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
						alt="The logo icon for react"
						title="React"
					/>
				</div>
				<div>
					<Skill
						source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
						alt="The logo icon for HTML 5"
						title="HTML 5"
					/>
				</div>
				<Skill
					source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
					alt="The logo icon for CSS3"
					title="CSS 3"
				/>
				<Skill
					source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
					alt="The logo icon for TailwindCSS"
					title="Twilwind CSS"
				/>
				<Skill
					source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
					alt="The logo icon for GitHub"
					title="GitHub"
				/>
				<Skill
					source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
					alt="The logo icon for NPM"
					title="NPM"
				/>
				<Skill
					source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
					alt="The logo icon for NodeJS"
					title="Node JS"
				/>
			</div>
		</div>
	);
}
export default Skills;
