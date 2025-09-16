# XII. Building & Deployment

Building and deploying a React application involves creating an optimized production bundle and hosting it on platforms like Vercel, Netlify, or GitHub Pages.

## Build Process (`npm run build`)

The `npm run build` command creates a production-ready bundle in the `build/` folder using Create React App or similar tools.

**Steps**:
1. Ensure your project has a `package.json` with a `build` script:
   ```json
   "scripts": {
     "build": "react-scripts build"
   }
   ```
2. Run:
   ```bash
   npm run build
   ```
3. The `build/` folder contains static files (HTML, CSS, JS) optimized for production.

**What Happens During Build**:
- Minifies JavaScript and CSS.
- Optimizes assets (e.g., images).
- Removes development-only code (e.g., console.logs in production).

**Best Practice**:
- Test the build locally with `npx serve -s build`.
- Ensure environment variables (e.g., `.env`) are configured for production.

## Deployment to Vercel, Netlify, or GitHub Pages

### Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run `vercel` in your project directory.
3. Follow prompts to configure (select `build/` as the output directory).
4. Vercel provides a live URL after deployment.

### Netlify
1. Drag and drop the `build/` folder to Netlify’s dashboard, or:
2. Use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=build
   ```
3. Configure the site settings (e.g., custom domain).

### GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d build"
   }
   ```
3. Set the `homepage` field:
   ```json
   "homepage": "https://<username>.github.io/<repo>"
   ```
4. Run:
   ```bash
   npm run build
   npm run deploy
   ```

**Best Practice**:
- Use Vercel or Netlify for simpler deployments and automatic scaling.
- Configure a custom domain for professional projects.
- Enable CI/CD (e.g., connect to GitHub) for automatic deployments on push.