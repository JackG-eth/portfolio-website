import { projects } from "./presets";
import Container from "../General/Container/Container";
import Project from "./Project";
import ProjectScripts from "./ProjectScripts";

const Projects = () => {
	return (
		<div id="projects">
			<section id="pinMaster" className="z-10">
				<div
					id="pinContainer"
					className="relative z-10 transform-gpu xl:h-screen xl:w-screen"
				>
					{/* Keep "Our projects" text visible at all times on desktop */}
					{Object.keys(projects).map((project, i) => {
						const currentProject = projects[project][0];
						return (
							<Project
								key={i}
								id={`panel-${i}`}
								name={currentProject.name}
								description={currentProject.description}
								image={currentProject.image}
								link={currentProject.link}
							/>
						);
					})}
				</div>
			</section>
			<ProjectScripts />
		</div>
	);
};

export default Projects;
