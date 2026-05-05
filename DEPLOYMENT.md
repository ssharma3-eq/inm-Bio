# Deployment Setup Instructions for INM-BioNeno Website

## GitHub Pages Deployment Guide

Your website is now configured for automatic deployment to GitHub Pages! Follow these steps:

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon and select **New repository**
3. Name it: `inm-Bio` (or any name you prefer)
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 2: Push Code to GitHub

Run these commands in your terminal (from the inm-Bio folder):

```bash
git init
git add .
git commit -m "Initial commit: INM-BioNeno website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/inm-Bio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The deployment will start automatically!

### Step 4: Access Your Website

Once deployed, your site will be live at:
```
https://YOUR_USERNAME.github.io/inm-Bio/
```

## Automatic Deployment

Every time you push changes to the `main` branch:
1. GitHub Actions will automatically build your site
2. The static files will be deployed to GitHub Pages
3. Your website updates live (takes ~1-2 minutes)

## Project Structure for GitHub Pages

```
inm-Bio/
├── out/                     # Generated static files (deployed)
├── app/                     # Next.js app directory
├── components/              # React components
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automatic deployment configuration
├── package.json
├── next.config.js           # Configured for static export
└── .gitignore
```

## Features Configured

✅ Static site export for GitHub Pages
✅ Automatic deployment via GitHub Actions
✅ Responsive design works on GitHub Pages
✅ All assets properly pathed for `basePath: '/inm-Bio'`
✅ Images optimized for static hosting

## Troubleshooting

### Pages not deploying?
1. Check repository Settings → Pages
2. Verify GitHub Actions is enabled
3. Check the Actions tab for build errors
4. Ensure your branch is `main`

### Images not showing?
- This is normal when viewing locally
- Images will work once deployed to GitHub Pages
- All Unsplash images are external and will load

### URL structure
- Home: `https://YOUR_USERNAME.github.io/inm-Bio/`
- About: `https://YOUR_USERNAME.github.io/inm-Bio/about/`
- Products: `https://YOUR_USERNAME.github.io/inm-Bio/products/`
- Blog: `https://YOUR_USERNAME.github.io/inm-Bio/blog/`
- Contact: `https://YOUR_USERNAME.github.io/inm-Bio/contact/`

## Environment Variables

No sensitive environment variables are needed for GitHub Pages deployment. The email address is already set in the contact page.

## Next Steps

1. ✅ Create a GitHub repository
2. ✅ Push your code using git commands above
3. ✅ Enable GitHub Pages in repository Settings
4. ✅ Your site deploys automatically!
5. ✅ Share your live website URL

---

**Need help?** 
- GitHub Pages docs: https://pages.github.com/
- Next.js static export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

**Your website is ready to deploy!** 🚀
