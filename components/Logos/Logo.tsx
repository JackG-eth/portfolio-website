import Link from "next/link";

const Logo: React.FC<{
	className?: string;
	onClick?: () => void;
	node?: boolean;
	research?: boolean;
}> = ({ className, onClick, node, research }) => {
	return (
		<button className={`block ${className ? className : ""}`} onClick={onClick}>
			<Link href="/" scroll={false}>
				<img
					className="logo-primary h-[34px] w-[158px] cursor-pointer transition-all duration-300"
					src="/static/img/logos/primary.svg"
					alt="Mycelium logo"
				/>
			</Link>
		</button>
	);
};

export default Logo;
