module.exports = {
  title: "Help Center - Shift'M",
  tagline: "How may Shift'M Help you?",
  url: 'https://jaco1986.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jaco1986', // Usually your GitHub org/user name.
  projectName: 'shiftm-support', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-56940433-12',
    },

    disableDarkMode: true,
    navbar: {
      title: "Help Center",
      logo: {
        alt: 'Help Centre',
        src: 'img/logo.png',
      },
      links: [
        { to: "guides/", label: "Guides", position: "left" },
        {
          to: 'docs/installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://www.shiftm.com',
          label: 'Sign Up',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: "What is Shift'M?",
              to: "docs/about/what-is-shiftm/",
            },
            {
              label: "Terms and Conditions",
              to: "community/#team",
            },
            {
              label: "Contact Us",
              to: "https://shiftm.com/contact",
            },
            {
              label: "Mailing List",
              to: "mailing_list/",
            },
          ],
        },
        {
          title: 'Mobile',
          items: [
            {
              label: 'App Store',
              href: 'https://www.apple.com/ios/app-store',
            },
            {
              label: 'Play Store',
              href: 'https://play.google.com/store?hl=en',
            },

          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/shiftmhealthcare',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/shiftm_',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ShiftM_',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedIn.com/company/Shift-m',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shift'M.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
    'https://fonts.googleapis.com/css?family=Baloo+Chettan+2:400,700&display=swap',
  ],
  plugins: ['@docusaurus/plugin-google-analytics'],
};
