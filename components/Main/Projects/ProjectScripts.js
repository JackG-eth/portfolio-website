import { useEffect, useRef } from "react";

const ProjectScripts = () => {
	const scriptDiv = useRef(null);
	useEffect(() => {
		const scripts = [
			"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js",
			"https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js",
			"https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js",
			"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/gsap.min.js",
			"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/ScrollTrigger.min.js",
			"static/js/script.js",
		];

		scripts.forEach(function (value) {
			const script = document.createElement("script");
			script.async = false;
			script.referrerPolicy = "no-referrer";
			script.crossOrigin = "anonymous";
			script.src = value;
			scriptDiv.current.appendChild(script);
		});
	}, []);
	return <div ref={scriptDiv}>{/* Scripts are added here */}</div>;
};

export default ProjectScripts;
