# New Zealand Students' Space Association
Website built with Gatsby and Justin Formentin's <a href="https://github.com/justinformentin/gatsby-v2-tutorial-starter">starter</a>.

## dev notes / to-dos

:white_large_square: ensure everything is r e s p o n s i v e (mobile friendly - dum dum daaaa)

:white_large_square: make local gatsby branch to test and compare white background


:white_large_square: update site thumbnail (seen when you paste link into facebook)

### INDEX PAGE

:white_large_square: fix formatting

:white_large_square: add proper email to button

:white_large_square: give whole buttom click rights


### ABOUT US PAGE

:white_check_mark: do something with giant yellow circles - NO MORE


### EVENTS PAGE

:white_large_square: reference to check out blog at bottom of page

:white_check_mark: fix URL colours

:white_check_mark: give whole event click rights

:white_check_mark: change text location to black instead of white

:white_large_square: add filter by tag feature


### BLOG PAGE

:white_large_square: fix double lined titles

:white_large_square: fix spacing with titles, dates, break-line

:white_large_square: add timeline to side of blog

:white_check_mark: fix URL colours


### TEAM PAGE


### CONTACT US PAGE

:white_large_square: add proper emails

:white_large_square: give whole buttom click rights; all contact buttons

:white_large_square: give Mission Control its own line

# Usage

```bash
Download project
# With `gatsby-cli`
gatsby new my-site https://github.com/nzssa/nzssa.github.io

OR

# Cloning
git clone my-site https://github.com/nzssa/nzssa.github.io.git
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
