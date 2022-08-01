const LinkedInIcon: React.FC<{ className: string }> = ({ className }) => {
	return (
		<a
			href="https://www.linkedin.com/in/jack-hawkins97/"
			rel="noopener"
			target="_blank"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26.483"
				height="26.483"
				viewBox="0 0 26.483 26.483"
				className={`group ${className}`}
				aria-labelledby="LinkedIn"
			>
				<path
					id="Path_522"
					data-name="Path 522"
					d="M20.966,0H5.517A5.518,5.518,0,0,0,0,5.517V20.966a5.518,5.518,0,0,0,5.517,5.517H20.966a5.517,5.517,0,0,0,5.517-5.517V5.517A5.517,5.517,0,0,0,20.966,0ZM8.828,20.966H5.517V8.828h3.31ZM7.173,7.429A1.947,1.947,0,1,1,9.1,5.482,1.939,1.939,0,0,1,7.173,7.429Zm14.9,13.537h-3.31V14.782c0-3.717-4.414-3.435-4.414,0v6.184h-3.31V8.828h3.31v1.948c1.54-2.854,7.724-3.064,7.724,2.732Z"
					className="fill-white transition-colors duration-300 group-hover:fill-mycelium-lightgreen"
				/>
			</svg>
		</a>
	);
};
export default LinkedInIcon;
