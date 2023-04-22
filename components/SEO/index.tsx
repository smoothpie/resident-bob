import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  image: string;
  url: string;
  noIndex?: boolean;
}

export default function SEO({ title, description, image, url, noIndex }: SEOProps) {
  return (
    <Head>
      <title key="title">{title}</title>

      <meta key="name" name="name" content={title} />
      <meta key="description" name="description" content={description} />
      <meta key="image" name="image" content={image} />

      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:image" property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {noIndex && <meta name="robots" content="noindex" />}

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}