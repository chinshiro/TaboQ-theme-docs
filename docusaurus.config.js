module.exports = {
  title: "MyTheme Documentation",
  url: "https://docs.taboq.com", // ← 替换为你的自定义域名
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "chinshiro", // ← 改为你 GitHub 用户名
  projectName: "shopify-theme-docs",
  themeConfig: {
    navbar: {
      title: "MyTheme Docs",
      items: [
        { to: "/docs/installation", label: "Docs", position: "left" },
        { href: "https://tally.so/your-form-id", label: "Support", position: "right" },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} YourBrand. Shopify Theme Partner.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: { sidebarPath: require.resolve("./sidebars.js") },
        theme: { customCss: require.resolve("./src/css/custom.css") },
      },
    ],
  ],
};