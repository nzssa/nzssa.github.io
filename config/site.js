module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "New Zealand Students' Space Association", // Navigation and Site Title
  titleAlt: 'NZSSA', // Title for JSONLD
  description: 'For all students passionate about the space industry and its future',
  url: 'https://nzssa.org.nz', // Domain of your site. No trailing slash!
  siteUrl: 'https://nzssa.org.nz', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'NZSSA', // shortname for manifest. MUST be shorter than 12 characters
  author: '', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  //twitter: '@justinformentin', // Twitter Username
};
