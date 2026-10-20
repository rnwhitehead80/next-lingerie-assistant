# NEXT Lingerie Expert Assistant — GitHub Pages

Interactive React + Vite prototype. **Do not configure GitHub Pages to publish from the `main` branch's root folder:** the root `index.html` points to React source (`/src/main.jsx`) that GitHub Pages cannot compile. Use **GitHub Actions** instead.

## Upload and publish

1. Create a new GitHub repository (e.g. `next-lingerie-assistant`).
2. Unzip this archive **on your computer**, keeping the folder structure intact. In particular, `.github/workflows/deploy.yml` must be uploaded. On a Mac, the `.github` folder is hidden by default; GitHub Desktop is a convenient way to preserve it.
3. Add/commit/push the contents of the unzipped folder to the **`main`** branch. Your repository root should contain `package.json`, `index.html`, `vite.config.js`, `src/`, and `.github/` (not one extra enclosing folder).
4. Open your repository on GitHub → **Settings → Pages** → under **Build and deployment**, choose **Source: GitHub Actions** (NOT "Deploy from a branch").
5. Go to **Actions** → **Deploy prototype to GitHub Pages**. Wait until **build** and **deploy** are both green. If there is no run, open the workflow and click **Run workflow**, choose `main`, and run it. If GitHub asks you to enable Actions, enable it.
6. Open the URL in Settings → Pages, typically `https://YOUR-USERNAME.github.io/next-lingerie-assistant/` (with a trailing slash). It can take a short while for Pages to update.

### If you see a blank page

- Make sure **Settings → Pages → Source** says **GitHub Actions**, not "Deploy from a branch".
- Check that **Actions → Deploy prototype to GitHub Pages** completed successfully. Click the latest run and read errors in **Install dependencies**, **Build prototype**, and **Deploy to GitHub Pages**.
- Check that `.github/workflows/deploy.yml` exists in the **repository root** and that files aren't inside another folder.
- Hard refresh with Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows).
- In Developer Tools → Console/Network, a failed `/src/main.jsx` request or `Unexpected token '<'` means unbuilt source is being served instead of the `dist` output. Missing `assets/` files usually indicates wrong deployment source or URL.

## Local development

Requires Node 20+:

```bash
npm install
npm run dev
```

Local production build:

```bash
npm run build
npm run preview
```

## How it works

GitHub Actions installs dependencies, runs `vite build`, and publishes only the resulting `dist/` folder. `vite.config.js` sets `base: './'` so asset URLs work under a repository subpath on GitHub Pages or a custom domain. The `.nojekyll` file is created in the published output.

### Scope

This is an interactive concept with illustrative products and prices. It is not connected to live NEXT inventory, Sierra, Bloomreach, or checkout.
