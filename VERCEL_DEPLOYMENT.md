# MapTiler Setup for Vercel Deployment

## The Problem
Maps not appearing on Vercel is usually because:
1. The demo API key doesn't work on production domains
2. The `VITE_MAPTILER_KEY` environment variable isn't set in Vercel

## Solution: Set Environment Variable in Vercel

### Step 1: Get Your MapTiler API Key

1. Sign up for a **free account** at https://cloud.maptiler.com/
2. Go to https://cloud.maptiler.com/account/keys/
3. Copy your API key (or create a new one)

### Step 2: Add Environment Variable in Vercel

**Option A: Via Vercel Dashboard (Recommended)**

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `VITE_MAPTILER_KEY`
   - **Value**: Your MapTiler API key
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. **Redeploy** your site (go to Deployments → click the three dots → Redeploy)

**Option B: Via Vercel CLI**

```bash
vercel env add VITE_MAPTILER_KEY
# Paste your API key when prompted
# Select all environments
```

Then redeploy:
```bash
vercel --prod
```

### Step 3: Verify It Works

After redeploying, check:
1. Open browser console (F12)
2. Look for any MapTiler API errors
3. The map should load with your custom key

## Local Development

For local development, create a `.env` file in the project root:

```env
VITE_MAPTILER_KEY=your_api_key_here
```

**Important**: Add `.env` to `.gitignore` (don't commit your API key!)

## Troubleshooting

If maps still don't appear:

1. **Check Vercel logs**: Go to your deployment → Logs tab
2. **Verify the key**: Make sure there are no extra spaces in the environment variable
3. **Check domain restrictions**: Some MapTiler plans restrict domains - make sure your Vercel domain is allowed
4. **Wait a few minutes**: Environment variables can take a moment to propagate

## Free Tier Limits

MapTiler's free tier includes:
- 100,000 map loads per month
- Works on any domain
- Perfect for most projects

If you exceed limits, you'll need to upgrade your plan.

