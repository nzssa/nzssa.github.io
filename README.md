# New Zealand Students' Space Association
Website built with Gatsby and Justin Formentin's <a href="https://github.com/justinformentin/gatsby-v2-tutorial-starter">starter</a>.

## dev notes / to-dos
:white_check_mark: create new component for home page header (which is different from blog post headers)

:white_check_mark: <strike>reformat home page blog icons to use CSS Grid</strike> make blog post icons sit nicely

:white_large_square: ensure everything is r e s p o n s i v e

:white_large_square: develop brand identity

:white_large_square: incorporate brand into site design

### INDEX PAGE

:white_check_mark: Add Join Us button

:white_large_square: Fix formatting

### ABOUT US PAGE

:white_check_mark: hard-code about us page for design review

:white_check_mark: finish polished article for About Us page

:white_check_mark: Fix text spacing

:white_check_mark: remove doodles, add proper visuals

### EVENTS PAGE

:white_check_mark: add colour labels to events to indicate location

:white_check_mark: update events colour var so only location needs to be indicated

:white_large_square: make events clickable

:white_large_square: add location icon and text to event box

### BLOG PAGE

:white_check_mark: fix up blog post tags 

:white_check_mark: add author to blog posts

:white_large_square: finish and order all blog posts

:white_large_square: change folder names of blog posts

:white_check_mark: fix up /tags/tagName layout (and add author, date)

:white_check_mark: update previous/next link at bottom of blog posts

### TEAM PAGE

:white_check_mark: finish team page (add members)

:white_large_square: If members don't have a linked in profile (or other links), remove hover colour.

### CONTACT US PAGE

:white_check_mark: add facebook links to repspective colonies and "where to find more info" to contact us page

:white_large_square: <strike>add form submission to Contact Us</strike>

:white_check_mark: change layout to horizontally list branches and vertically list buttons

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
