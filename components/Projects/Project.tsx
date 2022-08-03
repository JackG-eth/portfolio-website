import Container from "../General/Container/Container";

const Project: React.FC<{
	id: string;
	name: string;
	description: string;
	image: string;
	link: string;
}> = ({ id, name, description, image, link }) => {
	return (
		<section
			id={id}
			className="panel top-0 left-0 z-0 flex h-full items-center opacity-0 transition-opacity duration-500 xl:absolute xl:h-screen xl:w-screen"
		>
			<Container className="flex min-h-[400px] flex-col-reverse justify-between xl:max-h-[calc(100vh-280px)] xl:flex-row xl:pt-5 2xl:pt-0">
				<div className="mr-12 flex w-full flex-grow flex-col justify-between leading-7 xl:max-w-[530px]">
					<div className="mb-16 hidden text-white xl:mb-10 xl:block">
						<h1 className="mb-4 text-3xl 2xl:text-5xl"> Project Examples</h1>
						<p className="text-[16px] leading-5 text-portfolio-lightgreen">
							A collection of side projects i've completed over the years.
						</p>
					</div>
					{/* Mobile image */}
					<a href={link} rel="noreferrer" target="_blank">
						<picture className="mb-10 flex w-full justify-end xl:hidden">
							<img src={image} className="w-full flex-shrink rounded-xl" />
						</picture>
					</a>
					<div className="my-16 xl:my-0">
						<h2 className="text-base text-[16px] leading-7 text-white">
							{name}
						</h2>
						<p className="text-[16px] leading-7 text-portfolio-lightgreen">
							{description}
						</p>
						<a
							href={link}
							target="_blank"
							rel="noopener"
							className="group mt-6 block text-[16px] text-white"
						>
							Visit website
							<span className="inline-block translate-x-2 transform-gpu transition-all duration-300 group-hover:translate-x-3">
								&#8594;
							</span>
						</a>
					</div>
				</div>
				{/* Desktop image */}
				<a href={link} rel="noreferrer" target="_blank">
					<picture className="hidden h-auto max-h-[717px] justify-end xl:flex">
						<img src={image} className="h-full w-auto flex-shrink rounded-xl" />
					</picture>
				</a>
			</Container>
		</section>
	);
};

export default Project;
