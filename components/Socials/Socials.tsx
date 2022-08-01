import GithubIcon from "./Icons/GithubIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import TwitterIcon from "./Icons/TwitterIcon";

const Socials = () => {
  return (
    <div className="mx-auto mb-6 flex w-[183px] justify-between xl:static xl:mx-0 xl:mb-0">
      <GithubIcon className="h-[30px] w-auto transition-all duration-500" />
      <LinkedInIcon className="h-[30px] w-auto transition-all duration-500" />
      <TwitterIcon className="h-[30px] w-auto transition-all duration-500" />
    </div>
  );
};

export default Socials;
