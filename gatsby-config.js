/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Стоматолог Узунхайир',
    siteUrl: 'https://uzun.hair',
    description: '',
    keywords: '',
    image: 'uzun.webp',
    social: {
      instagram: '',
    },
    contact: {
      email: 'uzunhair@yandex.ru',
      phone: '+7 938 201 09 02',
      whatsApp: 'https://wa.me/79382010902?text=Здравствуйте, я по поводу...',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'UZUN.HAIR',
        short_name: 'UZUN.HAIR',
        lang: 'ru',
        icon: 'src/images/icon.png',
        background_color: '#1d1d27',
        theme_color: '#1d1d27',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://uzun.hair',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
