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
					<section className="bg-mycelium-darkgreen pointer-events-none top-0 left-0 z-0 flex w-screen items-center overflow-x-hidden xl:absolute xl:h-screen">
						<Container className="flex justify-between pt-0 xl:max-h-[calc(100vh-280px)] xl:min-h-[400px] xl:pt-5 2xl:pt-0 ">
							<div className="mr-12 flex w-full max-w-[530px] flex-grow flex-col justify-between leading-7">
								<div className="mb-16 text-white xl:mb-10">
									<h1 className="mb-4 text-3xl lg:invisible 2xl:text-5xl">
										Project Examples
									</h1>
									<p className="text-[16px] leading-5 text-portfolio-lightgreen lg:invisible">
										A collection of side projects I've completed over the years.
									</p>
								</div>
							</div>
							<picture className="hidden h-auto max-h-[717px] justify-end opacity-0 xl:flex">
								<img
									src="/static/img/projects/epic.jpg"
									className="h-full w-auto flex-shrink rounded-xl"
								/>
							</picture>
						</Container>
					</section>
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
