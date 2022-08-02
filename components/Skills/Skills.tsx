import React from "react";

const MySkills = () => {
	return (
		<div id="skills" className="relative flex h-screen w-screen pt-40">
			<div className="grid h-2/4 w-2/4 grid-cols-3 items-center gap-y-4 gap-x-12 pl-10 pr-10">
				<div className="justify-center">
					<img src="/static/img/skills/icons8-solidity-500.png" />
					<p className="text-center text-white">Solidity</p>
				</div>
				<div className="justify-center">
					<img src="/static/img/skills/icons8-java-500.png" />
					<p className="text-center text-white">Java</p>
				</div>
				<div className="justify-center">
					<img src="/static/img/skills/icons8-python-500.png" />
					<p className="text-center text-white">Python</p>
				</div>
				<div className="justify-center">
					<img src="/static/img/skills/icons8-typescript-500.png" />
					<p className="text-center text-white">Typescript</p>
				</div>
				<div className="justify-center">
					<img src="/static/img/skills/icons8-javascript-logo-500.png" />
					<p className="text-center text-white">Javascript</p>
				</div>
				<div className="justify-center">
					<img src="/static/img/skills/icons8-c-sharp-logo-500.png" />
					<p className="text-center text-white">c#</p>
				</div>
				<div className="justify-center">
					<img src="/static/img/skills/icons8-html-5-500.png" />
					<p className="text-center text-white">HTML-5</p>
				</div>
				<div className="justify-center">
					<img src="/static/img/skills/icons8-css3-500.png" />
					<p className="text-center text-white">CSS3</p>
				</div>
				<div className="justify-center">
					<img src="/static/img/skills/icons8-sql-500.png" />
					<p className="text-center text-white">SQL</p>
				</div>
			</div>

			<div className=" grid h-2/4 w-2/4 grid-cols-3 items-center gap-x-12 gap-y-4 pr-10 pl-10">
				<div>
					<img src="/static/img/me.png" />
				</div>
				<div>
					<img src="/static/img/me.png" />
				</div>
				<div>
					<img src="/static/img/me.png" />
				</div>
				<div>
					<img src="/static/img/me.png" />
				</div>
				<div>
					<img src="/static/img/me.png" />
				</div>
				<div>
					<img src="/static/img/me.png" />
				</div>
				<div>
					<img src="/static/img/me.png" />
				</div>
				<div>
					<img src="/static/img/me.png" />
				</div>
				<div>
					<img src="/static/img/me.png" />
				</div>
			</div>
		</div>
	);
};

export default MySkills;
