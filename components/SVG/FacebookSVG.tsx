const FacebookSVG: React.FC<{
	link: string;
}> = ({ link }) => {
	return (
		<a
			href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
			target="_blank"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40.004"
				height="40.001"
				viewBox="0 0 40.004 40.001"
				className="group mx-1.5 sm:ml-2.5 sm:mr-0"
			>
				<defs>
					<clipPath id="a">
						<rect width="40.004" height="40.001" fill="#fff" />
					</clipPath>
				</defs>
				<g clipPath="url(#a)">
					<path
						d="M20,0A20,20,0,1,0,40,20,20,20,0,0,0,20,0m5.3,19.917H21.833V32.269H16.7V19.917H14.258V15.556H16.7V12.73c0-2.022.961-5.18,5.181-5.18l3.8.015V11.8H22.92a1.044,1.044,0,0,0-1.088,1.187v2.568h3.913Z"
						className="fill-white transition-colors duration-300 group-hover:fill-portfolio-lightgreen"
					/>
				</g>
			</svg>
		</a>
	);
};
export default FacebookSVG;
