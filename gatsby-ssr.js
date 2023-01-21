const React = require('react');

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPostBodyComponents }) => {
  setHtmlAttributes({ lang: 'ru' });

  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Exo20-Thin.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="exo20ThinFont"
    />,
  ]);
};
