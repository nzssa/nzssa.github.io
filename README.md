# New Zealand Students' Space Association
Website built with Gatsby and Justin Formentin's <a href="https://github.com/justinformentin/gatsby-v2-tutorial-starter">starter</a>.

## dev notes / to-dos
:white_check_mark: create new component for home page header (which is different from blog post headers)

:white_check_mark: <strike>reformat home page blog icons to use CSS Grid</strike> make blog post icons sit nicely

:white_large_square: ensure everything is r e s p o n s i v e

:white_large_square: develop brand identity

:white_large_square: incorporate brand into site design

:white_large_square: add copy

:white_large_square: add form submission to Contact Us

:white_large_square: fix up blog post tags 

:white_large_square: add author to blog posts 

:white_large_square: finish team page (add members)

:white_large_square: fix up /tags/tagName layout (and add author, date)

:white_large_square: add polished article to About Us page

## Starter Features

- Gatsby v2
- Emotion for styling
- Code syntax highlighting
- Tags
- SEO
  - Sitemap generation
  - Schema.org JSON-LD for Google Rich Snippets
  - Twitter Tags
  - OpenGraph Tags for Facebook/Google+/Pinterest
  - robots.txt
- Typography.js
- Typefaces for faster font loading
- Offline Support
- Manifest Support
- Gatsby Image
  - Responsive images
  - Traced SVG Loading with Lazy-Loading
  - WebP Support
- Development tools
  - ESLint for linting
  - Prettier for code style
  - CircleCI support
  - Google Lighthouse Optimization

# Usage

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinformentin/gatsby-v2-tutorial-starter)

```bash
Download project
# With `gatsby-cli`
gatsby new my-site https://github.com/justinformentin/gatsby-v2-tutorial-starter

OR

# Cloning
git clone my-site https://github.com/justinformentin/gatsby-v2-tutorial-starter.git
cd my-site

THEN

# Install dependencies
npm i

# Start dev server
gatsby develop

# Build for production
gatsby build

# Format with Prettier
npm format

```

## Folder structure
```bash
├──.circleci # Circleci integration
├── config # Theme and site metadata
├── content # Post markdown and images
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── style
│   └── templates # For Post and Tag page generation
├── static # Images for logo and favicon, and robots.txt
├── gatsby-config.js # Plugin loading and configuration
└── gatsby-node.js # Generate posts/tags and modify webpack
```
