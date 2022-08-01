import { useEffect, useState } from "react";
import Logo from "../Logos/Logo";
import Container from "../General/Container/Container";
// import SubscriptionForm from "./SubscriptionForm";
import FooterLinks from "./FooterLinks";
import JoinBanner from "./JoinBanner";
import { useRouter } from "next/router";

export default function Footer() {
	const [hideJoinBanner, setHideJoinBanner] = useState<boolean>(false);
	const [hideFooter, setHideFooter] = useState<boolean>(false);
	const route = useRouter().pathname;

	const checkPage = () => {
		setHideFooter(route === "/data-feeds");
		setHideJoinBanner(route === "/careers" || route === "/404");
	};

	useEffect(() => {
		checkPage();
	}, [route]);

	return (
		<>
			{!hideJoinBanner && !hideFooter && <JoinBanner />}
			<footer
				className={`bg-mycelium-midgreen relative z-10 w-full transform-gpu overflow-hidden py-8 md:h-40 ${
					hideFooter ? "hidden" : "block"
				}`}
			>
				<Container className="flex h-full flex-col items-start justify-between md:flex-row">
					<Logo className="mb-9 mr-20" />
					<div className="inline-flex items-start text-white">
						<FooterLinks />
					</div>
				</Container>
			</footer>
		</>
	);
}
