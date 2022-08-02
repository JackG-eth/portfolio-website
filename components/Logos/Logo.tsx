import Link from "next/link";

const Logo: React.FC<{
	className?: string;
	onClick?: () => void;
	node?: boolean;
	research?: boolean;
}> = ({ className, onClick, node, research }) => {
	return (
		<button className={`block ${className ? className : ""}`} onClick={onClick}>
			<Link href={"#home"} scroll={false}>
				<span className="logo-primary h-[34px] w-[158px] cursor-pointer pl-20 text-3xl text-white transition-all duration-300 hover:text-portfolio-lightgreen">
					Jack Hawkins
				</span>
			</Link>
		</button>
	);
};

export default Logo;
