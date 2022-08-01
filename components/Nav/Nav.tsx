import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../Logos/Logo";
import MenuIcon from "./MenuIcon";
import MobileNav from "./MobileNav";
import Socials from "../Socials/Socials";
import Container from "../General/Container/Container";

const Navbar = () => {
	const [background, setBackground] = useState(false);
	const [navOpen, setNavOpen] = useState(false);
	const route = useRouter().pathname;

	const isMobile = () => {
		return window.innerWidth < 1280;
	};

	const setNavBackground = () => {
		if (window.scrollY >= 50 || isMobile()) {
			setBackground(true);
		} else {
			setBackground(false);
		}
	};

	const toggleNav = () => {
		setNavOpen(!navOpen);
	};

	const closeNav = () => {
		setTimeout(function () {
			setNavOpen(false);
		}, 500);
	};

	const disableScroll = () => {
		document.body.classList.add("overflow-hidden");
	};

	const enableScroll = () => {
		document.body.classList.remove("overflow-hidden");
	};

	const Routes = [
		{
			label: "Story",
			to: "/our-story/",
		},
		{
			label: "Node",
			to: "/node/",
		},
		{
			label: "Research",
			to: "/research/",
		},
		{
			label: "Careers",
			to: "/careers/",
		},
		{
			label: "Contact",
			to: "/contact/",
		},
	];

	const handleResize = () => {
		// Check page position to set nav background
		setNavBackground();
		// Hide mobile nav if going from small to large viewport
		if (!isMobile()) {
			closeNav();
		}
	};

	const setActiveLink = () => {
		const navLinks = document.querySelectorAll(".nav-link a");
		navLinks.forEach((navLink) => {
			let href = navLink.getAttribute("href");
			let container = navLink.parentNode as HTMLElement;
			if (route.split("/")[1].includes(href.split("/")[1])) {
				container.classList.add("active");
			} else {
				container.classList.remove("active");
			}
		});
	};

	useEffect(() => {
		setActiveLink();
	}, [route]);

	useEffect(() => {
		if (navOpen) {
			disableScroll();
		} else {
			enableScroll();
		}
	}, [navOpen]);

	useEffect(() => {
		setNavBackground();
		window.addEventListener("scroll", setNavBackground);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("scroll", setNavBackground);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<nav className="fixed top-0 left-0 z-50 flex h-16 w-screen min-w-[320px] items-center [transition:height_0.3s_ease] md:h-20">
				<div
					className={`absolute left-0 h-full w-full transition-all duration-500 [backdrop-filter:blur(10px)] ${
						background ? "opacity-100" : "opacity-0"
					}
          ${navOpen ? "bg-mycelium-black" : "bg-[rgba(4_,_31_,_23_,_0.67)]"}`}
				/>
				<Container className="relative z-10 flex items-center justify-between">
					<div className="logo-container relative h-[34px] w-[277px]">
						<div className="absolute left-0 top-0 z-0 transition-opacity duration-500">
							<Logo onClick={() => closeNav()} />
						</div>
					</div>
					{/* Desktop menu */}
					<div
						className={`${
							route === "/data-feeds"
								? "pointer-events-none opacity-0"
								: "pointer-events-none opacity-0 xl:pointer-events-auto xl:opacity-100"
						} absolute right-5 flex items-center justify-between opacity-0 transition-all duration-300 xl:right-12`}
					>
						{Routes.map((route, i) => {
							return (
								<div
									key={i}
									className="nav-link group relative mr-[60px] text-white transition-colors duration-300 hover:text-mycelium-lightgreen"
								>
									<Link scroll={false} href={route.to}>
										{route.label}
									</Link>
									<span className="nav-underline absolute left-0 right-auto bottom-0 h-0.5 w-0 bg-mycelium-lightgreen transition-all duration-300 ease-in-out group-hover:right-0 group-hover:left-auto group-hover:w-full" />
								</div>
							);
						})}
						<Socials />
					</div>
					<MenuIcon navOpen={navOpen} toggleNav={toggleNav} />
				</Container>
				{/* Mobile menu */}
				<MobileNav routes={Routes} navOpen={navOpen} closeNav={closeNav} />
			</nav>
		</>
	);
};

export default Navbar;
