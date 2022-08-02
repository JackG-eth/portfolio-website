import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SEO: React.FC<{
	title: string;
	description?: string;
	image?: string;
	publishedTime?: string;
	author?: string;
}> = ({ title, description, image, publishedTime, author }) => {
	const [currentPath, setCurrentPath] = useState<string | undefined>(undefined);
	const router = useRouter();
	const siteUrl = process.env.siteUrl;
	const currentDate = new Date().toISOString().split("T")[0];
	const metaTitle = title
		? title + " | " + process.env.siteTitle
		: process.env.siteTitle;
	const metaDescription = description || process.env.siteDescription;
	const imagePreview = image || `${siteUrl}/${process.env.siteImagePreviewUrl}`;
	const metaAuthor = author || "portfolio";
	const metaPublishedTime = publishedTime || currentDate;

	useEffect(() => {
		const pathname = router.pathname;
		setCurrentPath(pathname);
	}, [router]);

	return (
		<Head>
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta property="title" content={metaTitle} />
			<meta name="description" content={metaDescription} />
			<meta property="article:published_time" content={metaPublishedTime} />
			<meta name="author" content={metaAuthor}></meta>
			<link rel="icon" href="/favicon.ico" />

			{/* Open Graph */}
			<meta
				property="og:url"
				content={`${siteUrl}${currentPath}`}
				key="ogurl"
			/>
			<meta property="og:title" content={metaTitle} key="ogtitle" />
			<meta property="og:image" content={imagePreview} key="ogimage" />
			<meta property="og:site_name" content={siteUrl} key="ogsitename" />
			<meta property="og:description" content={metaDescription} key="ogdesc" />
			<meta property="og:type" content="website" />
			<title>{metaTitle}</title>

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="portfolio.ventures" />
			<meta property="twitter:url" content={siteUrl} />
			<meta name="twitter:title" content={metaTitle} />
			<meta name="twitter:description" content={metaDescription} />
			<meta name="twitter:image" content={imagePreview} />

			<title>{title} | Porfolio</title>
		</Head>
	);
};

export default SEO;
