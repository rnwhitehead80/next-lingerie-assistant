# NEXT Lingerie Expert Assistant — React POC

Interactive mobile-first lingerie shopping assistant: guided discovery, fit help, category recommendations, product details and a demo shopping bag.

> **Concept only.** Product names, prices, graphics, suggested size ranges and matching suggestions are illustrative. There is no live NEXT product feed, checkout, Sierra/Bloomreach connection, or model API. This is not medical or professional fitting advice.

## Publish to GitHub Pages (no coding required)

1. On [github.com/new](https://github.com/new), create a **public** repository, e.g. `next-lingerie-assistant` (do not initialise with a README).
2. Open the repository and choose **Add file → Upload files**.
3. Upload the **contents of this folder** (not the ZIP or the containing folder), including `src`, `index.html`, `package.json`, `vite.config.js`, `.gitignore` and `.github/workflows/deploy.yml`. **Important:** GitHub's web upload may ignore hidden folders such as `.github`; for the reliable option use the terminal instructions below, or create `.github/workflows/deploy.yml` manually through **Add file → Create new file** and paste the workflow content.
4. Commit files directly to the `main` branch.
5. In the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
6. Select **Actions** and wait for the green **Deploy prototype to GitHub Pages** run. If it doesn't start, open that workflow and choose **Run workflow**.
7. Visit `https://YOUR-USERNAME.github.io/next-lingerie-assistant/` (substitute your GitHub username and repository name).

### Recommended upload with GitHub Desktop

Unzip this bundle, then use **GitHub Desktop → File → Add Local Repository**. If prompted, create a repository here. Choose **Publish repository**, publish to GitHub, and enable Pages via **Settings → Pages → GitHub Actions**. This preserves `.github/workflows/deploy.yml`.

### Recommended upload with Git

Run these commands *inside the unzipped folder* after creating an empty GitHub repository:

```bash
git init
git add .
git commit -m "Initial NEXT lingerie expert assistant prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/next-lingerie-assistant.git
git push -u origin main
```

Then enable **Settings → Pages → Source → GitHub Actions**.

## Develop locally

Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Project structure

- `src/main.jsx` — interactive React experience, sample products and behaviour
- `src/style.css` — mobile-first styling
- `vite.config.js` — GitHub Pages-safe relative paths
- `.github/workflows/deploy.yml` — build and deploy on each push to `main`

## Updating the POC

Edit `src/main.jsx` and `src/style.css`, then commit and push to `main`. GitHub Actions will redeploy the site automatically.
