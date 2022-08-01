import Container from "../General/Container/Container";
import Link from "next/link";
import Socials from "../Socials/Socials";

const MobileNav: React.FC<{
  navOpen: boolean;
  routes: {
    label: string;
    to: string;
  }[];
  closeNav: () => void;
}> = ({ navOpen, routes, closeNav }) => {
  return (
    <menu
      className={`fixed top-0 flex h-screen max-h-[100vh] min-h-[650px] w-screen max-w-[100vw] items-center justify-center overflow-hidden bg-mycelium-black transition-all duration-700 ease-in-out [transform:translate3d(0,0,0)] ${
        navOpen
          ? "pointer-events-auto right-0 w-screen"
          : "pointer-events-none left-0 w-0"
      }`}
    >
      <div
        className={`absolute top-0 h-screen w-screen min-w-[100vw] overflow-auto transition-all duration-500 ${
          navOpen ? "right-0" : "left-0"
        }`}
      >
        <Container className="flex h-full min-h-[550px] flex-col items-start justify-center">
          <div className="flex h-full flex-grow flex-col items-start justify-center">
            {routes.map((route, i) => {
              return (
                <button
                  key={i}
                  className={`nav-link group relative text-[32px] text-white transition-colors duration-500 hover:text-mycelium-lightgreen ${
                    i !== 0 ? "mt-6 md:mt-12" : ""
                  } `}
                  onClick={() => closeNav()}
                >
                  <Link scroll={false} href={route.to}>
                    {route.label}
                  </Link>
                  <span className="nav-underline absolute left-0 right-auto bottom-0 h-0.5 w-0 bg-mycelium-lightgreen transition-all duration-500 ease-in-out group-hover:right-0 group-hover:left-auto group-hover:w-full" />
                </button>
              );
            })}
          </div>
          <Socials />
        </Container>
      </div>
    </menu>
  );
};

export default MobileNav;
