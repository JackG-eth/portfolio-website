const LinkedInSVG: React.FC<{
	link: string;
}> = ({ link }) => {
	return (
		<a
			href={`https://www.linkedin.com/shareArticle?mini=true&url=${link}`}
			target="_blank"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40.003"
				height="40.003"
				viewBox="0 0 40.003 40.003"
				className="group mx-1.5 sm:ml-2.5 sm:mr-0"
			>
				<defs>
					<clipPath id="a">
						<rect width="40.003" height="40.003" fill="#fff" />
					</clipPath>
				</defs>
				<g clipPath="url(#a)">
					<path
						d="M20,0A20,20,0,1,0,40,20,20,20,0,0,0,20,0m11.14,29.717a1.629,1.629,0,0,1-1.65,1.61H10.473a1.629,1.629,0,0,1-1.651-1.61V10.476a1.631,1.631,0,0,1,1.651-1.611h19.02a1.631,1.631,0,0,1,1.65,1.611Z"
						className="fill-white transition-colors duration-300 group-hover:fill-portfolio-lightgreen"
					/>
					<path
						d="M27.9,21.285a3.348,3.348,0,0,0-3.039,1.674v.033h-.022c.007-.01.015-.023.022-.033V21.523H21.487c.044.95,0,10.14,0,10.14h3.371V26a2.3,2.3,0,0,1,.111-.822A1.849,1.849,0,0,1,26.7,23.943c1.221,0,1.708.932,1.708,2.295v5.425h3.371V25.849c0-3.116-1.664-4.564-3.881-4.564"
						transform="translate(-4.034 -3.996)"
						className="fill-white transition-colors duration-300 group-hover:fill-portfolio-lightgreen"
					/>
					<path
						d="M16.7,15.557a1.758,1.758,0,1,0-.045,3.506h.023a1.758,1.758,0,1,0,.022-3.506"
						transform="translate(-2.778 -2.921)"
						className="fill-white transition-colors duration-300 group-hover:fill-portfolio-lightgreen"
					/>
					<rect
						width="3.372"
						height="10.14"
						transform="translate(12.216 17.527)"
						className="fill-white transition-colors duration-300 group-hover:fill-portfolio-lightgreen"
					/>
				</g>
			</svg>
		</a>
	);
};
export default LinkedInSVG;
