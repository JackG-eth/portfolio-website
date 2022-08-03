import React from "react";

const MySkills = () => {
	return (
		<div
			id="skills"
			className="relative flex h-screen w-screen min-w-[320px] pt-40"
			//className="fixed top-0 left-0 z-50 flex h-16 w-screen min-w-[320px] items-center  md:h-20"
		>
			<div className="relative h-screen w-screen">
				<h1 className="pb-20 text-center text-3xl text-portfolio-lightgreen">
					Languages & Frameworks
				</h1>
				<div className=" flex w-screen justify-center">
					<div className="grid h-3/4 w-2/4 grid-cols-5 items-center gap-y-14 gap-x-14 ">
						<div>
							<img src="/static/img/skills/icons8-solidity-500.png" />
							<p className="pt-4 text-center text-white">Solidity</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-java-500.png" />
							<p className="pt-4 text-center text-white">Java</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-python-500.png" />
							<p className="pt-4 text-center text-white">Python</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-typescript-500.png" />
							<p className="pt-4 text-center text-white">Typescript</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-javascript-logo-500.png" />
							<p className="pt-4 text-center text-white">Javascript</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-c-sharp-logo-500.png" />
							<p className="pt-4 text-center text-white">c#</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-html-5-500.png" />
							<p className="pt-4 text-center text-white">HTML-5</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-css3-500.png" />
							<p className="pt-4 text-center text-white">CSS3</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-sql-500.png" />
							<p className="pt-4 text-center text-white">SQL</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-react-500.png" />
							<p className="pt-4 text-center text-white">React</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-graphql-500.png" />
							<p className="pt-4 text-center text-white">Graphql</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-npm-500.png" />
							<p className="pt-4 text-center text-white">NPM</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-nodejs-500.png" />
							<p className="pt-4 text-center text-white">Nodejs</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-tailwindcss-500.png" />
							<p className="pt-4 text-center text-white">Tailwindcss</p>
						</div>
						<div>
							<img src="/static/img/skills/icons8-hardhat.png" />
							<p className="pt-4 text-center text-white">Hardhat</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySkills;
