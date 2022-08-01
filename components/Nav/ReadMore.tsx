import Link from "next/link";

const ReadMore: React.FC<{
  className?: string;
  route: string;
  label: string;
  white?: boolean;
}> = ({ className, route, label, white }) => {
  return (
    <span
      className={`read-more relative mr-4 inline-flex items-center pr-2 text-[16px] ${
        className ? className : ""
      }
        ${white ? "text-white" : "text-mycelium-lightgreen"}`}
    >
      <Link scroll={false} href={route}>
        {label}
      </Link>
      <span className="pointer-events-none absolute top-1/2 right-0 z-10 flex w-full -translate-y-1/2 translate-x-4 transform-gpu justify-end transition-all duration-300">
        &#8594;
      </span>
    </span>
  );
};

export default ReadMore;
