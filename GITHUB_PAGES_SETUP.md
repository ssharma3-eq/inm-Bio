# GitHub Pages 404 Fix - Complete Setup Guide

## 🔴 If You're Getting 404 Error:

This means either:
1. Code wasn't pushed to GitHub
2. GitHub Pages isn't enabled
3. Build/deployment failed
4. Wrong repository name in URL

---

## ✅ Complete Step-by-Step Setup

### Step 1: Install Git (if not installed)

**Download Git:**
- Windows: https://git-scm.com/download/win
- Run the installer with default options
- Restart your terminal after installation

**Verify installation:**
```bash
git --version
```

---

### Step 2: Navigate to Your Project & Initialize Git

```bash
cd c:\Users\hp\OneDrive\Desktop\inm-Bio
git init
```

---

### Step 3: Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

---

### Step 4: Create GitHub Repository

1. Go to **https://github.com/new**
2. Fill in:
   - **Repository name:** `inm-Bio` (exact name matters!)
   - **Description:** "INM-BioNeno - Biotech Solutions Website"
   - **Public:** ✅ (must be public for free GitHub Pages)
3. **DO NOT** initialize with README
4. Click **Create repository**

---

### Step 5: Add, Commit, and Push Your Code

Run these commands **in order** in your terminal:

```bash
cd c:\Users\hp\OneDrive\Desktop\inm-Bio
git add .
git commit -m "Initial commit: INM-BioNeno website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/inm-Bio.git
git push -u origin main
```

**⚠️ IMPORTANT:** Replace `YOUR_USERNAME` with your actual GitHub username!

---

### Step 6: Enable GitHub Pages

1. Go to **https://github.com/YOUR_USERNAME/inm-Bio**
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select "GitHub Actions" ⭐ (Important!)
5. Wait 30 seconds and refresh

---

### Step 7: Verify Deployment

1. Go to **Actions** tab in your repository
2. You should see a workflow named "Deploy to GitHub Pages"
3. If it's running (yellow circle), wait 2-3 minutes
4. If it's green (✓), deployment succeeded
5. If it's red (✗), click on it to see error details

---

### Step 8: Access Your Website

Once deployment is complete (green checkmark in Actions):

**Your site URL:**
```
https://YOUR_USERNAME.github.io/inm-Bio/
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## 🆘 Still Getting 404?

### Check 1: Verify Code is on GitHub
- Go to **https://github.com/YOUR_USERNAME/inm-Bio**
- You should see your files (app/, components/, package.json, etc.)
- If you see "Quick setup" page → code wasn't pushed

**Fix:** Run this command:
```bash
git push -u origin main
```

---

### Check 2: Verify GitHub Pages is Enabled
- Go to repository **Settings** → **Pages**
- Should show: "Your site is live at https://YOUR_USERNAME.github.io/inm-Bio/"
- If it says "No Pages site published":
  - Change Source to **GitHub Actions**
  - Wait 2-3 minutes and refresh

---

### Check 3: Check Deployment Status
- Go to **Actions** tab
- Click latest "Deploy to GitHub Pages" workflow
- Look for green ✓ (success) or red ✗ (failed)
- If red, click on it to see what failed

---

### Check 4: Wait a Bit Longer
- First deployment takes **2-5 minutes**
- Subsequent deployments take **1-2 minutes**
- Check back in 3 minutes

---

### Check 5: Clear Browser Cache
- Hard refresh: **Ctrl + Shift + R** (Windows)
- Or try in **incognito mode**

---

## 🔧 If Deployment is Failing

**Check the error in Actions tab:**

1. Click **Actions** tab
2. Click the red ✗ failed deployment
3. Click **Deploy to GitHub Pages** job
4. Look for error message
5. Common errors:
   - `out/` folder not found → pages build system issue
   - Dependency errors → reinstall npm
   - Node version mismatch → check workflow Node version

---

## 📋 Troubleshooting Checklist

- [ ] Git installed (`git --version` works)
- [ ] Repository created at github.com/YOUR_USERNAME/inm-Bio
- [ ] Code pushed to GitHub (`git push` completed)
- [ ] Repository is **Public**
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Source set to **GitHub Actions**
- [ ] Actions shows green ✓ (deployment succeeded)
- [ ] Waited at least 2-3 minutes after first push
- [ ] Accessed correct URL: `https://YOUR_USERNAME.github.io/inm-Bio/`
- [ ] Browser cache cleared (Ctrl+Shift+R)

---

## ✅ Success Signs

When it's working correctly:

1. ✓ Green checkmark in Actions tab
2. ✓ Settings → Pages shows: "Your site is live at https://..."
3. ✓ Website loads at: `https://YOUR_USERNAME.github.io/inm-Bio/`
4. ✓ All pages accessible: /about, /products, /blog, /contact

---

## 📞 Questions?

Provide me with:
1. Your GitHub username
2. Screenshot of the 404 page (what URL are you accessing?)
3. Screenshot of Settings → Pages (what does it say?)
4. Screenshot of Actions tab (is there a green ✓ or red ✗?)

Then I can help further troubleshoot!

---

**Created for INM-BioNeno | 2026**
