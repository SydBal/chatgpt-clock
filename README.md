# vite-gh-pages
## Starter Vite Project with GitHub Pages Integration

### Setup
- In `package.json`, ensure that `homepage` is set to the domain that this page will serve from. If you use a custom domain for GitHub pages, you should use that here.
- In `vite.config.ts`, ensure that `base` is set to name of your repo.

### To Deploy
- Run `npm run deploy`. The code to deploy will be pushed to the `gh-pages` branch in your repo.