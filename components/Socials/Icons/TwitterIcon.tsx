const TwitterIcon: React.FC<{ className: string }> = ({ className }) => {
	return (
		<a href="https://twitter.com/jackgh_eth" rel="noopener" target="_blank">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="24.38"
				viewBox="0 0 30 24.38"
				className={`group ${className}`}
				aria-labelledby="Twitter"
			>
				<path
					id="Path_520"
					data-name="Path 520"
					d="M306.217,200.963a12.262,12.262,0,0,1-3.535.969,6.169,6.169,0,0,0,2.707-3.405,12.311,12.311,0,0,1-3.908,1.494,6.16,6.16,0,0,0-10.488,5.614,17.473,17.473,0,0,1-12.687-6.43,6.162,6.162,0,0,0,1.9,8.217,6.137,6.137,0,0,1-2.788-.77c0,.026,0,.051,0,.078a6.159,6.159,0,0,0,4.938,6.035,6.18,6.18,0,0,1-2.78.105,6.162,6.162,0,0,0,5.749,4.274,12.347,12.347,0,0,1-7.644,2.634,12.579,12.579,0,0,1-1.468-.086,17.422,17.422,0,0,0,9.435,2.765c11.322,0,17.512-9.379,17.512-17.512,0-.266,0-.532-.017-.8A12.493,12.493,0,0,0,306.217,200.963Z"
					transform="translate(-276.217 -198.078)"
					className="fill-white transition-colors duration-300 group-hover:fill-mycelium-lightgreen"
				/>
			</svg>
		</a>
	);
};
export default TwitterIcon;
