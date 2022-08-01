export default function SocialsText() {
	return (
		<div className="mr-20 w-full text-[16px] xl:max-w-[540px]">
			{/* Social Links */}
			<div className="mb-12 flex flex-col leading-7 text-white">
				<span className="mb-8 text-mycelium-lightgreen">Socials</span>
				<span className="underline">
					<a
						href="https://github.com/JackG-eth"
						rel="noopener"
						target="_blank"
						className="transition-colors duration-300 hover:text-mycelium-lightgreen"
					>
						Github
					</a>
				</span>
				<span className="underline">
					<a
						href="https://www.linkedin.com/in/jack-hawkins97/"
						rel="noopener"
						target="_blank"
						className="transition-colors duration-300 hover:text-mycelium-lightgreen"
					>
						LinkedIn
					</a>
				</span>
				<span className="underline">
					<a
						href="https://twitter.com/jackgh_eth"
						rel="noopener"
						target="_blank"
						className="transition-colors duration-300 hover:text-mycelium-lightgreen"
					>
						Twitter
					</a>
				</span>
			</div>
		</div>
	);
}
