const Button: React.FC<{
	onClick?: () => void;
	type: "submit" | "button";
	children: React.ReactNode;
}> = ({ onClick, type, children }) => {
	return (
		<button
			type={type}
			onClick={() => onClick()}
			className="hover:text-mycelium-darkgreen relative mx-auto block h-12 w-[160px] overflow-hidden rounded-xl border border-mycelium-lightgreen bg-transparent bg-clip-content text-white transition-colors duration-300 hover:bg-mycelium-lightgreen"
		>
			{children}
		</button>
	);
};

export default Button;
