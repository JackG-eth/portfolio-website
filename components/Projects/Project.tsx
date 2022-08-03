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
			className="pointer-events-none top-0 left-0 z-0 flex w-screen items-center overflow-x-hidden xl:absolute xl:h-screen"
		>
			<Container className="mx-auto flex w-full justify-between px-5 pt-0 md:pl-5 md:pr-6 xl:max-h-[calc(100vh-280px)] xl:min-h-[400px] xl:pl-12 xl:pr-11 xl:pt-5 2xl:pt-0 ">
				<div className="mr-12 flex w-full max-w-[530px] flex-grow flex-col justify-between leading-7">
					<div className="mb-16 hidden text-white xl:mb-10 xl:block">
						<h1 className="mb-4 text-3xl text-portfolio-lightgreen 2xl:text-5xl ">
							Project Examples
						</h1>
						<p className=" text-[16px] leading-5">
							A collection of side projects i've completed over the years.
						</p>
					</div>
					{/* Mobile image */}
					<a href={link} rel="noreferrer" target="_blank">
						<picture className="mb-10 flex w-full justify-end xl:hidden">
							<img
								src={image}
								className="w-full flex-shrink justify-center rounded-xl"
							/>
						</picture>
					</a>
					<div className="my-16 xl:my-0">
						<h2 className="pb-5 text-base text-[36px] leading-7 text-portfolio-midgreen">
							{name}
						</h2>
						<p className="text-[16px] leading-7 text-white">{description}</p>
						<a
							href={link}
							target="_blank"
							rel="noopener"
							className="group mt-6 block text-[16px] text-white"
						>
							Visit Code
							<span className="inline-block translate-x-2 transform-gpu transition-all duration-300 group-hover:translate-x-3">
								&#8594;
							</span>
						</a>
					</div>
				</div>
				{/* Desktop image */}
				<a href={link} rel="noreferrer" target="_blank">
					<picture className="hidden h-auto max-h-[717px] justify-end opacity-0 xl:flex">
						<img src={image} className="h-full w-auto flex-shrink rounded-xl" />
					</picture>
				</a>
			</Container>
		</section>
	);
};

export default Project;
