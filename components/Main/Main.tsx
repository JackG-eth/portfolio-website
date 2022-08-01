import { useEffect, useState, useRef } from "react";
import BannerVideo from "./BannerVideo";

const Main = () => {
	const [loaded, setLoaded] = useState(false);
	const [videoCanPlay, setVideoCanPlay] = useState(false);

	const Main = useRef<HTMLElement>(null);

	useEffect(() => {
		setLoaded(true);
		setTimeout(() => {
			setVideoCanPlay(true);
		}, 1000);
	}, []);

	return (
		<section ref={Main} className="relative h-screen">
			<BannerVideo
				loaded={loaded}
				videoCanPlay={videoCanPlay}
				setVideoCanPlay={setVideoCanPlay}
			/>
		</section>
	);
};

export default Main;
