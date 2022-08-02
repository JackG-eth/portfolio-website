const MenuIcon: React.FC<{ navOpen: boolean; toggleNav: () => void }> = ({
	navOpen,
	toggleNav,
}) => {
	return (
		<button
			className="group absolute right-5 flex flex-col opacity-100 outline-none transition-opacity duration-500 xl:pointer-events-none xl:right-12 xl:opacity-0"
			onClick={() => toggleNav()}
		>
			<span
				className={`mb-[5px] h-[3px] w-[25px] transform-gpu bg-white transition-all duration-500 group-hover:bg-portfolio-lightgreen ${
					navOpen
						? "translate-y-[7px] rotate-45"
						: "group-hover:translate-y-[2px]"
				} `}
			/>
			<span
				className={`mb-[5px] h-[3px] w-[25px] transform-gpu bg-white transition-all duration-500 group-hover:bg-portfolio-lightgreen ${
					navOpen ? "-translate-y-[1px] -rotate-45" : ""
				} `}
			/>
			<span
				className={`h-[3px] w-[25px] transform-gpu bg-white transition-all duration-500 group-hover:bg-portfolio-lightgreen ${
					navOpen ? "opacity-0" : "group-hover:translate-y-[-2px]"
				} `}
			/>
		</button>
	);
};

export default MenuIcon;
