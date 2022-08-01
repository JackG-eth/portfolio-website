const BannerVideo: React.FC<{
	loaded: boolean;
	videoCanPlay: boolean;
	setVideoCanPlay: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ loaded, videoCanPlay, setVideoCanPlay }) => {
	// Wait until video has loaded before allowing animation to occur
	return (
		<div
			className={`fixed top-0 left-0 z-0 w-screen overflow-hidden object-cover transition-[height] delay-300 duration-[1.1s] ease-in-out ${
				loaded && videoCanPlay ? "h-screen" : "h-[0vh]"
			}`}
		></div>
	);
};

export default BannerVideo;
