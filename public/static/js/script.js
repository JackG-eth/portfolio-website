var w = window.innerWidth;
var size = w >= 1280 ? "big" : "small";
var controller;
var prevElement;
var halfScreen = window.innerHeight * 0.5;
var threeQuarterScreen = window.innerHeight * 0.75;
var oneFifthScreenHeight = window.innerHeight * 0.2;

function stepAnimation() {
	var tl = gsap.timeline();
	tl.from("#panel-0", 1, { xPercent: 0 });
	tl.from("#panel-1", 1, { xPercent: 0 });
	tl.from("#panel-2", 1, { xPercent: 0 });

	return new ScrollMagic.Scene({
		triggerElement: "#pinMaster",
		triggerHook: "onLeave",
		duration: "150%",
	})
		.setPin("#pinMaster")
		.setTween(tl)
		.addTo(controller);
}
function isMobile() {
	return window.innerWidth < 1280;
}
function initialiseScrollMagic() {
	controller = new ScrollMagic.Controller();
	const scene = stepAnimation();
	document.addEventListener("scroll", function () {
		updateActiveStep(scene.progress());
	});
}
function handleResize() {
	setTimeout(function () {
		const newSize = !isMobile() ? "big" : "small";
		if (newSize !== size) {
			size = newSize;
			if (newSize === "small") {
				controller.destroy(true);
			} else {
				initialiseScrollMagic();
			}
		}
	}, 400);
}
function isSafari() {
	const navigator = window.navigator;
	const ua = navigator.userAgent.toLowerCase();
	const hasMediaCapabilities = !!(
		navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
	);
	const isSafari =
		ua.indexOf("safari") !== -1 &&
		!(ua.indexOf("chrome") !== -1) &&
		ua.indexOf("version/") !== -1;
	return isSafari && hasMediaCapabilities;
}
function updateActiveStep(progress) {
	const slides = document.querySelectorAll("#pinMaster .panel");
	if (slides.length) {
		slides.forEach((e) => {
			e.classList.remove("pointer-events-all", "opacity-100", "z-10");
			e.classList.add("pointer-events-none", "opacity-0", "z-0");
		});

		if (progress <= 0.33) {
			slides[0].classList.add("pointer-events-all", "opacity-100", "z-10");
			slides[0].classList.remove("pointer-events-none", "opacity-0", "z-0");
		}

		if (progress > 0.33 && progress <= 0.66) {
			slides[1].classList.add("pointer-events-all", "opacity-100", "z-10");
			slides[1].classList.remove("pointer-events-none", "opacity-0", "z-0");
		}

		if (progress > 0.66) {
			slides[2].classList.add("pointer-events-all", "opacity-100", "z-10");
			slides[2].classList.remove("pointer-events-none", "opacity-0", "z-0");
		}
	}
}
function removeElement() {
	const title = document.title;
	if (!title.includes("Home")) {
		const scrollMagicDiv = document.getElementById("pinMaster");
		scrollMagicDiv.remove();
	}
}
function initialiseElements() {
	const title = document.title;
	if (title.includes("Home")) {
		if (!isMobile()) {
			initialiseScrollMagic();
		}

		// Disable ScrollMagic on resize and refresh Stellar.js
		window.addEventListener("resize", function () {
			handleResize();
		});
	} else {
		if (controller) {
			controller.destroy(true);
		}
		window.removeEventListener(
			"resize",
			function () {
				handleResize();
			},
			true
		);
		document.removeEventListener("scroll", updateActiveStep, true);
	}
}
window.addEventListener("popstate", initialiseElements());
window.addEventListener("beforeunload", removeElement());
