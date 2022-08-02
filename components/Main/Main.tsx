import { useEffect, useState, useRef } from "react";
import Animation from "./BackgroundAnimation";
import Me from "./Me";

const Main = () => {
	const Main = useRef<HTMLElement>(null);

	return (
		<section ref={Main} className="relative h-screen w-screen ">
			<Animation />
			<Me />
		</section>
	);
};

export default Main;
