import Link from "next/link";
export default function FooterLinks() {
	return (
		<div className="flex text-[16px]">
			<div className="mr-16 flex flex-col md:mr-48">
				<span className="hover:text-mycelium-lightgreen text-sm transition-colors duration-300">
					<Link scroll={false} href="/privacy-policy">
						Privacy Policy
					</Link>
				</span>
				<span className="hover:text-mycelium-lightgreen mt-2 text-sm transition-colors duration-300">
					<Link scroll={false} href="/cookie-policy">
						Cookie Policy
					</Link>
				</span>
			</div>
			<div className="flex flex-col">
				<span className="hover:text-mycelium-lightgreen text-sm transition-colors duration-300">
					<a
						href="https://github.com/mycelium-ethereum"
						rel="noopener"
						target="_blank"
					>
						Github
					</a>
				</span>
				<span className="hover:text-mycelium-lightgreen mt-2 text-sm transition-colors duration-300">
					<a
						href="https://www.linkedin.com/company/mycelium-eth/"
						rel="noopener"
						target="_blank"
					>
						LinkedIn
					</a>
				</span>
				<span className="hover:text-mycelium-lightgreen mt-2 text-sm transition-colors duration-300">
					<a
						href="https://twitter.com/jackgh_eth"
						rel="noopener"
						target="_blank"
					>
						Twitter
					</a>
				</span>
			</div>
		</div>
	);
}
