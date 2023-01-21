import React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

export const Seo = ({ title, description, image: propImage, keywords, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image: defaultImage, siteUrl } = useSiteMetadata();
  const image = propImage ? `${siteUrl}/${propImage}` : `${siteUrl}/${defaultImage}`;

  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={image} />

      <meta name="og:title" content={title || defaultTitle} />
      <meta name="og:description" content={description || defaultDescription} />
      <meta name="author" content={defaultTitle} />
      <meta property="og:image" content={image} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:site_name" content={defaultTitle} />

      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:type" content="website" />
      {/* Chrome, Firefox OS and Opera */}
      <meta name="theme-color" content="#1d1d27" />
      {children}
    </>
  );
};

export default Seo;
