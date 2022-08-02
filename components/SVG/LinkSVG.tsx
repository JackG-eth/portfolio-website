import { useRef } from "react";

const LinkSVG: React.FC<{
	link: string;
	title: string;
}> = ({ link, title }) => {
	const copyTextRef = useRef<HTMLSpanElement>(null);
	const copyToClipboard = () => {
		copyTextRef.current.classList.remove("opacity-0");
		navigator.clipboard.writeText(link);
		setTimeout(() => {
			copyTextRef.current.classList.add("opacity-0");
		}, 1000);
	};

	// Open native share dialog
	const handleClick = () => {
		if (navigator.share) {
			navigator
				.share({
					title: "Share " + title,
					url: link,
				})
				.then(() => {})
				.catch(console.error);
		} else {
			// fallback - copy URL to clipboard
			copyToClipboard();
		}
	};
	return (
		<button onClick={handleClick} className="relative">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="39.996"
				height="39.996"
				viewBox="0 0 39.996 39.996"
				className="group mx-1.5 sm:ml-2.5 sm:mr-0"
			>
				<defs>
					<clipPath id="a">
						<rect width="39.996" height="39.996" fill="#fff" />
					</clipPath>
				</defs>
				<g clipPath="url(#a)">
					<path
						d="M20,0A20,20,0,1,0,40,20,20,20,0,0,0,20,0m5.758,26.926-4.308,4.309a6.145,6.145,0,1,1-8.69-8.691,1.122,1.122,0,0,1,1.915.794,1.129,1.129,0,0,1-.328.793,3.9,3.9,0,1,0,5.516,5.517l4.313-4.312a3.9,3.9,0,0,0-2.76-6.659,3.869,3.869,0,0,0-2.757,1.143,1.133,1.133,0,0,1-.793.334,1.122,1.122,0,0,1-.79-1.925,6.145,6.145,0,1,1,8.683,8.7m1.484-9.474a1.114,1.114,0,0,1-.793.335,1.122,1.122,0,0,1-.791-1.925,3.9,3.9,0,0,0-5.521-5.511l-4.311,4.31a3.9,3.9,0,0,0-.032,5.549,3.877,3.877,0,0,0,2.758,1.142,3.93,3.93,0,0,0,2.786-1.171,1.124,1.124,0,0,1,1.6-.009,1.129,1.129,0,0,1,.33.8,1.114,1.114,0,0,1-.339.8,6.175,6.175,0,0,1-4.35,1.835h-.029A6.1,6.1,0,0,1,14.2,21.8a6.145,6.145,0,0,1,.042-8.732l4.31-4.308a6.144,6.144,0,0,1,8.689,8.69"
						className="fill-white transition-colors duration-300 group-hover:fill-portfolio-lightgreen"
					/>
				</g>
			</svg>
			<span
				ref={copyTextRef}
				className="absolute left-1/2 -bottom-8 -translate-x-1/2 transform pl-2 text-portfolio-lightgreen opacity-0 transition-opacity duration-300"
			>
				Copied!
			</span>
		</button>
	);
};
export default LinkSVG;
