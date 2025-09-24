module.exports = {
  title: 'TaboQ Theme Documentation',
  tagline: 'Professional Shopify theme for modern stores',
  url: 'https://docs.taboq.com',
  baseUrl: '/',
  organizationName: 'chinshiro',
  projectName: 'TaboQ-theme-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'TaboQ Docs',
      items: [
        {
          type: 'doc',
          docId: 'installation',
          position: 'left',
          label: 'Docs',
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} TaboQ Theme`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  },
};