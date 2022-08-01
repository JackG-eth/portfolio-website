const TwitterSVG: React.FC<{
  link: string;
}> = ({ link }) => {
  return (
    <a href={`https://twitter.com/intent/tweet?url=${link}`} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40.002"
        height="40.001"
        viewBox="0 0 40.002 40.001"
        className="group mx-1.5 sm:ml-2.5 sm:mr-0"
      >
        <defs>
          <clipPath id="a">
            <rect width="40.002" height="40.001" fill="#fff" />
          </clipPath>
        </defs>
        <g clipPath="url(#a)">
          <path
            d="M20,0A20,20,0,1,0,40,20,20,20,0,0,0,20,0M30.078,15.969c.01.217.014.434.014.652A14.335,14.335,0,0,1,8.024,28.7a10.3,10.3,0,0,0,1.2.07,10.113,10.113,0,0,0,6.26-2.157,5.046,5.046,0,0,1-4.708-3.5,4.982,4.982,0,0,0,.948.09,5.045,5.045,0,0,0,1.329-.176A5.044,5.044,0,0,1,9.01,18.082c0-.023,0-.043,0-.064a5.033,5.033,0,0,0,2.282.631,5.045,5.045,0,0,1-1.56-6.73,14.307,14.307,0,0,0,10.39,5.266,5.044,5.044,0,0,1,8.589-4.6,10.065,10.065,0,0,0,3.2-1.223A5.056,5.056,0,0,1,29.7,14.153a10.112,10.112,0,0,0,2.9-.794,10.243,10.243,0,0,1-2.515,2.61"
            className="fill-white transition-colors duration-300 group-hover:fill-mycelium-lightgreen"
          />
        </g>
      </svg>
    </a>
  );
};
export default TwitterSVG;
